export interface ProjectTech {
  name: string;
  tag: string;
  imgSrc: string;
  imgAlt: string;
}

const techs: ProjectTech[] = [
  {
    name: "ReactJS",
    tag: "react",
    imgSrc: "/react-logo.svg",
    imgAlt: "React logo: an atom with blue nucleus and blue electron orbits",
  },
  {
    name: "NodeJS",
    tag: "node",
    imgSrc: "/node-logo.svg",
    imgAlt:
      "NodeJS logo: Node written in an angular font with a green hexagon in the place of the O and JS in green in a hexagon below",
  },
  {
    name: "NextJS",
    tag: "next",
    imgSrc: "/next-logo.svg",
    imgAlt:
      "NextJS logo: NextJS written aligned in height with N and X sticking out in th edges",
  },
];

export default techs;
