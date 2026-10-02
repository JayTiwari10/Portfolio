import React from 'react';
import { PROFILE_DATA } from '../data/profileData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-[#030407] border-t border-white/5 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side Brand Info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold font-heading text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span>JAY TIWARI</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Computer Vision Engineer & Smart Infrastructure AI Specialist
          </p>
        </div>

        {/* Center System Telemetry Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PORTFOLIO v2.5 // ALL SYSTEMS OPERATIONAL</span>
        </div>

        {/* Right Side Social & Back To Top */}
        <div className="flex items-center gap-4">
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300 transition-colors p-2"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300 transition-colors p-2"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[10px]">TOP</span>
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/5 text-center text-[10px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          © {new Date().getFullYear()} Jay Tiwari. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Engineered with Precision & Clean Code</span>
        </div>
      </div>
    </footer>
  );
};
