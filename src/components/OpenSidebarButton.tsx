import { IconButton } from "@chakra-ui/react";
import { DotsThreeCircleVertical } from "@phosphor-icons/react";

interface OpenSidebarButtonProps {
  isSidebarOpen: boolean;
  onClick: () => void;
}

function OpenSidebarButton({ isSidebarOpen, onClick }: OpenSidebarButtonProps) {
  return (
    <IconButton
      variant="unstyled"
      position="absolute"
      right="16px"
      top="16px"
      color="primary.500"
      opacity={isSidebarOpen ? 0 : 1}
      transform="opacity .4s"
      icon={<DotsThreeCircleVertical size={48} weight="fill" />}
      aria-label="Open settings"
      onClick={onClick}
    />
  );
}

export default OpenSidebarButton;
