import React from "react";
import { useResource } from "react-three-fiber";

export default () => {
  const directionalLightFrontRef = useResource();
  const directionalLightLeftRef = useResource();
  const directionalLightRightRef = useResource();
  const pointLight1Ref = useResource();
  const showHelpers = true;

  return (
    <group>
      <ambientLight position={[0, 4, 0]} intensity={0.1} />
      <directionalLight
        color={0xccccff}
        intensity={0.5}
        position={[0, 0.5, 1]}
        ref={directionalLightFrontRef}
      >
        {showHelpers && directionalLightFrontRef.current && (
          <directionalLightHelper
            args={[directionalLightFrontRef.current, 0.5]}
          />
        )}
      </directionalLight>
      <directionalLight
        color={0xffcccc}
        intensity={1}
        position={[-1, 0, 0]}
        ref={directionalLightLeftRef}
      >
        {showHelpers && directionalLightLeftRef.current && (
          <directionalLightHelper
            args={[directionalLightLeftRef.current, 0.5]}
          />
        )}
      </directionalLight>
      <directionalLight
        color={0xccccff}
        intensity={1}
        position={[1, 0, 0]}
        ref={directionalLightRightRef}
      >
        {showHelpers && directionalLightRightRef.current && (
          <directionalLightHelper
            args={[directionalLightRightRef.current, 0.5]}
          />
        )}
      </directionalLight>
      <pointLight
        color={0xffcc77}
        intensity={1}
        position={[-6, 3, -6]}
        ref={pointLight1Ref}
      >
        {showHelpers && pointLight1Ref.current && (
          <pointLightHelper args={[pointLight1Ref.current, 0.5]} />
        )}
      </pointLight>
    </group>
  );
};
