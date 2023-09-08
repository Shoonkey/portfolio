import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export interface Project {
  id: string;
  name: string;
  href: string;
  githubLink: string;
  imgSrc: string;
  imgAlt: string;
  tags: string[];
}

const projects: Omit<Project, "name" | "imgAlt">[] = [
  {
    id: "portfolio-v2",
    href: "/",
    githubLink: "https://github.com/Shoonkey/portfolio",
    imgSrc: "/portfolio-v2.png",
    tags: ["react", "node", "next"],
  },
];

const useProjects = () => {
  const { t } = useTranslation();

  const translatedProjects = useMemo<Project[]>(() => {
    const output: Project[] = [];

    for (const project of projects) {
      output.push({
        ...project,
        name: t(`projects.${project.id}.name`),
        imgAlt: t(`projects.${project.id}.imgAlt`)
      });
    }

    return output;
  }, [t]);

  return translatedProjects;
}

export default useProjects;
