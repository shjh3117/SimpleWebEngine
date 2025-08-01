import React, { useState, useEffect } from 'react';

const LightController = ({ directionalLight, onLightChange }) => {
  const [azimuth, setAzimuth] = useState(45);
  const [elevation, setElevation] = useState(45);
  const [intensity, setIntensity] = useState(0.8);

  useEffect(() => {
    if (!directionalLight) return;
    const distance = 15;
    const azimuthRad = (azimuth * Math.PI) / 180;
    const elevationRad = (elevation * Math.PI) / 180;
    const x = distance * Math.cos(elevationRad) * Math.cos(azimuthRad);
    const y = distance * Math.sin(elevationRad);
    const z = distance * Math.cos(elevationRad) * Math.sin(azimuthRad);
    directionalLight.position.set(x, y, z);
    directionalLight.intensity = intensity;
    onLightChange && onLightChange({ azimuth, elevation, intensity });
  }, [azimuth, elevation, intensity, directionalLight]);

  return (
    <div style={{ position: 'absolute', top: '60px', right: '20px', background: 'rgba(50,50,50,0.9)', padding: '12px', color: '#fff', minWidth: '200px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Light</div>
      <div style={{ marginBottom: '8px' }}>
        <label style={{ display: 'block', marginBottom: '2px', fontSize: '12px' }}>Azimuth: {azimuth}°</label>
        <input type="range" min="0" max="360" step="5" value={azimuth} onChange={(e) => setAzimuth(parseFloat(e.target.value))} style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label style={{ display: 'block', marginBottom: '2px', fontSize: '12px' }}>Elevation: {elevation}°</label>
        <input type="range" min="5" max="85" step="5" value={elevation} onChange={(e) => setElevation(parseFloat(e.target.value))} style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label style={{ display: 'block', marginBottom: '2px', fontSize: '12px' }}>Intensity: {intensity.toFixed(1)}</label>
        <input type="range" min="0.1" max="2.0" step="0.1" value={intensity} onChange={(e) => setIntensity(parseFloat(e.target.value))} style={{ width: '100%' }} />
      </div>
      <button onClick={() => { setAzimuth(45); setElevation(45); setIntensity(0.8); }} style={{ width: '100%', background: '#06c', color: '#fff', border: 'none', padding: '4px', cursor: 'pointer' }}>
        Reset
      </button>
    </div>
  );
};

export default LightController;