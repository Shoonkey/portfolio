import useIsMobile from "@/hooks/useIsMobile";
import Page from "@/components/common/Page";
import MobileHomepage from "@/components/mobile/MobileHomepage";
import DesktopHomepage from "@/components/desktop/DesktopHomepage";

function Homepage() {
  const isMobile = useIsMobile();

  return (
    <Page title="Home">
      {isMobile ? <MobileHomepage /> : <DesktopHomepage />}
    </Page>
  );
}

export default Homepage;
