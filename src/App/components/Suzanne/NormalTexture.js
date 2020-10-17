import React from "react";
import { useGLTF, useSubdivision, useNormalTexture } from "@react-three/drei";

import suzanne from "./suzanne.glb";

export default () => {
  const { nodes } = useGLTF(suzanne, true);
  const suzanneRef = useSubdivision(2);

  const [normalMap, url] = useNormalTexture(
    1, //0 index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json
    {
      anisotropy: 8,
      offset: [0, 0],
      repeat: [normRepeat, normRepeat],
    }
  );

  return (
    <mesh geometry={nodes.Suzanne.geometry} ref={suzanneRef}>
      <meshStandardMaterial normalMap={normalMap} />
    </mesh>
  );
};
