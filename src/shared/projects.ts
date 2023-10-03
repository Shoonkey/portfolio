import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export interface Project {
  id: string;
  type: "website" | "bot";
  name: string;
  href: string;
  githubLink: string;
  imgSrc: string;
  imgAlt: string;
  metaDescription: string;
  tags: string[];
  isMeta?: boolean;
  isSolo?: boolean;
  beingBuilt?: boolean;
}

export const projectsMetadata: Omit<
  Project,
  "name" | "imgAlt" | "metaDescription"
>[] = [
  {
    id: "portfolio-v2",
    type: "website",
    href: "/projects",
    githubLink: "https://github.com/Shoonkey/portfolio",
    imgSrc: "/portfolio-v2.png",
    tags: ["react", "node", "next"],
    isMeta: true,
    isSolo: true,
  },
  {
    id: "pomodoro-timer",
    type: "website",
    href: "/project/pomodoro-timer",
    githubLink: "https://github.com/Shoonkey/pomodoro-timer",
    imgSrc: "/pomodoro-timer.png",
    tags: ["react", "node", "vite"],
    isSolo: true,
  },
  {
    id: "music-theory-study",
    type: "website",
    href: "/project/music-theory-study",
    githubLink: "https://github.com/Shoonkey/flash-cards",
    imgSrc: "/music-theory-quiz.png",
    tags: ["react", "node", "vite"],
    isSolo: true,
  },
  {
    id: "flash-cards",
    type: "website",
    href: "/project/flash-cards",
    githubLink: "https://github.com/Shoonkey/flash-cards",
    imgSrc: "/flash-cards.png",
    tags: ["react", "node", "vite"],
    isSolo: true,
    beingBuilt: true,
  },
];

const useProjects = () => {
  const { t } = useTranslation();

  const translatedProjects = useMemo<Project[]>(
    () =>
      projectsMetadata.map((metadata) => ({
        ...metadata,
        name: t(`projects.${metadata.id}.name`),
        imgAlt: t(`projects.${metadata.id}.imgAlt`),
        metaDescription: t(`projects.${metadata.id}.metaDescription`),
      })),
    [t]
  );

  return translatedProjects;
};

export default useProjects;
