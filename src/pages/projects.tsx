import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

import Page from "@/components/Page";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectList from "@/components/ProjectList";

function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
      <Box>
        <Flex flexDir="column" gap={6}>
          <Heading as="h1" textAlign="center" color="text.800">
            Filter by tech
          </Heading>
          <ProjectFilters selectedTags={selectedTags} onClickTech={toggleTag} />
        </Flex>
        <Flex mt={8} flexDir="column" gap={6}>
          <Heading as="h1" textAlign="center" color="text.800">
            Projects
          </Heading>
          <ProjectList selectedTags={selectedTags} />
        </Flex>
      </Box>
    </Page>
  );
}

export default ProjectsPage;
