import { Box, Flex, Spinner, Image } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

import Surface from "../common/Surface";
import IntroContent from "../common/IntroContent";

function MobileHomepage() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);

  const updateImageHeight = () => {
    if (!imgRef.current) return;
    setImageHeight(imgRef.current.clientHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateImageHeight);
    return () => window.removeEventListener("resize", updateImageHeight);
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;

    const image = imgRef.current;
    image.addEventListener("load", updateImageHeight);
    return () => image.removeEventListener("load", updateImageHeight);
  }, [imgRef]);

  return (
    <Box pb={imageHeight / 2 + "px"}>
      <Surface
        p={6}
        mt={12}
        transform={`translateY(${imageHeight / 2}px)`}
        transition="transform .4s"
        borderRadius="32px"
        position="relative"
      >
        {!imgRef.current && (
          <Flex justifyContent="center" mt={4}>
            <Spinner />
          </Flex>
        )}
        <Image
          visibility={imgRef.current ? "visible" : "hidden"}
          ref={imgRef}
          position="absolute"
          transition="transform .4s"
          transform="translate(-50%, -50%)"
          left="50%"
          w="min(80%, 400px)"
          borderRadius="48px"
          src="/pfp.jpg"
          alt="Me using a hoodie, with messy hair and looking to the right"
        />
        <IntroContent mt={imageHeight / 2 + "px"} />
      </Surface>
    </Box>
  );
}

export default MobileHomepage;
