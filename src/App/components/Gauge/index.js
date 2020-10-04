// @todo Rotate gauge based on range, in stead of compensating rotation in calculation.
import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Convert } from "App/utils";

export default (props) => {
  const TICK_MARKS = [
    { color: "green", label: "0", ref: useRef(), value: 0 },
    { color: "white", label: "10", ref: useRef(), value: 1000 },
    { color: "white", label: "20", ref: useRef(), value: 2000 },
    { color: "white", label: "30", ref: useRef(), value: 3000 },
    { color: "white", label: "40", ref: useRef(), value: 4000 },
    { color: "orange", label: "50", ref: useRef(), value: 5000 },
    { color: "red", label: "60", ref: useRef(), value: 6000 },
    { color: "red", label: "70", ref: useRef(), value: 7000 },
  ];
  const ANGLE_RANGE = 270;
  const NEEDLE_STEP_DOWN = -250;
  const NEEDLE_STEP_UP = 60;

  const angleStep = ANGLE_RANGE / (TICK_MARKS.length - 1);
  const angleStart = Convert.toRadians(-(90 + (360 - ANGLE_RANGE) / 2));
  const valueRange = (TICK_MARKS.length - 1) * 1000;
  const valueStep = ANGLE_RANGE / valueRange;
  const needleRef = useRef();
  let needleAngle = 0;
  let needleValue = 0;
  let needleStep = NEEDLE_STEP_UP;

  useFrame(() => {
    if (needleValue <= 0) {
      needleStep = NEEDLE_STEP_UP;
    } else if (valueRange <= needleValue) {
      needleStep = NEEDLE_STEP_DOWN;
    }
    needleValue += needleStep;
    needleAngle = Convert.toRadians(-(valueStep * needleValue));
    needleRef.current.rotation.z = needleAngle;

    TICK_MARKS.forEach((tickMark, index) => {
      tickMark.ref.current.children[0].material.color.setColorName(
        tickMark.value <= needleValue ? "blue" : tickMark.color
      );
    });
  });

  return (
    <group {...props} rotation={[0, 0, angleStart]}>
      {TICK_MARKS.map((tickMark, index) => {
        const radians = Convert.toRadians(-angleStep * index);
        return (
          <group ref={tickMark.ref} key={index} rotation={[0, 0, radians]}>
            <mesh position={[1, 0, 0]}>
              <boxBufferGeometry attach="geometry" args={[0.25, 0.05, 0.05]} />
              <meshStandardMaterial
                attach="material"
                color={tickMark.color}
                metalness={0.1}
                opacity={0.5}
                roughness={0.6}
                transparent={true}
              />
            </mesh>
          </group>
        );
      })}
      <group position={[0, 0, 0.05]}>
        <group ref={needleRef}>
          <mesh castShadow={true} position={[0.5, 0, 0]}>
            <boxBufferGeometry args={[1, 0.05, 0.025]} attach="geometry" />
            <meshStandardMaterial
              attach="material"
              metalness={0.1}
              roughness={0.6}
              color="orange"
            />
          </mesh>
        </group>
        <mesh castShadow={true} rotation={[Convert.toRadians(-90), 0, 0]}>
          <cylinderBufferGeometry
            args={[0.1, 0.05, 0.1, 32]}
            attach="geometry"
          />
          <meshStandardMaterial attach="material" />
        </mesh>
      </group>
      <mesh
        position={[0, 0, -0.05]}
        receiveShadow={true}
        rotation={[Convert.toRadians(90), 0, 0]}
      >
        <cylinderBufferGeometry args={[1.2, 1.2, 0.01, 64]} attach="geometry" />
        <meshStandardMaterial
          attach="material"
          opacity={0.25}
          transparent={true}
        />
      </mesh>
    </group>
  );
};
