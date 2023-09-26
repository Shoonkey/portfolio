import { Image } from "@chakra-ui/react";

import { TechLogoInstanceProps } from "@/shared/techs";

function ViteLogo({ sizeBehavior, ...props }: TechLogoInstanceProps) {
  return (
    <Image
      src="/vite-logo.svg"
      alt="Vite logo: a triangle-like polygon in blue and purple with a yellow lightning bolt in the middle"
      w={sizeBehavior === "responsive" ? { base: "20px", md: "32px" } : "32px"}
      {...props}
    />
  );
}

export default ViteLogo;
