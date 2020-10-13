import React from "react";
import { useGLTF, useSubdivision, useMatcapTexture } from "@react-three/drei";

import suzanne from "./suzanne.glb";

export default () => {
  const { nodes } = useGLTF(suzanne, true);
  const suzanneRef = useSubdivision(2);

  const [matcap] = useMatcapTexture(
    3, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
    1024 // size of the texture ( 64, 128, 256, 512, 1024 )
  );

  return (
    <mesh geometry={nodes.Suzanne.geometry} ref={suzanneRef}>
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};
