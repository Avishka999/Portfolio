import { skillGroups } from '../data/skills';
import { SkillCard } from '../components/SkillCard';

export function Skills() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="section-kicker" data-reveal><span className="section-index">02</span><span>Expertise / What I work with</span></div>
      <div className="skills-heading" data-reveal>
        <h2>Tools for turning<br /><em>ideas into reality.</em></h2>
        <p>A practical set of technologies I use to explore ideas, solve problems and build dependable software.</p>
      </div>
      <div className="skills-grid">{skillGroups.map((group) => <div data-reveal key={group.title}><SkillCard group={group} /></div>)}</div>
    </section>
  );
}
