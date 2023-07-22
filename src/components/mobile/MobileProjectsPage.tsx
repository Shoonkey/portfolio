import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

import ProjectFilters from "../common/ProjectFilters";
import ProjectList from "../common/ProjectList";

function MobileProjectsPage() {
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
  );
}

export default MobileProjectsPage;
