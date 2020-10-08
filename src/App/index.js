import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
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
  Suzanne,
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
    <Canvas invalidateFrameloop={false} shadowMap>
      <group>
        {true && (
          <OrbitControls
            enablePan={true}
            enableRotate={true}
            enableZoom={true}
          />
        )}
        {false && <Stats />}
        {false && <axesHelper />}
        {false && <gridHelper args={[10, 10, "red", "green"]} />}
      </group>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
      {false && <Lighting />}
      {true && <StudioLighting />}
      {false && <Button />}
      {false && <Clock />}
      {false && <Cube />}
      {false && <Cube position={[1, 1, 1]} rotation={[0.5, 0.5, 0.5]} />}
      {false && <Gauge position={[0, 0, -1]} />}
      {true && (
        <Suspense fallback={null}>
          {true && <Suzanne />}
          {true && <GlTransmissionFormat />}
        </Suspense>
      )}
      {false && <Tripod />}
    </Canvas>
  );
};
