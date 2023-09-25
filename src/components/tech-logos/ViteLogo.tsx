import { Image, ImageProps } from "@chakra-ui/react";
import { TechLogoProps } from "../TechLogo";

function ViteLogo({ sizeBehavior, ...props }: TechLogoProps & ImageProps) {
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
