import { Image } from "@chakra-ui/react";

import { TechLogoInstanceProps } from "@/shared/techs";

function NodeLogo({ sizeBehavior, ...props }: TechLogoInstanceProps) {
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
