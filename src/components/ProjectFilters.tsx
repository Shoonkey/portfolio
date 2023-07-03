import { Flex, Grid, Heading, Image } from "@chakra-ui/react";

import techs from "../shared/techs";
import Surface from "./Surface";
import TechLogo from "./TechLogo";

interface ProjectFiltersProps {
  selectedTags: string[];
  onClickTech: (techTag: string) => void;
}

function ProjectFilters({ selectedTags, onClickTech }: ProjectFiltersProps) {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }}
      gap={4}
    >
      {techs.map((tech, index) => (
        <Surface
          display="flex"
          flexDirection="column"
          gap={4}
          borderRadius="16px"
          px={6}
          py={6}
          borderStyle="solid"
          borderWidth="2px"
          borderColor={
            selectedTags.includes(tech.tag) ? "primary.500" : "transparent"
          }
          boxSizing="border-box"
          onClick={() => onClickTech(tech.tag)}
          _hover={{ cursor: "pointer" }}
        >
          <Flex h="64px" justifyContent="center" alignItems="center">
            <TechLogo tagName={tech.tag} h="100%" />
          </Flex>
          <Heading textAlign="center" as="h2">
            {tech.name}
          </Heading>
        </Surface>
      ))}
    </Grid>
  );
}

export default ProjectFilters;
