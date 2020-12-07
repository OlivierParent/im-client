import React from "react";
import { useGLTF } from "@react-three/drei";

import suzanneGlb from "./suzanne.glb";

export default () => {
  const { nodes } = useGLTF(suzanneGlb, true);

  return (
    <mesh geometry={nodes.Suzanne.geometry}>
      <meshToonMaterial />
    </mesh>
  );
};
