import { Image, ImageProps, useColorMode } from "@chakra-ui/react";
import { TechLogoProps } from "../TechLogo";

function NextLogo({ sizeBehavior, ...props }: TechLogoProps & ImageProps) {
  const { colorMode } = useColorMode();

  return (
    <Image
      src="/next-logo.svg"
      alt="NextJS logo: NextJS written aligned in height with N and X sticking out in th edges"
      w={sizeBehavior === "responsive" ? { base: "32px", md: "64px" } : "64px"}
      filter={`invert(${colorMode === "dark" ? 0 : 1})`}
      {...props}
    />
  );
}

export default NextLogo;
