import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from '../components/ProjectCard';
import { additionalProjects, projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      projects.forEach((project, index) => {
        const scene = section.querySelector(`#project-scene-${index}`);
        ScrollTrigger.create({
          trigger: scene,
          start: 'top 62%',
          end: 'bottom 38%',
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });

      media.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const gallery = galleryRef.current;
        const track = trackRef.current;
        if (!gallery || !track) return undefined;

        const getDistance = () => Math.max(0, track.scrollWidth - gallery.clientWidth);
        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: gallery,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        return () => tween.scrollTrigger?.kill();
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const refreshFrame = requestAnimationFrame(refresh);
    return () => {
      cancelAnimationFrame(refreshFrame);
      window.removeEventListener('load', refresh);
      media.revert();
      context.revert();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const image = section?.querySelector('.project-feature-visual img');
    if (!section || !image || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const parallax = gsap.to(image, {
      yPercent: -4,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.7,
      },
    });

    return () => {
      parallax.scrollTrigger?.kill();
      parallax.kill();
    };
  }, [activeProject.image]);

  return (
    <>
      <section id="projects" className="section-shell projects-section" ref={sectionRef}>
        <div className="section-kicker" data-reveal><span className="section-index">03</span><span>Selected work / A few things I’ve built</span></div>
        <div className="projects-heading" data-reveal>
          <h2>Built with<br /><em>purpose.</em></h2>
          <p>Four projects shaped by curiosity, care and a desire to solve real problems.</p>
        </div>

        <div className="project-showcase">
          <div className="project-feature">
            <div className={`project-feature-visual project-art-${activeProject.art || 'default'}`} aria-live="polite" aria-atomic="true">
              {activeProject.image
                ? <>
                    <img className="project-feature-primary" key={activeProject.image} src={activeProject.image} alt={`${activeProject.title} interface preview`} loading="lazy" />
                    {activeProject.secondaryImage && <img className="project-feature-secondary" src={activeProject.secondaryImage} alt={`${activeProject.title} dashboard screenshot`} loading="lazy" />}
                  </>
                : <div className="finance-art" aria-label="Abstract finance dashboard preview">
                    <div className="finance-art-top"><span>OVERVIEW</span><span>•••</span></div>
                    <div className="finance-art-balance"><small>TOTAL BALANCE</small><strong>$24,680<span>.50</span></strong></div>
                    <div className="finance-art-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="finance-art-bottom"><span>INCOME <b>+$5,200</b></span><span>SPENDING <b>−$1,840</b></span></div>
                  </div>}
              <span className="project-feature-index">{activeProject.number} <span>/ 04</span></span>
              <span className="project-feature-label">SELECTED PROJECT</span>
            </div>
            <div className="project-feature-copy" aria-live="polite" aria-atomic="true">
              <p className="eyebrow">{activeProject.type}</p>
              <h3 key={`${activeProject.title}-heading`}>{activeProject.title}</h3>
              <p className="project-feature-description" key={`${activeProject.title}-description`}>{activeProject.description}</p>
              <div className="tech-tags">{activeProject.technologies.length
                ? activeProject.technologies.map((technology) => <span key={technology}>{technology}</span>)
                : <span>Details to be added</span>}</div>
              <div className="project-feature-actions">
                <a href={`#project-scene-${activeIndex}`} className="text-link">View case study <ArrowUpRight size={16} /></a>
                {activeProject.github && <a href={activeProject.github} target="_blank" rel="noreferrer" aria-label={`${activeProject.title} on GitHub`}><Github size={17} /></a>}
              </div>
            </div>
          </div>

          <div className="project-scenes" aria-label="Selected project stories">
            {projects.map((project, index) => (
              <article id={`project-scene-${index}`} className={`project-scene${activeIndex === index ? ' is-active' : ''}`} key={project.title} aria-current={activeIndex === index ? 'step' : undefined}>
                <span className="project-scene-index">{project.number}</span>
                <div className="project-scene-content">
                  <div className={`project-scene-visual project-art-${project.art || 'default'}`}>
                    {project.image
                      ? <>
                          <img className="project-scene-primary" src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                          {project.secondaryImage && <img className="project-scene-secondary" src={project.secondaryImage} alt={`${project.title} dashboard screenshot`} loading="lazy" />}
                        </>
                      : <span aria-hidden="true">AP / AURAFINANCE</span>}
                  </div>
                  <p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p>
                  <div className="tech-tags">{project.technologies.length ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : <span>Case study in progress</span>}</div>
                </div>
                <span className="project-scene-arrow"><ArrowDown size={17} /></span>
              </article>
            ))}
          </div>
        </div>

        <div className="additional-heading" data-reveal>
          <div><p className="eyebrow">Beyond the featured work</p><h3>Additional projects<span>.</span></h3></div>
          <span>SCROLL TO EXPLORE <ArrowDown size={14} /></span>
        </div>
      </section>

      <section className="additional-gallery" aria-label="Additional projects">
        <div className="additional-gallery-viewport" ref={galleryRef}>
          <div className="additional-gallery-track" ref={trackRef}>
            {additionalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
        <div className="gallery-caption"><span>Independent explorations & coursework</span><span>04 projects <span className="caption-dot">●</span></span></div>
      </section>
    </>
  );
}
