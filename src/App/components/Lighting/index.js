import React from "react";
import { useResource } from "react-three-fiber";

export default () => {
  const directionalLightRef = useResource();
  const pointLightRef = useResource();
  const showHelpers = true;

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow={true}
        color={0xffffff}
        intensity={1}
        position={[0.5, 0.5, 1]}
        ref={directionalLightRef}
      >
        {showHelpers && directionalLightRef.current && (
          <directionalLightHelper args={[directionalLightRef.current, 0.5]} />
        )}
      </directionalLight>
      <pointLight
        color={0xff6600}
        intensity={0.5}
        position={[0, 0, 1]}
        ref={pointLightRef}
      >
        {showHelpers && pointLightRef.current && (
          <pointLightHelper args={[pointLightRef.current, 0.5]} />
        )}
      </pointLight>
    </>
  );
};
