import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Route, Router } from "wouter";
import * as THREE from "three";
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
  LoremIpsum,
  Normals,
  Socket,
  Spring,
  SpringProps,
  Suzanne,
  SuzanneMatcapTexture,
  SuzanneNormalTexture,
  SuzanneStandardMaterial,
  SuzanneToonMaterial,
  Tripod,
  World,
  Wouter,
  WouterPathRouter,
  WouterPathWouter,
} from "App/components";
import { useControl } from "react-three-gui";

const currentLocation = () => window.location.hash.replace("#", "") || "/";
const useHashLocation = () => {
  const [location, setLocation] = useState(currentLocation());

  useEffect(() => {
    console.log(window.location.hash);
    const handler = () => setLocation(currentLocation());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to) => (window.location.hash = to), []);
  return [location, navigate];
};

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
    "Lorem Ipsum",
    "Normals",
    "Socket (Socket.IO 3.0)",
    "Spring",
    "Spring (Props)",
    "Suzanne (default)",
    "Suzanne (MatCap Texture)",
    "Suzanne (Normal Texture)",
    "Suzanne (Standard Material)",
    "Suzanne (Toon Material)",
    "Tripod",
    "World",
    "Wouter (router)",
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

  const enableOrbitControls = useControl("Orbit", {
    group: "Controls",
    type: "boolean",
    value: false,
  });
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
    value: "Suzanne (default)",
    items: components,
  });
  const useLighting = useControl("Lighting", {
    group: "General",
    type: "select",
    value: "Studio Lighting",
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
    <Router base={process.env.PUBLIC_URL} hook={useHashLocation}>
      <>
        {enableOrbitControls && (
          <OrbitControls
            enablePan={true}
            enableRotate={true}
            enableZoom={true}
          />
        )}
        {showStats && <Stats />}
        {showAxesHelper && <axesHelper />}
        {showGridHelper && <gridHelper args={[10, 10, 0xffffff, 0x333333]} />}
      </>
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

      {showComponent("Socket (Socket.IO 3.0)") && <Socket />}
      {true && (
        <Suspense fallback={null}>
          {showComponent("Animation") && <Animation />}
          {showComponent("Logo") && <Logo />}
          {showComponent("Logo (double)") && <LogoDouble />}
          {showComponent("Lorem Ipsum") && <LoremIpsum />}
          {showComponent("Normals") && <Normals />}
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
      {showComponent("World") && <World />}
      {showComponent("Wouter (router)") && <Wouter />}
      <Route component={WouterPathRouter} path="/router" />
      <Route component={WouterPathWouter} path="/wouter" />
    </Router>
  );
};
