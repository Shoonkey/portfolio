import { IconButton, Tooltip } from "@chakra-ui/react";
import { DotsThreeCircleVertical } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import useThemeColor from "@/hooks/useThemeColor";

interface OpenSidebarButtonProps {
  isSidebarOpen: boolean;
  onClick: () => void;
}

function OpenSidebarButton({ isSidebarOpen, onClick }: OpenSidebarButtonProps) {
  const { t } = useTranslation();
  const iconColor = useThemeColor("primary.500");

  return (
    <Tooltip label={t("sidebar.openButtonLabel")} placement="left">
      <IconButton
        variant="unstyled"
        position="absolute"
        right="16px"
        top="16px"
        color={iconColor}
        opacity={isSidebarOpen ? 0 : 1}
        transition="transform .4s, opacity .4s"
        icon={<DotsThreeCircleVertical size={48} weight="fill" />}
        aria-label={t("sidebar.openButtonLabel")}
        onClick={onClick}
      />
    </Tooltip>
  );
}

export default OpenSidebarButton;
