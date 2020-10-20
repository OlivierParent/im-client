import React, { useRef, useState } from "react";
import { animated, useSpring } from "react-spring/three";

export default (props) => {
  const colors = ["#f00", "#ff0", "#0f0", "#0ff", "#00f", "#f0f"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const cubeRef = useRef();
  const [toggle, setToggle] = useState(true);
  const { opacity } = useSpring({
    opacity: toggle ? 0.9 : 0.5,
  });
  const { position } = useSpring({
    position: toggle ? [0, 0, 0] : getPosition(),
  });

  function getPosition() {
    return [4, 4, 0].map((value) => (Math.random() * 2 - 1) * value);
  }

  return (
    <animated.mesh
      {...props}
      onClick={() => setToggle(!toggle)}
      position={position}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <animated.meshMatcapMaterial
        color={color}
        opacity={opacity}
        ref={cubeRef}
        transparent={true}
      />
    </animated.mesh>
  );
};
