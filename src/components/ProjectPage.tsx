import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Page from "./Page";
import Surface from "./Surface";
import { projectsMetadata } from "@/shared/projects";
import useThemeColor from "@/hooks/useThemeColor";
import useGlobalSettings from "@/hooks/useGlobalSettings";

interface ProjectPageProps {
  projectId: string;
  children: ReactNode;
}

function ProjectPage({ projectId, children }: ProjectPageProps) {
  const { t } = useTranslation();

  const borderColor = useThemeColor("border.500");
  const { setViewingProjectId } = useGlobalSettings();

  useEffect(() => {
    setViewingProjectId(projectId);
    return () => setViewingProjectId(null);
  }, [projectId]);

  const project = projectsMetadata.find(metadata => metadata.id === projectId);

  if (!project)
    return null;

  const name = t(`projects.${projectId}.name`);

  return (
    <Page title={name}>
      <Surface
        flexGrow={1}
        p={2}
        borderStyle="solid"
        borderWidth="1px"
        borderColor={borderColor}
      >
        {children}
      </Surface>
    </Page>
  );
}

export default ProjectPage;
