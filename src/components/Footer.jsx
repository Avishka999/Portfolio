import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export function SocialLinks() {
  const items = [{ label: 'GitHub', icon: Github, href: personalInfo.links.github }, { label: 'LinkedIn', icon: Linkedin, href: personalInfo.links.linkedin }, { label: 'Email', icon: Mail, href: personalInfo.links.email ? `mailto:${personalInfo.links.email}` : '' }];
  return <div className="social-links">{items.map(({ label, icon: Icon, href }) => href ? <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={label}><Icon size={18} /></a> : <span key={label} className="social-disabled" title={`${label} link to be added`}><Icon size={18} /></span>)}</div>;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wordmark" aria-hidden="true">AVISHKA<span>.</span></div>
      <div className="footer-main">
        <a className="brand" href="#home"><span className="brand-monogram">AP</span><span className="brand-name">Avishka<span>.</span></span></a>
        <p>Building thoughtfully. Learning continuously.</p>
        <SocialLinks />
        <a className="back-top" href="#home">Back to top <ArrowUpRight size={16} /></a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Avishka Priyashan</span><span>Designed & built with React + GSAP</span></div>
    </footer>
  );
}
