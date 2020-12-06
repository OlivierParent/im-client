import React from "react";
import { useGLTF } from "@react-three/drei";

import cubeGlb from "./TexturedCube.glb";

export default () => {
  const { nodes, materials } = useGLTF(cubeGlb, true);
  return (
    <>
      <group position={[-1.5, 0, 0]}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials["MaterialTexture"]}
        />
        <mesh geometry={nodes.Cube_2.geometry} material={materials["Blue"]} />
      </group>
      {nodes.Cube.children.map((child) => {
        return (
          <mesh
            geometry={child.geometry}
            material={child.material}
            position={[1.5, 0, 0]}
          />
        );
      })}
    </>
  );
};
