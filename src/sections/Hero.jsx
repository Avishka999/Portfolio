import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { Button, DownloadButton } from '../components/Button';
import { personalInfo } from '../data/personalInfo';

export function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow" data-hero-reveal>
          <span className="status-dot" /> Software engineer <span className="eyebrow-divider">/</span> Sri Lanka
        </p>
        <h1 className="hero-title" aria-label="Thoughtful software. Meaningful impact.">
          <span className="hero-line"><span className="hero-word" data-hero-reveal>Thoughtful</span></span>
          <span className="hero-line"><span className="hero-word" data-hero-reveal>software<span className="hero-period">.</span></span></span>
          <span className="hero-line hero-line-accent"><span><span className="hero-word" data-hero-reveal>Meaningful</span> <span className="hero-word" data-hero-reveal>impact.</span></span></span>
        </h1>
        <div className="hero-summary">
          <p aria-label={personalInfo.introduction}>
            {personalInfo.introduction.split(/(?<=[.!?])\s+/).map((line, index) => <span className="hero-summary-line" data-hero-reveal key={index}>{line}</span>)}
          </p>
          <span className="hero-summary-index" data-hero-reveal>AP — 2026</span>
        </div>
        <div className="hero-actions" data-hero-reveal>
          <Button href="#projects" variant="primary">Explore selected work <ArrowUpRight size={17} /></Button>
          <DownloadButton path={personalInfo.cvPath} />
        </div>
      </div>
      <div className="hero-art" aria-label="Abstract AP monogram artwork" data-parallax>
        <div className="hero-art-grid" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-art-disc">
          <span className="hero-art-label">DESIGN<br />MEETS<br />ENGINEERING</span>
          <span className="hero-art-monogram">AP</span>
          <span className="hero-art-year">EST. 2025</span>
        </div>
        <div className="hero-float hero-float-code"><span>01 / BUILD</span><code>&lt;ideas /&gt;</code></div>
        <div className="hero-float hero-float-status"><span className="status-dot" /> Open to opportunities</div>
      </div>
      <a className="scroll-cue" href="#about"><span className="scroll-cue-line" /><span>Scroll to discover</span><ArrowDown size={14} /></a>
    </section>
  );
}
