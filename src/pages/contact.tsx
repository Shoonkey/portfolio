import {
  Code,
  EnvelopeOpen,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Link, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import Page from "@/components/Page";
import ContactInfoCard from "@/components/ContactInfoCard";

function ContactPage() {
  return (
    <Page title="Contact">
      <Flex flexDir="column" color="text.800">
        <Heading
          as="h1"
          fontSize="md"
          textAlign="center"
          maxW="200px"
          mx="auto"
          mb={8}
        >
          On the interwebs <br />
          you may find me through
        </Heading>
        <Grid
          justifyItems="center"
          gap={4}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        >
          <ContactInfoCard
            icon={<EnvelopeOpen size={64} />}
            title="shoonkey.dev@gmail.com"
            description={
              <>
                <Text>
                  <Text
                    as="span"
                    textDecoration="underline"
                    color="primary.500"
                  >
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
                  <Text
                    as="span"
                    textDecoration="underline"
                    color="primary.500"
                  >
                    <Link href="https://github.com/Shoonkey" target="_blank" rel="noopener noreferrer">
                      Github
                    </Link>
                  </Text>
                  !
                </Text>
                <Text>
                  Open-source is awesome and I want to contribute to it more!
                  Where does one get the confidence for that though...?
                </Text>
                <Text>
                  I swear I'mma try. <em>DATTEBAYO!</em>
                </Text>
              </>
            }
          />
          <ContactInfoCard
            icon={<LinkedinLogo size={64} />}
            title="shoonkey"
            description={
              <>
                <Text>
                  Here's my{" "}
                  <Text
                    as="span"
                    textDecoration="underline"
                    color="primary.500"
                  >
                    <Link href="https://twitter.com/shooonkey" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </Link>
                  </Text>
                  !
                </Text>
                <Text>
                  I post there about projects in the making, coding problem
                  suggestions and other work stuff!
                </Text>
              </>
            }
          />
          <ContactInfoCard
            icon={<Code size={64} />}
            title="Coding platforms"
            description={
              <Flex flexDir="column" gap={4}>
                <Text>
                  I like practicing programming around the internet! I've
                  started my journey in Beecrowd (when it was still URI Online
                  Judge!) and usually am on Beecrowd, LeetCode or HackerRank
                  these days!
                </Text>
                <Flex flexWrap="wrap" gap={4} justifyContent="center">
                  {[
                    {
                      name: "Beecrowd",
                      href: "https://www.beecrowd.com.br/judge/en/profile/55099",
                    },
                    {
                      name: "LeetCode",
                      href: "https://leetcode.com/Shoonkey/",
                    },
                    {
                      name: "HackerRank",
                      href: "https://www.hackerrank.com/Shoonkey",
                    },
                    {
                      name: "HackerEarth",
                      href: "https://www.hackerearth.com/@Shoonkey",
                    },
                    {
                      name: "CodinGame",
                      href: "https://www.codingame.com/profile/1c7ebfd0d5454fdfd338d7eb0945b8be6640131",
                    },
                  ].map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      textDecoration="underline"
                      color="primary.300"
                    >
                      {platform.name}
                    </Link>
                  ))}
                </Flex>
              </Flex>
            }
          />
        </Grid>
      </Flex>
    </Page>
  );
}

export default ContactPage;
