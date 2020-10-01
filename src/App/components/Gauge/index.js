import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

import { Convert } from "../../utils";

export default (props) => {
  const tickMarks = [
    { color: "green", label: "0" },
    { color: "white", label: "10" },
    { color: "white", label: "20" },
    { color: "white", label: "30" },
    { color: "white", label: "40" },
    { color: "orange", label: "50" },
    { color: "red", label: "60" },
    { color: "red", label: "70" },
  ];
  const angleRange = 270;
  const angleStep = angleRange / (tickMarks.length - 1);
  const startAngle = -(360 - angleRange) * 1.5;
  const needleRef = useRef();
  const needleStepUp = 40;
  const needleStepDown = -200;
  let needleStep = needleStepUp;
  let needleValue = 0;
  let needleAngle = 0;

  useFrame(() => {
    if (needleValue <= 0) {
      needleStep = needleStepUp;
    } else if (1000 * (tickMarks.length - 1) <= needleValue) {
      needleStep = needleStepDown;
    }
    needleValue += needleStep;

    needleAngle = Convert.toRadians(
      startAngle - (angleRange / (1000 * (tickMarks.length - 1))) * needleValue
    );
    needleRef.current.rotation.z = needleAngle;
  });

  return (
    <mesh {...props}>
      {tickMarks.map((value, index) => {
        const radians = Convert.toRadians(startAngle - angleStep * index);
        return (
          <mesh rotation={[0, 0, radians]}>
            <mesh position={[1, 0, 0]}>
              <boxBufferGeometry attach="geometry" args={[0.25, 0.05, 0.05]} />
              <meshStandardMaterial
                attach="material"
                color={value.color}
                metalness={0.1}
                opacity={0.5}
                roughness={0.6}
                transparent={true}
              />
            </mesh>
          </mesh>
        );
      })}

      <mesh position={[0, 0, 0.1]}>
        <mesh ref={needleRef}>
          <mesh position={[0.5, 0, 0]}>
            <boxBufferGeometry args={[1, 0.05, 0.05]} attach="geometry" />
            <meshStandardMaterial
              attach="material"
              // color={color}
              metalness={0.1}
              opacity={1}
              roughness={0.6}
              transparent={true}
            />
          </mesh>
        </mesh>
        <mesh>
          <mesh rotation={[Convert.toRadians(90), 0, 0]}>
            <cylinderBufferGeometry
              args={[0.1, 0.1, 0.05, 32]}
              attach="geometry"
            />
            <meshStandardMaterial
              attach="material"
              opacity={1}
              transparent={true}
            />
          </mesh>
        </mesh>
      </mesh>
      <mesh position={[0, 0, -0.1]} rotation={[Convert.toRadians(90), 0, 0]}>
        <cylinderBufferGeometry args={[1.2, 1.2, 0.05, 64]} attach="geometry" />
        <meshStandardMaterial
          attach="material"
          opacity={0.25}
          transparent={true}
        />
      </mesh>
    </mesh>
  );
};
