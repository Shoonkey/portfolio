import {
  Flex,
  IconButton,
  Heading,
  useColorMode,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { X, MoonStars, SunHorizon } from "@phosphor-icons/react";
import { ForwardedRef, forwardRef } from "react";

import projects from "@/shared/projects";
import useThemeColor from "@/hooks/useThemeColor";
import ProjectCard from "./ProjectCard";
import Surface from "./Surface";

interface SidebarProps {
  open: boolean;
  onClickClose: () => void;
}

function Sidebar(
  { open, onClickClose }: SidebarProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { colorMode, toggleColorMode } = useColorMode();
  const highlightColor = useThemeColor("primary.500");
  const textColor = useThemeColor("text.800");

  return (
    <Surface
      ref={ref}
      display="flex"
      flexDir="column"
      position="relative"
      gap={4}
      flexShrink={0}
      p={4}
      w="min(90dvw, 400px)"
      h="100dvh"
      overflowY="auto"
    >
      <Flex justifyContent="space-between">
        <Tooltip label="Close settings" placement="left">
          <IconButton
            variant="unstyled"
            color={highlightColor}
            icon={<X size={36} />}
            opacity={open ? 1 : 0}
            transform="opacity .4s"
            aria-label="Close settings"
            onClick={onClickClose}
          />
        </Tooltip>
        <Flex alignItems="center" gap={2} aria-hidden="true">
          <Text>Theme:</Text>
          <Tooltip
            label={`Go to ${colorMode === "dark" ? "light" : "dark"} mode`}
            placement="left"
          >
            <IconButton
              aria-label={`Go to ${
                colorMode === "dark" ? "light" : "dark"
              } mode`}
              variant="unstyled"
              color={highlightColor}
              icon={
                colorMode === "dark" ? (
                  <SunHorizon size={36} weight="fill" />
                ) : (
                  <MoonStars size={36} weight="fill" />
                )
              }
              onClick={toggleColorMode}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <Flex flexDir="column" alignItems="end" textAlign="right" gap={2}>
        <Heading
          as="h2"
          size="lg"
          color={highlightColor}
          textTransform="uppercase"
        >
          Quick switch
        </Heading>
        <Heading as="h3" size="sm" maxW="90%" color={textColor}>
          Feel free to change to another page quickly through here!
        </Heading>
        <Flex>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              mode="quick-switch"
            />
          ))}
        </Flex>
      </Flex>
    </Surface>
  );
}

export default forwardRef<HTMLDivElement, SidebarProps>(Sidebar);
