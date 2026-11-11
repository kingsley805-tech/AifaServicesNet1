import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Radio, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Crosshair, 
  Flame, 
  Sliders, 
  Sparkles,
  Volume2,
  VolumeX,
  AlertOctagon
} from 'lucide-react';
import Interactive3DCard from './Interactive3DCard';

const Fumigation3DVisualizer = ({ onOpenQuote }) => {
  const [activeChannel, setActiveChannel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isThermalMode, setIsThermalMode] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isSoundMuted, setIsSoundMuted] = useState(true);
  const videoRef = useRef(null);

  const channels = [
    {
      id: "ulv-fog",
      title: "ULV Aerosol Deep Fogging",
      subtitle: "Thermal cloud penetration into attic rafters & HVAC conduits",
      src: "/imgs/fumigation.mp4",
      poster: "/imgs/3d-fumigation-hero.jpg",
      epaBadge: "PROTOCOL ULV-01",
      killRate: "High Efficacy",
      agent: "Deltamethrin Micro-Encapsulated Matrix",
      pressure: "142.5 PSI",
      area: "3,500 sq ft / 15 mins",
      target: "Termites, Cockroaches, Bedbugs & Pathogens"
    },
    {
      id: "spray-mist",
      title: "High-Pressure Micro-Mist Jet",
      subtitle: "Crack & crevice perimeter barrier injection against crawling insects",
      src: "/imgs/spraying_compressed.mp4",
      poster: "/imgs/crawling-bg.jpg",
      epaBadge: "PROTOCOL INJ-04",
      killRate: "Deep Coverage",
      agent: "Fipronil Non-Repellent Chemical Shield",
      pressure: "210.0 PSI",
      area: "Perimeter Foundation Barrier",
      target: "Subterranean Termites & Cockroaches"
    },
    {
      id: "termite-barrier",
      title: "Sub-Slab Termite Soil Injection",
      subtitle: "High-density concrete slab boring and underground chemical saturation",
      src: "/imgs/bait_compressed.mp4",
      poster: "/imgs/termitepg-img1.jpg",
      epaBadge: "PROTOCOL TRM-08",
      killRate: "Protective Barrier",
      agent: "Imidacloprid Structural Foundation Defense",
      pressure: "185.2 PSI",
      area: "5-Year Protection Plan Coverage",
      target: "Subterranean Colony Elimination"
    },
    {
      id: "industrial-safety",
      title: "Hazardous Environment PPE Protocols",
      subtitle: "Grade-A chemical respirators and full-spectrum protective deployment",
      src: "/imgs/7170781-uhd_4096_2160_25fps.mp4",
      poster: "/imgs/about-service-team.jpg",
      epaBadge: "STANDARD EN397-PPE",
      killRate: "Zero Risk",
      agent: "Dual-Cartridge Vapor Absorption Seal",
      pressure: "Atmospheric Safe",
      area: "Industrial Warehouses & Commercial Malls",
      target: "Occupational Safety Standard BS 5385"
    },
    {
      id: "cloud-dispersion",
      title: "Direct Canopy Thermal Fogging",
      subtitle: "Mosquito and vector breeding zone knock-down for large compounds",
      src: "/imgs/gation_compressed.mp4",
      poster: "/imgs/flying-bg.jpg",
      epaBadge: "VECTOR CTRL-02",
      killRate: "Broad Coverage",
      agent: "Permethrin Botanical Bio-Larvicide",
      pressure: "95.0 PSI",
      area: "Open Compounds & Estates",
      target: "Anopheles Mosquitoes & Flying Vectors"
    }
  ];

  const current = channels[activeChannel];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed, activeChannel]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const cycleSpeed = () => {
    const speeds = [1, 1.5, 0.5];
    const nextIndex = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIndex]);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Visual Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 shadow-lg shadow-emerald-950/60 backdrop-blur-md mb-4">
          <Crosshair className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs font-black uppercase tracking-widest text-emerald-300">
            3D Antigravity Bio-Defense Command Center
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Witness Real <span className="text-gradient-brand">Fumigation Power</span> in Action
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
          Watch our certified technicians deploy lethal chemical vapor misting, precision sub-slab injections, and WHO-approved pest eradication across Ghana.
        </p>
      </div>

      {/* Main 3D Cinema Frame */}
      <Interactive3DCard depth={14} className="w-full">
        <div className="relative rounded-3xl overflow-hidden bg-[#05120a] border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/90 hud-border">
          
          {/* Top HUD Bar */}
          <div className="bg-[#030b06]/95 border-b border-emerald-900/60 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>FEED 0{activeChannel + 1} // LIVE SCAN</span>
              </span>
              <span className="hidden sm:inline-block text-slate-600">|</span>
              <span className="font-mono text-slate-400 text-[11px] hidden sm:inline">
                RESOLUTION: 4K ULTRA-HD (60 FPS)
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 font-mono text-[11px] border border-emerald-700/60">
                {current.epaBadge}
              </span>
              <span className="px-2.5 py-1 rounded bg-amber-950/80 text-amber-300 font-mono text-[11px] border border-amber-700/60 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>CERTIFIED APPLICATION</span>
              </span>
            </div>
          </div>

          {/* Video Viewport with HUD Hologram */}
          <div className="relative w-full aspect-video max-h-[620px] bg-black overflow-hidden group">
            
            {/* The Video Element */}
            <video
              ref={videoRef}
              key={current.src}
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full object-cover transition-all duration-700 ${
                isThermalMode 
                  ? 'contrast-150 saturate-200 hue-rotate-90 filter brightness-110' 
                  : 'brightness-95 contrast-110'
              }`}
              poster={current.poster}
              src={current.src}
            />

            {/* Scan Beam / Laser Sweep Overlay */}
            <div className="scan-beam pointer-events-none"></div>

            {/* Scanline CRT overlay */}
            <div className="absolute inset-0 scanline pointer-events-none opacity-40"></div>

            {/* Futuristic HUD Crosshairs & Grid */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 sm:p-8">
              
              {/* Top Corners Reticle */}
              <div className="flex justify-between items-start">
                <div className="bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-500/40 font-mono text-[11px] text-emerald-300 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-bold text-white uppercase">{current.title}</span>
                  </div>
                  <div className="text-[10px] text-slate-300">{current.subtitle}</div>
                </div>

                <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/30 font-mono text-[11px] text-right space-y-0.5">
                  <div className="text-emerald-400 font-bold">ACCRA_MATRIX_GRID: 5.6037° N, 0.1870° W</div>
                  <div className="text-[10px] text-slate-400">DISPERSION RATE: {current.pressure}</div>
                </div>
              </div>

              {/* Center Targeting Reticle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-48 h-48 border border-emerald-500/20 rounded-full flex items-center justify-center">
                  <div className="w-36 h-36 border border-dashed border-emerald-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="w-4 h-4 border-t-2 border-l-2 border-emerald-400 absolute top-0 left-0"></div>
                  <div className="w-4 h-4 border-t-2 border-r-2 border-emerald-400 absolute top-0 right-0"></div>
                  <div className="w-4 h-4 border-b-2 border-l-2 border-emerald-400 absolute bottom-0 left-0"></div>
                  <div className="w-4 h-4 border-b-2 border-r-2 border-emerald-400 absolute bottom-0 right-0"></div>
                  
                  {isThermalMode && (
                    <div className="absolute text-[10px] font-mono text-cyan-300 font-bold bg-black/60 px-2 py-0.5 rounded border border-cyan-500/40">
                      THERMAL BIO-SPECTRUM ACTIVE
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Telemetry HUD Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 bg-black/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-emerald-500/30">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Eradication Efficacy</div>
                  <div className="text-base sm:text-xl font-mono font-black text-emerald-400 flex items-center gap-1">
                    <span>{current.killRate}</span>
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Target Organisms</div>
                  <div className="text-xs sm:text-sm font-semibold text-white truncate">
                    {current.target}
                  </div>
                </div>

                <div className="hidden sm:block">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Active Formulation</div>
                  <div className="text-xs font-semibold text-emerald-300 truncate">
                    {current.agent}
                  </div>
                </div>

                <div className="hidden sm:block">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Coverage Metric</div>
                  <div className="text-xs font-semibold text-amber-300">
                    {current.area}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Floating Control Bar */}
            <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
              <button
                onClick={() => setIsThermalMode(!isThermalMode)}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  isThermalMode 
                    ? 'bg-cyan-600 text-white border-cyan-400 shadow-lg shadow-cyan-950' 
                    : 'bg-black/80 hover:bg-black text-slate-300 border-emerald-700/60'
                }`}
                title="Toggle 3D Thermal Scanner View"
              >
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Thermal Mode</span>
              </button>

              <button
                onClick={cycleSpeed}
                className="px-2.5 py-1.5 rounded-xl bg-black/80 hover:bg-black text-slate-200 border border-emerald-700/60 font-mono text-xs font-bold"
                title="Cycle Playback Speed"
              >
                {playbackSpeed}x
              </button>

              <button
                onClick={togglePlay}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950 transition-transform active:scale-90"
                title={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Interactive Channel Selector Grid */}
          <div className="bg-[#030e06] p-4 sm:p-6 border-t border-emerald-900/60">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                <span>Select 3D Fumigation Video Stream:</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                5 Application Channels Available
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {channels.map((chan, idx) => {
                const isActive = activeChannel === idx;
                return (
                  <button
                    key={chan.id}
                    onClick={() => {
                      setActiveChannel(idx);
                      setIsPlaying(true);
                    }}
                    className={`p-3 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden group ${
                      isActive 
                        ? 'bg-gradient-to-b from-emerald-900/90 to-emerald-950 border-emerald-400 shadow-xl shadow-emerald-950 scale-[1.02]' 
                        : 'bg-[#06180c]/80 hover:bg-[#0a2413] border-emerald-900/50 hover:border-emerald-700'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    )}
                    <div className="text-[10px] font-mono font-bold text-emerald-400 mb-1">
                      CH. 0{idx + 1}
                    </div>
                    <div className="text-xs font-bold text-white leading-tight line-clamp-1 group-hover:text-emerald-300 transition-colors">
                      {chan.title}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between font-mono">
                      <span>{chan.killRate}</span>
                      <span className="text-emerald-400 font-bold">4K</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick CTA banner */}
            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#072412] to-emerald-950 border border-emerald-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-left">
                <div className="p-2.5 rounded-xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 shrink-0">
                  <AlertOctagon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Need Emergency Pest Elimination or Fumigation?</h4>
                  <p className="text-xs text-slate-300">
                    Same-day certified technical deployment available across Greater Accra, Tema, and nationwide.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950 shrink-0 transition-transform active:scale-95"
              >
                Deploy Fumigation Crew
              </button>
            </div>

          </div>

        </div>
      </Interactive3DCard>
    </div>
  );
};

export default Fumigation3DVisualizer;
