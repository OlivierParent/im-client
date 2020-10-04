import React, { useEffect, useRef } from "react";

export default (props) => {
  const length = 1;
  const thickness = 0.01;
  const radius = thickness * 2;
  const height = thickness * 4;
  const segments = 8;
  const xAxis = useRef();
  const yAxis = useRef();
  const zAxis = useRef();

  useEffect(() => {
    xAxis.current.position.x = length / 2;
    yAxis.current.position.y = length / 2;
    zAxis.current.position.z = length / 2;
  });

  return (
    <group {...props}>
      <mesh>
        <boxBufferGeometry
          args={[thickness * 1.5, thickness * 1.5, thickness * 1.5]}
          attach="geometry"
        />
      </mesh>
      <group ref={xAxis}>
        <mesh position={[thickness * 2, 0, 0]}>
          <boxBufferGeometry
            args={[length, thickness, thickness]}
            attach="geometry"
          />
          <meshStandardMaterial attach="material" color="#F00" />
        </mesh>
        <mesh
          position={[length / 2 + thickness * 2, 0, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <coneBufferGeometry
            args={[radius, height, segments]}
            attach="geometry"
          />
          <meshStandardMaterial attach="material" color="#F00" />
        </mesh>
      </group>
      <group ref={yAxis}>
        <mesh position={[0, thickness * 2, 0]}>
          <boxBufferGeometry
            args={[thickness, length, thickness]}
            attach="geometry"
          />
          <meshStandardMaterial attach="material" color="#0F0" />
        </mesh>
        <mesh
          position={[0, length / 2 + thickness * 2, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <coneBufferGeometry
            args={[radius, height, segments]}
            attach="geometry"
          />
          <meshStandardMaterial attach="material" color="#0F0" />
        </mesh>
      </group>
      <group ref={zAxis}>
        <mesh position={[0, 0, thickness * 2]}>
          <boxBufferGeometry
            args={[thickness, thickness, length]}
            attach="geometry"
          />
          <meshStandardMaterial attach="material" color="#00F" />
        </mesh>
        <mesh
          position={[0, 0, length / 2 + thickness * 2]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <coneBufferGeometry
            args={[radius, height, segments]}
            attach="geometry"
          />
          <meshStandardMaterial attach="material" color="#00F" />
        </mesh>
      </group>
    </group>
  );
};
