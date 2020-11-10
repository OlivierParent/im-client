import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

import uvGrid from "./UV_Grid_Sm.jpg";
import ThreePoint from "../Lighting/ThreePoint";

export default () => {
  const texture = useTexture(uvGrid, true);
  texture.offset = new THREE.Vector2(0, 0);
  texture.repeat = new THREE.Vector2(1, 1);

  return (
    <mesh>
      <planeBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial center map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
};
