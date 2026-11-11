import React, { useState, useRef } from 'react';
import { Sparkles, AlertTriangle, ShieldCheck, ArrowLeftRight } from 'lucide-react';
import Interactive3DCard from './Interactive3DCard';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 bg-[#040d07] relative overflow-hidden border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            <ArrowLeftRight className="w-3.5 h-3.5 text-emerald-400" />
            Interactive Treatment Proof
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Before & After: <span className="text-gradient-brand">Total Elimination</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Drag the slider across the frame to inspect the transformation of active subterranean termite damage into a professionally treated protective barrier.
          </p>
        </div>

        {/* 3D Container */}
        <Interactive3DCard depth={10} className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-80 sm:h-[460px] rounded-3xl overflow-hidden border-2 border-emerald-600/50 shadow-2xl shadow-emerald-950 select-none cursor-ew-resize bg-black hud-border"
          >
            {/* "AFTER" Layer (Full Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/imgs/3d-fumigation-hero.jpg"
                alt="After professional fumigation treatment"
                className="w-full h-full object-cover brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 right-6 bg-[#041409]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-500/50 text-right">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-mono font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>AFTER: TREATED & PROTECTED</span>
                </span>
                <p className="text-[11px] text-slate-300">WHO Eco-Friendly Chemical Fog Diffusion</p>
              </div>
            </div>

            {/* "BEFORE" Layer (Clipped to sliderPosition) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}>
                <img
                  src="/imgs/termitepg-img1.jpg"
                  alt="Before Treatment - Active Infestation"
                  className="w-full h-full object-cover filter contrast-125 sepia-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 bg-red-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-red-600/60 text-left">
                  <span className="inline-flex items-center gap-1.5 text-red-400 text-xs font-mono font-bold">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span>BEFORE: ACTIVE TERMITE INFESTATION</span>
                  </span>
                  <p className="text-[11px] text-slate-300">Severe wood hollow decay & mud tubes</p>
                </div>
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 text-black border-2 border-white shadow-2xl flex items-center justify-center pointer-events-auto">
                <ArrowLeftRight className="w-4 h-4 font-black" />
              </div>
            </div>

            {/* Hint pill */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-[10px] font-mono text-emerald-300 pointer-events-none">
              SLIDE TO REVEAL TRANSFORMATION
            </div>

          </div>
        </Interactive3DCard>

      </div>
    </section>
  );
};

export default BeforeAfterSlider;
