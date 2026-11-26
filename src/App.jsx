import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Preloader } from './components/Preloader';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import './styles/global.css';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  useScrollAnimations();

  return (
    <>
      <Preloader />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
