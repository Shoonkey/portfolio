import useIsMobile from "@/hooks/useIsMobile";
import Page from "@/components/common/Page";
import MobileHomepage from "@/components/mobile/MobileHomepage";

function Homepage() {
  const isMobile = useIsMobile();

  return <Page title="Home">{isMobile ? <MobileHomepage /> : null}</Page>;
}

export default Homepage;
