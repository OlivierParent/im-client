import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import cubeGlb from "./BakedNormals.glb";

export default () => {
  const { nodes, materials } = useGLTF(cubeGlb, true);
  return (
    <>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material"]}
        rotation={[90, 0, 0].map((degree) => THREE.MathUtils.degToRad(degree))}
      />
    </>
  );
};
