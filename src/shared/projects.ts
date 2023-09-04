export interface Project {
  id: string;
  name: string;
  href: string;
  githubLink: string;
  imgSrc: string;
  imgAlt: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "portfolio-v2",
    name: "Portfolio v2 (this website)",
    href: "/",
    githubLink: "https://github.com/Shoonkey/portfolio",
    imgSrc: "/portfolio-v2.png",
    imgAlt: "Screenshot of this website's homepage",
    tags: ["react", "node", "next"],
  },
];

export default projects;
