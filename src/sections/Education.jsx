import { GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export function Education() {
  return (
    <section id="education" className="section-shell education-section">
      <div className="section-kicker" data-reveal><span className="section-index">04</span><span>Education / The foundation</span></div>
      <div className="education-heading" data-reveal>
        <h2>Experience is<br /><em>always in progress.</em></h2>
        <p>Learning by doing, building, and staying curious about what comes next.</p>
      </div>
      <div className="timeline">
        <article className="timeline-item" data-reveal>
          <div className="timeline-marker"><GraduationCap size={19} /></div>
          <div className="timeline-content"><span className="timeline-date">{personalInfo.graduation}</span><h3>{personalInfo.degree}</h3><p>{personalInfo.university}</p><small>Academic foundation in software development, systems thinking and problem-solving.</small></div>
        </article>
        <article className="timeline-item" data-reveal>
          <div className="timeline-marker"><span>↗</span></div>
          <div className="timeline-content"><span className="timeline-date">2023 — Present</span><h3>Freelance Work</h3><p>Independent software development</p><small>Building practical web solutions while continuing to grow as a full-stack developer.</small></div>
        </article>
      </div>
    </section>
  );
}
