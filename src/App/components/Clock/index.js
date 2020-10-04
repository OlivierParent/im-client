import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Text } from "@react-three/drei";
import { Convert } from "App/utils";

export default (props) => {
  const HH = 12;
  const MM = 60;
  const SS = 60;

  const CLOCK = useRef();
  const HAND_SS = useRef();
  const HAND_MM = useRef();
  const HAND_HH = useRef();

  const angleStart = Convert.toRadians(90);

  useFrame(() => {
    const d = new Date();

    CLOCK.current.rotation.y += 0.01;

    HAND_SS.current.rotation.z = Convert.toRadians(
      d.getSeconds() * -(360 / SS)
    );
    HAND_MM.current.rotation.z = Convert.toRadians(
      d.getMinutes() * -(360 / MM)
    );
    HAND_HH.current.rotation.z = Convert.toRadians(
      (d.getHours() + d.getMinutes() / MM) * -(360 / HH)
    );
  });

  return (
    <group ref={CLOCK}>
      {/* <axesHelper /> */}
      <group>
        <Text color="black" position={[0, -0.25, 0.01]}>
          Arteveldehogeschool
        </Text>
      </group>
      <group {...props} rotation={[0, 0, angleStart]}>
        <mesh receiveShadow={true} rotation={[Convert.toRadians(90), 0, 0]}>
          <cylinderBufferGeometry
            args={[1.2, 1.2, 0.01, 64]}
            attach="geometry"
          />
          <meshStandardMaterial
            attach="material"
            opacity={0.25}
            transparent={true}
          />
        </mesh>
        <group ref={HAND_HH}>
          <mesh castShadow={true} position={[0.3, 0, 0]}>
            <boxBufferGeometry args={[0.6, 0.06, 0.06]} attach="geometry" />
            <meshStandardMaterial attach="material" />
          </mesh>
        </group>
        <group ref={HAND_MM}>
          <mesh castShadow={true} position={[0.4, 0, 0]}>
            <boxBufferGeometry args={[0.8, 0.04, 0.04]} attach="geometry" />
            <meshStandardMaterial attach="material" />
          </mesh>
        </group>
        <group ref={HAND_SS}>
          <mesh castShadow={true} position={[0.5, 0, 0]}>
            <boxBufferGeometry args={[1, 0.02, 0.02]} attach="geometry" />
            <meshStandardMaterial attach="material" color={0xcccc00} />
          </mesh>
        </group>
        {Array(MM)
          .fill(null)
          .map((value, index) => {
            const radians = Convert.toRadians((360 / MM) * index);
            return (
              <group key={index} rotation={[0, 0, radians]}>
                <mesh position={[1, 0, 0]}>
                  <boxBufferGeometry
                    attach="geometry"
                    args={[
                      index % 5 ? 0.15 : 0.25,
                      index % 5 ? 0.01 : 0.03,
                      0.015,
                    ]}
                  />
                  <meshStandardMaterial
                    attach="material"
                    color={
                      index === 0 ? 0x0000ff : index % 5 ? 0xffffff : 0xff0000
                    }
                    metalness={0.1}
                    opacity={0.5}
                    roughness={0.6}
                    transparent={true}
                  />
                </mesh>
              </group>
            );
          })}
        <mesh castShadow={true} rotation={[Convert.toRadians(-90), 0, 0]}>
          <cylinderBufferGeometry
            args={[0.1, 0.05, 0.1, 32]}
            attach="geometry"
          />
          <meshStandardMaterial attach="material" />
        </mesh>
      </group>
    </group>
  );
};
