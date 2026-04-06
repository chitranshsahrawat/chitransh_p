import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GlobalFocus from './components/GlobalFocus';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
<<<<<<< HEAD
import LoadingScreen from './components/LoadingScreen';
=======
>>>>>>> e306a14e6715e283f0fa4cc82dda236b34b0a9b6

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        } else if (href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen">
<<<<<<< HEAD
      <LoadingScreen />
=======
>>>>>>> e306a14e6715e283f0fa4cc82dda236b34b0a9b6
      <CustomCursor />
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GlobalFocus />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
