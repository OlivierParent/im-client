import React from "react";
import { useGLTF, useSubdivision } from "@react-three/drei";

import suzanne from "./suzanne.glb";

export default () => {
  const { nodes } = useGLTF(suzanne, true);
  const suzanneRef = useSubdivision(2);

  return (
    <mesh geometry={nodes.Suzanne.geometry} ref={suzanneRef}>
      <meshStandardMaterial />
    </mesh>
  );
};
