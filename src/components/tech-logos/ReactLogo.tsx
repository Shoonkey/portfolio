import { Image, ImageProps } from "@chakra-ui/react";
import { TechLogoProps } from "../TechLogo";

function ReactLogo({ sizeBehavior, ...props }: TechLogoProps & ImageProps) {
  return (
    <Image
      src="/react-logo.svg"
      alt="React logo: an atom with blue nucleus and blue electron orbits"
      w={sizeBehavior === "responsive" ? { base: "24px", md: "48px" } : "48px"}
      {...props}
    />
  );
}

export default ReactLogo;
