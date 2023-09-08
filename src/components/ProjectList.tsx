import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

import useProjects from "@/shared/projects";
import ProjectCard from "./ProjectCard";
import useThemeColor from "@/hooks/useThemeColor";

interface ProjectListProps {
  selectedTags: string[];
}

function ProjectList({ selectedTags }: ProjectListProps) {
  const noTechsColor = useThemeColor("text.800");
  const highlightColor = useThemeColor("primary.300");
  const projects = useProjects();

  const filteredProjects = useMemo(() => {
    const output = [];

    for (let i = 0; i < projects.length; i++) {
      for (const tag of selectedTags) {
        if (projects[i].tags.includes(tag)) {
          output.push(projects[i]);
          break;
        }
      }
    }

    return output;
  }, [projects, selectedTags]);


  return (
    <Box px={4} flexGrow={1}>
      <AnimatePresence>
        {filteredProjects.length === 0 ? (
          <Flex
            flexDir="column"
            gap={2}
            textAlign="center"
            aria-label="Results"
          >
            <Heading as="h3" size="md" color={noTechsColor}>
              No tech selected, brain empty
            </Heading>
            <Heading as="h3" size="2xl" color={highlightColor}>
              <Text as="span" aria-hidden="true">
                {"(╭ರ_⊙)"}
              </Text>
              <VisuallyHidden>
                ASCII art of a face with a monocle
              </VisuallyHidden>
            </Heading>
          </Flex>
        ) : (
          filteredProjects.map((project) => (
            <Grid
              key={project.id}
              gap={4}
              gridTemplateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr 1fr",
              }}
            >
              <Box
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
