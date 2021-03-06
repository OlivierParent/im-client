import React from "react";
import { SvgLoader } from "App/components";

const svgLogoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg";
import logoNl from "./arteveldehogeschool_logo.svg";
import svgLogo from "./SVG_logo.svg";

export default (props) => {
  const scale = 0.0075;

  return (
    <>
      <SvgLoader position={[0, 0, 0]} scale={scale} source={svgLogoUrl} />;
      <SvgLoader position={[0, 0, -1]} scale={scale} source={logoNl} />;
      <SvgLoader position={[0, 0, -2]} scale={scale} source={svgLogo} />;
    </>
  );
};
