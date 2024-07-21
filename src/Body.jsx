import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RotatingBox from './RotatingBox';
import GLTFModel from './GLTFModel';
import aircraft from './all3d/aircraf.glb';
import flyingbee from './all3d/Flyingbee.glb';
import tree from './all3d/Tree.glb';

function Body() {
  return (
    <Canvas>
      <ambientLight intensity={100} />
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      {/* <GLTFModel path={aircraft} position={[0, 0, 0]} /> */}
      <GLTFModel path={flyingbee} position={[2, -10, 0]} />
      {/* <GLTFModel path={tree} position={[-2, 0, 0]} /> */}
      <OrbitControls />
    </Canvas>
  );
}

export default Body;
