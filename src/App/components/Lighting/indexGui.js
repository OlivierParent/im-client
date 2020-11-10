import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, useResource, useThree } from "react-three-fiber";
import { useControl } from "react-three-gui";

export default () => {
  const directionalLightRef = useResource();
  // const hemisphereLightRef = useResource();
  const pointLightRef = useResource();
  const spotLightRef = useResource();
  const spotLightHelperRef = useRef();
  const { scene } = useThree();
  const target = new THREE.Object3D();

  scene.add(target);

  const helperSize = 0.5;
  const showLightHelpers = useControl("Light helpers", {
    group: "Helpers",
    type: "boolean",
    value: true,
  });
  const ambientLightColor = useControl("Color", {
    group: "Ambient Light",
    type: "color",
    value: "#ffffff",
  });
  const ambientLightIntensity = useControl("Intensity", {
    group: "Ambient Light",
    type: "number",
    value: 0.1,
    min: 0,
    max: 1,
  });
  const directionalLightColor = useControl("Color", {
    group: "Directional Light",
    type: "color",
    value: "#ffffff",
  });
  const directionalLightIntensity = useControl("Intensity", {
    group: "Directional Light",
    type: "number",
    value: 1,
    min: 0,
    max: 1,
  });
  const pointLightColor = useControl("Color", {
    group: "Point Light",
    type: "color",
    value: "#ffcc77",
  });
  const pointLightIntensity = useControl("Intensity", {
    group: "Point Light",
    type: "number",
    value: 0.5,
    min: 0,
    max: 20,
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
  const spotLightIntensity = useControl("Intensity", {
    group: "Spot Light",
    type: "number",
    value: 1,
    min: 0,
    max: 20,
  });
  const spotLightPosition = useControl("Position XZ", {
    group: "Spot Light",
    type: "xypad",
    distance: 5,
    value: { x: 0, y: 0 },
  });

  useFrame(() => {
    target.translateX(spotLightPosition.x);
    target.translateZ(spotLightPosition.y);
    if (spotLightHelperRef.current) {
      spotLightHelperRef.current.update();
    }
  });

  return (
    <>
      <ambientLight
        color={ambientLightColor}
        intensity={ambientLightIntensity}
      />
      <directionalLight
        castShadow={true}
        color={directionalLightColor}
        intensity={directionalLightIntensity}
        position={[4, 4, 1]}
        ref={directionalLightRef}
      />
      {/* <hemisphereLight ref={hemisphereLightRef} /> */}
      <pointLight
        castShadow={true}
        color={pointLightColor}
        intensity={pointLightIntensity}
        position={[pointLightPosition.x, 1, pointLightPosition.y]}
        ref={pointLightRef}
      />
      <spotLight
        angle={THREE.MathUtils.degToRad(30)}
        castShadow={true}
        color={spotLightColor}
        intensity={spotLightIntensity}
        penumbra={0.5}
        position={[spotLightPosition.x, 4, spotLightPosition.y]}
        ref={spotLightRef}
        target={target}
      />
      {showLightHelpers && (
        <>
          {directionalLightRef.current && (
            <directionalLightHelper
              args={[
                directionalLightRef.current,
                helperSize,
                directionalLightColor,
              ]}
            />
          )}
          {/* {hemisphereLightRef.current && (
            <hemisphereLightHelper
              args={[hemisphereLightRef.current, helperSize]}
            />
          )} */}
          {pointLightRef.current && (
            <pointLightHelper
              args={[pointLightRef.current, helperSize, pointLightColor]}
            />
          )}
          {spotLightRef.current && (
            <spotLightHelper
              args={[spotLightRef.current, spotLightColor]}
              ref={spotLightHelperRef}
            />
          )}
        </>
      )}
    </>
  );
};
