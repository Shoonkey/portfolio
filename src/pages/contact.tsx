import useIsMobile from "@/hooks/useIsMobile";
import Page from "@/components/common/Page";
import MobileContactPage from "@/components/mobile/MobileContactPage";

function ContactPage() {
  const isMobile = useIsMobile();

  return <Page title="Contact">{isMobile ? <MobileContactPage /> : null}</Page>;
}

export default ContactPage;
