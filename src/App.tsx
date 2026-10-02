import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { AILab } from './components/AILab';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HeroCanvas } from './components/HeroCanvas';
import { CustomCursor } from './components/CustomCursor';
import { TerminalModal } from './components/TerminalModal';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [accentColor, setAccentColor] = useState<'cyan' | 'violet' | 'emerald'>('cyan');

  // Keyboard shortcut listener (Ctrl+K or Cmd+K to trigger Terminal Modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#04060a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">
      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Interactive HTML5 Neural Canvas Background */}
      <HeroCanvas />

      {/* Header Bar */}
      <Header
        onOpenTerminal={() => setTerminalOpen(true)}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          accentColor={accentColor}
        />
        <About />
        <Experience />
        <Projects />
        <AILab />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Secret CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
};

export default App;
