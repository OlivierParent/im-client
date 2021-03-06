import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

import normalsGlb from "./normals.glb";

export default () => {
  const normals = useGLTF(normalsGlb, true);
  const normalsRef = useRef();

  useFrame(() => {
    if (normalsRef.current) {
      normalsRef.current.rotation.x += 0.02;
    }
  });

  return <primitive object={normals.scene} ref={normalsRef} />;
};
