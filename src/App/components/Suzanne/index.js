import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

import suzanne from "./suzanne.glb";

export default () => {
  const [clockwise, setClockwise] = useState(false);
  const { nodes, materials } = useGLTF(suzanne, true);
  const suzanneRef = useRef();
  const speed = 0.025;

  // console.log("nodes:", nodes);
  // console.log("materials:", materials);

  useFrame(() => {
    suzanneRef.current.rotation.x += speed * (clockwise ? 1 : -1);
    suzanneRef.current.rotation.y += speed * (clockwise ? 1 : -1);
    suzanneRef.current.rotation.z += speed * (clockwise ? 1 : -1);
  });

  return (
    <mesh
      geometry={nodes.Suzanne.geometry}
      material={materials["Paars"]}
      onClick={() => setClockwise(!clockwise)}
      ref={suzanneRef}
    />
  );
};
