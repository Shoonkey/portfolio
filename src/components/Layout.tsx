import { Flex, Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { MOBILE_MENU_HEIGHT } from "@/shared/constants";
import useIsMobile from "@/hooks/useIsMobile";
import MobileBottomMenu from "./MobileBottomMenu";
import OpenSidebarButton from "./OpenSidebarButton";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const mainContentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainContentRef.current || !sidebarRef.current) return;

    if (sidebarOpen) sidebarRef.current.scrollIntoView();
    else mainContentRef.current.scrollIntoView();
  }, [sidebarOpen, mainContentRef]);

  useEffect(() => {
    const closeMenu = () => setSidebarOpen(false);

    router.events.on("routeChangeStart", closeMenu);

    return () => {
      router.events.off("routeChangeStart", closeMenu);
    };
  }, [router]);

  return (
    <>
      <Flex overflowX="hidden" scrollBehavior="smooth">
        <Box
          ref={mainContentRef}
          position="relative"
          flexShrink={0}
          w="100dvw"
          h="100dvh"
          overflowY={sidebarOpen ? "hidden" : "auto"}
          px="16px"
          pt="16px"
          pb={MOBILE_MENU_HEIGHT + 16 + "px"}
          bg="bg.500"
        >
          {children}
          <OpenSidebarButton
            isSidebarOpen={sidebarOpen}
            onClick={() => setSidebarOpen(true)}
          />
          {isMobile && <MobileBottomMenu open={!sidebarOpen} />}
        </Box>
        <Sidebar
          ref={sidebarRef}
          open={sidebarOpen}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
          onClickClose={() => setSidebarOpen(false)}
        />
      </Flex>
    </>
  );
}

export default Layout;
