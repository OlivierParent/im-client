import React from "react";
import { useResource } from "react-three-fiber";
import { useControl } from "react-three-gui";

export default () => {
  const backLightRef = useResource();
  const fillLightRef = useResource();
  const keyLightRef = useResource();

  const showLightHelpers = useControl("Show helpers", {
    group: "Light Helpers",
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
  const backLightColor = useControl("Color", {
    group: "Back Light",
    type: "color",
    value: "hsl(0, 0%, 70%)",
  });
  const fillLightColor = useControl("Color", {
    group: "Fill Light",
    type: "color",
    value: "hsl(210, 100%, 70%)",
  });
  const keyLightColor = useControl("Color", {
    group: "Key Light",
    type: "color",
    value: "hsl(30, 100%, 70%)",
  });

  return (
    <group>
      <ambientLight
        color={ambientLightColor}
        intensity={ambientLightIntensity}
      />
      <spotLight
        color={backLightColor}
        position={[4, 2, -4]}
        ref={backLightRef}
      />
      <spotLight
        color={fillLightColor}
        position={[-4, 2, 4]}
        ref={fillLightRef}
      />
      <spotLight color={keyLightColor} position={[4, 2, 4]} ref={keyLightRef} />
      {showLightHelpers && (
        <>
          {backLightRef.current && (
            <spotLightHelper args={[backLightRef.current]} />
          )}

          {fillLightRef.current && (
            <spotLightHelper args={[fillLightRef.current]} />
          )}
          {keyLightRef.current && (
            <spotLightHelper args={[keyLightRef.current]} />
          )}
        </>
      )}
    </group>
  );
};
