import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { Box, Plane, PointerLockControls } from "@react-three/drei";
import { useControl } from "react-three-gui";
import { KeyboardControls } from "App/utils";

const BOX_SIZE = 1;
const MOVE_SPEED = {
  FORWARD: 0.1,
  RIGHT: 0.05,
  UP: 0.5,
};

export default (props) => {
  const enablePointerLockControls = useControl("PointerLock", {
    group: "Controls",
    type: "boolean",
    value: true,
  });

  const pointerRef = useRef();

  useEffect(() => {
    KeyboardControls.addEventListeners();

    if (pointerRef.current) {
      pointerRef.current.getObject().position.y = 1.75; // m
    }

    return KeyboardControls.removeEventListeners;
  }, [enablePointerLockControls]);

  useFrame(() => {
    if (pointerRef.current) {
      pointerRef.current.moveForward(
        MOVE_SPEED.FORWARD * KeyboardControls.forwardDirection
      );
      pointerRef.current.moveRight(
        MOVE_SPEED.RIGHT * KeyboardControls.rightDirection
      );
      pointerRef.current.getObject().position.y +=
        MOVE_SPEED.UP * KeyboardControls.upDirection; // m
    }
  });

  return (
    <>
      {enablePointerLockControls && <PointerLockControls ref={pointerRef} />}
      <Plane
        args={[10, 10]}
        rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
        {...props}
      >
        <meshBasicMaterial color={0x666666} side={THREE.DoubleSide} />
      </Plane>
      <Box
        args={[BOX_SIZE, BOX_SIZE, BOX_SIZE]}
        position={[0, BOX_SIZE / 2, 0]}
      >
        <meshBasicMaterial color={0xff0000} opacity={0.75} transparent={true} />
      </Box>
    </>
  );
};
