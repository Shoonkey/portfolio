import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import Surface from "./Surface";
import TechLogo from "./TechLogo";
import { Project } from "@/shared/projects";

interface ProjectCardProps {
  project: Project;
  mode: "quick-switch" | "project-list";
}

function ProjectCard({ project, mode }: ProjectCardProps) {
  const router = useRouter();

  const isActive = router.pathname.startsWith(project.href);

  return (
    <Flex flexDir="column" alignItems="end">
      {mode === "quick-switch" && isActive && (
        <Heading
          px={2}
          pt={2}
          color="bg.800"
          as="h2"
          size="md"
          bg="primary.500"
          textTransform="uppercase"
        >
          You're here
        </Heading>
      )}
      <Surface
        bg={mode === "quick-switch" ? "bg.500" : "bg.800"}
        borderRadius="16px"
        borderTopRightRadius={(mode === "quick-switch" && isActive) ? "0px" : "16px"}
        borderWidth="2px"
        borderStyle="solid"
        borderColor={isActive ? "primary.500" : "transparent"}
        _hover={{ cursor: "pointer", borderColor: "primary.500" }}
        onClick={() => {
          if (!isActive) router.push(project.href);
        }}
      >
        <Link href={project.href}>
          <Box p={8} pb={0}>
            <Image src={project.imgSrc} alt={project.imgAlt} />
          </Box>
        </Link>
        <Flex flexDir="column" p={4} gap={2}>
          <Heading textAlign="center" mt={2} as="h2">
            {project.name}
          </Heading>
          {mode === "project-list" && (
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap={4}>
                {project.tags.includes("react") && (
                  <TechLogo tagName="react" h="32px" />
                )}
                {project.tags.includes("node") && (
                  <TechLogo tagName="node" h="32px" />
                )}
                {project.tags.includes("next") && (
                  <TechLogo tagName="next" h="32px" />
                )}
              </Flex>
              <a href={project.githubLink} target="_blank">
                <Image
                  w="48px"
                  src="/github-mark.svg"
                  alt="Github logo, Invertocat: a little cat in the middle of a circle, tail pointing left"
                  _hover={{ filter: "grayscale(.4)" }}
                />
              </a>
            </Flex>
          )}
        </Flex>
      </Surface>
    </Flex>
  );
}

export default ProjectCard;
