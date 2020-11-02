import React, { Suspense } from "react";
import * as THREE from "three";
import { useControl } from "react-three-gui";
import { OrbitControls, Stats } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import {
  Animation,
  Button,
  ButtonSpring,
  Clock,
  ClockDigital,
  Cube,
  Face,
  Gauge,
  Image,
  Lighting,
  LightingGui,
  LightingStudio,
  LightingStudioGui,
  LightingThreePoint,
  LightingThreePointGui,
  Logo,
  LogoDouble,
  Socket,
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
    "Animation",
    "Button",
    "Button (React Spring)",
    "Clock (analogue)",
    "Clock (digital)",
    "Cube (positioned)",
    "Cube",
    "Face",
    "Gauge",
    "Image",
    "Logo",
    "Logo (double)",
    "Socket",
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

  const showEffect = useControl("Effect", {
    group: "General",
    type: "boolean",
    value: false,
  });
  const showStats = useControl("Statistics", {
    group: "General",
    type: "boolean",
    value: false,
  });

  const useComponent = useControl("Component", {
    group: "General",
    type: "select",
    value: components[16],
    items: components,
  });
  const useLighting = useControl("Lighting", {
    group: "General",
    type: "select",
    value: lightings[3],
    items: lightings,
  });

  const showAxesHelper = useControl("Axes Helper", {
    group: "Helpers",
    type: "boolean",
    value: false,
  });
  const showGridHelper = useControl("Grid Helper", {
    group: "Helpers",
    type: "boolean",
    value: false,
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
      {showComponent("Clock (analogue)") && <Clock />}
      {showComponent("Clock (digital)") && <ClockDigital />}
      {showComponent("Cube") && <Cube />}
      {showComponent("Cube (positioned)") && (
        <Cube
          position={[1, 1, 1]}
          rotation={[45, 45, 45].map((degrees) =>
            THREE.MathUtils.degToRad(degrees)
          )}
        />
      )}
      {showComponent("Face") && <Face />}
      {showComponent("Gauge") && <Gauge />}
      {showComponent("Socket") && <Socket />}
      {true && (
        <Suspense fallback={null}>
          {showComponent("Animation") && <Animation />}
          {showComponent("Logo") && <Logo />}
          {showComponent("Logo (double)") && <LogoDouble />}
          {showComponent("Image") && <Image />}
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
