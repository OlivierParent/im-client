import React, { Suspense } from "react";
import { useControl } from "react-three-gui";
import { OrbitControls, Stats } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import {
  Button,
  ButtonSpring,
  Clock,
  Cube,
  Gauge,
  GlTransmissionFormat,
  Lighting,
  LightingGui,
  LightingStudio,
  LightingStudioGui,
  LightingThreePoint,
  LightingThreePointGui,
  Spring,
  SpringProps,
  Suzanne,
  SuzanneMatcapTexture,
  SuzanneNormalTexture,
  SuzanneStandardMaterial,
  SuzanneToonMaterial,
  Tripod,
} from "App/components";

export default () => {
  const components = [
    "None",
    "Button",
    "Button (React Spring)",
    "Clock",
    "Cube",
    "Cube (positioned)",
    "Gauge",
    "GlTransmissionFormat",
    "Spring",
    "Spring (Props)",
    "Suzanne (default)",
    "Suzanne (MatCap Texture)",
    "Suzanne (Normal Texture)",
    "Suzanne (Standard Material)",
    "Suzanne (Toon Material)",
    "Tripod",
  ];

  const lightings = [
    "None",
    "Demo",
    "Demo + GUI",
    "Studio Lighting",
    "Studio Lighting + GUI",
    "Three Point Lighting",
    "Three Point Lighting + GUI",
  ];

  const showEffect = useControl("Effect", { type: "boolean", value: false });
  const showStats = useControl("Statistics", { type: "boolean", value: false });
  const showAxesHelper = useControl("Axes Helper", {
    group: "Helpers",
    type: "boolean",
    value: true,
  });
  const showGridHelper = useControl("Grid Helper", {
    group: "Helpers",
    type: "boolean",
    value: true,
  });
  const useLighting = useControl("Lighting", {
    type: "select",
    value: lightings[3],
    items: lightings,
  });
  const useComponent = useControl("Component", {
    type: "select",
    value: components[8],
    items: components,
  });

  function showLighting(name) {
    return useLighting === name;
  }

  function showComponent(name) {
    return useComponent === name;
  }

  return (
    <>
      <group>
        {true && (
          <OrbitControls
            enablePan={true}
            enableRotate={true}
            enableZoom={true}
          />
        )}
        {showStats && <Stats />}
        {showAxesHelper && <axesHelper />}
        {showGridHelper && <gridHelper args={[10, 10, 0xffffff, 0x333333]} />}
      </group>
      {showEffect && (
        <EffectComposer>
          <Bloom height={500} luminanceThreshold={0} luminanceSmoothing={0.9} />
        </EffectComposer>
      )}
      {showLighting("Demo") && <Lighting />}
      {showLighting("Demo + GUI") && <LightingGui />}
      {showLighting("Studio Lighting") && <LightingStudio />}
      {showLighting("Studio Lighting + GUI") && <LightingStudioGui />}
      {showLighting("Three Point Lighting") && <LightingThreePoint />}
      {showLighting("Three Point Lighting + GUI") && <LightingThreePointGui />}
      {showComponent("Button") && <Button />}
      {showComponent("Button (React Spring)") && <ButtonSpring />}
      {showComponent("Clock") && <Clock />}
      {showComponent("Cube") && <Cube />}
      {showComponent("Cube (positioned)") && (
        <Cube position={[1, 1, 1]} rotation={[0.5, 0.5, 0.5]} />
      )}
      {showComponent("Gauge") && <Gauge />}
      {true && (
        <Suspense fallback={null}>
          {showComponent("GlTransmissionFormat") && <GlTransmissionFormat />}
          {showComponent("Spring") && <Spring />}
          {showComponent("Spring (Props)") && <SpringProps />}
          {showComponent("Suzanne (default)") && <Suzanne />}
          {showComponent("Suzanne (MatCap Texture)") && (
            <SuzanneMatcapTexture />
          )}
          {showComponent("Suzanne (Normal Texture)") && (
            <SuzanneNormalTexture />
          )}
          {showComponent("Suzanne (Standard Material)") && (
            <SuzanneStandardMaterial />
          )}
          {showComponent("Suzanne (Toon Material)") && <SuzanneToonMaterial />}
        </Suspense>
      )}
      {showComponent("Tripod") && <Tripod />}
    </>
  );
};
