import { ImageProps } from "@chakra-ui/react";

import NextLogo from "@/components/tech-logos/NextLogo";
import NodeLogo from "@/components/tech-logos/NodeLogo";
import ReactLogo from "@/components/tech-logos/ReactLogo";
import ViteLogo from "@/components/tech-logos/ViteLogo";
import DiscordJSLogo from "@/components/tech-logos/DiscordJSLogo";
import { TechLogoProps } from "@/components/TechLogo";

export type TechLogoInstanceProps = Omit<TechLogoProps, "tagName"> & ImageProps;

export interface ProjectTech {
  name: string;
  tag: string;
  component: (props: TechLogoInstanceProps) => JSX.Element;
}

const techs: ProjectTech[] = [
  {
    name: "ReactJS",
    tag: "react",
    component: ReactLogo,
  },
  {
    name: "NodeJS",
    tag: "node",
    component: NodeLogo,
  },
  {
    name: "NextJS",
    tag: "next",
    component: NextLogo,
  },
  {
    name: "ViteJS",
    tag: "vite",
    component: ViteLogo,
  },
  {
    name: "DiscordJS",
    tag: "discordjs",
    component: DiscordJSLogo,
  },
];

export default techs;
