import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenTerminal: () => void;
  accentColor: string;
  setAccentColor: (color: 'cyan' | 'violet' | 'emerald') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTerminal,
  accentColor,
  setAccentColor,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'projects', 'ailab', 'skills', 'certifications', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'AI Lab', href: '#ailab', id: 'ailab' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#04060a]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          data-cursor="HOME"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-cyan-300 group-hover:scale-105 transition-transform duration-300">
            JT
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-lg text-white tracking-wide block leading-none group-hover:text-cyan-300 transition-colors">
              JAY TIWARI
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider block mt-1">
              CV & AI ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                data-cursor="GO"
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full ${
                  isActive ? 'text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/30 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open for AI Roles</span>
          </div>

          {/* Accent Color Switcher */}
          <div className="hidden sm:flex items-center gap-1.5 bg-slate-900/60 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setAccentColor('cyan')}
              className={`w-4 h-4 rounded-full bg-cyan-400 transition-transform ${accentColor === 'cyan' ? 'scale-125 ring-2 ring-cyan-400/50' : 'opacity-60 hover:opacity-100'}`}
              title="Cyan Accent"
            />
            <button
              onClick={() => setAccentColor('violet')}
              className={`w-4 h-4 rounded-full bg-purple-500 transition-transform ${accentColor === 'violet' ? 'scale-125 ring-2 ring-purple-500/50' : 'opacity-60 hover:opacity-100'}`}
              title="Violet Accent"
            />
            <button
              onClick={() => setAccentColor('emerald')}
              className={`w-4 h-4 rounded-full bg-emerald-400 transition-transform ${accentColor === 'emerald' ? 'scale-125 ring-2 ring-emerald-400/50' : 'opacity-60 hover:opacity-100'}`}
              title="Emerald Accent"
            />
          </div>

          {/* Secret Terminal Trigger Button */}
          <button
            onClick={onOpenTerminal}
            data-cursor="TERMINAL"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 text-xs font-mono transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] group"
          >
            <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">CLI Mode</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] bg-slate-800 border border-slate-700 rounded text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-[65px] inset-x-0 bg-[#070b14]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl z-40"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-slate-900/50 border border-white/5 text-slate-200 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-sm font-medium flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-cyan-400">→</span>
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Theme Accent</span>
                <div className="flex gap-2">
                  <button onClick={() => setAccentColor('cyan')} className="px-3 py-1 rounded text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">Cyan</button>
                  <button onClick={() => setAccentColor('violet')} className="px-3 py-1 rounded text-xs bg-purple-500/20 text-purple-300 border border-purple-500/40">Violet</button>
                  <button onClick={() => setAccentColor('emerald')} className="px-3 py-1 rounded text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">Emerald</button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
