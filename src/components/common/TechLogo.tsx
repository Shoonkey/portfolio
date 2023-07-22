import { Image, ImageProps } from "@chakra-ui/react";

import techs from "@/shared/techs";

interface TechLogoProps {
  tagName: string;
}

function TechLogo({ tagName, ...props }: TechLogoProps & ImageProps) {
  const tech = techs.find((t) => t.tag === tagName);

  if (!tech) return null;

  return <Image src={tech.imgSrc} alt={tech.imgAlt} {...props} />;
}

export default TechLogo;
