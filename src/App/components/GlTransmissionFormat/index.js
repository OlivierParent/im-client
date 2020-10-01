import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTFLoader } from "drei";

import logo from "./glTF.glb";

export default () => {
  const [clockwise, setClockwise] = useState(false);

  const gltf = useGLTFLoader(logo, true);
  const logoRef = useRef();
  const speed = 0.025;

  useFrame(() => {
    // logoRef.current.rotation.x += speed * (clockwise ? 1 : -1);
    logoRef.current.rotation.y += speed * (clockwise ? 1 : -1);
    // logoRef.current.rotation.z += speed * (clockwise ? 1 : -1);
  });

  return (
    <primitive
      ref={logoRef}
      object={gltf.scene}
      onClick={() => setClockwise(!clockwise)}
      position={[0, 0, 0]}
    />
  );
};
