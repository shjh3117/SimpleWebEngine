import React, { useState } from 'react';

const MaterialEditor = ({ material, onMaterialUpdate, onClose }) => {
  const defaultShader = `varying vec3 vNormal;
varying vec3 vPosition;
varying vec4 vLightSpacePosition;
uniform vec3 lightPosition;
uniform vec3 lightColor;
uniform float lightIntensity;
uniform sampler2D shadowMap;
uniform vec2 shadowMapSize;
uniform float shadowBias;

float getShadow() {
    if (shadowMap == null) return 1.0;
    
    vec3 projCoords = vLightSpacePosition.xyz / vLightSpacePosition.w;
    projCoords = projCoords * 0.5 + 0.5;
    
    if (projCoords.z > 1.0) return 1.0;
    if (projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) return 1.0;
    
    float currentDepth = projCoords.z;
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(lightPosition - vPosition);
    float bias = max(0.05 * (1.0 - dot(normal, lightDir)), 0.005);
    
    float shadow = 0.0;
    vec2 texelSize = 1.0 / shadowMapSize;
    for(int x = -1; x <= 1; ++x) {
        for(int y = -1; y <= 1; ++y) {
            float pcfDepth = texture2D(shadowMap, projCoords.xy + vec2(x, y) * texelSize).r;
            shadow += (currentDepth - bias) > pcfDepth ? 0.0 : 1.0;
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
}`;

  const [shaderCode, setShaderCode] = useState(material?.fragmentShader || defaultShader);
  const [materialName, setMaterialName] = useState(material?.name || 'Custom Material');
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileError, setCompileError] = useState(null);

  const handleSave = () => {
    setIsCompiling(true);
    setCompileError(null);
    setTimeout(() => {
      try {
        if (!shaderCode.includes('gl_FragColor') || !shaderCode.includes('void main()')) {
          throw new Error('Invalid shader');
        }
        onMaterialUpdate({ ...material, name: materialName, fragmentShader: shaderCode, lastModified: Date.now() });
        setIsCompiling(false);
      } catch (error) {
        setCompileError(error.message);
        setIsCompiling(false);
      }
    }, 300);
  };

  return (
    <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', background: 'rgba(0, 0, 0, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#2a2a2a', width: '80%', height: '80%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: '#333', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <input type="text" value={materialName} onChange={(e) => setMaterialName(e.target.value)} style={{ background: '#444', border: '1px solid #666', padding: '4px', color: '#fff', fontSize: '14px' }} />
          <div style={{ display: 'flex', gap: '4px' }}>
            <button onClick={() => { setShaderCode(defaultShader); setCompileError(null); }} style={{ background: '#666', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer' }}>Reset</button>
            <button onClick={handleSave} disabled={isCompiling} style={{ background: isCompiling ? '#666' : '#0a0', color: '#fff', border: 'none', padding: '4px 8px', cursor: isCompiling ? 'not-allowed' : 'pointer' }}>{isCompiling ? '...' : 'Save'}</button>
            <button onClick={onClose} style={{ background: '#a00', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer' }}>×</button>
          </div>
        </div>
        <textarea value={shaderCode} onChange={(e) => setShaderCode(e.target.value)} style={{ flex: 1, background: '#1e1e1e', color: '#f8f8f2', border: 'none', padding: '12px', fontFamily: 'monospace', fontSize: '12px', resize: 'none', outline: 'none' }} />
        {compileError && <div style={{ background: '#a00', color: '#fff', padding: '4px 8px', fontSize: '11px' }}>{compileError}</div>}
      </div>
    </div>
  );
};

export default MaterialEditor;