import {
  Box,
  Flex,
  Spinner,
  Heading,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

import Surface from "../common/Surface";

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

export default MobileHomepage;