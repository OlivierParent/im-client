import React from "react";
import * as THREE from "three";

export default ({ color, index, shape }) => {
  // console.log("Shape", color, index);
  return (
    <mesh position={[0, 0, -0.05 * index]}>
      <shapeBufferGeometry args={[shape]} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
};
