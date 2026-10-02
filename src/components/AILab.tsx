import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scan, Brain, Play, RefreshCw, CheckCircle2 } from 'lucide-react';

interface Preset {
  id: string;
  title: string;
  image: string;
  fps: number;
  confidence: number;
  anomaliesDetected: number;
  pipelineStep: string;
  boundingBoxes: { label: string; score: string; x: string; y: string; w: string; h: string; color: string }[];
}

export const AILab: React.FC = () => {
  const presets: Preset[] = [
    {
      id: 'pothole',
      title: 'Municipal Road Pothole & Anomaly Detection',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
      fps: 58.4,
      confidence: 94.8,
      anomaliesDetected: 2,
      pipelineStep: 'Step 3: Contour Spatial Localization',
      boundingBoxes: [
        { label: 'POTHOLE_DEFECT_A', score: '94.8%', x: '22%', y: '35%', w: '35%', h: '25%', color: 'border-cyan-400 bg-cyan-500/10' },
        { label: 'SURFACE_WEAR_B', score: '89.2%', x: '60%', y: '50%', w: '25%', h: '20%', color: 'border-amber-400 bg-amber-500/10' },
      ],
    },
    {
      id: 'traffic',
      title: 'Urban Intersection Traffic Density Analysis',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop',
      fps: 60.0,
      confidence: 97.2,
      anomaliesDetected: 4,
      pipelineStep: 'Step 4: Real-time Density Telemetry Export',
      boundingBoxes: [
        { label: 'VEHICLE_CLUSTER_01', score: '97.2%', x: '15%', y: '40%', w: '30%', h: '30%', color: 'border-purple-400 bg-purple-500/10' },
        { label: 'PEDESTRIAN_ZONE_02', score: '91.5%', x: '55%', y: '25%', w: '25%', h: '35%', color: 'border-emerald-400 bg-emerald-500/10' },
      ],
    },
    {
      id: 'crack',
      title: 'Digital Infrastructure Surface Wear Inspection',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      fps: 52.1,
      confidence: 92.6,
      anomaliesDetected: 1,
      pipelineStep: 'Step 2: Canny Edge & Structural Feature Mapping',
      boundingBoxes: [
        { label: 'STRUCTURAL_CRACK_C', score: '92.6%', x: '30%', y: '20%', w: '40%', h: '50%', color: 'border-rose-400 bg-rose-500/10' },
      ],
    },
  ];

  const [activePreset, setActivePreset] = useState<Preset>(presets[0]);
  const [filterMode, setFilterMode] = useState<'rgb' | 'edges' | 'threshold'>('rgb');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSimulateInference = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 700);
  };

  return (
    <section id="ailab" className="relative py-24 bg-[#04060a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono"
          >
            <Brain className="w-3.5 h-3.5" />
            <span>INTERACTIVE OPENCV VISION PIPELINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Computer Vision <span className="text-gradient-violet">AI Laboratory</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Simulate live OpenCV frame preprocessing, spatial bounding localization, and inference telemetry in real time.
          </motion.p>
        </div>

        {/* AI Lab Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.1)] space-y-8">
          
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            
            {/* Preset Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    setActivePreset(preset);
                    handleSimulateInference();
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                    activePreset.id === preset.id
                      ? 'bg-purple-500 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                      : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {preset.title.split(' ')[0]} {preset.title.split(' ')[1]}
                </button>
              ))}
            </div>

            {/* Viewport Filter Modes */}
            <div className="flex items-center gap-2 bg-slate-900/80 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setFilterMode('rgb')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  filterMode === 'rgb' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'
                }`}
              >
                RGB View
              </button>
              <button
                onClick={() => setFilterMode('edges')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  filterMode === 'edges' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'text-slate-400'
                }`}
              >
                OpenCV Edges
              </button>
              <button
                onClick={() => setFilterMode('threshold')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  filterMode === 'threshold' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400'
                }`}
              >
                Threshold Map
              </button>
            </div>

          </div>

          {/* Main Visualizer Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Simulated Vision Viewport */}
            <div className="lg:col-span-8 relative aspect-video rounded-2xl bg-black border border-white/10 overflow-hidden group">
              
              {/* Background Image with Dynamic OpenCV Filters */}
              <img
                src={activePreset.image}
                alt={activePreset.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  filterMode === 'edges'
                    ? 'filter grayscale contrast-200 invert'
                    : filterMode === 'threshold'
                    ? 'filter grayscale contrast-300 brightness-150'
                    : 'opacity-80'
                }`}
              />

              {/* Grid Lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

              {/* Bounding Box Overlays */}
              {!isProcessing &&
                activePreset.boundingBoxes.map((box, bIdx) => (
                  <motion.div
                    key={bIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`absolute rounded border-2 ${box.color} p-1`}
                    style={{
                      left: box.x,
                      top: box.y,
                      width: box.w,
                      height: box.h,
                    }}
                  >
                    <div className="bg-slate-950/90 text-cyan-300 font-mono text-[9px] px-1.5 py-0.5 rounded inline-block border border-cyan-500/40 font-bold">
                      {box.label} : {box.score}
                    </div>
                  </motion.div>
                ))}

              {/* Processing Overlay */}
              {isProcessing && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-3 z-20">
                  <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin" />
                  <span className="font-mono text-xs text-cyan-300">Running OpenCV Gaussian Blur & Contour Localization...</span>
                </div>
              )}

              {/* Viewport Telemetry Header */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
                <div className="flex items-center gap-2 bg-black/80 px-3 py-1 rounded-full border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>OPENCV ENGINE ACTIVE</span>
                </div>
                <div className="bg-black/80 px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-slate-300">
                  FPS: {activePreset.fps} | CONF: {activePreset.confidence}%
                </div>
              </div>

              {/* Viewport Footer Pipeline Status */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 px-4 py-2 rounded-xl border border-white/10 text-xs font-mono text-slate-300 flex justify-between items-center z-10">
                <span>{activePreset.pipelineStep}</span>
                <button
                  onClick={handleSimulateInference}
                  className="px-2.5 py-1 rounded bg-purple-500 text-white text-[10px] font-bold hover:bg-purple-400 pointer-events-auto flex items-center gap-1"
                >
                  <Play className="w-3 h-3 fill-current" />
                  Re-Run Frame
                </button>
              </div>

            </div>

            {/* Pipeline Stage Inspector Panel */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-2">
                  <Scan className="w-4 h-4 text-purple-400" />
                  <span>Model Pipeline Telemetry</span>
                </h4>

                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Target Scenario</span>
                    <span className="text-white font-bold">{activePreset.title.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Detection Confidence</span>
                    <span className="text-cyan-400 font-bold">{activePreset.confidence}%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Target FPS Target</span>
                    <span className="text-emerald-400 font-bold">{activePreset.fps} FPS</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Anomalies Detected</span>
                    <span className="text-purple-400 font-bold">{activePreset.anomaliesDetected} Regions</span>
                  </div>
                </div>
              </div>

              {/* 4 Pipeline Execution Stages */}
              <div className="space-y-2">
                {[
                  { title: '1. Frame Ingestion', desc: 'Read video stream at 60 FPS via OpenCV VideoCapture', done: true },
                  { title: '2. Preprocessing', desc: 'Apply Gaussian Blur & Canny edge thresholding', done: true },
                  { title: '3. Spatial Contours', desc: 'Find contours & extract bounding box coordinates', done: true },
                  { title: '4. Telemetry Export', desc: 'Stream metrics to smart governance dashboard', done: true },
                ].map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white font-mono">{step.title}</div>
                      <div className="text-[10px] text-slate-400">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
