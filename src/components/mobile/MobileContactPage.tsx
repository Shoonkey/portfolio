import { Flex, Heading, Text } from "@chakra-ui/react";
import { EnvelopeOpen, GithubLogo, TwitterLogo } from "@phosphor-icons/react";
import Link from "next/link";

import ContactInfoCard from "../common/ContactInfoCard";

function MobileContactPage() {
  return (
    <Flex flexDir="column" gap={4} color="text.800">
      <Heading as="h1" fontSize="md" textAlign="center" maxW="200px" mx="auto">
        Throughout the interwebs, <br />
        you may find me through
      </Heading>
      <ContactInfoCard
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
      <ContactInfoCard
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
      <ContactInfoCard
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

export default MobileContactPage;
