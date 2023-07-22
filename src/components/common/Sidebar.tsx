import { Flex, IconButton, Box, Switch, Text, Heading } from "@chakra-ui/react";
import { X, MoonStars, SunHorizon } from "@phosphor-icons/react";
import { ForwardedRef, forwardRef } from "react";

import projects from "@/shared/projects";
import ProjectCard from "./ProjectCard";

interface SidebarProps {
  open: boolean;
  darkMode: boolean;
  onClickClose: () => void;
  onToggleDarkMode: () => void;
}

function Sidebar(
  { open, darkMode, onClickClose, onToggleDarkMode }: SidebarProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Flex
      ref={ref}
      flexDir="column"
      position="relative"
      gap={4}
      flexShrink={0}
      p={4}
      bg="bg.800"
      w="min(90dvw, 400px)"
      h="100dvh"
      overflowY="auto"
    >
      <Flex justifyContent="space-between">
        <IconButton
          variant="unstyled"
          color="primary.500"
          icon={<X size={36} />}
          opacity={open ? 1 : 0}
          transform="opacity .4s"
          aria-label="Close settings"
          onClick={onClickClose}
        />
        <Flex flexDir="column" alignItems="center" gap={2}>
          <Flex alignItems="center" gap={2}>
            <Box
              transition="color .4s"
              color={darkMode ? "primary.500" : "text.800"}
            >
              <MoonStars size={36} weight="fill" />
            </Box>
            <Switch
              size="lg"
              aria-label="Toggle dark mode"
              isChecked={!darkMode}
              onChange={onToggleDarkMode}
            />
            <Box
              transition="color .4s"
              color={!darkMode ? "primary.500" : "text.800"}
            >
              <SunHorizon size={36} weight="fill" />
            </Box>
          </Flex>
          <Text color="text.800" textTransform="uppercase" fontWeight="bold">
            Theme
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir="column" alignItems="end" textAlign="right" gap={2}>
        <Heading
          as="h2"
          size="lg"
          color="primary.500"
          textTransform="uppercase"
        >
          Quick switch
        </Heading>
        <Heading as="h3" size="sm" maxW="90%" color="text.800">
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
    </Flex>
  );
}

export default forwardRef<HTMLDivElement, SidebarProps>(Sidebar);
