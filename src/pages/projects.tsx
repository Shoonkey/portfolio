import { Divider, Flex, Heading } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import Page, { PageMetadata } from "@/components/Page";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectList from "@/components/ProjectList";
import techs from "@/shared/techs";
import useThemeColor from "@/hooks/useThemeColor";

function ProjectsPage() {
  const { t } = useTranslation();
  const highlightColor = useThemeColor("primary.500");
  const textColor = useThemeColor("text.800");
  const borderColor = useThemeColor("border.500");

  const [selectedTags, setSelectedTags] = useState<string[]>(
    techs.map((t) => t.tag)
  );

  const metadata = useMemo<PageMetadata>(
    () => ({
      title: t("pages.projects.meta.title"),
      description: t("pages.projects.meta.description"),
      imgSrc: "",
      imgAlt: ""
    }),
    [t]
  );

  const toggleTag = (techTag: string) => {
    const techIdx = selectedTags.indexOf(techTag);
    if (techIdx == -1) setSelectedTags([...selectedTags, techTag]);
    else {
      const newList = [...selectedTags];
      newList.splice(techIdx, 1);
      setSelectedTags(newList);
    }
  };

  return (
    <Page metadata={metadata}>
      <Flex mt={2} flexDir="column" gap={6}>
        <Heading as="h1" textAlign="center" color={highlightColor}>
          {t("pages.projects.title")}
        </Heading>
        <Flex flexDir="column" gap={6} maxW="800px" mx="auto">
          <Heading as="h2" size="md" textAlign="center" color={textColor}>
            {t("pages.projects.filterByTech")}
          </Heading>
          <ProjectFilters selectedTags={selectedTags} onClickTech={toggleTag} />
        </Flex>
        <Divider borderColor={borderColor} />
        <ProjectList selectedTags={selectedTags} />
      </Flex>
    </Page>
  );
}

export default ProjectsPage;
