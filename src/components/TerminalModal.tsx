import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE_DATA } from '../data/profileData';
import { X, Terminal, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-2 text-xs text-cyan-300">
          <div className="font-bold">⚡ JAY TIWARI OS [Version 2.5.0-CV]</div>
          <div>Type <span className="text-purple-400 font-bold">'help'</span> to view available commands.</div>
          <div>Try typing <span className="text-emerald-400 font-bold">'sudo'</span> or <span className="text-yellow-400 font-bold">'easteregg'</span> for secret surprises!</div>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold mb-2">Available System Commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono">
              <div><span className="text-cyan-300 font-bold">bio</span> - Profile Summary</div>
              <div><span className="text-cyan-300 font-bold">skills</span> - Technical Matrix</div>
              <div><span className="text-cyan-300 font-bold">projects</span> - Vision Projects</div>
              <div><span className="text-cyan-300 font-bold">experience</span> - TULIP Smart City</div>
              <div><span className="text-cyan-300 font-bold">certifications</span> - Credentials</div>
              <div><span className="text-cyan-300 font-bold">contact</span> - Phone & Email</div>
              <div><span className="text-cyan-300 font-bold">matrix</span> - Matrix Stream</div>
              <div><span className="text-cyan-300 font-bold">easteregg</span> - Secret Unlock</div>
              <div><span className="text-cyan-300 font-bold">clear</span> - Clear Terminal</div>
            </div>
          </div>
        );
        break;

      case 'bio':
      case 'about':
        output = (
          <div className="text-xs text-slate-300 space-y-2">
            <div className="text-cyan-400 font-bold">{PROFILE_DATA.name} | {PROFILE_DATA.title}</div>
            <p>{PROFILE_DATA.aboutSummary}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs text-slate-300 space-y-2">
            <div className="text-purple-400 font-bold">Verified Technical Stack:</div>
            <div className="space-y-1">
              <div><span className="text-cyan-300 font-bold">AI / CV:</span> Computer Vision, OpenCV, Machine Learning, Data Science</div>
              <div><span className="text-cyan-300 font-bold">Languages:</span> Python, C Programming, C++, SQL</div>
              <div><span className="text-cyan-300 font-bold">Core CS:</span> Operating Systems, DBMS, Computer Networks</div>
              <div><span className="text-cyan-300 font-bold">Cloud:</span> Oracle Cloud Infrastructure (OCI AI), Smart Urban Systems</div>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs text-slate-300 space-y-2">
            <div className="text-emerald-400 font-bold">Featured Projects:</div>
            {PROFILE_DATA.projects.map((p, idx) => (
              <div key={p.id} className="border-l-2 border-cyan-500 pl-2 py-0.5">
                <span className="text-cyan-300 font-bold">[{idx + 1}] {p.title}</span> - {p.tagline}
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="text-xs text-slate-300 space-y-2">
            <div className="text-emerald-400 font-bold">Agra Smart City Limited (TULIP Program):</div>
            <p>Smart City Intern – Department of Information Systems (July 2025 – October 2025)</p>
            <p>Contributed to urban data systems, digital infrastructure planning, and smart governance technology under MoHUA & AICTE.</p>
          </div>
        );
        break;

      case 'certifications':
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <div className="text-purple-400 font-bold">Verified Credentials:</div>
            <div>• Oracle Cloud Infrastructure 2025 AI Foundations Associate</div>
            <div>• The Urban Learning Internship Program (TULIP) - MoHUA & AICTE</div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <div className="text-cyan-400 font-bold">Direct Contact Telemetry:</div>
            <div>Email: <a href={`mailto:${PROFILE_DATA.email}`} className="text-cyan-300 underline">{PROFILE_DATA.email}</a></div>
            <div>Phone: <span className="text-cyan-300">{PROFILE_DATA.phone}</span></div>
            <div>Location: {PROFILE_DATA.location}</div>
            <div>LinkedIn: <a href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PROFILE_DATA.linkedin}</a></div>
          </div>
        );
        break;

      case 'matrix':
        output = (
          <div className="text-emerald-400 text-xs font-mono animate-pulse">
            01001010 01000001 01011001 00100000 01010100 01001001 01010111 01000001 01010010 01001001<br />
            OPENCV_INFERENCE_ENGINE_OK // CUDA_ACCELERATED_OK // TULIP_MOHUA_AICTE_VERIFIED
          </div>
        );
        break;

      case 'sudo':
      case 'easteregg':
      case 'secret':
        triggerConfetti();
        output = (
          <div className="text-yellow-400 font-bold text-xs space-y-1">
            <div>🎉 ACCESS GRANTED! You found Jay Tiwari's Secret Easter Egg!</div>
            <div>"Driven by curiosity, clean code, and passion for computer vision."</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="text-rose-400 text-xs">
            Command not recognized: '<span className="font-bold">{cmd}</span>'. Type '<span className="text-cyan-300 underline font-bold">help</span>' for a list of valid commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-3xl glass-panel rounded-3xl border border-cyan-500/40 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col h-[520px]"
        >
          {/* Terminal Title Bar */}
          <div className="px-6 py-4 bg-slate-950 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 pl-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>jay-tiwari-terminal@dev-shell:~</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Body */}
          <div
            className="flex-1 p-6 overflow-y-auto space-y-4 font-mono text-sm bg-black/90 text-slate-200"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-cyan-400 font-bold">jay@tiwari-tech:~$</span>
                    <span className="text-white font-bold">{item.command}</span>
                  </div>
                )}
                <div className="pl-2">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Input */}
          <form onSubmit={handleCommandSubmit} className="p-4 bg-slate-950 border-t border-white/10 flex items-center gap-3">
            <span className="text-cyan-400 font-mono text-xs font-bold shrink-0">
              jay@tiwari-tech:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'bio', 'projects', 'sudo')..."
              className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 text-xs font-mono border border-cyan-500/40 flex items-center gap-1"
            >
              <span>Exec</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
