import React from "react";
import { useResource } from "react-three-fiber";
import { useControl } from "react-three-gui";

export default () => {
  const directionalLightFrontRef = useResource();
  const directionalLightLeftRef = useResource();
  const directionalLightRightRef = useResource();
  const pointLight1Ref = useResource();
  const showHelpers = useControl("Show Helpers", {
    type: "boolean",
    value: true,
  });
  const ambientLightIntensity = useControl("Intensity", {
    group: "AmbientLight",
    type: "number",
    value: 0.1,
    min: 0,
    max: 1,
  });
  const directionalLightFrontColor = useControl("Front Color", {
    group: "DirectionalLight",
    type: "color",
    value: "hsl(0, 0%, 70%)",
  });
  const directionalLightLeftColor = useControl("Left Color", {
    group: "DirectionalLight",
    type: "color",
    value: "hsl(0, 100%, 70%)",
  });
  const directionalLightRightColor = useControl("Right Color", {
    group: "DirectionalLight",
    type: "color",
    value: "hsl(180, 100%, 70%)",
  });

  const pointLight1Color = useControl("Light 1 Color", {
    group: "pointLight",
    type: "color",
    value: "#ffcc77",
  });
  const pointLight1Position = useControl("Light 1 Position XY", {
    group: "pointLight",
    type: "xypad",
    distance: 6,
    value: { x: -6, y: -6 },
  });

  return (
    <group>
      <ambientLight position={[0, 4, 0]} intensity={ambientLightIntensity} />
      <directionalLight
        color={directionalLightFrontColor}
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
        color={directionalLightLeftColor}
        intensity={1}
        position={[-2, 0, 0]}
        ref={directionalLightLeftRef}
      >
        {showHelpers && directionalLightLeftRef.current && (
          <directionalLightHelper
            args={[directionalLightLeftRef.current, 0.5]}
          />
        )}
      </directionalLight>
      <directionalLight
        color={directionalLightRightColor}
        intensity={1}
        position={[2, 0, 0]}
        ref={directionalLightRightRef}
      >
        {showHelpers && directionalLightRightRef.current && (
          <directionalLightHelper
            args={[directionalLightRightRef.current, 0.5]}
          />
        )}
      </directionalLight>
      <pointLight
        color={pointLight1Color}
        intensity={1}
        // position={[-6, 3, -6]}
        position={[pointLight1Position.x, 3, pointLight1Position.y]}
        ref={pointLight1Ref}
      >
        {showHelpers && pointLight1Ref.current && (
          <pointLightHelper args={[pointLight1Ref.current, 0.5]} />
        )}
      </pointLight>
    </group>
  );
};
