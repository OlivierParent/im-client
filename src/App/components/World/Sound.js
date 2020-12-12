import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { extend } from "react-three-fiber";
import { PositionalAudioHelper } from "three/examples/jsm/helpers/PositionalAudioHelper";
import { useFrame, useLoader, useResource } from "react-three-fiber";
import {
  Plane,
  PointerLockControls,
  PositionalAudio,
  Text,
} from "@react-three/drei";
import { useControl } from "react-three-gui";
import { KeyboardControls } from "App/utils";
extend({ PositionalAudioHelper });

import badassAudioFile from "./audio/bensound-badass.mp3";
import evolutionAudioFile from "./audio/bensound-evolution.mp3";

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
  const showAudioHelpers = useControl("Audio helpers", {
    group: "Helpers",
    type: "boolean",
    value: false,
  });

  const pointerRef = useRef();
  const audioRef = useResource();
  const positionalAudioRef = useResource();

  const audioListener = new THREE.AudioListener();
  const audioBuffer = useLoader(THREE.AudioLoader, evolutionAudioFile);

  useEffect(() => {
    KeyboardControls.addEventListeners();

    if (pointerRef.current) {
      pointerRef.current.getObject().position.y = 1.75; // m
    }

    return KeyboardControls.removeEventListeners;
  }, [enablePointerLockControls]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.setBuffer(audioBuffer);
      audioRef.current.setLoop(true);
      audioRef.current.setVolume(0.01);
      audioRef.current.play();
    }
  }, [audioBuffer]);

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
      <Text position={[0, 1, 0]}>Music: https://www.bensound.com</Text>
      <audio args={[audioListener]} ref={audioRef} />
      <PositionalAudio
        distance={0.1}
        loop={true}
        ref={positionalAudioRef}
        url={badassAudioFile}
      />
      {showAudioHelpers && (
        <>
          {positionalAudioRef.current && (
            <positionalAudioHelper args={[positionalAudioRef.current]} />
          )}
        </>
      )}
    </>
  );
};
