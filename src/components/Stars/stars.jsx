import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 10.0 }));

  for (let i = 0; i < sphere.length; i += 3) {
    const dx = sphere[i];
    const dy = sphere[i + 1];
    const dz = sphere[i + 2];
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const k = Math.max(0.1, d);
    sphere[i] *= k;
    sphere[i + 1] *= k;
    sphere[i + 2] *= k;
  }

  useFrame(() => {
    for (let i = 0; i < sphere.length; i += 3) {
      sphere[i + 2] -= 0.01; // velocidad
  
      if (sphere[i + 2] < -5) {
        
        const theta = 2 * Math.PI * Math.random(); 
        const phi = Math.acos(2 * Math.random() - 1); 
        const radius = 5.0 * Math.cbrt(Math.random());  
        
       
        sphere[i] = radius * Math.sin(phi) * Math.cos(theta); 
        sphere[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        sphere[i + 2] = 1 + radius * Math.cos(phi); // posicion
  
       
        const dx = sphere[i];
        const dy = sphere[i + 1];        
        const dz = sphere[i + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const k = Math.max(0.1, d);
        sphere[i] *= k;
        sphere[i + 1] *= k;
        sphere[i + 2] *= k;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#59c1bd"
          size={props.size || 0.010}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;