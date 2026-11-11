import React, { useState } from 'react';
import { 
  Scan, 
  Bug, 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  Activity, 
  Crosshair, 
  Layers, 
  CheckCircle2, 
  Phone 
} from 'lucide-react';
import Interactive3DCard from './Interactive3DCard';
import { companyDetails } from '../../data/siteData';

const PestScannerMatrix = ({ onOpenQuote }) => {
  const [selectedPest, setSelectedPest] = useState('termites');

  const pestMatrix = {
    termites: {
      id: "termites",
      name: "Subterranean Termites (Macrotermes)",
      threatLevel: "CRITICAL (Level 5)",
      threatColor: "text-red-400 bg-red-950/80 border-red-700",
      damageTimeframe: "3-6 Months Structural Compromise",
      bioBehavior: "Underground mud-tube network eating cellulose inside drywall, ceiling joists, and structural wood beams.",
      eradicationMethod: "High-pressure sub-slab chemical barrier injection + non-repellent colony transfer termiticide.",
      warranty: "5-Year Renewable Protection Plan",
      epaChemical: "Fipronil / Imidacloprid Complex",
      video: "/imgs/bait_compressed.mp4",
      sensorFrequency: "1,240 Hz Acoustic Wood Detection"
    },
    bedbugs: {
      id: "bedbugs",
      name: "Bedbugs (Cimex lectularius)",
      threatLevel: "SEVERE (Level 4)",
      threatColor: "text-amber-400 bg-amber-950/80 border-amber-700",
      damageTimeframe: "Rapid Exponential Multi-Room Infestation",
      bioBehavior: "Nocturnal blood-feeding parasites hiding inside mattress seams, headboard cavities, and electrical sockets.",
      eradicationMethod: "Dual-phase thermal fogging combined with micro-encapsulated ovicide spray targeting egg cycles.",
      warranty: "90-Day Follow-Up Service",
      epaChemical: "Pyrethroid & Bio-Neonicotinoid Blend",
      video: "/imgs/man-spraying-insect-spray.mp4",
      sensorFrequency: "98.4°F Thermal Heat Cluster"
    },
    cockroaches: {
      id: "cockroaches",
      name: "German Cockroach (Small Kitchen Cockroach)",
      threatLevel: "HIGH (Level 4)",
      threatColor: "text-amber-400 bg-amber-950/80 border-amber-700",
      damageTimeframe: "Severe Commercial Kitchen Contamination",
      bioBehavior: "High bacterial vector carrying Salmonella and E. coli across food prep surfaces and residential pantries.",
      eradicationMethod: "Odorless micro-gel bait matrix placement in hairline crevices + pressurized crack-and-crevice barrier.",
      warranty: "180-Day Monitoring & Follow-Up",
      epaChemical: "Hydramethylnon / Dinotefuran Gel Matrix",
      video: "/imgs/spraying_compressed.mp4",
      sensorFrequency: "Pheromone Trail Bio-Sensor Active"
    },
    mosquitoes: {
      id: "mosquitoes",
      name: "Mosquitoes (Anopheles & Aedes)",
      threatLevel: "PUBLIC HEALTH HAZARD",
      threatColor: "text-rose-400 bg-rose-950/80 border-rose-700",
      damageTimeframe: "Immediate Malaria & Dengue Vector Exposure",
      bioBehavior: "Stagnant drainage and gutter breeding with mass evening swarming across residential compounds.",
      eradicationMethod: "Thermal fogging space spray + biological Bacillus thuringiensis israelensis (BTI) larvicide in gutters.",
      warranty: "Continuous Compound Protection",
      epaChemical: "Permethrin WHO-Grade Formulation",
      video: "/imgs/fumigation.mp4",
      sensorFrequency: "450 Hz Wingbeat Radar Sweep"
    },
    rodents: {
      id: "rodents",
      name: "Rats & Mice (Rattus spp.)",
      threatLevel: "EXTREME (Fire & Bio-Hazard)",
      threatColor: "text-red-400 bg-red-950/80 border-red-700",
      damageTimeframe: "Electrical Wiring Fires & Pipe Gnawing",
      bioBehavior: "Aggressive chewing on power cables, water conduits, ceiling insulation, and food grain storage.",
      eradicationMethod: "Tamper-proof heavy lockable bait stations + ultrasonic exclusion + galvanized metal mesh proofing.",
      warranty: "Structural Seal & Proofing",
      epaChemical: "Second-Generation Anticoagulant Blocks",
      video: "/imgs/trap_compressed.mp4",
      sensorFrequency: "Motion Micro-Radar Activated"
    }
  };

  const current = pestMatrix[selectedPest];

  return (
    <section className="py-20 bg-gradient-to-b from-[#060d09] via-[#041209] to-[#060d09] relative overflow-hidden">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 hud-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-600/50 text-xs font-mono font-bold tracking-wider mb-4">
            <Scan className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>3D HOLOGRAPHIC PEST SCANNER & PROTOCOL MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Advanced Diagnostic <span className="text-gradient-brand">& Eradication Engine</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Select an infestation profile below to inspect real-time foundation scans, laboratory chemical solutions, and technical eradication procedures.
          </p>
        </div>

        {/* Pest Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {Object.values(pestMatrix).map((pest) => {
            const isSelected = selectedPest === pest.id;
            return (
              <button
                key={pest.id}
                onClick={() => setSelectedPest(pest.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-700 to-green-600 text-white border-emerald-400 shadow-xl shadow-emerald-950 scale-105'
                    : 'bg-[#091f13]/80 hover:bg-[#0f2e1e] text-slate-300 border-emerald-900/60'
                }`}
              >
                <Bug className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-emerald-400'}`} />
                <span>{pest.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main 3D Interactive Display */}
        <Interactive3DCard depth={12}>
          <div className="bg-[#040e07] rounded-3xl border border-emerald-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden hud-border">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: 3D Holographic Foundation Scan */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-emerald-500/40 bg-black aspect-video sm:aspect-[4/3] group shadow-inner">
                  
                  {/* The Holographic Scanner Image */}
                  <img
                    src="/imgs/3d-pest-scanner.jpg"
                    alt="3D Holographic Building Foundation Infestation Scan"
                    className="w-full h-full object-cover brightness-95 contrast-125"
                  />

                  {/* Scan beam laser effect */}
                  <div className="scan-beam"></div>
                  <div className="absolute inset-0 scanline opacity-30"></div>

                  {/* Top HUD badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-500/40 font-mono text-[11px] text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>3D SUB-TERRA SCAN // ACTIVE</span>
                  </div>

                  {/* Frequency meter */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3 rounded-xl border border-emerald-500/30 flex items-center justify-between text-[11px] font-mono">
                    <div className="text-slate-300">
                      <span>BIO-ACOUSTIC: </span>
                      <strong className="text-emerald-400">{current.sensorFrequency}</strong>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                      CALIBRATED
                    </span>
                  </div>

                </div>

                {/* Secondary Eradication Video Preview */}
                <div className="bg-[#071d10] p-4 rounded-2xl border border-emerald-800/50 flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-12 rounded-xl overflow-hidden bg-black shrink-0 relative border border-emerald-600/40">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        src={current.video}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Live Eradication Protocol</div>
                      <div className="text-[11px] text-emerald-300">Video Demonstration Active</div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-800">
                    WHO REGISTERED
                  </span>
                </div>
              </div>

              {/* Right Column: Diagnostic & Eradication Solution */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Title & Risk Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-extrabold border ${current.threatColor}`}>
                      {current.threatLevel}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      REF: {selectedPest.toUpperCase()}-2024
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium mt-1">
                    Risk Window: {current.damageTimeframe}
                  </p>
                </div>

                {/* Behavioral Pattern */}
                <div className="bg-[#06170d] p-4 rounded-2xl border border-emerald-900/50 space-y-1.5">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Biological Infestation Pattern:</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {current.bioBehavior}
                  </p>
                </div>

                {/* Elimination Procedure */}
                <div className="bg-[#06170d] p-4 rounded-2xl border border-emerald-900/50 space-y-1.5">
                  <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Professional Eradication Protocol:</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {current.eradicationMethod}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#092213] border border-emerald-700/40">
                    <div className="text-[10px] font-mono text-slate-400">Chemical Matrix</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{current.epaChemical}</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#092213] border border-emerald-700/40">
                    <div className="text-[10px] font-mono text-slate-400">Service Guarantee</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5 truncate">{current.warranty}</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950 flex items-center justify-center gap-2"
                  >
                    <span>Request Targeted Inspection</span>
                    <Zap className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${companyDetails.phone1}`}
                    className="px-5 py-3.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Instant Call</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </Interactive3DCard>

      </div>
    </section>
  );
};

export default PestScannerMatrix;
