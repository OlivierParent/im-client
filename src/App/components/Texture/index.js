import React from "react";
import { useGLTF } from "@react-three/drei";

import cubeGlb from "./TexturedCube.glb";

export default () => {
  const { nodes, materials } = useGLTF(cubeGlb, true);
  return (
    <>
      <mesh
        geometry={nodes.Cube_1.geometry}
        material={materials["MaterialTexture"]}
      />
      <mesh geometry={nodes.Cube_2.geometry} material={materials["Blue"]} />
      {nodes.Cube.children.map((child) => {
        return (
          <mesh
            position={[3, 0, 0]}
            geometry={child.geometry}
            material={child.material}
          />
        );
      })}
    </>
  );
};
