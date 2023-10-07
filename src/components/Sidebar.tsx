import {
  Flex,
  IconButton,
  Heading,
  useColorMode,
  Text,
  Select,
  Divider,
} from "@chakra-ui/react";
import { X, MoonStars, SunHorizon } from "@phosphor-icons/react";
import { ForwardedRef, forwardRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import useProjects from "@/shared/projects";
import useThemeColor from "@/hooks/useThemeColor";
import useGlobalSettings from "@/hooks/useGlobalSettings";
import ProjectCard from "./ProjectCard";
import Surface from "./Surface";
import CustomTooltip from "./CustomTooltip";

function Sidebar(_props: any, ref: ForwardedRef<HTMLDivElement>) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  const { sidebarOpen, setSidebarOpen } = useGlobalSettings();

  const highlightColor = useThemeColor("primary.500");
  const textColor = useThemeColor("text.800");
  const borderColor = useThemeColor("border.500");
  const projects = useProjects();

  useEffect(() => {
    const closeMenu = () => setSidebarOpen(false);

    router.events.on("routeChangeComplete", closeMenu);

    return () => {
      router.events.off("routeChangeComplete", closeMenu);
    };
  }, [router, setSidebarOpen]);

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
      borderLeftStyle="solid"
      borderLeftWidth="1px"
      borderLeftColor={borderColor}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <CustomTooltip
          label={t("sidebar.closeButtonLabel")}
          placement="left"
          wrapsClickable
        >
          <IconButton
            variant="unstyled"
            color={highlightColor}
            icon={<X size={36} />}
            opacity={sidebarOpen ? 1 : 0}
            transform="opacity .4s"
            aria-label={t("sidebar.closeButtonLabel")}
            onClick={() => setSidebarOpen(false)}
          />
        </CustomTooltip>
        <Heading
          pt={2}
          as="h2"
          size="lg"
          color={highlightColor}
          textTransform="uppercase"
        >
          {t("quickSwitch.title")}
        </Heading>
      </Flex>
      <Divider borderColor={borderColor} />
      <Flex flexDir="column" alignItems="end" textAlign="right" gap={2}>
        <Heading as="h3" size="sm" maxW="90%" color={textColor}>
          {t("quickSwitch.description")}
        </Heading>
        <Flex flexDir="column" gap={2}>
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

export default forwardRef<HTMLDivElement, any>(Sidebar);
