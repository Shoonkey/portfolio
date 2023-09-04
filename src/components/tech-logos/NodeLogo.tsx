import { Image, ImageProps } from "@chakra-ui/react";

function NodeLogo(props: ImageProps) {
  return (
    <Image
      src="/node-logo.svg"
      alt="NodeJS logo: Node written in an angular font with a green hexagon in the place of the O and JS in green in a hexagon below"
      w="64px"
      {...props}
    />
  );
}

export default NodeLogo;
