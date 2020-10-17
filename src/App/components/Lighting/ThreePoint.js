import React from "react";

export default () => {
  return (
    <group>
      <ambientLight intensity={0.1} />
      <spotLight color="hsl(0, 0%, 70%)" position={[4, 2, -4]} />
      <spotLight color="hsl(210, 100%, 70%)" position={[-4, 2, 4]} />
      <spotLight color="hsl(30, 100%, 70%)" position={[4, 2, 4]} />
    </group>
  );
};
