import React from "react";
import { useGLTF, useNormalTexture, useSubdivision } from "@react-three/drei";

import suzanneGlb from "./suzanne.glb";

export default () => {
  const { nodes } = useGLTF(suzanneGlb, true);
  const suzanneRef = useSubdivision(2);

  const [normalMap] = useNormalTexture(
    8, // Index or file name, see: https://github.com/emmelleppi/normal-maps/

    //0 index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json
    {
      anisotropy: 8,
      offset: [0, 0],
      repeat: [10, 10],
    }
  );

  return (
    <mesh geometry={nodes.Suzanne.geometry} ref={suzanneRef}>
      <meshStandardMaterial normalMap={normalMap} />
    </mesh>
  );
};
