import React from "react";
import { useGLTF, useMatcapTexture, useSubdivision } from "@react-three/drei";
import { MatCap } from "App/lib";

import suzanneGlb from "./suzanne.glb";

export default () => {
  const { nodes } = useGLTF(suzanneGlb, true);
  const suzanneRef = useSubdivision(2);

  const [matcap] = useMatcapTexture(MatCap.id.WORN_GOLD, MatCap.size.XL);

  return (
    <mesh geometry={nodes.Suzanne.geometry} ref={suzanneRef}>
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};
