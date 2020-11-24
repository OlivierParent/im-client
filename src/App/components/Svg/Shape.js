import React from "react";
import * as THREE from "three";

export default ({ shape, position, color, opacity, index }) => {
  console.log("Shape", color, index);
  return (
    <mesh position={[0, 0, -0.01 * index]}>
      <shapeBufferGeometry args={[shape]} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
};
