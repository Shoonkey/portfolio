import { ImageProps } from "@chakra-ui/react";
import { createElement } from "react";

import techs from "@/shared/techs";

interface TechLogoProps {
  tagName: string;
}

function TechLogo({ tagName, ...props }: TechLogoProps & ImageProps) {
  const tech = techs.find((t) => t.tag === tagName);
  return tech ? createElement(tech.component, props) : null;
}

export default TechLogo;
