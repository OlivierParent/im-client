// import React, { useRef, useState } from "react";
// import { useFrame } from "react-three-fiber";
// import { a, useSpring } from "react-spring";
// import { createPortal } from "react-dom";

// export default (props) => {
//   const colors = ["#f00", "#ff0", "#0f0", "#0ff", "#00f", "#f0f"];
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   const cubeRef = useRef();

//   // let delta = 0.01;
//   // useFrame(() => {
//   //   if (cubeRef.current.opacity <= 0 || 1 <= cubeRef.current.opacity) {
//   //     delta = -delta;
//   //   }
//   //   cubeRef.current.opacity += delta;
//   // });
//   const [toggle, setToggle] = useState(true);

//   const opacity = useSpring({ opacity: toggle ? 1 : 0.5 });

//   return (
//     <a.mesh {...props}>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial
//         color={color}
//         metalness={0.1}
//         opacity={opacity}
//         ref={cubeRef}
//         roughness={0.6}
//         transparent={true}
//       />
//     </a.mesh>
//   );
// };
