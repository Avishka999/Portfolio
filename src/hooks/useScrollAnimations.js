import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return undefined;

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-hero-reveal]').forEach((element, index) => {
        gsap.fromTo(element, { y: 42, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: 0.5 + index * 0.07,
          ease: 'power3.out',
          clearProps: 'transform',
        });
      });

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(element, { y: 34, autoAlpha: 0 }, {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        });
      });

      gsap.to('.hero-art', {
        yPercent: -9,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      });

      gsap.utils.toArray('.project-feature-visual img').forEach((image) => {
        gsap.fromTo(image, { scale: 1.08 }, {
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const refreshFrame = requestAnimationFrame(refresh);
    return () => {
      cancelAnimationFrame(refreshFrame);
      window.removeEventListener('load', refresh);
      context.revert();
    };
  }, []);
}
