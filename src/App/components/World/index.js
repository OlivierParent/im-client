import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { Box, Plane, PointerLockControls } from "@react-three/drei";
import { useControl } from "react-three-gui";

export default (props) => {
  const enablePointerLockControls = useControl("PointerLock Controls", {
    group: "General",
    type: "boolean",
    value: true,
  });

  const MOVE_SPEED = 0.1;
  const DIRECTION = {
    BACK: -1,
    DOWN: -1,
    FORWARD: 1,
    LEFT: -1,
    NONE: 0,
    RIGHT: 1,
    UP: 1,
  };
  const pointerLockControlsRef = useRef();
  let forwardDirection = 0;
  let rightDirection = 0;

  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowDown":
      case "s":
        forwardDirection = DIRECTION.BACK;
        break;
      case "ArrowLeft":
      case "a":
        rightDirection = DIRECTION.LEFT;
        break;
      case "ArrowRight":
      case "d":
        rightDirection = DIRECTION.RIGHT;
        break;
      case "ArrowUp":
      case "w":
        forwardDirection = DIRECTION.FORWARD;
        break;
    }
  });

  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
      case "s":
      case "w":
        forwardDirection = DIRECTION.NONE;
        break;
      case "ArrowLeft":
      case "ArrowRight":
      case "a":
      case "d":
        rightDirection = DIRECTION.NONE;
        break;
    }
  });

  useEffect(() => {
    console.log(pointerLockControlsRef);
    if (pointerLockControlsRef.current) {
      pointerLockControlsRef.current.getObject().position.y = 1;
    }
  });

  useFrame(() => {
    if (pointerLockControlsRef.current) {
      pointerLockControlsRef.current.moveForward(MOVE_SPEED * forwardDirection);
      pointerLockControlsRef.current.moveRight(MOVE_SPEED * rightDirection);
    }
  });

  return (
    <>
      {enablePointerLockControls && (
        <PointerLockControls ref={pointerLockControlsRef} />
      )}
      <Plane
        args={[10, 10]}
        rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
        {...props}
      >
        <meshBasicMaterial color={0x666666} side={THREE.DoubleSide} />
      </Plane>
      <Box>
        <meshBasicMaterial />
      </Box>
    </>
  );
};
