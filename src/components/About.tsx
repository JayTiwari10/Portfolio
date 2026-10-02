import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { Cpu, Database, Network, Building2, Eye, Award, CheckCircle2, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mindset' | 'fundamentals' | 'academics'>('mindset');

  const iconsMap: Record<string, React.ReactNode> = {
    Eye: <Eye className="w-5 h-5 text-cyan-400" />,
    Building2: <Building2 className="w-5 h-5 text-emerald-400" />,
    Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
    Cloud: <Award className="w-5 h-5 text-sky-400" />,
  };

  return (
    <section id="about" className="relative py-24 bg-[#05070d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>SYSTEM PROFILE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Engineering <span className="text-gradient-cyan">Intelligence</span> for Real-World Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Detailed technical bio, computer science foundation, and analytical approach to solving complex problems.
          </motion.p>
        </div>

        {/* 4 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROFILE_DATA.corePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center">
                  {iconsMap[pillar.icon] || <Cpu className="w-5 h-5 text-cyan-400" />}
                </div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-cyan-400">
                <span>PILLAR 0{idx + 1}</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabbed Storytelling Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Tab Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <button
              onClick={() => setActiveTab('mindset')}
              className={`w-full p-5 rounded-2xl text-left transition-all duration-300 border ${
                activeTab === 'mindset'
                  ? 'bg-cyan-500/10 border-cyan-500/40 text-white shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                  : 'glass-panel border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${activeTab === 'mindset' ? 'bg-cyan-400' : 'bg-slate-700'}`} />
                <span className="font-heading font-bold text-base">Analytical Mindset & Vision</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 pl-6">
                How I approach clean code, scalable computer vision, and data accuracy.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('fundamentals')}
              className={`w-full p-5 rounded-2xl text-left transition-all duration-300 border ${
                activeTab === 'fundamentals'
                  ? 'bg-purple-500/10 border-purple-500/40 text-white shadow-[0_0_20px_rgba(168,85,247,0.1)]'
                  : 'glass-panel border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${activeTab === 'fundamentals' ? 'bg-purple-400' : 'bg-slate-700'}`} />
                <span className="font-heading font-bold text-base">Core CS Fundamentals</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 pl-6">
                Operating Systems, DBMS, Computer Networks & C/Python optimization.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('academics')}
              className={`w-full p-5 rounded-2xl text-left transition-all duration-300 border ${
                activeTab === 'academics'
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-white shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                  : 'glass-panel border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${activeTab === 'academics' ? 'bg-emerald-400' : 'bg-slate-700'}`} />
                <span className="font-heading font-bold text-base">IET Agra Academic Track</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 pl-6">
                B.E. Computer Science degree path at Dr. Bhim Rao Ambedkar University.
              </p>
            </button>
          </div>

          {/* Active Tab Panel Content */}
          <div className="lg:col-span-8 glass-panel p-8 rounded-3xl border-white/10 min-h-[380px] flex flex-col justify-between">
            {activeTab === 'mindset' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                    <span>Engineering Focus & Methodology</span>
                  </h3>
                  <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                    PYTHON & CV SPECIALIST
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-5 flex justify-center">
                    <div className="relative w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-cyan-500/40 bg-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.25)] group">
                      <img
                        src={PROFILE_DATA.profileImage}
                        alt={PROFILE_DATA.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                        <span className="font-mono text-xs text-cyan-300 font-bold">JAY TIWARI // CV ENGINEER</span>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-7">
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                      {PROFILE_DATA.aboutSummary}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>CLEAN CODE PRINCIPLES</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Writing modular, self-documenting Python & C code designed for maintainability and algorithm efficiency.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>DATA-DRIVEN GOVERNANCE</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Transforming raw urban feeds into actionable decision-making telemetry for smart city administrative officers.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'fundamentals' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Core CS Theoretical & Systems Foundation
                  </h3>
                  <span className="font-mono text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">
                    CS MAJOR
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed text-sm">
                  Beyond high-level AI frameworks, I maintain a deep understanding of core computer science fundamentals that power robust software engineering:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                    <Cpu className="w-6 h-6 text-purple-400" />
                    <div className="text-sm font-bold text-white">Operating Systems</div>
                    <p className="text-xs text-slate-400">Process scheduling, memory management, threads & concurrency synchronization.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                    <Database className="w-6 h-6 text-cyan-400" />
                    <div className="text-sm font-bold text-white">DBMS & SQL</div>
                    <p className="text-xs text-slate-400">Relational schema design, normalization, indexing structures, and SQL optimization.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                    <Network className="w-6 h-6 text-emerald-400" />
                    <div className="text-sm font-bold text-white">Computer Networks</div>
                    <p className="text-xs text-slate-400">OSI layers, TCP/IP protocol suite, socket programming, and data routing concepts.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'academics' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {PROFILE_DATA.education.map((edu) => (
                  <div key={edu.institution} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-cyan-400 font-mono mt-1">
                          {edu.affiliation}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                        {edu.startYear}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
                      <div className="text-base font-bold text-white">{edu.degree}</div>
                      <p className="text-xs text-slate-400">Status: {edu.status}</p>
                      <ul className="space-y-2 pt-2">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-cyan-400 font-mono mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Bottom Telemetry Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>LOCATION: {PROFILE_DATA.location}</span>
              <span className="text-cyan-400">PROFILE STATUS: 100% VERIFIED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
