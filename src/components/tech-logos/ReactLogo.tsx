import { Image, ImageProps } from "@chakra-ui/react";

function ReactLogo(props: ImageProps) {
  return (
    <Image
      src="/react-logo.svg"
      alt="React logo: an atom with blue nucleus and blue electron orbits"
      w="48px"
      {...props}
    />
  );
}

export default ReactLogo;
