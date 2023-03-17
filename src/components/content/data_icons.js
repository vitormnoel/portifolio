import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaFigma,
  FaAngular,
  FaSass,
} from "react-icons/fa";
import {
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiOracle,
  SiFirebase,
  SiMicrosoftazure,
  SiAdobexd,
  SiSubversion,
  SiTailwindcss,
  SiJquery
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";

export default [
  { id: "1", name: "HTML 5", icon: <FaHtml5 size="35" />, tag: "front-end" },
  { id: "2", name: "CSS 3", icon: <FaCss3Alt size="35" />, tag: "front-end" },
  {
    id: "3",
    name: "Flutter",
    icon: <RiFlutterFill size="35" />,
    tag: "front-end",
  },
  { id: "4", name: "React", icon: <FaReact size="35" />, tag: "front-end" },
  {
    id: "6",
    name: "Next.js",
    icon: <SiNextdotjs size="35" />,
    tag: "front-end",
  },
  { id: "22", name: "Angular", icon: <FaAngular size="35" />, tag: "front-end" },
  {
    id: "5",
    name: "JavaScript",
    icon: <SiJavascript size="35" />,
    tag: "front-end",
  },
  {
    id: "25",
    name: "Accessibility",
    icon: <IoAccessibility size="35" />,
    tag: "front-end",
  },
  {
    id: "7",
    name: "tailwind",
    icon: <SiTailwindcss size="35" />,
    tag: "front-end",
  },
  { id: "23", name: "Sass", icon: <FaSass size="35" />, tag: "front-end" },
  
  { id: "14", name: "Node.js", icon: <FaNodeJs size="35" />, tag: "back-end" },
  { id: "24", name: "JQuery", icon: <SiJquery size="35" />, tag: "back-end" },
  {
    id: "10",
    name: "C",
    icon: <p className="text-[35px]">C</p>,
    tag: "back-end",
  },
  { id: "11", name: "Java 8", icon: <FaJava size="35" />, tag: "back-end" },

  {
    id: "12",
    name: "Dart",
    icon: <RiFlutterFill size="35" />,
    tag: "back-end",
  },
  { id: "13", name: "Python", icon: <FaPython size="35" />, tag: "back-end" },
  { id: "8", name: "MySQL", icon: <SiMysql size="35" />, tag: "back-end" },

  {
    id: "15",
    name: "PostgreSQL",
    icon: <SiPostgresql size="35" />,
    tag: "back-end",
  },
  {
    id: "16",
    name: "Oracle DBMS",
    icon: <SiOracle size="35" />,
    tag: "back-end",
  },
  {
    id: "17",
    name: "Firebase",
    icon: <SiFirebase size="35" />,
    tag: "back-end",
  },
  {
    id: "18",
    name: "Azure",
    icon: <SiMicrosoftazure size="35" />,
    tag: "back-end",
  },
  { id: "19", name: "Docker", icon: <FaDocker size="35" />, tag: "back-end" },
  { id: "", name: "Figma", icon: <FaFigma size="35" />, tag: "prototype" },
  {
    id: "20",
    name: "Adobe XD",
    icon: <SiAdobexd size="35" />,
    tag: "prototype",
  },
  {
    id: "21",
    name: "subversion",
    icon: <SiSubversion size="35" />,
    tag: "back-end",
  },
  {
    id: "9",
    name: "Git",
    icon: <FaGithub size="35" />,
    tag: "back-end",
  },
];
