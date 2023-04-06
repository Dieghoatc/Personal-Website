import gitLogo from "../../assets/git-icon.png";
import javascriptLogo from "../../assets/javascript-icon.png";
import reactLogo from "../../assets/react-icon.png";
import nodejsLogo from "../../assets/node-logo.png";
import typescriptLogo from "../../assets/typescript-icon.png";
import htmlLogo from "../../assets/html-logo.png";
import cssLogo from "../../assets/css-icon.png";
import testingLibraryLogo from "../../assets/testing-library-logo.png";
import graphQLLogo from "../../assets/graphql.png";
import pythonLogo from "../../assets/python-icon.png";
import jest from "../../assets/jest-icon.png";
import astroLogo from "../../assets/astro-logo.svg";
import nextjsLogo from "../../assets/nextjs-icon.png";

type tecnoType = {
  id: number;
  name: string;
  icon: string;
  progress: number;
};

export const developmentTecnologies: tecnoType[] = [
  {
    id: 1,
    name: "Git",
    icon: gitLogo,
    progress: 80,
  },
  {
    id: 2,
    name: "NodeJs",
    icon: nodejsLogo,
    progress: 60,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascriptLogo,
    progress: 70,
  },
  {
    id: 4,
    name: "Typescript",
    icon: typescriptLogo,
    progress: 60,
  },
  {
    id: 5,
    name: "React",
    icon: reactLogo,
    progress: 80,
  },
  {
    id: 6,
    name: "React Testing Library",
    icon: testingLibraryLogo,
    progress: 50,
  },
  {
    id: 7,
    name: "Jest",
    icon: jest,
    progress: 60,
  },
  {
    id: 8,
    name: "Html",
    icon: htmlLogo,
    progress: 90,
  },
  {
    id: 9,
    name: "Css",
    icon: cssLogo,
    progress: 80,
  },
  {
    id: 10,
    name: "GraphQL",
    icon: graphQLLogo,
    progress: 50,
  },
  {
    id: 11,
    name: "NextJS",
    icon: nextjsLogo,
    progress: 40,
  },
  {
    id: 12,
    name: "Astro",
    icon: astroLogo,
    progress: 60,
  },
  {
    id: 13,
    name: "Python",
    icon: pythonLogo,
    progress: 40,
  },
];
