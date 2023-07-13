import Head from "next/head";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Box, Flex, IconButton, Switch } from "@chakra-ui/react";
import { DotsThreeCircleVertical, MoonStars, SunHorizon, X } from "@phosphor-icons/react";

import { MOBILE_MENU_HEIGHT } from "@/shared/constants";
import useIsMobile from "@/hooks/useIsMobile";
import MobileBottomMenu from "./MobileBottomMenu";

interface PageProps {
  title: string;
  children: ReactNode;
}

function Page({ title, children }: PageProps) {
  const isMobile = useIsMobile();
  const computedTitle = useMemo(() => `${title} | Shoonkey's portfolio`, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
          minH="100dvh"
          px="16px"
          pt="16px"
          pb={MOBILE_MENU_HEIGHT + 16 + "px"}
          bg="bg.500"
        >
          {children}
          {isMobile && <MobileBottomMenu open={!sidebarOpen} />}
          <IconButton
            variant="unstyled"
            position="absolute"
            right="16px"
            top="16px"
            color="primary.500"
            opacity={sidebarOpen ? 0 : 1}
            transform="opacity .4s"
            icon={<DotsThreeCircleVertical size={48} weight="fill" />}
            aria-label="Open settings"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
        </Box>
        <Flex
          flexDir="column"
          position="relative"
          gap={4}
          flexShrink={0}
          p={4}
          bg="bg.800"
          w="90dvw"
          maxW="400px"
          h="100dvh"
          overflowY="auto"
        >
          <Flex>
            <IconButton
              variant="unstyled"
              color="primary.500"
              icon={<X size={48} />}
              aria-label="Close settings"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
            {/* <Flex>
              <SunHorizon size={32} weight="fill" />
              <Switch />
              <MoonStars size={32} weight="fill" />
            </Flex> */}
          </Flex>
          <Flex>Content</Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Page;
