import { IconButton, Tooltip } from "@chakra-ui/react";
import { DotsThreeCircleVertical } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import useThemeColor from "@/hooks/useThemeColor";
import useGlobalSettings from "@/hooks/useGlobalSettings";

function OpenSidebarButton() {
  const { t } = useTranslation();
  const iconColor = useThemeColor("primary.500");
  const { setSidebarOpen } = useGlobalSettings();

  return (
    <Tooltip label={t("sidebar.openButtonLabel")} placement="left">
      <IconButton
        display="flex"
        variant="unstyled"
        color={iconColor}
        transition="transform .4s, opacity .4s"
        icon={<DotsThreeCircleVertical size={48} weight="fill" />}
        aria-label={t("sidebar.openButtonLabel")}
        onClick={() => setSidebarOpen(true)}
      />
    </Tooltip>
  );
}

export default OpenSidebarButton;
