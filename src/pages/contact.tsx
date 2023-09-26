import {
  Code,
  EnvelopeOpen,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Link, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import { useMemo } from "react";

import Page, { PageMetadata } from "@/components/Page";
import ContactInfoCard from "@/components/ContactInfoCard";
import useThemeColor from "@/hooks/useThemeColor";

function ContactPage() {
  const { t } = useTranslation();
  const standardHighlightColor = useThemeColor("primary.500");
  const alternateHighlightColor = useThemeColor("primary.300");
  const standardColor = useThemeColor("text.800");

  const metadata = useMemo<PageMetadata>(
    () => ({
      title: t("pages.contact.meta.title"),
      description: t("pages.contact.meta.description"),
      imgSrc: "",
      imgAlt: ""
    }),
    [t]
  );

  return (
    <Page metadata={metadata}>
      <Flex flexDir="column" color={standardColor} flexGrow={1}>
        <Heading
          as="h1"
          size="md"
          textAlign="center"
          maxW={{ base: "200px", md: "none" }}
          mx="auto"
          mb={8}
        >
          <Trans t={t} i18nKey="pages.contact.title" />
        </Heading>
        <Grid
          flexGrow={1}
          justifyItems="center"
          gap={4}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          maxW="800px"
          mx="auto"
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
                    color={standardHighlightColor}
                  >
                    <Link href="mailto:shoonkey.dev@gmail.com">
                      {t("pages.contact.cards.email.dropEmail")}
                    </Link>
                  </Text>{" "}
                  {t("pages.contact.cards.email.noNeedToBeShy")}
                </Text>
                <Text>
                  <Trans t={t} i18nKey="pages.contact.cards.email.couldGoLike">
                    <Text as="span" color={standardHighlightColor} />
                  </Trans>
                </Text>
                <Text>{t("pages.contact.cards.email.hitsSend")}</Text>
                <Text>
                  <Trans t={t} i18nKey="pages.contact.cards.email.idBeLike">
                    <Text as="span" color={standardHighlightColor} />
                  </Trans>
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
                  {t("pages.contact.cards.github.findMe")}{" "}
                  <Text
                    as="span"
                    textDecoration="underline"
                    color={standardHighlightColor}
                  >
                    <Link
                      href="https://github.com/Shoonkey"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </Link>
                  </Text>
                  !
                </Text>
                <Trans i18nKey="pages.contact.cards.github.text">
                  <Text />
                  <Text />
                </Trans>
                <em>DATTEBAYO!</em>
              </>
            }
          />
          <ContactInfoCard
            icon={<LinkedinLogo size={64} />}
            title="shoonkey"
            description={
              <>
                <Text>
                  {t("pages.contact.cards.linkedIn.heresMy")}{" "}
                  <Text
                    as="span"
                    textDecoration="underline"
                    color={standardHighlightColor}
                  >
                    <Link
                      href="https://twitter.com/shooonkey"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Link>
                  </Text>
                  !
                </Text>
                <Text>{t("pages.contact.cards.linkedIn.text")}</Text>
              </>
            }
          />
          <ContactInfoCard
            icon={<Code size={64} />}
            title={t("pages.contact.cards.codingPlatforms.title")}
            description={
              <Flex flexDir="column" gap={4}>
                <Text>{t("pages.contact.cards.codingPlatforms.text")}</Text>
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
                      color={alternateHighlightColor}
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
