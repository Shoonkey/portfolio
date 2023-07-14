import { Flex, Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef, useState } from "react";

import useIsMobile from "@/hooks/useIsMobile";
import { MOBILE_MENU_HEIGHT } from "@/shared/constants";
import MobileBottomMenu from "./MobileBottomMenu";
import OpenSidebarButton from "./OpenSidebarButton";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!content.current) return;

    content.current.scroll(sidebarOpen ? window.screen.availWidth : 0, 0);
  }, [sidebarOpen, content]);

  useEffect(() => {
    const closeMenu = () => setSidebarOpen(false);

    router.events.on("routeChangeStart", closeMenu);
    
    return () => {
      router.events.off("routeChangeStart", closeMenu);
    }
  }, [router]);

  return (
    <>
      <Flex overflowX="hidden" scrollBehavior="smooth" ref={content}>
        <Box
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
