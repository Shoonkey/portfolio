import {
  Center,
  Flex,
  Grid,
  IconButton,
  Select,
  Text,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { SunHorizon, MoonStars } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import useGlobalSettings from "@/hooks/useGlobalSettings";
import useThemeColor from "@/hooks/useThemeColor";
import CustomTooltip from "./CustomTooltip";
import OpenSidebarButton from "./OpenSidebarButton";
import ViewingProjectText from "./ViewingProjectText";
import LanguageSelect from "./LanguageSelect";

function Header() {
  const { t, i18n } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallViewport] = useMediaQuery("(max-width: 420px)");

  const highlightColor = useThemeColor("primary.500");
  const textColor = useColorModeValue("gray.800", "gray.400");
  const { sidebarOpen } = useGlobalSettings();

  return (
    <Flex flexDir="column" gap={4} mb={4}>
      <Flex justifyContent="space-between" alignItems="center" flexShrink={0}>
        <Grid columnGap={2} justifyContent="center" alignItems="center">
          <Center gridArea="1 / 1">
            <Text
              fontWeight="bold"
              fontSize="0.8rem"
              color={textColor}
              letterSpacing="0.8px"
              textTransform="uppercase"
            >
              {t("sidebar.theme")}
            </Text>
          </Center>
          <Center>
            <CustomTooltip
              label={t("sidebar.changeThemeButtonLabel", {
                theme: t(`themeName.${colorMode}`),
              })}
              placement="left"
              wrapsClickable
            >
              <IconButton
                gridArea="2 / 1"
                mx="auto"
                aria-label={t("sidebar.changeThemeButtonLabel", {
                  theme: t(`themeName.${colorMode}`),
                })}
                variant="unstyled"
                color={highlightColor}
                icon={
                  colorMode === "dark" ? (
                    <SunHorizon size={36} weight="fill" />
                  ) : (
                    <MoonStars size={36} weight="fill" />
                  )
                }
                onClick={toggleColorMode}
              />
            </CustomTooltip>
          </Center>
          <Center gridArea="1 / 2">
            <Text
              fontWeight="bold"
              fontSize="0.8rem"
              color={textColor}
              letterSpacing="0.8px"
              textTransform="uppercase"
            >
              {t("sidebar.language")}
            </Text>
          </Center>
          <Center gridArea="2 / 2">
            <LanguageSelect
              language={i18n.language}
              onChangeLanguage={(lang) => i18n.changeLanguage(lang)}
              mx="auto"
              gridArea="2 / 2"
            />
          </Center>
        </Grid>
        {!isSmallViewport && <ViewingProjectText />}
        {!sidebarOpen && <OpenSidebarButton />}
      </Flex>
      {isSmallViewport && <ViewingProjectText />}
    </Flex>
  );
}

export default Header;
