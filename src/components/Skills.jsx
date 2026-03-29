import { SKILLS } from "../data/skills";
import SkillIcon from "./SkillIcon";

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <header className="skills-pattern-header">
        <h2 id="skills-heading">My Skills</h2>
        <div className="skills-pattern-divider" aria-hidden />
        <p className="skills-pattern-subtitle">Tools and languages I work with</p>
      </header>

      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <article key={skill.id} className="skill-card">
            <div className="skill-card-icon-wrap">
              <SkillIcon id={skill.id} />
            </div>
            <h3 className="skill-card-name">{skill.name}</h3>
            <p className="skill-card-desc">{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
