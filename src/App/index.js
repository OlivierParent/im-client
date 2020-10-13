import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Controls, ControlsProvider } from "react-three-gui";
import { OrbitControls, Stats } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
// import io from "socket.io-client";
import {
  Button,
  Clock,
  Cube,
  Gauge,
  GlTransmissionFormat,
  Lighting,
  StudioLighting,
  StudioLightingGuiControls,
  Suzanne,
  SuzanneMatcap,
  SuzanneStandard,
  Tripod,
} from "App/components";

import "./styles.css";

export default () => {
  // const port = 3001;
  // const socket = io(`http://localhost:${port}`);

  // socket.on("connect", () => {
  //   console.log("Socket connected: ", socket.connected);
  // });

  // socket.on("disconnect", () => {
  //   console.log("Socket connected: ", socket.connected);
  // });

  // socket.on("telemetry", (message) => {
  //   console.log("Message:", message);
  // });

  return (
    <ControlsProvider>
      <Canvas invalidateFrameloop={false} shadowMap>
        <group>
          {true && (
            <OrbitControls
              enablePan={true}
              enableRotate={true}
              enableZoom={true}
            />
          )}
          {true && <Stats />}
          {true && <axesHelper />}
          {true && <gridHelper />}
        </group>
        {false && (
          <EffectComposer>
            <Bloom
              height={500}
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        )}
        {false && <Lighting />}
        {false && <StudioLighting />}
        {true && <StudioLightingGuiControls />}
        {false && <Button />}
        {false && <Clock />}
        {/* {true && <Cube />}
        {false && <Cube position={[1, 1, 1]} rotation={[0.5, 0.5, 0.5]} />} */}
        {false && <Gauge />}
        {true && (
          <Suspense fallback={null}>
            {false && <GlTransmissionFormat />}
            {false && <Suzanne />}
            {false && <SuzanneMatcap />}
            {true && <SuzanneStandard />}
          </Suspense>
        )}
        {false && <Tripod />}
      </Canvas>
      <Controls title="Controls" />
    </ControlsProvider>
  );
};
