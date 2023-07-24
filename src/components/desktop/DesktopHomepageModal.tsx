import {
  Box,
  Collapse,
  Flex,
  IconButton,
  useOutsideClick,
} from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";

import IntroContent from "../common/IntroContent";
import Surface from "../common/Surface";
import DesktopHomepageTabType from "./DesktopHomepageTabType";
import { useRef } from "react";

interface DesktopHomepageModalProps {
  openTab: DesktopHomepageTabType | null;
  onClose: () => void;
}

function DesktopHomepageModal({ openTab, onClose }: DesktopHomepageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: modalRef,
    handler: onClose,
  });

  return (
    <Surface
      ref={modalRef}
      borderRadius="32px"
      position="absolute"
      top="50%"
      right={6}
      w="60vw"
      maxH="80vh"
      overflowY="auto"
      transform="translateY(-50%)"
      // TODO: Fix modal not disappearing when clicking outside but specifically on the image
      opacity={openTab == null ? 0 : 1}
      py={3}
      transition="opacity .4s"
    >
      <Flex justifyContent="end">
        <IconButton
          variant="unstyled"
          icon={<X size={32} />}
          aria-label="Close"
          onClick={onClose}
        />
      </Flex>
      <Box p={8}>
        <Collapse in={openTab === "intro"}>
          <IntroContent />
        </Collapse>
      </Box>
    </Surface>
  );
}

export default DesktopHomepageModal;
