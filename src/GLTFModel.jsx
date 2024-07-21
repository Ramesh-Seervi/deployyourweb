import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

function GLTFModel({ path, position }) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach(action => action.play());
    }
  }, [actions]);

  return <primitive ref={group} object={scene} position={position} />;
}

export default GLTFModel;
