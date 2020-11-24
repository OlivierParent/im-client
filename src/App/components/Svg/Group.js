import * as THREE from "three";
import Shape from "./Shape";

export default ({ paths }) => {
  console.log("Scene");
  console.log("Paths", paths);
  return (
    <group
      scale={[0.05, 0.05, 0.05]}
      rotation={[180, 0, 0].map((degrees) => THREE.MathUtils.degToRad(degrees))}
    >
      {paths.map((path, index) => {
        console.log("Path", index, path, path.color, path.toShapes());
        const shapes = path.toShapes();
        const pathIndex = index;
        return shapes.map((shape, index) => {
          return (
            <Shape
              color={path.color}
              index={index + pathIndex}
              key={index}
              shape={shape}
            />
          );
        });
      })}
    </group>
  );
};
