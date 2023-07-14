import Head from "next/head";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { MOBILE_MENU_HEIGHT } from "@/shared/constants";
import useIsMobile from "@/hooks/useIsMobile";
import MobileBottomMenu from "./MobileBottomMenu";
import Sidebar from "./Sidebar";
import OpenSidebarButton from "./OpenSidebarButton";

interface PageProps {
  title: string;
  children: ReactNode;
}

function Page({ title, children }: PageProps) {
  const isMobile = useIsMobile();
  const computedTitle = useMemo(() => `${title} | Shoonkey's portfolio`, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!content.current) return;

    content.current.scroll(sidebarOpen ? window.screen.availWidth : 0, 0);
  }, [sidebarOpen, content]);

  return (
    <>
      <Head>
        <title>{computedTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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

export default Page;
