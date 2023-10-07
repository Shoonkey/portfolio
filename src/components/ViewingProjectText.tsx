import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import useGlobalSettings from "@/hooks/useGlobalSettings";
import useThemeColor from "@/hooks/useThemeColor";

function ViewingProjectText() {
  const { t } = useTranslation();

  const highlightColor = useThemeColor("primary.500");
  const { viewingProjectId } = useGlobalSettings();

  if (!viewingProjectId)
    return null;

  return (
    <Flex flexDir="column" textAlign="center">
      <Text>
        {t("pages.singleProject.viewing")}{" "}
        <strong>{t(`projects.${viewingProjectId}.name`)}</strong>
      </Text>
      <Link href="/projects">
        <Text textDecoration="underline" color={highlightColor}>
          {t("pages.singleProject.goBackToProjects")}
        </Text>
      </Link>
    </Flex>
  );
}

export default ViewingProjectText;
