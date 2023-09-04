import { Image, ImageProps, useColorMode } from "@chakra-ui/react";

function NextLogo(props: ImageProps) {
  const { colorMode } = useColorMode();

  return (
    <Image
      src="/next-logo.svg"
      alt="NextJS logo: NextJS written aligned in height with N and X sticking out in th edges"
      w="64px"
      filter={`invert(${colorMode === "dark" ? 0 : 1})`}
      {...props}
    />
  );
}

export default NextLogo;
