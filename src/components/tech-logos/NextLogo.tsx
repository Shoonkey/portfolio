import { Image, useColorMode } from "@chakra-ui/react";

import { TechLogoInstanceProps } from "@/shared/techs";

function NextLogo({ sizeBehavior, ...props }: TechLogoInstanceProps) {
  const { colorMode } = useColorMode();

  return (
    <Image
      src="/next-logo.svg"
      alt="NextJS logo: NextJS written aligned in height with N and X sticking out in the edges"
      w={sizeBehavior === "responsive" ? { base: "32px", md: "64px" } : "64px"}
      filter={`invert(${colorMode === "dark" ? 0 : 1})`}
      {...props}
    />
  );
}

export default NextLogo;
