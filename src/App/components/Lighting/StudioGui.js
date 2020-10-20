import React from "react";
import { useResource } from "react-three-fiber";
import { useControl } from "react-three-gui";

export default () => {
  const frontLightRef = useResource();
  const leftLightRef = useResource();
  const rightLightRef = useResource();

  const helperSize = 0.5;
  const showLightHelpers = useControl("Light helpers", {
    group: "Helpers",
    type: "boolean",
    value: true,
  });
  const ambientLightColor = useControl("Color", {
    group: "Ambient Light",
    type: "color",
    value: "hsl(0, 0%, 100%)",
  });
  const ambientLightIntensity = useControl("Intensity", {
    group: "Ambient Light",
    type: "number",
    value: 0.1,
    min: 0,
    max: 1,
  });
  const frontLightColor = useControl("Color", {
    group: "Front Light",
    type: "color",
    value: "hsl(0, 0%, 70%)",
  });
  const frontLightIntensity = useControl("Intensity", {
    group: "Front Light",
    type: "number",
    value: 0.4,
    min: 0,
    max: 2,
  });
  const leftLightColor = useControl("Color", {
    group: "Left Light",
    type: "color",
    value: "hsl(210, 100%, 70%)",
  });
  const leftLightIntensity = useControl("Intensity", {
    group: "Left Light",
    type: "number",
    value: 1,
    min: 0,
    max: 2,
  });
  const rightLightColor = useControl("Color", {
    group: "Right Light",
    type: "color",
    value: "hsl(30, 100%, 70%)",
  });
  const rightLightIntensity = useControl("Intensity", {
    group: "Right Light",
    type: "number",
    value: 1,
    min: 0,
    max: 2,
  });

  return (
    <group>
      <ambientLight
        color={ambientLightColor}
        intensity={ambientLightIntensity}
      />
      <directionalLight
        castShadow={true}
        color={frontLightColor}
        intensity={frontLightIntensity}
        position={[0, 2, 4]}
        ref={frontLightRef}
      />
      <directionalLight
        castShadow={true}
        color={leftLightColor}
        intensity={leftLightIntensity}
        position={[-4, 0, 0]}
        ref={leftLightRef}
      />
      <directionalLight
        castShadow={true}
        color={rightLightColor}
        intensity={rightLightIntensity}
        position={[4, 0, 0]}
        ref={rightLightRef}
      />
      {showLightHelpers && (
        <>
          {frontLightRef.current && (
            <directionalLightHelper
              args={[frontLightRef.current, helperSize, frontLightColor]}
            />
          )}
          {leftLightRef.current && (
            <directionalLightHelper
              args={[leftLightRef.current, helperSize, leftLightColor]}
            />
          )}
          {rightLightRef.current && (
            <directionalLightHelper
              args={[rightLightRef.current, helperSize, rightLightColor]}
            />
          )}
        </>
      )}
    </group>
  );
};
