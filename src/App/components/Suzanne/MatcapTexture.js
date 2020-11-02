import React from "react";
import { useGLTF, useMatcapTexture, useSubdivision } from "@react-three/drei";

import suzanneGlb from "./suzanne.glb";

export default () => {
  const { nodes } = useGLTF(suzanneGlb, true);
  const suzanneRef = useSubdivision(2);

  const [matcap] = useMatcapTexture(
    "6E5137_E8CA90_271912_B99C74", // Index or ID string, see: https://github.com/emmelleppi/matcaps/
    1024 // Texture size (64, 128, 256, 512, 1024)
  );

  return (
    <mesh geometry={nodes.Suzanne.geometry} ref={suzanneRef}>
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};
