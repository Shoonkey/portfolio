import {
  Box,
  Flex,
  Image,
  Button,
  Heading,
  Text,
  Select,
} from "@chakra-ui/react";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";
import { useMemo, useState } from "react";

import Surface from "@/components/Surface";
import Page, { PageMetadata } from "@/components/Page";
import useThemeColor from "@/hooks/useThemeColor";
import LanguageSelect from "@/components/LanguageSelect";
import { DownloadSimple } from "@phosphor-icons/react";

function Homepage() {
  const { t } = useTranslation();
  const highlightColor = useThemeColor("primary.500");
  const hoveredColor = useThemeColor("primary.300");
  const borderColor = useThemeColor("border.500");

  const imgHeight = "min(40vw, 300px)";
  const offset = `calc(${imgHeight} / 2)`;

  const [cvLanguage, setCvLanguage] = useState("en-US");

  const metadata = useMemo<PageMetadata>(
    () => ({
      title: t("pages.home.meta.title"),
      description: t("pages.home.meta.description"),
      imgSrc: "",
      imgAlt: "",
    }),
    [t]
  );

  const downloadCV = (lang: string) => {
    const anchor = document.createElement("a");
    anchor.download = `Shoonkey_CV_${lang}.pdf`;
    anchor.href = `/cv_${lang}.pdf`;
    anchor.click();
  };

  return (
    <Page metadata={metadata}>
      <Box pb={offset}>
        <Surface
          p={6}
          maxW="800px"
          mx="auto"
          transform={`translateY(${offset})`}
          transition="transform .4s"
          borderRadius="32px"
          position="relative"
          borderStyle="solid"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <Image
            position="absolute"
            transition="transform .4s"
            transform="translate(-50%, -50%)"
            left="50%"
            h={imgHeight}
            borderRadius="48px"
            src="/pfp.jpg"
            alt="Me using a hoodie, with messy hair and looking to the right"
          />
          <Flex flexDir="column" mt={offset}>
            <Flex textAlign="center" flexDir="column" my={6}>
              <Heading as="h1" fontSize={24}>
                <Text as="span" aria-hidden="true">
                  👋
                </Text>{" "}
                {t("pages.home.heyThere")}
              </Heading>
              <Heading as="h1" fontSize={32}>
                <Trans i18nKey="pages.home.whoAmI" values={{ name: "Richard" }}>
                  <Text as="span" color={highlightColor} />
                </Trans>
              </Heading>
            </Flex>
            <Flex textAlign="center" flexDir="column" mb={6} gap={4}>
              <Heading as="h1" fontSize={24} lineHeight="36px">
                <Trans i18nKey="pages.home.briefIntroduction">
                  <Text as="span" color={highlightColor} />
                </Trans>
              </Heading>
              <Button
                as={Link}
                href="/projects"
                alignSelf="center"
                bg={highlightColor}
                _hover={{ bg: hoveredColor }}
                color="black"
              >
                {t("pages.home.ctaButton")}
              </Button>
              <Flex justifyContent="center" alignItems="center" gap={2}>
                <Text fontWeight="bold">{t("pages.home.curriculum.label")}</Text>
                <LanguageSelect
                  aria-label={t("pages.home.curriculum.selectLanguage")}
                  language={cvLanguage}
                  onChangeLanguage={(lang) => setCvLanguage(lang)}
                />
                <Button
                  rightIcon={<DownloadSimple size={32} />}
                  bg={highlightColor}
                  _hover={{ bg: hoveredColor }}
                  color="black"
                  onClick={() => downloadCV(cvLanguage)}
                >
                  {t("pages.home.curriculum.download")}
                </Button>
              </Flex>
            </Flex>
            <Flex
              textAlign="justify"
              flexDir="column"
              textIndent="32px"
              color="text.800"
              lineHeight="28px"
            >
              <Trans i18nKey="pages.home.introduction">
                <Text />
                <Text />
              </Trans>
            </Flex>
          </Flex>
        </Surface>
      </Box>
    </Page>
  );
}

export default Homepage;
