import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import {
  CodeBlock,
  Hammer,
  HandPalm,
  Handshake,
  Robot,
} from "@phosphor-icons/react";

import { Project } from "@/shared/projects";
import useThemeColor from "@/hooks/useThemeColor";
import Surface from "./Surface";
import TechLogo from "./TechLogo";
import CustomTooltip from "./CustomTooltip";
import { ReactNode } from "react";

interface ProjectCardProps {
  project: Project;
  mode: "quick-switch" | "project-list";
}

function ProjectTypeIcon({ type }: Pick<Project, "type">) {
  const { t } = useTranslation();

  if (type === "website")
    return (
      <CustomTooltip label={t("projectCard.types.website")} placement="top">
        <CodeBlock size={32} />
      </CustomTooltip>
    );

  if (type === "bot")
    return (
      <CustomTooltip label={t("projectCard.types.bot")} placement="top">
        <Robot size={32} />
      </CustomTooltip>
    );

  return null;
}

function ProjectMain({ project }: Pick<ProjectCardProps, "project">) {
  const { t } = useTranslation();

  let content: ReactNode;

  if (project.beingBuilt) {
    content = (
      <>
        <Image filter="blur(2px)" src={project.imgSrc} alt={project.imgAlt} />
        <Flex
          flexDirection="column"
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          color="#e2e2e2"
        >
          <Hammer size={82} />
          <Text fontSize="1.5rem">{t("projectCard.soon")}</Text>
        </Flex>
      </>
    );
  } else {
    content = (
      <Link href={project.href}>
        <Image src={project.imgSrc} alt={project.imgAlt} />
      </Link>
    );
  }

  return (
    <Box p={8} pb={0} flexGrow={1} position="relative">
      {content}
    </Box>
  );
}

function ProjectCard({ project, mode }: ProjectCardProps) {
  const router = useRouter();
  const { t } = useTranslation();

  const isActive =
    (project.isMeta && !router.asPath.startsWith("/project")) ||
    router.asPath.startsWith(project.href);

  const standardBgColor = useThemeColor("bg.800");
  const quickSwitchBgColor = useThemeColor("bg.500");
  const highlightColor = useThemeColor("primary.500");
  const standardBorderColor = useThemeColor("text.800");

  return (
    <Flex flexDir="column" alignItems="end" h="100%" order={isActive ? -1 : 0}>
      {mode === "quick-switch" && isActive && (
        <Heading
          px={2}
          pt={2}
          color={standardBgColor}
          as="h2"
          size="md"
          bg={highlightColor}
          textTransform="uppercase"
        >
          {t("quickSwitch.youreHere")}
        </Heading>
      )}
      <Surface
        display="flex"
        flexDir="column"
        w="100%"
        h="100%"
        bg={mode === "quick-switch" ? quickSwitchBgColor : standardBgColor}
        borderRadius="16px"
        borderTopRightRadius={
          mode === "quick-switch" && isActive ? "0px" : "16px"
        }
        borderWidth="2px"
        borderStyle="solid"
        borderColor={
          mode === "quick-switch" && isActive
            ? highlightColor
            : standardBorderColor
        }
        _hover={{ cursor: "pointer", borderColor: highlightColor }}
        onClick={() => {
          if (!isActive && !project.beingBuilt) router.push(project.href);
        }}
      >
        <ProjectMain project={project} />
        <Flex flexDir="column" p={4} gap={2}>
          <Heading textAlign="center" mt={2} as="h2" size="md">
            {project.name}
          </Heading>
          {mode === "project-list" && (
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap={4}>
                {project.tags.map((tag) => (
                  <TechLogo key={tag} tagName={tag} />
                ))}
              </Flex>
              <Flex gap={2}>
                <CustomTooltip
                  label={t("projectCard.githubRepo")}
                  placement="top"
                >
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("projectCard.githubRepo")}
                  >
                    <Image
                      w="32px"
                      src="/github-mark.svg"
                      alt="Github logo, Invertocat: a little cat in the middle of a circle, tail pointing left"
                      _hover={{ filter: "grayscale(.4)" }}
                    />
                  </Link>
                </CustomTooltip>
                <CustomTooltip
                  label={
                    project.isSolo
                      ? t("projectCard.soloProject")
                      : t("projectCard.collaboration")
                  }
                  placement="top"
                >
                  {project.isSolo ? (
                    <HandPalm
                      size={32}
                      aria-label={t("projectCard.soloProject")}
                    />
                  ) : (
                    <Handshake
                      size={32}
                      aria-label={t("projectCard.collaboration")}
                    />
                  )}
                </CustomTooltip>
                <ProjectTypeIcon type={project.type} />
              </Flex>
            </Flex>
          )}
        </Flex>
      </Surface>
    </Flex>
  );
}

export default ProjectCard;
