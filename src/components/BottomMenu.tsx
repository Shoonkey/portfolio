import { Flex, Heading } from "@chakra-ui/react";
import { AppWindow } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ElementType } from "react";
import { useTranslation } from "react-i18next";

import { BOTTOM_MENU_HEIGHT } from "@/shared/constants";
import useThemeColor from "@/hooks/useThemeColor";
import Surface from "./Surface";

interface MenuLinkProps {
  IconComponent: ElementType;
  title: string;
  href: string;
}

interface BottomMenuProps {
  open: boolean;
}

function MenuLink({ IconComponent, href, title }: MenuLinkProps) {
  const highlightColor = useThemeColor("primary.500");

  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Flex
      flexGrow={{ base: 1, md: 0 }}
      flexBasis="120px"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as={Link}
        href={href}
        flexDir="column"
        borderWidth="3px"
        borderColor={isActive ? highlightColor : "transparent"}
        borderStyle="solid"
        borderRadius="12px"
        justifyContent="center"
        alignItems="center"
        w="90%"
        h="80%"
        _hover={{ borderColor: highlightColor }}
      >
        <IconComponent />
        <Heading as="h1" fontSize="lg">
          {title}
        </Heading>
      </Flex>
    </Flex>
  );
}

function BottomMenu({ open }: BottomMenuProps) {
  const { t } = useTranslation();
  const borderColor = useThemeColor("border.500");

  return (
    <Surface
      as="nav"
      display="flex"
      position="fixed"
      left="0px"
      bottom="0px"
      transform={`translateY(${open ? 0 : BOTTOM_MENU_HEIGHT}px)`}
      transition="transform .4s"
      borderTopStyle="solid"
      borderTopWidth="1px"
      borderTopColor={borderColor}
      px={4}
      w="100dvw"
      h={BOTTOM_MENU_HEIGHT}
      justifyContent={{ base: "space-around", md: "center" }}
      aria-label={t("bottomMenu.ariaLabel")}
    >
      <MenuLink
        title={t("bottomMenu.intro")}
        IconComponent={() => <AppWindow size={32} />}
        href="/"
      />
      <MenuLink
        title={t("bottomMenu.projects")}
        IconComponent={() => <AppWindow size={32} />}
        href="/projects"
      />
      <MenuLink
        title={t("bottomMenu.contact")}
        IconComponent={() => <AppWindow size={32} />}
        href="/contact"
      />
    </Surface>
  );
}

export default BottomMenu;
