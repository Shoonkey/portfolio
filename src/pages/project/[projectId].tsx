import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GetStaticPaths, GetStaticProps } from "next";
import { useColorMode } from "@chakra-ui/react";

import Page from "@/components/Page";
import Surface from "@/components/Surface";
import { projectsMetadata } from "@/shared/projects";
import useThemeColor from "@/hooks/useThemeColor";
import useGlobalSettings from "@/hooks/useGlobalSettings";

interface ProjectPageProps {
  projectId: string;
}

interface AppSetupProps {
  containerId: string;
  isSubapp?: boolean;
  language: string;
  theme: "dark" | "light";
}

type AppSetupFunction = (props: AppSetupProps) => void;

export const getStaticPaths = (() => {
  return {
    paths: projectsMetadata
      .filter((p) => !p.isMeta)
      .map((p) => ({ params: { projectId: p.id } })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  return {
    props: {
      projectId: params!.projectId as string,
    },
  };
}) satisfies GetStaticProps<ProjectPageProps>;

function ProjectPage({ projectId }: ProjectPageProps) {
  const { t, i18n } = useTranslation();
  const { colorMode } = useColorMode();

  const borderColor = useThemeColor("border.500");
  const { viewingProjectId, setViewingProjectId } = useGlobalSettings();

  useEffect(() => {
    setViewingProjectId(projectId);
    return () => setViewingProjectId(null);
  }, [projectId]);

  useEffect(() => {
    if (!viewingProjectId) return;

    (async () => {
      const setupApp: AppSetupFunction = (
        await import(`@/../projects/${viewingProjectId}/src/setup`)
      ).default;

      setupApp({
        containerId: "subapp-root",
        isSubapp: true,
        theme: colorMode,
        language: i18n.language
      });
    })();
  }, [viewingProjectId, i18n.language, colorMode]);

  return (
    <Page title={t(`projects.${projectId}.name`)}>
      <Surface
        flexGrow={1}
        p={2}
        borderStyle="solid"
        borderWidth="1px"
        borderColor={borderColor}
        id="subapp-root"
      />
    </Page>
  );
}

export default ProjectPage;
