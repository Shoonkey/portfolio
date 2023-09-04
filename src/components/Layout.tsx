import { Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { BOTTOM_MENU_HEIGHT } from "@/shared/constants";
import BottomMenu from "./BottomMenu";
import OpenSidebarButton from "./OpenSidebarButton";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const bgColor = useColorModeValue("bgLight.500", "bgDark.500")

  const mainContentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainContentRef.current || !sidebarRef.current) return;

    if (sidebarOpen) sidebarRef.current.scrollIntoView();
    else mainContentRef.current.scrollIntoView();
  }, [sidebarOpen, mainContentRef]);

  useEffect(() => {
    const closeMenu = () => setSidebarOpen(false);

    router.events.on("routeChangeComplete", closeMenu);

    return () => {
      router.events.off("routeChangeComplete", closeMenu);
    };
  }, [router]);

  return (
    <>
      <Flex overflowX="hidden" scrollBehavior="smooth">
        <Flex
          flexDir="column"
          ref={mainContentRef}
          position="relative"
          flexShrink={0}
          w="100dvw"
          h="100dvh"
          overflowY={sidebarOpen ? "hidden" : "auto"}
          px="16px"
          pt="16px"
          pb={BOTTOM_MENU_HEIGHT + 16 + "px"}
          bg="bg.500"
        >
          {children}
          <OpenSidebarButton
            isSidebarOpen={sidebarOpen}
            onClick={() => setSidebarOpen(true)}
          />
          <BottomMenu open={!sidebarOpen} />
        </Flex>
        <Sidebar
          ref={sidebarRef}
          open={sidebarOpen}
          onClickClose={() => setSidebarOpen(false)}
        />
      </Flex>
    </>
  );
}

export default Layout;
