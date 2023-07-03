import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import Surface from "./Surface";
import TechLogo from "./TechLogo";
import { Project } from "@/shared/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  return (
    <Surface
      onClick={() => router.push(project.href)}
      borderRadius="16px"
      borderWidth="2px"
      borderStyle="solid"
      borderColor="transparent"
      _hover={{ cursor: "pointer", borderColor: "primary.500" }}
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
          <a href={project.githubLink}>
            <Image
              w="48px"
              src="/github-mark.svg"
              alt="Github logo, Invertocat: a little cat in the middle of a circle, tail pointing left"
              _hover={{ filter: "grayscale(.4)" }}
            />
          </a>
        </Flex>
      </Flex>
    </Surface>
  );
}

export default ProjectCard;
