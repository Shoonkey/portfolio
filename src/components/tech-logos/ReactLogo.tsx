import { Image } from "@chakra-ui/react";

import { TechLogoInstanceProps } from "@/shared/techs";

function ReactLogo({ sizeBehavior, ...props }: TechLogoInstanceProps) {
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
