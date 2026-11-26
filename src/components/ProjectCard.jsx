import { ArrowUpRight, Layers3 } from 'lucide-react';

export function ProjectCard({ project, index }) {
  return (
    <article className={`additional-card additional-card-${index}`}>
      <a className="additional-card-link" href="#contact" aria-label={`Discuss ${project.title}`}>
        <div className="additional-card-visual">
          <div className="additional-card-art"><Layers3 size={36} /><span>{project.artLabel}</span><small>AP / LAB {project.number}</small></div>
          <span className="additional-card-number">{project.number}</span>
          <span className="additional-card-arrow"><ArrowUpRight size={21} /></span>
        </div>
        <div className="additional-card-copy">
          <p className="eyebrow">{project.type}</p>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className="tech-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          <span className="additional-card-cta">Discuss project <ArrowUpRight size={15} /></span>
        </div>
      </a>
    </article>
  );
}
