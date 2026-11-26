import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const preloaderRef = useRef(null);
  const monogramRef = useRef(null);
  const ruleRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeline = gsap.timeline({
      onComplete: () => setVisible(false),
      delay: reducedMotion ? 0 : 0.1,
    });

    timeline
      .fromTo(monogramRef.current, { clipPath: 'inset(100% 0 0)' }, { clipPath: 'inset(0% 0 0)', duration: reducedMotion ? 0 : 0.38, ease: 'power3.out' })
      .to(ruleRef.current, { scaleX: 1, duration: reducedMotion ? 0 : 0.24, ease: 'power2.out' }, '-=0.12')
      .to(preloaderRef.current, { yPercent: -100, duration: reducedMotion ? 0 : 0.42, ease: 'power3.inOut' }, '+=0.04');

    return () => timeline.kill();
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader" aria-hidden="true" ref={preloaderRef}>
      <div className="preloader-content">
        <span className="preloader-monogram" ref={monogramRef}>AP</span>
        <span className="preloader-rule" ref={ruleRef} />
        <span className="preloader-caption">AVISHKA PRIYASHAN — SOFTWARE ENGINEER</span>
      </div>
    </div>
  );
}
