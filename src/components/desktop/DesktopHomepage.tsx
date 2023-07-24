import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";

import DesktopHomepageModal from "./DesktopHomepageModal";
import DesktopHomepageTabType from "./DesktopHomepageTabType";

const GRAYSCALE = 0.8;

function DesktopHomepage() {
  const [hovering, setHovering] = useState<DesktopHomepageTabType | null>(null);
  const [activeTab, setActiveTab] = useState<DesktopHomepageTabType | null>(
    null
  );

  return (
    <>
      <Box
        h="100vh"
        position="relative"
        filter={`grayscale(${hovering ? 0 : GRAYSCALE})`}
      >
        <Image
          position="absolute"
          top={activeTab === "intro" ? "50%" : "10vh"}
          left={4}
          transform={`translateY(${activeTab === "intro" ? "-50%" : "0px"})`}
          h="40vh"
          borderRadius="50%"
          transition="border-radius .4s, transform .4s, top .4s"
          cursor="pointer"
          _hover={
            activeTab == null
              ? { borderRadius: "32px", transform: `scale(1.1)` }
              : undefined
          }
          // TODO: fix active tab not deactivating grayscale
          filter={`grayscale(${
            (activeTab === "intro" || hovering === "intro") ? 0 : GRAYSCALE
          })`}
          src="./pfp.jpg"
          onClick={() => setActiveTab("intro")}
          onMouseOver={() => setHovering("intro")}
          onMouseOut={() => setHovering(null)}
        />
      </Box>
      <DesktopHomepageModal
        openTab={activeTab}
        onClose={() => setActiveTab(null)}
      />
    </>
  );
}

export default DesktopHomepage;
