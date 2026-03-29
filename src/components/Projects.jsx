import { projects } from "../data/Projects.js";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} className="project-image" />

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className="tech-list">
              {item.tech.map((t, index) => (
                <span key={index} className="tech-badge">{t}</span>
              ))}
            </div>

            {item.liveUrl && (
              <div className="links">
                <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}