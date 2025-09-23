# SimpleWebEngine

> **[Live Demo](https://shjh3117.github.io/SimpleWebEngine/)** - Try it out in your browser!

A lightweight 3D web engine built with React and Three.js, featuring real-time material editing, dynamic lighting, and interactive 3D model management.  
<img width="1024" height="1024" alt="Screenshot 2025-08-02 012125" src="https://github.com/user-attachments/assets/ba596dfa-2dce-4822-b1a6-9d10363df81f" />

## Features

### Core 3D Engine
- **Real-time 3D rendering** with Three.js WebGL renderer
- **Interactive camera controls** with orbit, pan, zoom, and first-person modes
- **Shadow mapping** with PCF soft shadows
- **Dynamic lighting system** with adjustable directional light

### Model Management
- **FBX model loading** with automatic scaling and centering
- **Interactive model selection** with visual feedback
- **Sample geometry generation** for quick testing
- **Asset browser** with thumbnail view and management tools

### Advanced Material System
- **Custom shader editor** with real-time compilation
- **Live material preview** on selected meshes
- **Shadow integration** in custom shaders
- **Material library** with save/load functionality
- **Original material restoration** system
- **Vector debug material** seeded by default to visualize world normal, tangent, view, and light directions

### User Interface
- **Responsive design** with professional dark theme
- **Tabbed content browser** for models and materials
- **Real-time light controller** with azimuth, elevation, and intensity
- **Code editor** with syntax highlighting for GLSL shaders
- **Status indicators** for loading states and selections

## Technical Stack

- **Frontend**: React 18 with functional components and hooks
- **3D Graphics**: Three.js with WebGL renderer
- **Build Tool**: Vite for fast development and building
- **Styling**: CSS-in-JS with inline styles for component isolation
- **File Handling**: FBXLoader for 3D model import

## Architecture

### Component Structure
```
SimpleWebEngine/
|- SimpleWebEngine.jsx      # Main application component
|- ContentBrowser.jsx       # Asset and material management UI
|- LightController.jsx      # Real-time lighting controls
|- MaterialEditor.jsx       # Shader code editor with live preview
`- hooks/
   |- useCameraControls.js  # Camera interaction logic
   |- useMaterialManager.js # Custom material system
   |- useModelLoader.js     # FBX loading and processing
   `- useSceneManager.js    # Three.js scene management
```
|--------|-------|
| Orbit Camera | Left Mouse + Drag |
| First Person Look | Right Mouse + Drag |
| Pan Camera | Middle Mouse + Drag |
| Zoom | Mouse Wheel |
| Combined Zoom | Left + Right Mouse + Drag |
| Select Mesh | Left Click |

## Usage

### Loading Models
1. Click "Load FBX" to import your 3D models
2. Use "Sample" to generate test geometry
3. Models appear in the Models tab of the content browser

### Creating Materials
1. Click "+ New" in the Materials tab
2. Edit GLSL fragment shader code in the material editor
3. Save to compile and add to your material library
4. Shaders are authored in GLSL; use the Vector Example preset as a starting template.

### Applying Materials
1. Select a 3D mesh by clicking on it
2. Choose a material from the Materials tab
3. Click the green "Use" button to apply
4. Use "Revert" to restore original materials

### Visualizing Lighting Vectors
1. Open any material in the editor and press **Vector Example** to load the built-in debug shader.
2. Apply the material to a mesh using the **Use** button to see packed RGB(A) world-space vectors.
3. Modify the shader or copy it as a template for your own GLSL experiments.

### Lighting Control
- Adjust **Azimuth** for horizontal light rotation
- Modify **Elevation** for vertical light angle
- Control **Intensity** for brightness
- Click "Reset" to return to default settings

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/shjh3117/SimpleWebEngine.git
cd SimpleWebEngine

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production
```bash
npm run build
```

## Future Enhancements

- [ ] Texture loading and management system
- [ ] Animation timeline editor
- [ ] Post-processing effects pipeline
