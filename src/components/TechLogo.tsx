import { ImageProps } from "@chakra-ui/react";
import { createElement } from "react";

import techs from "@/shared/techs";

export interface TechLogoProps {
  tagName: string;
  sizeBehavior: "responsive" | "fixed";
}

function TechLogo({ tagName, ...props }: TechLogoProps & ImageProps) {
  const tech = techs.find((t) => t.tag === tagName);
  return tech ? createElement(tech.component, props) : null;
}

export default TechLogo;
