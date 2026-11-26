import { Braces, Code2, Database, Server, Wrench } from 'lucide-react';

const icons = { Code2, Server, Database, Braces, Wrench };

export function SkillCard({ group }) {
  const Icon = icons[group.icon] || Code2;
  return <article className="skill-card"><div className="skill-icon"><Icon size={21} /></div><h3>{group.title}</h3><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>;
}
