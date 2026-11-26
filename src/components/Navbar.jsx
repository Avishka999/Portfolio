import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['About', 'about'],
  ['Expertise', 'skills'],
  ['Work', 'projects'],
  ['Education', 'education'],
];

export function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar" data-reveal="nav">
      <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Avishka Priyashan, home">
        <span className="brand-monogram">AP</span>
        <span className="brand-name">Avishka<span>.</span></span>
      </a>
      <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        {links.map(([label, target]) => <a key={target} href={`#${target}`} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
