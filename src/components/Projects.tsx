import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import type { Project } from '../data/profileData';
import { Sparkles, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Computer Vision & AI', 'Smart City & Infrastructure', 'Core CS & Systems'];

  const filteredProjects = activeCategory === 'All'
    ? PROFILE_DATA.projects
    : PROFILE_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-[#05070d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI & SOFTWARE ENGINE SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-gradient-cyan">Engineering Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Original computer vision pipelines, smart urban systems, and core computer science engines built with Python, OpenCV, and C.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'glass-panel border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-3xl border-white/10 overflow-hidden group hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Header & Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Project Number */}
                <div className="absolute bottom-4 right-4 z-10 font-mono text-4xl font-extrabold text-white/15 group-hover:text-cyan-400/30 transition-colors">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {project.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed pt-2">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-xl bg-slate-900/60">
                      <div className="text-xs font-bold text-cyan-300 font-mono">{m.value}</div>
                      <div className="text-[9px] text-slate-400 uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    data-cursor="DETAILS"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-bold group/btn"
                  >
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="GITHUB"
                      className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-panel p-8 rounded-3xl border border-cyan-500/40 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-heading font-extrabold text-white mt-3">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-cyan-300 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Problem Solved */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Core Problem Solved
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.problemSolved}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300">
                  Key Technical Features & Architecture
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">
                        {fIdx + 1}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm space-y-1">
                <span className="font-mono text-xs font-bold block uppercase text-emerald-400">
                  Real-World Impact
                </span>
                <p>{selectedProject.impact}</p>
              </div>

              {/* External Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-2">
                  {selectedProject.technologies.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-mono font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository ↗</span>
                  </a>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
