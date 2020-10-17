import React from "react";
import { Canvas } from "react-three-fiber";
import { Controls, ControlsProvider } from "react-three-gui";
import Content from "App/Content";

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
        <Content />
      </Canvas>
      <Controls title="Controls" />
    </ControlsProvider>
  );
};
