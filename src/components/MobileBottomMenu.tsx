import { Flex, Heading } from "@chakra-ui/react";
import { AppWindow } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ElementType } from "react";

import Surface from "./Surface";
import { MOBILE_MENU_HEIGHT } from "@/constants";

interface MenuLinkProps {
  IconComponent: ElementType;
  title: string;
  href: string;
}

function MenuLink({ IconComponent, href, title }: MenuLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Flex flexGrow={1} justifyContent="center" alignItems="center">
      <Flex
        as={Link}
        href={href}
        flexDir="column"
        borderWidth="3px"
        borderColor={isActive ? "primary.500" : "transparent"}
        borderStyle="solid"
        borderRadius="12px"
        justifyContent="center"
        alignItems="center"
        w="90%"
        h="80%"
        _hover={{ borderColor: "primary.500" }}
      >
        <IconComponent />
        <Heading as="h1" fontSize="lg">
          {title}
        </Heading>
      </Flex>
    </Flex>
  );
}

function MobileBottomMenu() {
  return (
    <Surface
      display="flex"
      position="fixed"
      left="0px"
      bottom="0px"
      transition="bottom .4s"
      px={4}
      w="100vw"
      h={MOBILE_MENU_HEIGHT}
      justifyContent="space-around"
      role="navigation"
      aria-label="Main"
      bg="bg.800"
    >
      <MenuLink
        title="Intro"
        IconComponent={() => <AppWindow size={32} />}
        href="/"
      />
      <MenuLink
        title="Projects"
        IconComponent={() => <AppWindow size={32} />}
        href="/projects"
      />
      <MenuLink
        title="Contact"
        IconComponent={() => <AppWindow size={32} />}
        href="/contact"
      />
    </Surface>
  );
}

export default MobileBottomMenu;
