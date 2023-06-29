import Head from "next/head";
import { ReactNode, useMemo } from "react";
import { Box } from "@chakra-ui/react";

import useIsMobile from "@/hooks/useIsMobile";
import MobileBottomMenu from "./MobileBottomMenu";
import { MOBILE_MENU_HEIGHT } from "@/constants";

interface PageProps {
  title: string;
  children: ReactNode;
}

function Page({ title, children }: PageProps) {
  const isMobile = useIsMobile();
  const computedTitle = useMemo(() => `${title} | Shoonkey's portfolio`, []);

  return (
    <>
      <Head>
        <title>{computedTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Box minH="100dvh" px="16px" pt="16px" pb={(MOBILE_MENU_HEIGHT + 16) + "px"} bg="bg.500">
        {children}
        {isMobile && <MobileBottomMenu />}
      </Box>
    </>
  );
}

export default Page;
