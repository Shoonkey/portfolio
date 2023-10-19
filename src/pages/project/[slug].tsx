import { FunctionComponent, lazy, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { GetStaticPaths, GetStaticProps } from "next";
import { useColorMode } from "@chakra-ui/react";

import Page, { PageMetadata } from "@/components/Page";
import Surface from "@/components/Surface";
import useProjects, { projectsMetadata } from "@/shared/projects";
import useThemeColor from "@/hooks/useThemeColor";
import useGlobalSettings from "@/hooks/useGlobalSettings";

interface ProjectPageProps {
  projectId: string;
}

interface SubappProps {
  isSubapp?: boolean;
  language: string;
  theme: "dark" | "light";
}

export const getStaticPaths = (() => {
  return {
    paths: projectsMetadata
      .filter((p) => !p.isMeta)
      .map((p) => ({ params: { slug: p.customName || p.id } })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  return {
    props: {
      projectId: projectsMetadata.find((p) =>
        [p.customName, p.id].includes(params!.slug as string)
      )!.id,
    },
  };
}) satisfies GetStaticProps<ProjectPageProps>;

function ProjectPage({ projectId }: ProjectPageProps) {
  const { t, i18n } = useTranslation();
  const { colorMode } = useColorMode();

  const borderColor = useThemeColor("border.500");
  const { viewingProjectId, setViewingProjectId } = useGlobalSettings();
  const projects = useProjects();

  const [SubappComponent, setSubappComponent] =
    useState<FunctionComponent<SubappProps> | null>(null);

  const currentProject = useMemo(
    () => projects.find((p) => p.id === projectId)!,
    [projectId, projects]
  );

  const metadata = useMemo<PageMetadata>(
    () => ({
      title: t(`projects.${viewingProjectId}.name`),
      description: t(`projects.${viewingProjectId}.metaDescription`),
      imgSrc: currentProject.imgSrc,
      imgAlt: currentProject.imgAlt,
    }),
    [t, viewingProjectId, currentProject]
  );

  useEffect(() => {
    setViewingProjectId(projectId);
    return () => setViewingProjectId(null);
  }, [projectId, setViewingProjectId]);

  useEffect(() => {
    if (!viewingProjectId) return;

    (async () => {
      const projectFolder = currentProject.customName || currentProject.id;

      const app: FunctionComponent = lazy(
        () => import(`@/../projects/${projectFolder}/src/App`)
      );

      setSubappComponent(app);
    })();
  }, [currentProject, viewingProjectId, i18n.language, colorMode]);

  return (
    <Page metadata={metadata}>
      {SubappComponent && (
        <Surface
          flexGrow={1}
          p={2}
          borderStyle="solid"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <SubappComponent
            isSubapp
            language={i18n.language}
            theme={colorMode}
          />
        </Surface>
      )}
    </Page>
  );
}

export default ProjectPage;
