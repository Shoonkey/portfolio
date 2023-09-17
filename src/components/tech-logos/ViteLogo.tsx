import { Image, ImageProps } from "@chakra-ui/react";

function ViteLogo(props: ImageProps) {
  return (
    <Image
      src="/vite-logo.svg"
      alt="Vite logo: a triangle-like polygon in blue and purple with a yellow lightning bolt in the middle"
      w="32px"
      {...props}
    />
  );
}

export default ViteLogo;
