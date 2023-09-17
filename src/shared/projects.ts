import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export interface Project {
  id: string;
  name: string;
  href: string;
  githubLink: string;
  imgSrc: string;
  imgAlt: string;
  tags: string[];
  isMeta?: boolean;
}

export const projectsMetadata: Omit<Project, "name" | "imgAlt">[] = [
  {
    id: "portfolio-v2",
    href: "/projects",
    githubLink: "https://github.com/Shoonkey/portfolio",
    imgSrc: "/portfolio-v2.png",
    tags: ["react", "node", "next"],
    isMeta: true
  },
  {
    id: "pomodoro-timer",
    href: "/project/pomodoro-timer",
    githubLink: "https://github.com/Shoonkey/pomodoro-timer",
    imgSrc: "/portfoli-v2.png",
    tags: ["react", "node"]
  }
];

const useProjects = () => {
  const { t } = useTranslation();

  const translatedProjects = useMemo<Project[]>(
    () =>
      projectsMetadata.map((metadata) => ({
        ...metadata,
        name: t(`projects.${metadata.id}.name`),
        imgAlt: t(`projects.${metadata.id}.imgAlt`),
      })),
    [t]
  );

  return translatedProjects;
};

export default useProjects;
