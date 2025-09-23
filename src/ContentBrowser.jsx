import React, { useState } from 'react';

const ContentBrowser = ({ assets, materials, onAssetSelect, onAssetDelete, onMaterialCreate, onMaterialEdit, onMaterialDelete, onMaterialApply }) => {
  const [activeTab, setActiveTab] = useState('models');

  return (
    <div style={{ height: '200px', background: '#333', borderTop: '1px solid #666', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#444', padding: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setActiveTab('models')} style={{ background: activeTab === 'models' ? '#06c' : '#666', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer' }}>
            Models ({assets.length})
          </button>
          <button onClick={() => setActiveTab('materials')} style={{ background: activeTab === 'materials' ? '#06c' : '#666', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer' }}>
            Materials ({materials.length})
          </button>
        </div>
        {activeTab === 'materials' && (
          <button onClick={onMaterialCreate} style={{ background: '#0a0', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer' }}>
            + New
          </button>
        )}
      </div>

      <div style={{ flex: 1, padding: '8px', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '4px' }}>
        {activeTab === 'models' && (
          <>
            {assets.map((asset) => (
              <div key={asset.id} onClick={() => onAssetSelect(asset)} style={{ background: '#555', padding: '8px', cursor: 'pointer', position: 'relative', textAlign: 'center' }}>
                <button onClick={(e) => { e.stopPropagation(); onAssetDelete(asset.id); }} style={{ position: 'absolute', top: '2px', right: '2px', background: '#f44', color: '#fff', border: 'none', width: '16px', height: '16px', fontSize: '10px', cursor: 'pointer' }}>X</button>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>OBJ</div>
                <div style={{ color: '#ccc', fontSize: '10px' }}>{asset.name}</div>
              </div>
            ))}
            {assets.length === 0 && <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666', padding: '20px' }}>No models</div>}
          </>
        )}

        {activeTab === 'materials' && (
          <>
            {materials.map((material) => (
              <div key={material.id} onClick={() => onMaterialEdit(material)} style={{ background: '#555', padding: '8px', cursor: 'pointer', position: 'relative', textAlign: 'center' }}>
                <button onClick={(e) => { e.stopPropagation(); onMaterialDelete(material.id); }} style={{ position: 'absolute', top: '2px', right: '2px', background: '#f44', color: '#fff', border: 'none', width: '16px', height: '16px', fontSize: '10px', cursor: 'pointer' }}>X</button>
                <button onClick={(e) => { e.stopPropagation(); onMaterialApply(material); }} style={{ position: 'absolute', top: '2px', left: '2px', background: '#0a0', color: '#fff', border: 'none', width: '36px', height: '16px', fontSize: '10px', cursor: 'pointer' }}>Use</button>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>MAT</div>
                <div style={{ color: '#ccc', fontSize: '10px' }}>{material.name}</div>
              </div>
            ))}
            {materials.length === 0 && <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666', padding: '20px' }}>No materials</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default ContentBrowser;
