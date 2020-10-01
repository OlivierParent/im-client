import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

export default (props) => {
  const colors = ["#f00", "#ff0", "#0f0", "#0ff", "#00f", "#f0f"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const cubeRef = useRef();

  let delta = 0.01;
  useFrame(() => {
    if (cubeRef.current.opacity <= 0 || 1 <= cubeRef.current.opacity) {
      delta = -delta;
    }
    cubeRef.current.opacity += delta;
  });

  return (
    <mesh {...props}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        ref={cubeRef}
        attach="material"
        color={color}
        metalness={0.1}
        opacity={0.5}
        roughness={0.6}
        transparent={true}
      />
    </mesh>
  );
};
