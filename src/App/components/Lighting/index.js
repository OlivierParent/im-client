import React, { useRef } from "react";

export default () => {
  const light = useRef();

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight ref={light} position={[10, 10, 5]} intensity={1} />;
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </>
  );
};
