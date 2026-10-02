import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { Building2, Calendar, MapPin, Award, FileText } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#04060a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>GOVERNMENT INTERNSHIP & CAREER TRACK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Smart Governance <span className="text-gradient-emerald">& Urban Data</span> Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Hands-on technical internship with Agra Smart City Limited under the TULIP initiative (MoHUA & AICTE).
          </motion.p>
        </div>

        {/* Timeline Experience Cards */}
        <div className="space-y-8 relative">
          
          {/* Vertical Timeline Guide Bar */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent opacity-30" />

          {PROFILE_DATA.experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative lg:pl-20"
            >
              {/* Timeline Indicator Node */}
              <div className="hidden lg:flex absolute left-5 top-8 w-6 h-6 rounded-full bg-slate-900 border-2 border-emerald-400 items-center justify-center -translate-x-1/2 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Main Card */}
              <div className="glass-panel p-8 rounded-3xl border-white/10 shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
                
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Organization Header */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                        {exp.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono text-xs">
                        {exp.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-emerald-400 font-semibold text-base mt-1">
                        {exp.company}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {exp.department}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-emerald-400" />
                        <span>Program: {exp.program}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>Duration: {exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span>Location: {exp.location}</span>
                      </div>
                    </div>

                    {/* Impact Metric Pills */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {exp.impactMetrics.map((m) => (
                        <div key={m.label} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-center">
                          <div className="text-xs font-bold text-white truncate">{m.value}</div>
                          <div className="text-[9px] text-slate-400 font-mono uppercase mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Responsibilities & Impact */}
                  <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <span>Key Responsibilities & Urban Systems Scope</span>
                      </h4>

                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">
                              ✓
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Tag Cloud */}
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-xs font-mono text-slate-400 block mb-2">
                        TECHNOLOGY & DOMAIN STACK:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 hover:border-cyan-500/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
