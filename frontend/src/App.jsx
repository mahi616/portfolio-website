import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Header } from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { useScrollspy } from './hooks/useScrollspy';

function App() {
  const { activeSection, scrollToSection } = useScrollspy([
    'home',
    'about',
    'skills',
    'projects',
    'contact'
  ]);

  return (
    <div className={`min-h-screen transition-colors duration-300 }`}>
      {/* <ThemeToggle isDark={isDark} toggle={toggleTheme} /> */}
      <Header
        // isDark={isDark}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer
        className={`
          py-8 text-center transition-colors duration-300 bg-gray-900 text-white
         }
        `}
      >
        <p>&copy; 2025 Mohit Jodhe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
