import React, { useEffect, useState } from "react";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import Group from "./Group";

export default (props) => {
  const [paths, setPaths] = useState([]);
  const position = props.position;
  const scale = [props.scale, props.scale, props.scale];

  useEffect(() => {
    const svgResource = new Promise((resolve) =>
      new SVGLoader().load(props.source, (data) => resolve(data.paths))
    );
    svgResource.then(setPaths);
  }, []);

  return <Group paths={paths} position={position} scale={scale} />;
};
