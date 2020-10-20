import React from "react";
import * as THREE from "three";
import { Plane } from "@react-three/drei";

export default (props) => {
  return (
    <Plane
      args={[10, 10]}
      rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
      {...props}
    >
      <meshStandardMaterial />
    </Plane>
  );
};
