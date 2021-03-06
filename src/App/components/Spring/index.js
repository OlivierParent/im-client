import React, { useState } from "react";
import * as THREE from "three";
import { useMatcapTexture } from "@react-three/drei";
import { animated, useSpring } from "react-spring/three";
import * as easings from "d3-ease";

export default (props) => {
  const [toggle, setToggle] = useState(true);
  const [matcap] = useMatcapTexture(
    "80CA23_B7EE37_D5FA4C_A3E434", // Index or ID string, see: https://github.com/emmelleppi/matcaps/
    1024 // Texture size (64, 128, 256, 512, 1024)
  );
  const { opacity, position } = useSpring({
    config: {
      duration: 200,
      easing: easings.easeCubic,
    },
    delay: 100,
    from: {
      opacity: toggle ? 0.5 : 1,
      position: toggle ? [0, 0, 0] : [0, 0, -2],
    },
    to: [
      { opacity: toggle ? 1 : 0.5 },
      { opacity: toggle ? 0.5 : 1 },
      { opacity: toggle ? 1 : 0.5, position: toggle ? [0, 0, -2] : [0, 0, 0] },
    ],
  });

  return (
    <group {...props}>
      <mesh onClick={() => setToggle(!toggle)}>
        <ringBufferGeometry
          args={[
            1.1, // innerRadius
            1.9, // outerRadius
            72, // thetaSegments
            8, // phiSegments
            THREE.MathUtils.degToRad(90), // thetaStart
            THREE.MathUtils.degToRad(350), // thetaLength
          ]}
        />
        <animated.meshMatcapMaterial
          // color={materialProps.color}
          matcap={matcap}
          opacity={opacity}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh>
      <animated.mesh position={position}>
        <torusBufferGeometry
          args={[
            1.5, // radius
            0.5, // tube
            72, // radialSegments
            32, // tubularSegments
            THREE.MathUtils.degToRad(360), // arc
          ]}
        />
        <meshMatcapMaterial matcap={matcap} opacity={0.25} transparent={true} />
      </animated.mesh>
    </group>
  );
};
