import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

import gltfLogoGlb from "./gltf-logo.glb";

export default () => {
  const [clockwise, setClockwise] = useState(false);

  const gltfLogo = useGLTF(gltfLogoGlb, true);
  const logoRef = useRef();
  const speed = 0.025;

  useFrame(() => {
    logoRef.current.rotation.y += speed * (clockwise ? 1 : -1);
  });

  return (
    <primitive
      object={gltfLogo.scene}
      onClick={() => setClockwise(!clockwise)}
      position={[0, 0, 0]}
      ref={logoRef}
    />
  );
};
