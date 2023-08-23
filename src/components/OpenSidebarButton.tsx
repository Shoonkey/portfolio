import { IconButton, Tooltip } from "@chakra-ui/react";
import { DotsThreeCircleVertical } from "@phosphor-icons/react";

import useThemeColor from "@/hooks/useThemeColor";

interface OpenSidebarButtonProps {
  isSidebarOpen: boolean;
  onClick: () => void;
}

function OpenSidebarButton({ isSidebarOpen, onClick }: OpenSidebarButtonProps) {
  const iconColor = useThemeColor("primary.500");

  return (
    <Tooltip label="Open settings" placement="left">
      <IconButton
        variant="unstyled"
        position="absolute"
        right="16px"
        top="16px"
        color={iconColor}
        opacity={isSidebarOpen ? 0 : 1}
        transition="transform .4s, opacity .4s"
        icon={<DotsThreeCircleVertical size={48} weight="fill" />}
        aria-label="Open settings"
        onClick={onClick}
      />
    </Tooltip>
  );
}

export default OpenSidebarButton;
