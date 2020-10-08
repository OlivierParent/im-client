import React from "react";
import { useResource } from "react-three-fiber";

export default () => {
  const refPointLight1 = useResource();
  const refDirectionalLight1 = useResource();

  return (
    <group>
      <ambientLight position={[0, 4, 0]} intensity={0.3} />

      <directionalLight
        color={0xffffff}
        intensity={0.5}
        position={[0, 0, 1]}
        ref={refDirectionalLight1}
      >
        {refDirectionalLight1.current && (
          <directionalLightHelper args={[refDirectionalLight1.current, 0.5]} />
        )}
      </directionalLight>

      <pointLight
        color={0xffcc77}
        intensity={1}
        position={[-6, 3, -6]}
        ref={refPointLight1}
      >
        {refPointLight1.current && (
          <pointLightHelper args={[refPointLight1.current, 0.5]} />
        )}
      </pointLight>
    </group>
  );
};
