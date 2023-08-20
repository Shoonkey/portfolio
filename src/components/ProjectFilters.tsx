import { Grid, Flex, Heading } from "@chakra-ui/react";

import techs from "@/shared/techs";
import TechLogo from "./TechLogo";
import Surface from "./Surface";

interface ProjectFiltersProps {
  selectedTags: string[];
  onClickTech: (techTag: string) => void;
}

function ProjectFilters({ selectedTags, onClickTech }: ProjectFiltersProps) {
  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      gap={4}
    >
      {techs.map((tech) => (
        <Surface
          key={tech.tag}
          display="flex"
          flexDirection="column"
          gap={4}
          borderRadius="16px"
          p={4}
          borderStyle="solid"
          borderWidth="2px"
          borderColor={
            selectedTags.includes(tech.tag) ? "primary.500" : "transparent"
          }
          boxSizing="border-box"
          onClick={() => onClickTech(tech.tag)}
          _hover={{ cursor: "pointer" }}
        >
          <Flex h="48px" justifyContent="center" alignItems="center">
            <TechLogo tagName={tech.tag} h="100%" />
          </Flex>
          <Heading textAlign="center" as="h2" size="sm">
            {tech.name}
          </Heading>
        </Surface>
      ))}
    </Grid>
  );
}

export default ProjectFilters;
