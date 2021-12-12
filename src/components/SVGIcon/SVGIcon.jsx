import React from "react";
import { IconMap } from "./library";

const SVGIcon = ({ name, width = "16", height = "16", ...rest }) => {
  const MatchIcon = IconMap[name] || null;
  if (!MatchIcon) return null;
  return <MatchIcon width={width} height={height} {...rest} />;
};

export { SVGIcon };
