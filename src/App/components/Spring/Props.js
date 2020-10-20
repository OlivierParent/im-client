import React, { useState } from "react";
import * as THREE from "three";
import { useMatcapTexture } from "@react-three/drei";
import { Spring } from "react-spring/renderprops";
import { config } from "react-spring/three";

export default (props) => {
  const [toggle, setToggle] = useState(true);
  const [matcap] = useMatcapTexture(
    "80CA23_B7EE37_D5FA4C_A3E434", // Index or ID string, see: https://github.com/emmelleppi/matcaps/
    1024 // Texture size (64, 128, 256, 512, 1024)
  );
  return (
    <group {...props}>
      <mesh onClick={() => setToggle(!toggle)}>
        <Spring
          config={config.wobbly}
          delay={100}
          from={{ thetaLength: toggle ? 10 : 350 }}
          to={{ thetaLength: toggle ? 350 : 10 }}
        >
          {(geometryProps) => (
            <ringBufferGeometry
              args={[
                1.1, // innerRadius
                1.9, // outerRadius
                72, // thetaSegments
                8, // phiSegments
                THREE.MathUtils.degToRad(90), // thetaStart
                THREE.MathUtils.degToRad(geometryProps.thetaLength), // thetaLength
              ]}
            />
          )}
        </Spring>
        <meshMatcapMaterial
          matcap={matcap}
          opacity={1}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh>
      <mesh>
        <torusBufferGeometry
          args={[
            1.5, // radius
            0.5, // tube
            36, // radialSegments
            72, // tubularSegments
            THREE.MathUtils.degToRad(360), // arc
          ]}
        />
        <meshMatcapMaterial matcap={matcap} opacity={0.25} transparent={true} />
      </mesh>
    </group>
  );
};
