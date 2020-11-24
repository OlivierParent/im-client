import React, { useEffect, useState } from "react";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as THREE from "three";
import { Shape } from "./Shape";

import logoNl from "./artevelde__logo--nl.svg";

// function Shape({ shape, position, color, opacity, index }) {
//   console.log("Shape", shape, position, color, opacity, index);
//   return (
//     <mesh position={[0, 0, -index * 50]}>
//       <meshBasicMaterial color={color} side={THREE.DoubleSide} />
//       <shapeBufferGeometry args={[shape]} />
//     </mesh>
//   );
// }

function Scene() {
  console.log("Scene");

  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const svgResource = new Promise((resolve) =>
      new SVGLoader().load(
        "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg",
        // logoNl,
        (data) => resolve(data.paths)
      )
    );

    // dataHandler
    // (group) => {
    //   group.paths.map((path, index) => {
    //     const color = path.color;
    //     const shapes = path.toShapes(true).map((shape) => {
    //       return {shape, color, index };
    //     });

    //     return {shape};
    //   })
    // }
    // )

    //     (shapes) => {
    //       console.log("shapes", shapes);
    //       shapes.paths.forEach((shape) => {
    //         console.log("shape", shape.toShapes());
    //       });

    //       // return resolve(shapes.paths);
    //       return resolve(
    //         flatten(
    //           shapes.map((group, index) => {
    //             console.log("group", group);
    //             return group.toShapes(true).map(
    //               console.log("shape", shape);
    //               return { shape, color: group.color, index };
    //             });
    //           })
    //         )
    //       );
    //     }
    //   )
    // );
    svgResource.then(setPaths);
  }, []);
  console.log("useEffects", paths);
  return (
    <group position={[1600, -700, 0]}>
      {paths.map((path, index) => {
        console.log("Path:", path, path.color, path.toShapes());
        return <Shape key="index" color={path.color} />;

        //return <Shape key={item.shape.uuid} {...item} />;
      })}
      }
    </group>
  );
}

export default (props) => {
  return <Scene />;
};
