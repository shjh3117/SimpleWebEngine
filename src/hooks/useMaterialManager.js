import { useState, useCallback } from 'react';
import * as THREE from 'three';

export const useMaterialManager = (directionalLight) => {
  const [materials, setMaterials] = useState([]);

  const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec4 vLightSpacePosition;
    uniform mat4 lightSpaceMatrix;
    void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vPosition = worldPosition.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vLightSpacePosition = lightSpaceMatrix * worldPosition;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const defaultFragmentShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec4 vLightSpacePosition;
    uniform vec3 lightPosition;
    uniform vec3 lightColor;
    uniform float lightIntensity;
    uniform sampler2D shadowMap;
    uniform vec2 shadowMapSize;
    uniform float shadowBias;
    
    float getShadow() {
        vec3 projCoords = vLightSpacePosition.xyz / vLightSpacePosition.w;
        projCoords = projCoords * 0.5 + 0.5;
        if (projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0 || projCoords.z > 1.0) return 1.0;
        float currentDepth = projCoords.z;
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(lightPosition - vPosition);
        float bias = max(shadowBias * (1.0 - dot(normal, lightDir)), 0.005);
        float shadow = 0.0;
        vec2 texelSize = 1.0 / shadowMapSize;
        for(int x = -1; x <= 1; ++x) {
            for(int y = -1; y <= 1; ++y) {
                float pcfDepth = texture2D(shadowMap, projCoords.xy + vec2(x, y) * texelSize).r;
                shadow += currentDepth - bias > pcfDepth ? 0.0 : 1.0;
            }
        }
        shadow /= 9.0;
        return shadow;
    }
    
    void main() {
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(lightPosition - vPosition);
        float diff = max(dot(normal, lightDir), 0.0);
        vec3 diffuse = diff * lightColor * lightIntensity;
        float shadow = getShadow();
        vec3 ambient = vec3(0.1, 0.1, 0.1);
        vec3 finalColor = ambient + diffuse * vec3(0.8, 0.3, 0.3) * shadow;
        gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  const createThreeJSMaterial = useCallback((materialData) => {
    const fragmentShader = materialData.fragmentShader || defaultFragmentShader;
    const uniforms = {
      lightPosition: { value: new THREE.Vector3() },
      lightColor: { value: new THREE.Color(0xffffff) },
      lightIntensity: { value: 1.0 },
      lightSpaceMatrix: { value: new THREE.Matrix4() },
      shadowMap: { value: null },
      shadowMapSize: { value: new THREE.Vector2(2048, 2048) },
      shadowBias: { value: 0.001 }
    };

    if (directionalLight) {
      uniforms.lightPosition.value.copy(directionalLight.position);
      uniforms.lightColor.value.copy(directionalLight.color);
      uniforms.lightIntensity.value = directionalLight.intensity;
    }

    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: uniforms,
      side: THREE.DoubleSide,
      shadowSide: THREE.DoubleSide
    });

    material.shadowSide = THREE.DoubleSide;
    material.needsUpdate = true;

    material.updateUniforms = (camera, scene) => {
      if (!material.uniforms) return;
      try {
        if (directionalLight) {
          material.uniforms.lightPosition.value.copy(directionalLight.position);
          material.uniforms.lightColor.value.copy(directionalLight.color);
          material.uniforms.lightIntensity.value = directionalLight.intensity;
          
          if (directionalLight.shadow && directionalLight.shadow.map) {
            material.uniforms.shadowMap.value = directionalLight.shadow.map.texture;
            material.uniforms.shadowMapSize.value.set(
              directionalLight.shadow.map.width,
              directionalLight.shadow.map.height
            );
            
            // 그림자 카메라의 매트릭스를 강제로 업데이트
            directionalLight.shadow.camera.updateMatrixWorld();
            directionalLight.shadow.camera.updateProjectionMatrix();
            
            const lightSpaceMatrix = new THREE.Matrix4();
            lightSpaceMatrix.multiplyMatrices(
              directionalLight.shadow.camera.projectionMatrix,
              directionalLight.shadow.camera.matrixWorldInverse
            );
            material.uniforms.lightSpaceMatrix.value.copy(lightSpaceMatrix);
            
          }
        }
        
        // 머터리얼 업데이트 강제
        material.needsUpdate = true;
      } catch (error) {
        console.error('Error updating material uniforms:', error);
      }
    };

    return material;
  }, [directionalLight, vertexShader, defaultFragmentShader]);

  const createMaterial = useCallback((name = 'New Material') => {
    const newMaterial = {
      id: Date.now() + Math.random(),
      name: name,
      fragmentShader: defaultFragmentShader,
      createdAt: Date.now(),
      lastModified: Date.now()
    };
    setMaterials(prev => [...prev, newMaterial]);
    return newMaterial;
  }, [defaultFragmentShader]);

  const updateMaterial = useCallback((updatedMaterial) => {
    setMaterials(prev => prev.map(mat => mat.id === updatedMaterial.id ? { ...updatedMaterial, lastModified: Date.now() } : mat));
  }, []);

  const deleteMaterial = useCallback((materialId) => {
    setMaterials(prev => prev.filter(mat => mat.id !== materialId));
  }, []);

  const applyMaterialToMesh = useCallback((mesh, materialData) => {
    if (!mesh) return;
    const threeMaterial = createThreeJSMaterial(materialData);
    if (!threeMaterial) return;

    const applyToChild = (child) => {
      if (child.isMesh) {
        if (!child.userData.originalMaterial) child.userData.originalMaterial = child.material;
        if (child.material && child.material.dispose && child.material !== child.userData.originalMaterial) child.material.dispose();
        
        const clonedMaterial = createThreeJSMaterial(materialData);
        child.material = clonedMaterial;
        child.userData.customMaterial = materialData;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    };

    if (mesh.isGroup || mesh.type === 'Group') {
      mesh.traverse(applyToChild);
    } else if (mesh.isMesh) {
      if (!mesh.userData.originalMaterial) mesh.userData.originalMaterial = mesh.material;
      if (mesh.material && mesh.material.dispose && mesh.material !== mesh.userData.originalMaterial) mesh.material.dispose();
      
      mesh.material = createThreeJSMaterial(materialData);
      mesh.userData.customMaterial = materialData;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
  }, [createThreeJSMaterial]);

  const revertToOriginalMaterial = useCallback((mesh) => {
    if (!mesh) return;

    const revertChild = (child) => {
      if (child.isMesh) {
        if (child.userData.originalMaterial) {
          if (child.material && child.material.dispose && child.material !== child.userData.originalMaterial) child.material.dispose();
          child.material = child.userData.originalMaterial;
        } else {
          if (child.material && child.material.dispose) child.material.dispose();
          child.material = new THREE.MeshLambertMaterial({ color: 0x888888 });
        }
        delete child.userData.customMaterial;
      }
    };

    if (mesh.isGroup || mesh.type === 'Group') {
      mesh.traverse(revertChild);
    } else if (mesh.isMesh) {
      revertChild(mesh);
    }
  }, []);

  const updateAllMaterialUniforms = useCallback((camera, scene) => {
    if (!camera || !scene) return;
    scene.traverse((child) => {
      if (child.isMesh && child.material && child.material.updateUniforms) {
        try {
          child.material.updateUniforms(camera, scene);
        } catch (error) {
          console.error('Error updating material uniforms:', error);
        }
      }
    });
  }, []);

  return {
    materials,
    createMaterial,
    updateMaterial,
    deleteMaterial,
    applyMaterialToMesh,
    revertToOriginalMaterial,
    createThreeJSMaterial,
    updateAllMaterialUniforms
  };
};