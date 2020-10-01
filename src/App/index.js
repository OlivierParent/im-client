import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import io from "socket.io-client";

import {
  Cube,
  Gauge,
  GlTransmissionFormat,
  Lighting,
  Suzanne,
  Tripod,
} from "./components";
import "./styles.css";

export default () => {
  const port = 3001;
  const socket = io(`http://localhost:${port}`);

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
    // <Canvas invalidateFrameloop>
    <Canvas>
      {/* <Cube />
      <Cube position={[1, 1, 1]} rotation={[0.5, 0.5, 0.5]} /> */}
      <Gauge />
      {/* <Tripod /> */}
      {/* <Suspense fallback={null}>
        <Suzanne />
        <GlTransmissionFormat />
      </Suspense> */}
      <Lighting />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};
