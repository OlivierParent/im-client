import React, { useEffect, useState } from "react";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import Group from "./Group";

import logoNl from "./artevelde__logo--nl.svg";
import svgLogo from "./SVG_logo.svg";

export default (props) => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const svgResource = new Promise((resolve) =>
      new SVGLoader().load(
        // "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg",
        svgLogo,
        // logoNl,
        (data) => resolve(data.paths)
      )
    );
    svgResource.then(setPaths);
  }, []);

  return <Group paths={paths} />;
};
