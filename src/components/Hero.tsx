import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { Eye, ShieldCheck, ArrowRight, Terminal, Building2, Cpu, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
  accentColor: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, accentColor }) => {
  const roles = [
    "Computer Vision Engineer",
    "Smart Infrastructure AI Specialist",
    "Ex-Intern @ Agra Smart City Limited",
    "Python & OpenCV Specialist",
    "CSE Major @ IET Agra"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const getAccentGradient = () => {
    switch (accentColor) {
      case 'violet':
        return 'from-purple-400 via-violet-300 to-indigo-500';
      case 'emerald':
        return 'from-emerald-400 via-teal-300 to-cyan-500';
      default:
        return 'from-cyan-400 via-sky-300 to-indigo-400';
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>AI & SMART INFRASTRUCTURE ARCHITECT</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black text-white tracking-tight leading-[0.95]">
                JAY{' '}
                <span className={`bg-gradient-to-r ${getAccentGradient()} bg-clip-text text-transparent`}>
                  TIWARI
                </span>
              </h1>

              {/* Dynamic Role Subtitle */}
              <div className="h-10 mt-4 flex items-center">
                <span className="text-xl sm:text-2xl font-mono text-slate-300 flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">&gt;</span>
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-cyan-300 font-semibold"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </span>
              </div>
            </motion.div>

            {/* Bio Paragraph based on LinkedIn PDF */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl"
            >
              {PROFILE_DATA.tagline}{' '}
              <span className="text-slate-400">
                Selected for the government TULIP internship with Agra Smart City Limited. Oracle OCI AI Foundations Certified with deep focus in OpenCV, Machine Learning, and low-level computer science algorithms.
              </span>
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="glass-panel p-3 rounded-2xl border-white/10">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                  <Building2 className="w-4 h-4" />
                  <span>Government</span>
                </div>
                <div className="text-sm font-bold text-white mt-1">TULIP Smart City</div>
                <div className="text-[10px] text-slate-400">MoHUA & AICTE</div>
              </div>

              <div className="glass-panel p-3 rounded-2xl border-white/10">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Oracle Cloud</span>
                </div>
                <div className="text-sm font-bold text-white mt-1">OCI AI Associate</div>
                <div className="text-[10px] text-slate-400">2025 Certified</div>
              </div>

              <div className="glass-panel p-3 rounded-2xl border-white/10 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                  <Cpu className="w-4 h-4" />
                  <span>Engineering</span>
                </div>
                <div className="text-sm font-bold text-white mt-1">CSE @ IET Agra</div>
                <div className="text-[10px] text-slate-400">Computer Science Major</div>
              </div>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                data-cursor="SHOWCASE"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Explore AI Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#experience"
                data-cursor="TIMELINE"
                className="px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-cyan-500/40 text-sm font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <span>TULIP Experience</span>
              </a>

              <button
                onClick={onOpenTerminal}
                data-cursor="CLI"
                className="px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 text-xs font-mono transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Launch CLI</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side Futuristic Vision Analytics Telemetry HUD */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md aspect-[3/4] rounded-3xl glass-panel p-6 border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col justify-between"
            >
              {/* Top HUD Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-mono text-xs text-cyan-300 tracking-wider">OPENCV VISION HUD v2.5</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">FPS: 60.0 | RES: 1080P</span>
              </div>

              {/* Simulated Computer Vision Grid & Bounding Box Overlay */}
              <div className="relative flex-1 my-4 rounded-2xl bg-slate-950 border border-white/10 overflow-hidden flex items-center justify-center group">
                <img
                  src={PROFILE_DATA.profileImage}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-contain opacity-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Grid Lines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                {/* Simulated AI Facial & Spatial Feature Bounding Boxes */}
                <motion.div
                  animate={{
                    x: [-10, 10, -5, 0],
                    y: [-5, 5, -2, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
                  className="absolute top-1/4 left-1/4 right-1/4 h-36 border-2 border-cyan-400 bg-cyan-500/10 rounded-lg p-1.5 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <div className="bg-cyan-500 text-black font-mono font-extrabold text-[9px] px-1.5 py-0.5 inline-block rounded-xs">
                    SUBJECT: JAY TIWARI // 99.8%
                  </div>
                  <div className="absolute bottom-1 right-2 font-mono text-[8px] text-cyan-300 bg-black/80 px-1 rounded">
                    [CV_ENGINEER_VERIFIED]
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    x: [10, -10, 0],
                    y: [10, -5, 0],
                  }}
                  transition={{ duration: 7, repeat: Infinity, repeatType: 'mirror' }}
                  className="absolute bottom-4 left-4 border border-emerald-400 bg-emerald-500/10 px-2 py-1 rounded"
                >
                  <div className="text-emerald-400 font-mono font-bold text-[9px]">
                    ● TULIP SMART CITY INTERN
                  </div>
                </motion.div>

                {/* Crosshair Scanner */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 border border-cyan-400/40 rounded-full flex items-center justify-center animate-spin">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Strip */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>MODEL STATUS: ONLINE</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={PROFILE_DATA.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <span>•</span>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL TO DISCOVER</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
