import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

import logo from "./glTF.glb";

export default () => {
  const [clockwise, setClockwise] = useState(false);

  const gltf = useGLTF(logo, true);
  const logo1Ref = useRef();
  const logo2Ref = useRef();
  const speed = 0.025;

  useFrame(() => {
    logo1Ref.current.rotation.x += speed * (clockwise ? 1 : -1);
    logo2Ref.current.rotation.y += speed * (clockwise ? 1 : -1);
  });

  return (
    <group onClick={() => setClockwise(!clockwise)}>
      <primitive object={gltf.scene} position={[-1, -1, 0]} ref={logo1Ref} />
      <primitive
        object={gltf.scene.clone(true)}
        position={[1, 1, 0]}
        ref={logo2Ref}
      />
    </group>
  );
};
