import useIsMobile from "@/hooks/useIsMobile";
import Page from "@/components/common/Page";
import MobileProjectsPage from "@/components/mobile/MobileProjectsPage";

function ProjectsPage() {
  const isMobile = useIsMobile();

  return <Page title="Projects">{isMobile ? <MobileProjectsPage /> : null}</Page>;
}

export default ProjectsPage;
