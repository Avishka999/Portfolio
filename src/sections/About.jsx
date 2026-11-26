import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="section-kicker" data-reveal><span className="section-index">01</span><span>About / The person behind the pixels</span></div>
      <div className="about-heading" data-reveal>
        <h2>Curious by nature.<br /><em>Builder by choice.</em></h2>
        <p>Good software should feel considered: clear in its purpose, thoughtful in its details, and dependable when it matters.</p>
      </div>
      <div className="about-grid">
        <div className="about-lead" data-reveal>
          <p>{personalInfo.objective}</p>
          <a className="text-link" href="#contact">A little more about me <ArrowUpRight size={17} /></a>
        </div>
        <div className="about-details">
          <div className="detail-item" data-reveal><GraduationCap /><div><span>Education</span><strong>{personalInfo.degree}</strong><small>{personalInfo.university} · {personalInfo.graduation}</small></div></div>
          <div className="detail-item" data-reveal><span className="detail-symbol">⌘</span><div><span>Focus</span><strong>Full-Stack Development</strong><small>Frontend interfaces & backend systems</small></div></div>
          <div className="detail-item" data-reveal><span className="detail-symbol">↗</span><div><span>Experience</span><strong>{personalInfo.experience}</strong><small>Practical solutions for real-world needs</small></div></div>
        </div>
      </div>
    </section>
  );
}
