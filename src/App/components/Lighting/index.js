import React from "react";

export default () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow={true}
        color={0xffffff}
        intensity={1}
        position={[2, 2, 1]}
      />
      <hemisphereLight />
      <pointLight color={0xff6600} intensity={0.5} position={[0, 0, 4]} />
      <spotLight color={0xfff000} position={[0, 4, 4]} intensity={1} />
    </>
  );
};
