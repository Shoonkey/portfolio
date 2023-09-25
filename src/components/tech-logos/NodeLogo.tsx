import { Image, ImageProps } from "@chakra-ui/react";
import { TechLogoProps } from "../TechLogo";

function NodeLogo({ sizeBehavior, ...props }: TechLogoProps & ImageProps) {
  return (
    <Image
      src="/node-logo.svg"
      alt="NodeJS logo: Node written in an angular font with a green hexagon in the place of the O and JS in green in a hexagon below"
      w={sizeBehavior === "responsive" ? { base: "32px", md: "48px" } : "48px"}
      {...props}
    />
  );
}

export default NodeLogo;
