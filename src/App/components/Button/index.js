import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import { Text } from "@react-three/drei";

export default (props) => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x00ff00);

  return (
    <group
      onClick={() => setColor(0xff0000)}
      onDoubleClick={() => setColor(0x0000ff)}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
    >
      <mesh>
        <boxBufferGeometry args={hover ? [1, 0.5, 0.01] : [1, 0.5, 0.01]} />
        <meshMatcapMaterial color={color} />
      </mesh>
      <Text color="white" fontSize={0.2} position={[0, 0, 0.01]}>
        Click Me!
      </Text>
    </group>
  );
};
