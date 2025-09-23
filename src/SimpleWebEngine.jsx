import React, { useRef, useEffect, useState } from 'react';
import { useCameraControls } from './hooks/useCameraControls';
import { useSceneManager } from './hooks/useSceneManager';
import { useModelLoader } from './hooks/useModelLoader';
import { useMaterialManager } from './hooks/useMaterialManager';
import ContentBrowser from './ContentBrowser';
import LightController from './LightController';
import MaterialEditor from './MaterialEditor';

const SimpleWebEngine = () => {
  const mountRef = useRef(null);
  const [error, setError] = useState(null);
  const [isSceneReady, setIsSceneReady] = useState(false);
  const [assets, setAssets] = useState([]);
  const [directionalLight, setDirectionalLight] = useState(null);
  const [selectedMesh, setSelectedMesh] = useState(null);
  const [editingMaterial, setEditingMaterial] = useState(null);

  const sceneManager = useSceneManager();
  const { materials, createMaterial, updateMaterial, deleteMaterial, applyMaterialToMesh, revertToOriginalMaterial, updateAllMaterialUniforms, vectorDebugFragmentShader } = useMaterialManager(directionalLight);
  const { resetCamera } = useCameraControls(isSceneReady ? sceneManager.camera : null, isSceneReady ? sceneManager.renderer?.domElement : null);

  const { loadFBX, createSampleModel, loading } = useModelLoader(
    (model, assetData) => {
      const newAsset = { id: Date.now() + Math.random(), name: assetData.name, type: assetData.type, model: model, thumbnail: null };
      sceneManager.addModel(model, newAsset.id);
      setAssets(prev => [...prev, newAsset]);
      setError(null);
    },
    setError
  );

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    const { directionalLight: light } = sceneManager.initializeScene(mount);
    setDirectionalLight(light);
    sceneManager.setupMeshSelection(handleMeshSelection);
    setIsSceneReady(true);
    sceneManager.animate((camera, scene) => { if (camera && scene) updateAllMaterialUniforms(camera, scene); });

    const handleResize = () => sceneManager.handleResize(mount);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      setIsSceneReady(false);
      sceneManager.cleanup(mount);
      setDirectionalLight(null);
      setSelectedMesh(null);
    };
  }, [updateAllMaterialUniforms]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file?.name.toLowerCase().endsWith('.fbx')) {
      loadFBX(file);
    } else {
      setError('FBX files only');
    }
  };

  const handleMeshSelection = (mesh) => {
    if (selectedMesh) {
      selectedMesh.traverse((child) => {
        if (child.isMesh && child.userData.originalEmissive !== undefined) {
          if (child.material?.emissive) child.material.emissive.copy(child.userData.originalEmissive);
          delete child.userData.originalEmissive;
        }
      });
    }
    setSelectedMesh(mesh);
    if (mesh) {
      mesh.traverse((child) => {
        if (child.isMesh && child.material?.emissive) {
          child.userData.originalEmissive = child.material.emissive.clone();
          child.material.emissive.setHex(0x333333);
        }
      });
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#222', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ background: '#444', padding: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <h1 style={{ color: '#fff', margin: 0, fontSize: '18px' }}>SimpleWebEngine</h1>
        <label style={{ background: '#06c', color: '#fff', padding: '4px 8px', cursor: 'pointer' }}>
          Load FBX
          <input type="file" accept=".fbx" onChange={handleFileChange} style={{ display: 'none' }} />
        </label>
        <button onClick={() => createSampleModel()} style={{ background: '#0a0', color: '#fff', padding: '4px 8px', border: 'none', cursor: 'pointer' }}>Sample</button>
        <button onClick={resetCamera} disabled={!isSceneReady} style={{ background: isSceneReady ? '#a00' : '#666', color: '#fff', padding: '4px 8px', border: 'none', cursor: isSceneReady ? 'pointer' : 'not-allowed' }}>Reset Cam</button>
        <button onClick={() => { sceneManager.clearScene(); setAssets([]); }} style={{ background: '#c60', color: '#fff', padding: '4px 8px', border: 'none', cursor: 'pointer' }}>Clear</button>
        <button onClick={() => { if (selectedMesh) revertToOriginalMaterial(selectedMesh); }} style={{ background: '#666', color: '#fff', padding: '4px 8px', border: 'none', cursor: 'pointer' }}>Revert</button>
        {loading && <span style={{ color: '#fa0' }}>Loading...</span>}
        {error && <span style={{ color: '#f44' }}>{error}</span>}
        <div style={{ marginLeft: 'auto', color: '#ccc', fontSize: '12px' }}>
          Models: {assets.length} | Materials: {materials.length}
          {selectedMesh && (<span style={{ color: '#0f0' }}> | Selected: {selectedMesh.name || selectedMesh.userData?.modelId || 'Mesh'}</span>)}
        </div>
      </div>

      <div ref={mountRef} style={{ flex: 1 }} />

      {isSceneReady && directionalLight && <LightController directionalLight={directionalLight} onLightChange={() => {}} />}

      <div style={{ background: '#444', padding: '4px 8px', color: '#ccc', fontSize: '12px' }}>
        Controls: Left=Orbit | Right=Camera | Left+Right=Zoom | Middle=Pan | Wheel=Move
      </div>

      <ContentBrowser 
        assets={assets}
        materials={materials}
        onAssetSelect={() => {}}
        onAssetDelete={(id) => { setAssets(prev => prev.filter(a => a.id !== id)); sceneManager.removeModelById(id); }}
        onMaterialCreate={() => setEditingMaterial(createMaterial('Custom Material'))}
        onMaterialEdit={setEditingMaterial}
        onMaterialDelete={deleteMaterial}
        onMaterialApply={(material) => { if (selectedMesh) applyMaterialToMesh(selectedMesh, material); else alert('Select a mesh first'); }}
      />

      {editingMaterial && (
        <MaterialEditor
          material={editingMaterial}
          onMaterialUpdate={(updated) => { updateMaterial(updated); setEditingMaterial(null); }}
          onClose={() => setEditingMaterial(null)}
          vectorExampleShader={vectorDebugFragmentShader}
        />
      )}
    </div>
  );
};

export default SimpleWebEngine;








