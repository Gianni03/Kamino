// src/components/models/EarthCanvas.tsx
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import CanvasLoader from './Loader';
import useTablet from '../../hooks/useTablet'; // Asegurate que el alias esté definido
import './earth.css';

const Earth = () => {
  const earthRef = useRef();
  const earth = useGLTF('./planet/scene.gltf');
  const tabletType = useTablet();

  // Estados para escalar y posicionar correctamente el modelo
  const [scale, setScale] = useState(3.1);
  const [yPos, setYPos] = useState(0);

  useEffect(() => {
    switch (tabletType) {
      case 'horizontalCut':
        setScale(2.3);
        setYPos(0);
        break;
      case 'standard':
        setScale(2.5);
        setYPos(0);
        break;
      case 'wideTablet':
        setScale(2.8);
        setYPos(0);
        break;
      case 'needsMarginFix':
        setScale(3.1);
        setYPos(-0.4);
        break;
      default:
        setScale(3.1);
        setYPos(0);
    }
  }, [tabletType]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.007;
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={[scale, scale, scale]} // ✅ CORRECTO: debe ser array
      position={[0, yPos, 0]}       // ✅ CORRECTO: también array
    />
  );
};

const EarthCanvas = () => {
  return (
    <div className="earth-container">
      <Canvas className="earth-canvas" style={{ marginTop: '-4.5rem' }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
