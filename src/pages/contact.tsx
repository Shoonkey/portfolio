import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  EnvelopeOpen,
  EnvelopeSimple,
  GithubLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { ReactNode } from "react";

import Page from "@/components/Page";
import Surface from "@/components/Surface";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: ReactNode | string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <Surface
      py={4}
      px={8}
      display="flex"
      flexDir="column"
      alignItems="center"
      borderRadius="16px"
      maxW="400px"
      mx="auto"
    >
      <Box color="primary.500">{icon}</Box>
      <Heading as="h2" fontSize="md" color="text.500">
        {title}
      </Heading>
      <Box textAlign="center" fontSize="sm" mt={2} lineHeight="1.5rem">
        {description}
      </Box>
    </Surface>
  );
}

function Mobile() {
  return (
    <Flex flexDir="column" gap={4} color="text.800">
      <Heading as="h1" fontSize="md" textAlign="center" maxW="200px" mx="auto">
        Throughout the interwebs, <br />
        you may find me through
      </Heading>
      <InfoCard
        icon={<EnvelopeOpen size={64} />}
        title="shoonkey.dev@gmail.com"
        description={
          <>
            <Text>
              <Text as="span" textDecoration="underline" color="primary.500">
                <Link href="mailto:shoonkey.dev@gmail.com">
                  Drop me an email.
                </Link>
              </Text>{" "}
              No need to be shy!
            </Text>
            <Text>
              It could go like <br />
              {'"'}
              <Text as="span" color="primary.500">
                Hey there! Your portfolio design looks cool, good job!
              </Text>
              {'"'}
            </Text>
            <Text>
              {"*"}hits send{"*"}
            </Text>
            <Text>
              I'd be like <br />
              {'"'}
              <Text as="span" color="primary.500">
                Oh, thanks. I'm glad you think so. I'm pretty proud of it
                myself!
              </Text>
              {'"'}
            </Text>
          </>
        }
      />
      <InfoCard
        icon={<GithubLogo size={64} />}
        title="Shoonkey"
        description={
          <>
            <Text>
              You can find a lot of my code on{" "}
              <Text as="span" textDecoration="underline" color="primary.500">
                <Link href="https://github.com/Shoonkey" target="_blank">
                  Github
                </Link>
              </Text>
              !
            </Text>
            <Text>
              Open-source is awesome and I want to contribute to it more! Where
              does one get the confidence for that though...?
            </Text>
            <Text>
              I swear I'mma try. <em>DATTEBAYO!</em>
            </Text>
          </>
        }
      />
      <InfoCard
        icon={<TwitterLogo size={64} />}
        title="shooonkey"
        description={
          <>
            <Text>
              Here's my{" "}
              <Text as="span" textDecoration="underline" color="primary.500">
                <Link href="https://twitter.com/shooonkey" target="_blank">
                  Twitter
                </Link>
              </Text>
              !
            </Text>
            <Text>
              There's an extra O in there. My normal nickname was already taken,
              unfortunately.
            </Text>
            <Text>
              Here you'll find off-topic me being in love with cartoons, anime
              and videogames.
            </Text>
          </>
        }
      />
    </Flex>
  );
}

function ContactPage() {
  const isMobile = useIsMobile();

  return <Page title="Contact">{isMobile ? <Mobile /> : null}</Page>;
}

export default ContactPage;
