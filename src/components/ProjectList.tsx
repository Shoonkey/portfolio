import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import projects from "@/shared/projects";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  selectedTags: string[];
}

function ProjectList({ selectedTags }: ProjectListProps) {
  const filteredProjects = [];

  for (let i = 0; i < projects.length; i++) {
    for (const tag of selectedTags) {
      if (projects[i].tags.includes(tag)) {
        filteredProjects.push(projects[i]);
        break;
      }
    }
  }

  return (
    <Box px={4} flexGrow={1}>
      <AnimatePresence>
        {filteredProjects.length === 0 ? (
          <Box textAlign="center">
            <Heading as="h3" fontSize="24px" color="text.800">
              No tech selected, brain empty
            </Heading>
            <Text fontSize="64px" color="primary.500">
              {"(╭ರ_⊙)"}
            </Text>
          </Box>
        ) : (
          filteredProjects.map((project) => (
            <Grid key={project.id} gap={4} gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}>
              <Box
                flexBasis="33%"
                as={motion.div}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
              >
                <ProjectCard project={project} mode="project-list" />
              </Box>
            </Grid>
          ))
        )}
        {}
      </AnimatePresence>
    </Box>
  );
}

export default ProjectList;
