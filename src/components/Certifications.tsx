import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { ShieldCheck, CheckCircle2, Cloud, Building2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 bg-[#04060a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Certifications & <span className="text-gradient-violet">Credentials</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Official certifications verified from Oracle Corporation and the Government of India (MoHUA & AICTE).
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROFILE_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-3xl border-white/10 hover:border-purple-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    {cert.issuer.includes('Oracle') ? <Cloud className="w-6 h-6" /> : <Building2 className="w-6 h-6" />}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold">
                    {cert.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs font-mono text-cyan-400">
                    <span>Issuer: {cert.issuer}</span>
                    <span>•</span>
                    <span>Year: {cert.date}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Verified Tags */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  VERIFIED COMPETENCIES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cert.skillsVerified.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-xs font-mono text-slate-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
