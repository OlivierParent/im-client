import React, { useRef } from "react";

export default () => {
  const lightRef = useRef();
  const pos = [0.5, 0.5, 1];

  return (
    <>
      <ambientLight intensity={0.1} />
      <group position={pos}>
        <directionalLight
          castShadow={true}
          color={0xffffff}
          intensity={1}
          ref={lightRef}
        />
        <mesh position={pos}>
          <sphereBufferGeometry args={[0.01, 32, 32]} />
          <meshMatcapMaterial />
        </mesh>
      </group>

      <pointLight color={0xff6600} intensity={0.5} position={[0, 0, 0]} />
    </>
  );
};
