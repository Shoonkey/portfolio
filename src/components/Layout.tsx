import { Flex, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import { BOTTOM_MENU_HEIGHT } from "@/shared/constants";
import useGlobalSettings from "@/hooks/useGlobalSettings";
import BottomMenu from "./BottomMenu";
import OpenSidebarButton from "./OpenSidebarButton";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const { sidebarOpen, viewingProjectId } = useGlobalSettings();

  useEffect(() => {
    if (!mainContentRef.current || !sidebarRef.current) return;

    if (sidebarOpen) sidebarRef.current.scrollIntoView();
    else mainContentRef.current.scrollIntoView();
  }, [sidebarOpen, mainContentRef]);

  return (
    <>
      <Flex overflowX="hidden" scrollBehavior="smooth">
        <Flex
          flexDir="column"
          ref={mainContentRef}
          flexShrink={0}
          w="100dvw"
          h="100dvh"
          overflowY={sidebarOpen ? "hidden" : "auto"}
          px="16px"
          pt="16px"
          pb={
            viewingProjectId == null ? BOTTOM_MENU_HEIGHT + 16 + "px" : "16px"
          }
        >
          <Flex
            justifyContent="end"
            alignItems="center"
            gap={2}
            h="48px"
            flexShrink={0}
            pb={4}
          >
            {viewingProjectId != null && (
              <Flex flexDir="column" alignItems="end">
                <Text>
                  {t("pages.singleProject.viewing")}{" "}
                  <strong>{t(`projects.${viewingProjectId}.name`)}</strong>
                </Text>
                <Link href="/projects">
                  <Text textDecoration="underline" color="pink.200">{t("pages.singleProject.goBackToProjects")}</Text>
                </Link>
              </Flex>
            )}
            {!sidebarOpen && <OpenSidebarButton />}
          </Flex>
          {children}
          {viewingProjectId == null && <BottomMenu open={!sidebarOpen} />}
        </Flex>
        <Sidebar ref={sidebarRef} />
      </Flex>
    </>
  );
}

export default Layout;
