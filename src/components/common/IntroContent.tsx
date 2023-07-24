import { Flex, Heading, Button, Text, FlexProps } from "@chakra-ui/react";
import Link from "next/link";

function IntroContent(props: FlexProps) {
  return (
    <Flex flexDir="column" {...props}>
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
          with around 3 years of experience with Node, React, Vue and Express.
        </Heading>
        <Button
          as={Link}
          href="/projects"
          alignSelf="center"
          bg="primary.500"
          _hover={{ bg: "primary.300" }}
          color="black"
        >
          Show me the projects
        </Button>
      </Flex>
      <Flex
        textAlign="justify"
        flexDir="column"
        textIndent="32px"
        color="text.800"
        lineHeight="28px"
      >
        <Text>
          I started learning programming around 2013, learning Javascript with
          ProcessingJS (a graphics library), and basic C for competitive
          programming. Since then I’ve moved mainly to C++ in competitive
          programming, and Typescript with Node and React for web development.
        </Text>
        <Text>
          I am passionate about development because I like learning and creating
          new things from the ground up. Translating ideas to a crazy fast
          logic-powered machine and seeing it understand me? WHAT. SIGN ME UP!!
        </Text>
      </Flex>
    </Flex>
  );
}

export default IntroContent;
