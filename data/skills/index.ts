import backend from "./backend";
import database from "./database";
import frontend from "./frontend";
import language from "./language";
import tools from "./tools";

export interface ISkill {
  alt: string;
  img: string;
  official: string;
  description: string;
}

export default [
  { data: language, title: "Programming Languages" },
  { data: frontend, title: "Framework/Libraries Frontend" },
  { data: backend, title: "Framework/Libraries Backend" },
  { data: database, title: "Database" },
  { data: tools, title: "Tools" },
];
