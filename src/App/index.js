import React from "react";
import { Canvas } from "react-three-fiber";
import { Controls, ControlsProvider } from "react-three-gui";
import Content from "App/Content";

import "./styles.css";

export default () => {
  return (
    <ControlsProvider>
      <Canvas invalidateFrameloop={false} shadowMap>
        <Content />
      </Canvas>
      <Controls title="Controls" />
    </ControlsProvider>
  );
};
