import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { Box, Plane, PointerLockControls } from "@react-three/drei";
import { useControl } from "react-three-gui";
import { KeyboardControls } from "App/utils";

export default (props) => {
  const enablePointerLockControls = useControl("PointerLock Controls", {
    group: "General",
    type: "boolean",
    value: true,
  });

  const pointerLockControlsRef = useRef();

  useEffect(() => {
    KeyboardControls.addEventListeners();

    if (pointerLockControlsRef.current) {
      pointerLockControlsRef.current.getObject().position.y = 1.75; // m
    }

    return KeyboardControls.removeEventListeners;
  });

  useFrame(() => {
    if (pointerLockControlsRef.current) {
      pointerLockControlsRef.current.moveForward(
        KeyboardControls.MOVE_SPEED * KeyboardControls.forwardDirection
      );
      pointerLockControlsRef.current.moveRight(
        KeyboardControls.MOVE_SPEED * KeyboardControls.rightDirection
      );
      pointerLockControlsRef.current.getObject().position.y +=
        KeyboardControls.MOVE_SPEED * KeyboardControls.upDirection; // m
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
