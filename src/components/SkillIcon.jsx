import {
  SiPython,
  SiReact,
  SiJavascript,
  SiMysql,
  SiHtml5,
} from "react-icons/si";

const ICONS = {
  python: SiPython,
  react: SiReact,
  javascript: SiJavascript,
  mysql: SiMysql,
  html: SiHtml5,
};

export default function SkillIcon({ id }) {
  const Icon = ICONS[id];
  if (!Icon) return null;
  return <Icon className="skill-card-icon-svg" aria-hidden />;
}
