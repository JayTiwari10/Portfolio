import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { Eye, Code2, Cpu, Cloud, Terminal, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('AI & Computer Vision');

  const categoryIcons: Record<string, React.ReactNode> = {
    "AI & Computer Vision": <Eye className="w-4 h-4 text-cyan-400" />,
    "Programming Languages": <Code2 className="w-4 h-4 text-purple-400" />,
    "Core CS Fundamentals": <Cpu className="w-4 h-4 text-emerald-400" />,
    "Cloud & Infrastructure": <Cloud className="w-4 h-4 text-sky-400" />,
  };

  return (
    <section id="skills" className="relative py-24 bg-[#05070d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE SKILL MATRIX</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Technical Competencies & <span className="text-gradient-cyan">Stack Mastery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Categorized technical capabilities spanning AI, Computer Vision, C/Python programming, and core CS fundamentals.
          </motion.p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {Object.keys(PROFILE_DATA.skillsByCategory).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-3 rounded-2xl text-xs font-mono transition-all duration-300 flex items-center gap-2 border ${
                selectedCategory === category
                  ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 font-bold shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'glass-panel border-white/5 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {categoryIcons[category] || <Terminal className="w-4 h-4" />}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROFILE_DATA.skillsByCategory[selectedCategory as keyof typeof PROFILE_DATA.skillsByCategory]?.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                    {skill.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Category: {selectedCategory}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-base font-extrabold text-cyan-300">
                    {skill.level}%
                  </span>
                  <span className="block text-[9px] font-mono text-slate-400 uppercase">
                    Proficiency
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-950 border border-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.08 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                <span>VERIFIED SKILL</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> ACTIVE
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
