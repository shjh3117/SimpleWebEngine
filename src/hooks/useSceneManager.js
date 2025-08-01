import { useRef } from 'react';
import * as THREE from 'three';

export const useSceneManager = () => {
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationMixers = useRef([]);
  const clock = useRef(new THREE.Clock());
  const animationId = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const onMeshSelect = useRef(null);

  const initializeScene = (mountElement) => {
    if (rendererRef.current) {
      return { scene: sceneRef.current, camera: cameraRef.current, renderer: rendererRef.current };
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a2a2a);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, mountElement.clientWidth / mountElement.clientHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountElement.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -15;
    directionalLight.shadow.camera.right = 15;
    directionalLight.shadow.camera.top = 15;
    directionalLight.shadow.camera.bottom = -15;
    
    // 그림자 부드럽게 하기
    directionalLight.shadow.bias = -0.0005;
    directionalLight.shadow.normalBias = 0.02;
    
    // Enable automatic update of shadow camera
    directionalLight.shadow.camera.updateProjectionMatrix();
    directionalLight.shadow.needsUpdate = true;
    scene.add(directionalLight);

    const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
    scene.add(gridHelper);

    const groundGeometry = new THREE.PlaneGeometry(30, 30);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x666666, transparent: true, opacity: 0.5 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;
    ground.receiveShadow = true;
    scene.add(ground);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    return { scene, camera, renderer, directionalLight };
  };

  const setupMeshSelection = (onMeshSelectCallback) => {
    onMeshSelect.current = onMeshSelectCallback;
    if (!rendererRef.current) return;
    
    const handleClick = (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      
      const rect = rendererRef.current.domElement.getBoundingClientRect();
      mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.current.setFromCamera(mouse.current, cameraRef.current);
      
      const allMeshes = [];
      sceneRef.current.traverse((child) => {
        if (child.isMesh && child.userData.isModel) allMeshes.push(child);
      });
      
      const intersects = raycaster.current.intersectObjects(allMeshes, false);
      
      if (intersects.length > 0) {
        let targetObject = intersects[0].object;
        while (targetObject.parent && !targetObject.userData.isModel && targetObject.parent !== sceneRef.current) {
          targetObject = targetObject.parent;
        }
        onMeshSelect.current(targetObject);
      } else {
        onMeshSelect.current(null);
      }
    };
    
    rendererRef.current.domElement.addEventListener('mousedown', handleClick);
  };

  const animate = (onBeforeRender = null) => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
    animationId.current = requestAnimationFrame(() => animate(onBeforeRender));
    const delta = clock.current.getDelta();
    animationMixers.current.forEach(mixer => mixer.update(delta));
    
    // 그림자 맵 업데이트 강제
    sceneRef.current.traverse((child) => {
      if (child.isDirectionalLight && child.shadow) {
        child.shadow.camera.updateMatrixWorld();
        child.shadow.camera.updateProjectionMatrix();
      }
    });
    
    if (onBeforeRender) onBeforeRender(cameraRef.current, sceneRef.current);
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  const addModel = (object, modelId = null) => {
    if (!sceneRef.current) return;
    object.userData.isModel = true;
    object.userData.modelId = modelId;
    object.traverse((child) => {
      if (child.isMesh) {
        child.userData.isModel = true;
        child.userData.modelId = modelId;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    sceneRef.current.add(object);

    if (object.animations && object.animations.length > 0) {
      const mixer = new THREE.AnimationMixer(object);
      const action = mixer.clipAction(object.animations[0]);
      action.play();
      animationMixers.current.push(mixer);
    }
  };

  const removeModelById = (modelId) => {
    if (!sceneRef.current) return;
    const objectsToRemove = [];
    sceneRef.current.traverse((child) => {
      if (child.userData.isModel && child.userData.modelId === modelId && child.parent === sceneRef.current) {
        objectsToRemove.push(child);
      }
    });

    objectsToRemove.forEach(obj => {
      sceneRef.current.remove(obj);
      obj.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => mat.dispose && mat.dispose());
          } else {
            child.material.dispose && child.material.dispose();
          }
        }
        if (child.texture) child.texture.dispose();
      });
      animationMixers.current = animationMixers.current.filter(mixer => mixer.getRoot() !== obj);
    });
  };

  const clearScene = () => {
    if (!sceneRef.current) return;
    const modelsToRemove = sceneRef.current.children.filter(child => child.userData.isModel);
    modelsToRemove.forEach(obj => {
      sceneRef.current.remove(obj);
      obj.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    });
    animationMixers.current.forEach(mixer => mixer.uncacheRoot(mixer.getRoot()));
    animationMixers.current = [];
  };

  const handleResize = (mountElement) => {
    if (!cameraRef.current || !rendererRef.current || !mountElement) return;
    const width = mountElement.clientWidth;
    const height = mountElement.clientHeight;
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(width, height);
  };

  const cleanup = (mountElement) => {
    if (animationId.current) {
      cancelAnimationFrame(animationId.current);
      animationId.current = null;
    }
    animationMixers.current.forEach(mixer => mixer.uncacheRoot(mixer.getRoot()));
    animationMixers.current = [];
    if (rendererRef.current && mountElement && rendererRef.current.domElement) {
      mountElement.removeChild(rendererRef.current.domElement);
      rendererRef.current.dispose();
      rendererRef.current = null;
    }
    if (sceneRef.current) {
      sceneRef.current.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }
    sceneRef.current = null;
    cameraRef.current = null;
  };

  return {
    initializeScene,
    setupMeshSelection,
    animate,
    addModel,
    removeModelById,
    clearScene,
    handleResize,
    cleanup,
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer: rendererRef.current
  };
};