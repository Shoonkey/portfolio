import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Page from "@/components/Page";
import Surface from "@/components/Surface";
import useIsMobile from "@/hooks/useIsMobile";

function Mobile() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    function updateImageHeightOnResize() {
      if (!imgRef.current) return;

      setImageHeight(imgRef.current.height);
    }

    window.addEventListener("resize", updateImageHeightOnResize);
    updateImageHeightOnResize();

    return () => {
      window.removeEventListener("resize", updateImageHeightOnResize);
    };
  }, []);

  return (
    <Box>
      <Surface
        p={6}
        mt={imageHeight / 2 + "px"}
        borderRadius="32px"
        position="relative"
      >
        <Image
          ref={imgRef}
          position="absolute"
          top={-imageHeight / 2 + "px"}
          left="50%"
          transform="translateX(-50%)"
          w="90%"
          maxW="400px"
          borderRadius="48px"
          src="/pfp.jpg"
          alt="Me using a hoodie, with messy hair and looking to the right"
        />
        <Flex flexDir="column" mt={imageHeight / 2 + "px"}>
          <Flex textAlign="center" flexDir="column" my={6}>
            <Heading as="h1" fontSize={24}>
              <Text as="span" aria-hidden="true">
                👋
              </Text>{" "}
              Hey there!
            </Heading>
            <Heading as="h1" fontSize={32}>
              I'm{" "}
              <Text as="span" color="primary.500">
                Richard
              </Text>
              .
            </Heading>
          </Flex>
          <Flex textAlign="center" flexDir="column" my={6} gap={4}>
            <Heading as="h1" fontSize={24} lineHeight="36px">
              I'm a{" "}
              <Text as="span" color="primary.500">
                software developer
              </Text>{" "}
              with around 3 years of experience with Node, React, Vue and
              Express.
            </Heading>
            <Link href="/projects">
              <Button
                alignSelf="center"
                bg="primary.500"
                _hover={{ bg: "primary.300" }}
                color="black"
              >
                Show me the projects
              </Button>
            </Link>
          </Flex>
          <Flex
            textAlign="justify"
            flexDir="column"
            textIndent="32px"
            color="text.800"
            lineHeight="28px"
          >
            <Text>
              I started learning programming around 2013, learning Javascript
              with ProcessingJS (a graphics library), and basic C for
              competitive programming. Since then I’ve moved mainly to C++ in
              competitive programming, and Typescript with Node and React for
              web development.
            </Text>
            <Text>
              I am passionate about development because I like learning and
              creating new things from the ground up. Translating ideas to a
              crazy fast logic-powered machine and seeing it understand me?
              WHAT. SIGN ME UP!!
            </Text>
          </Flex>
        </Flex>
      </Surface>
    </Box>
  );
}

function Homepage() {
  const isMobile = useIsMobile();

  return <Page title="Test">{isMobile ? <Mobile /> : null}</Page>;
}

export default Homepage;
