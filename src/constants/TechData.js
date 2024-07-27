import { RiReactjsLine, RiJavaLine } from "react-icons/ri";
import { SiMysql, SiJavascript, SiCss3 } from "react-icons/si";
import {  FaHtml5, FaGit, FaNode } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { v4 as uuid } from "uuid";

export const technologies = [
  { id: uuid(), text: "React.js", Icon: RiReactjsLine, clName: "react" },
  { id: uuid(), text: "Java", Icon: RiJavaLine, clName: "java" },
  {
    id: uuid(),
    text: "Spring Boot",
    Icon: BiLogoSpringBoot,
    clName: "spring",
  },
  { id: uuid(), text: "MySQL", Icon: SiMysql, clName: "mysql" },
  { id: uuid(), text: "Node.js", Icon: FaNode, clName: "node" },
  { id: uuid(), text: "JavaScript", Icon: SiJavascript, clName: "js" },
  { id: uuid(), text: "HTML5", Icon: FaHtml5, clName: "html" },
  { id: uuid(), text: "CSS3", Icon: SiCss3, clName: "css" },
  { id: uuid(), text: "Git", Icon: FaGit, clName: "git" },
];
