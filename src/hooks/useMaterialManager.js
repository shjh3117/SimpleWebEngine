import { useState, useCallback } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vWorldTangent;
  varying vec3 vPosition;
  varying vec4 vLightSpacePosition;

  uniform mat4 lightSpaceMatrix;

  vec3 resolveWorldNormal(vec3 objectNormal) {
    return normalize(mat3(modelMatrix) * objectNormal);
  }

  vec3 resolveWorldTangent(vec3 worldNormal) {
    vec3 reference = abs(worldNormal.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
    vec3 tangent = normalize(cross(reference, worldNormal));
    if (length(tangent) < 1e-5) {
      reference = vec3(1.0, 0.0, 0.0);
      tangent = normalize(cross(reference, worldNormal));
    }
    return tangent;
  }

  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vPosition = worldPosition.xyz;
    vWorldNormal = resolveWorldNormal(normal);
    vNormal = vWorldNormal;
    vWorldTangent = resolveWorldTangent(vWorldNormal);
    vLightSpacePosition = lightSpaceMatrix * worldPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const defaultFragmentShader = `
  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vWorldTangent;
  varying vec3 vPosition;
  varying vec4 vLightSpacePosition;
  uniform vec3 lightPosition;
  uniform vec3 lightColor;
  uniform float lightIntensity;
  uniform sampler2D shadowMap;
  uniform vec2 shadowMapSize;
  uniform float shadowBias;

  vec3 resolveLightVector(vec3 position) {
    return normalize(lightPosition - position);
  }

  float getShadow() {
    if (shadowMap == null) {
      return 1.0;
    }
    vec3 projCoords = vLightSpacePosition.xyz / vLightSpacePosition.w;
    projCoords = projCoords * 0.5 + 0.5;
    if (projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0 || projCoords.z > 1.0) {
      return 1.0;
    }
    float currentDepth = projCoords.z;
    vec3 normal = normalize(vWorldNormal);
    vec3 lightDir = resolveLightVector(vPosition);
    float bias = max(shadowBias * (1.0 - dot(normal, lightDir)), 0.005);
    float shadow = 0.0;
    vec2 texelSize = 1.0 / shadowMapSize;
    for (int x = -1; x <= 1; ++x) {
      for (int y = -1; y <= 1; ++y) {
        float pcfDepth = texture2D(shadowMap, projCoords.xy + vec2(x, y) * texelSize).r;
        shadow += currentDepth - bias > pcfDepth ? 0.0 : 1.0;
      }
    }
    shadow /= 9.0;
    return shadow;
  }

  void main() {
    vec3 N = normalize(vWorldNormal);
    vec3 T = normalize(vWorldTangent);
    vec3 L = resolveLightVector(vPosition);
    vec3 V = normalize(cameraPosition - vPosition);

    float diff = max(dot(N, L), 0.0);
    vec3 diffuseAlbedo = vec3(0.8, 0.3, 0.3);
    vec3 diffuse = diff * lightColor * lightIntensity * diffuseAlbedo;
    float shadow = getShadow();
    vec3 ambient = vec3(0.1, 0.1, 0.1);

    // Example: use the tangent to add a subtle rim highlight so artists can verify the basis.
    float rim = pow(clamp(1.0 - max(dot(T, V), 0.0), 0.0, 1.0), 4.0);
    vec3 rimColor = vec3(0.1, 0.2, 0.4) * rim;

    vec3 finalColor = ambient + (diffuse * shadow) + rimColor;
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const vectorDebugFragmentShader = `
  varying vec3 vWorldNormal;
  varying vec3 vWorldTangent;
  varying vec3 vPosition;
  uniform vec3 lightPosition;

  vec3 remapToColor(vec3 value) {
    return 0.5 + 0.5 * value;
  }

  void main() {
    vec3 N = normalize(vWorldNormal);
    vec3 T = normalize(vWorldTangent);
    vec3 L = normalize(lightPosition - vPosition);
    vec3 V = normalize(cameraPosition - vPosition);

    vec3 normalColor = remapToColor(N);
    vec3 tangentColor = remapToColor(T);
    vec3 lightColor = remapToColor(L);
    vec3 viewColor = remapToColor(V);

    // Pack N.x, T.y, and V.z into RGB so you can inspect each quickly.
    vec3 packed = vec3(normalColor.r, tangentColor.g, viewColor.b);
    // Add a small light-direction cue in the alpha channel via luminance.
    float lightLuminance = dot(lightColor, vec3(0.3333));

    gl_FragColor = vec4(packed, clamp(lightLuminance, 0.0, 1.0));
  }
`;

export const useMaterialManager = (directionalLight) => {
  const [materials, setMaterials] = useState(() => {
    const now = Date.now();
    return [
      {
        id: now,
        name: 'Vector Debug',
        fragmentShader: vectorDebugFragmentShader,
        createdAt: now,
        lastModified: now
      }
    ];
  });
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
            
            // ê·¸ë¦¼??ì¹´ë©”?¼ì˜ ë§¤íŠ¸ë¦?Š¤ë¥?ê°•ì œë¡??…ë°?´íŠ¸
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
        
        // ë¨¸í„°ë¦¬ì–¼ ?…ë°?´íŠ¸ ê°•ì œ
        material.needsUpdate = true;
      } catch (error) {
        console.error('Error updating material uniforms:', error);
      }
    };

    return material;
  }, [directionalLight]);

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
  }, []);

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
    updateAllMaterialUniforms,
    vectorDebugFragmentShader
  };
};







