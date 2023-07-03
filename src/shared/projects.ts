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
    id: "test",
    name: "Test",
    href: "/project/test",
    githubLink: "https://github.com",
    imgSrc: "/flash-cards.png",
    imgAlt: "Test",
    tags: ["react", "node", "next"],
  },
];

export default projects;
