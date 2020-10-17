import React from "react";
import { useResource } from "react-three-fiber";
import { useControl } from "react-three-gui";

export default () => {
  const directionalLightRef = useResource();
  const hemisphereLightRef = useResource();
  const pointLightRef = useResource();
  const spotLightRef = useResource();

  const helperSize = 0.5;
  const showLightHelpers = useControl("Show helpers", {
    group: "Light Helpers",
    type: "boolean",
    value: true,
  });
  const ambientLightIntensity = useControl("Intensity", {
    group: "Ambient Light",
    type: "number",
    value: 0.1,
    min: 0,
    max: 1,
  });
  const pointLightColor = useControl("Color", {
    group: "Point Light",
    type: "color",
    value: "#ffcc77",
  });
  const pointLightPosition = useControl("Position XZ", {
    group: "Point Light",
    type: "xypad",
    distance: 5,
    value: { x: -4, y: -4 },
  });
  const spotLightColor = useControl("Color", {
    group: "Spot Light",
    type: "color",
    value: "#ffcc77",
  });
  return (
    <>
      <ambientLight intensity={ambientLightIntensity} />
      <directionalLight
        castShadow={true}
        color={0xffffff}
        intensity={1}
        position={[2, 2, 1]}
        ref={directionalLightRef}
      />
      <hemisphereLight ref={hemisphereLightRef} />
      <pointLight
        color={pointLightColor}
        intensity={0.5}
        position={[pointLightPosition.x, 0, pointLightPosition.y]}
        ref={pointLightRef}
      />
      <spotLight
        color={spotLightColor}
        position={[0, 4, 4]}
        intensity={1}
        ref={spotLightRef}
      />
      {showLightHelpers && (
        <>
          {directionalLightRef.current && (
            <directionalLightHelper
              args={[directionalLightRef.current, helperSize]}
            />
          )}
          {hemisphereLightRef.current && (
            <hemisphereLightHelper
              args={[hemisphereLightRef.current, helperSize]}
            />
          )}
          {pointLightRef.current && (
            <pointLightHelper args={[pointLightRef.current, helperSize]} />
          )}
          {spotLightRef.current && (
            <spotLightHelper args={[spotLightRef.current]} />
          )}
        </>
      )}
    </>
  );
};
