import { Divider, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

import Page from "@/components/Page";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectList from "@/components/ProjectList";
import techs from "@/shared/techs";
import useThemeColor from "@/hooks/useThemeColor";

function ProjectsPage() {
  const highlightColor = useThemeColor("primary.500");
  const textColor = useThemeColor("text.800");

  const [selectedTags, setSelectedTags] = useState<string[]>(
    techs.map((t) => t.tag)
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
    <Page title="Projects">
      <Flex mt={2} flexDir="column" gap={6}>
        <Heading as="h1" textAlign="center" color={highlightColor}>
          Projects
        </Heading>
        <Flex flexDir="column" gap={6} maxW="800px" mx="auto">
          <Heading as="h2" size="md" textAlign="center" color={textColor}>
            Filter by tech:
          </Heading>
          <ProjectFilters selectedTags={selectedTags} onClickTech={toggleTag} />
        </Flex>
        <Divider />
        <ProjectList selectedTags={selectedTags} />
      </Flex>
    </Page>
  );
}

export default ProjectsPage;
