import { useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three-stdlib';

export const useModelLoader = (onModelLoad, onError) => {
  const [loading, setLoading] = useState(false);

  const loadFBX = (file) => {
    setLoading(true);
    const loader = new FBXLoader();
    const url = URL.createObjectURL(file);

    loader.load(
      url,
      (fbx) => {
        const box = new THREE.Box3().setFromObject(fbx);
        const size = box.getSize(new THREE.Vector3());
        const maxSize = Math.max(size.x, size.y, size.z);
        
        if (maxSize > 0) {
          const scale = 5 / maxSize;
          fbx.scale.setScalar(scale);
          const center = box.getCenter(new THREE.Vector3());
          fbx.position.sub(center.multiplyScalar(scale));
        }

        fbx.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.side = THREE.DoubleSide;
              child.material.shadowSide = THREE.DoubleSide;
              child.material.needsUpdate = true;
              child.userData.originalMaterial = child.material;
            }
          }
        });

        onModelLoad(fbx, { name: file.name.replace(/\.[^/.]+$/, ""), type: 'fbx', originalFile: file });
        setLoading(false);
        URL.revokeObjectURL(url);
      },
      undefined,
      (error) => {
        onError('FBX load failed');
        setLoading(false);
        URL.revokeObjectURL(url);
      }
    );
  };

  const createSampleModel = () => {
    setLoading(true);
    const group = new THREE.Group();
    
    const createMesh = (geometry, color, position) => {
      const mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color }));
      mesh.position.set(...position);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.originalMaterial = mesh.material;
      return mesh;
    };

    group.add(createMesh(new THREE.BoxGeometry(2, 2, 2), 0xff6b6b, [-3, 1, 0]));
    group.add(createMesh(new THREE.SphereGeometry(1.5, 32, 32), 0x4ecdc4, [0, 1.5, 0]));
    group.add(createMesh(new THREE.ConeGeometry(1, 3, 8), 0x45b7d1, [3, 1.5, 0]));

    onModelLoad(group, { name: 'Sample Objects', type: 'sample' });
    setLoading(false);
  };

  return { loadFBX, createSampleModel, loading };
};