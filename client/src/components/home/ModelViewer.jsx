import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  
  // Scale the model to make it larger
  scene.scale.set(1.5, 1.5, 1.5); // Adjust the scale factor as needed
  
  return <primitive object={scene} />;
};

const ModelViewer = ({ modelUrl }) => {
  return (
    <Canvas style={{ width: '100%', height: '500px' }}>
      {/* Bright Ambient Light */}
      <ambientLight intensity={0.8} color="#ffffff" />

      {/* Strong Directional Light for Brightness */}
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={1.5} 
        color="#ffffff" 
        castShadow 
      />

      {/* Additional SpotLight to Create Highlights */}
      <spotLight 
        position={[15, 20, 10]} 
        angle={0.3} 
        intensity={2} 
        penumbra={1} 
        castShadow 
      />

      <Suspense fallback={null}>
        <Model modelUrl={modelUrl} />
      </Suspense>

      <OrbitControls 
        autoRotate 
        autoRotateSpeed={0.5} 
        enableZoom={true} 
        minDistance={2} // Set the minimum distance to the model
        maxDistance={10} // Set the maximum distance for the camera
        target={[0, 0, 0]} // Center the model in view
      />
    </Canvas>
  );
};

export default ModelViewer;
