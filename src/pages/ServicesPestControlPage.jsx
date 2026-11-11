import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Bug, 
  ShieldCheck, 
  HelpCircle, 
  Clock, 
  FileText,
  AlertTriangle,
  Play,
  Zap,
  Crosshair,
  Flame,
  Award
} from 'lucide-react';
import { servicePillars, companyDetails } from '../data/siteData';
import Interactive3DCard from '../components/3d/Interactive3DCard';
import Fumigation3DVisualizer from '../components/3d/Fumigation3DVisualizer';
import BeforeAfterSlider from '../components/3d/BeforeAfterSlider';

const ServicesPestControlPage = ({ onOpenQuote }) => {
  const pestData = servicePillars.find(p => p.id === 'pest-control');
  const [selectedPest, setSelectedPest] = useState('termites');

  const pestSymptoms = {
    termites: {
      name: "Subterranean Termites & Wood Borers",
      signs: ["Mud tubes traversing concrete slabs, foundation blocks, or walls", "Hollow-sounding structural timber or sagging ceiling joists", "Discarded swarming wings near doors and window sills", "Cracked paint, bubbling drywall with fine wood frass powder"],
      solution: "High-pressure sub-slab chemical barrier injection using non-repellent Fipronil termiticide with 5-year guaranteed warranty.",
      urgency: "CRITICAL - Severe structural integrity hazard if delayed.",
      media: "/imgs/termitepg-img1.jpg",
      video: "/imgs/bait_compressed.mp4",
      epaSpec: "Sub-slab injection barrier • 185 PSI"
    },
    bedbugs: {
      name: "Bedbug Infestation (Cimex lectularius)",
      signs: ["Itchy linear red bite welts in clusters on arms, neck, and legs", "Rust-colored blood smears on bedsheets, mattresses, and headboards", "Sweet, musty pheromone odor trapped in room corners", "Visible bugs clustered inside seam crevices and electrical wall sockets"],
      solution: "Dual-action thermal aerosol fogging combined with micro-encapsulated ovicide spray targeting egg cycles and nymphs.",
      urgency: "IMMEDIATE - 200+ eggs per female breeding rate.",
      media: "/imgs/crawling-bg.jpg",
      video: "/imgs/man-spraying-insect-spray.mp4",
      epaSpec: "Micro-encapsulated ovicide matrix"
    },
    cockroaches: {
      name: "Cockroaches (German & American)",
      signs: ["Droppings resembling ground black pepper along baseboards", "Pungent oily odor noticeable when opening kitchen cabinets", "Nocturnal sightings when switching on kitchen or bathroom lights", "Cylindrical brown egg capsules (oothecae) under sinks & appliances"],
      solution: "Odorless dinotefuran gel bait placement in micro-crevices + targeted crack-and-crevice pressurized residual barrier.",
      urgency: "HIGH - Carries Salmonella, E. coli, and triggers severe asthma.",
      media: "/imgs/crawling-insect-img1.jpg",
      video: "/imgs/spraying_compressed.mp4",
      epaSpec: "Food-premises safe gel formulation"
    },
    rodents: {
      name: "Roof Rats, Norway Rats & House Mice",
      signs: ["Gnaw marks on PVC water pipes, electrical cables, and ceiling joists", "Spindle-shaped black droppings in attics, pantries, and roof spaces", "Nocturnal scratching, clawing, and scurrying noises inside drywall", "Greasy dark rub marks along skirting boards and wall edges"],
      solution: "Tamper-resistant heavy lockable bait stations + ultrasonic deterrents + heavy-gauge galvanized mesh entry sealing.",
      urgency: "CRITICAL - Severe electrical fire hazard from gnawed wiring.",
      media: "/imgs/rodent-bg.jpg",
      video: "/imgs/trap_compressed.mp4",
      epaSpec: "Second-Generation Anticoagulant & Steel Exclusion"
    },
    mosquitoes: {
      name: "Anopheles, Aedes & Culex Mosquitoes",
      signs: ["High-pitched persistent buzzing around bedrooms and living verandas", "Stagnant drainage and gutter water harboring visible wriggler larvae", "Frequent mosquito bites during dusk and dawn periods in compounds"],
      solution: "Thermal outdoor fogging space spray + biological BTI larvicide application in gutters + indoor UV light suction traps.",
      urgency: "HIGH - Primary vector for Malaria and Dengue fever in Ghana.",
      media: "/imgs/flying-bg.jpg",
      video: "/imgs/fumigation.mp4",
      epaSpec: "Vector control fogging formulation"
    }
  };

  const activePest = pestSymptoms[selectedPest];

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 pt-16">
      
      {/* Sector Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#092214] via-[#06150c] to-[#060d09] border-b border-emerald-900/40 overflow-hidden">
        <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-700 shadow-lg shadow-emerald-950">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                Pest Control & Fumigation • Ghana
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Pest Control & <span className="text-gradient-brand">Scientific Fumigation</span> in Ghana
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Thorough eradication of termites, cockroaches, bedbugs, rodents, and biological pathogens. We deploy low-toxicity formulations applied by trained operators, with ongoing inspection and follow-up to prevent resurgence — without endangering families, pets, or commercial personnel.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 text-white font-black rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Book Immediate Technical Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="px-7 py-4 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Dispatch: {companyDetails.phoneDisplay1}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Interactive3DCard depth={16}>
                <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-600/50 bg-black shadow-2xl shadow-emerald-950 group hud-border">
                  <div className="relative h-80 sm:h-96">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover brightness-95 contrast-110"
                      src="/imgs/fumigation.mp4"
                      poster="/imgs/3d-fumigation-hero.jpg"
                    />
                    <div className="scan-beam"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-950/90 text-emerald-300 border border-emerald-600">
                        LIVE OPERATIONAL DEPLOYMENT
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 tracking-wider">
                        Certified Application Protocol
                      </span>
                      <h4 className="text-base font-bold text-white">
                        Ultra-Low Volume (ULV) Aerosol Misting
                      </h4>
                      <p className="text-[11px] text-slate-300">
                        Hospital-grade airborne disinfection and deep crack penetration across Greater Accra.
                      </p>
                    </div>
                  </div>
                </div>
              </Interactive3DCard>
            </div>

          </div>
        </div>
      </section>

      {/* SHOCKING 3D FUMIGATION VIDEO COMMAND CENTER */}
      <Fumigation3DVisualizer onOpenQuote={onOpenQuote} />

      {/* 4 Core Sub-Services Detailed Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            Specialized Treatments
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Targeted Eradication Protocols
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Engineered chemical matrices calibrated for complete insect and vector colony destruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pestData?.subServices?.map((sub, idx) => (
            <Interactive3DCard key={idx} depth={10}>
              <div className="h-full bg-[#08180e] rounded-3xl p-6 sm:p-8 border border-emerald-700/40 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-emerald-800/50">
                    {sub.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={sub.video}
                        poster={sub.img}
                      />
                    ) : (
                      <img
                        src={sub.img}
                        alt={sub.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "/imgs/banner-img.jpg";
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                    <span className="absolute bottom-3 left-3 text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
                      {sub.slug.replace('-', ' ')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {sub.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {sub.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-900/40 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-mono font-bold">5-Yr Warranty Available</span>
                  <button
                    onClick={onOpenQuote}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 rounded-xl transition-colors shadow-md"
                  >
                    Book This Treatment
                  </button>
                </div>
              </div>
            </Interactive3DCard>
          ))}
        </div>
      </section>

      {/* Interactive Pest Diagnostic & Symptom Checker */}
      <section className="py-20 bg-[#040e07] border-y border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
              <Bug className="w-3.5 h-3.5 text-emerald-400" />
              Interactive Diagnostic Tool
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Identify Your Pest Problem & Recommended Solution
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Select the pest type you suspect to review diagnostic signs, risks, and our certified eradication approach.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {Object.keys(pestSymptoms).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedPest(key)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                  selectedPest === key
                    ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white border-emerald-400 shadow-lg shadow-emerald-950 scale-105'
                    : 'bg-emerald-950/60 text-slate-300 hover:bg-emerald-900/60 border-emerald-800/40'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Diagnostic Card */}
          <Interactive3DCard depth={8} className="max-w-4xl mx-auto">
            <div className="bg-[#07190e] rounded-3xl p-6 sm:p-10 border border-emerald-700/40 shadow-2xl hud-border">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800">
                      {activePest.urgency}
                    </span>
                    <span className="text-xs text-emerald-400 font-mono">{activePest.epaSpec}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activePest.name}
                  </h3>

                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">Common Signs of Infestation:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-200">
                      {activePest.signs.map((sign, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-800/60 text-xs">
                    <span className="font-bold text-emerald-300 block mb-1">Aifa Services Eradication Formula:</span>
                    <p className="text-slate-300 leading-relaxed">{activePest.solution}</p>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={onOpenQuote}
                      className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
                    >
                      <span>Request Treatment for {selectedPest}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-emerald-700/60 bg-black aspect-square shadow-xl">
                    <video
                      key={selectedPest}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      src={activePest.video}
                      poster={activePest.media}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="text-[11px] font-mono font-bold text-emerald-300 bg-black/75 px-3 py-1 rounded-full backdrop-blur-sm border border-emerald-700/50">
                        Targeted Bio-Eradication Active
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Interactive3DCard>

        </div>
      </section>

      {/* Before & After Slider */}
      <BeforeAfterSlider />

      {/* 4-Step Treatment Lifecycle */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            Systematic Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            How Our Certified Pest Treatment Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs mb-4">
              01
            </div>
            <h4 className="text-base font-bold text-white mb-1">Site Survey & Diagnosis</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our technicians thoroughly inspect harborage points, moisture sources, and entry fractures in walls and ceilings.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs mb-4">
              02
            </div>
            <h4 className="text-base font-bold text-white mb-1">Targeted Eradication</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Applying exact calibrated chemical or thermal fogging targeting both active adult populations and juvenile stages.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs mb-4">
              03
            </div>
            <h4 className="text-base font-bold text-white mb-1">Preventive Barrier</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Establishing a continuous chemical or physical exclusion barrier along perimeters to prevent future exterior infiltration.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-xs mb-4">
              04
            </div>
            <h4 className="text-base font-bold text-white mb-1">Warranty & Certification</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Delivery of formal treatment certification records and scheduled follow-up audit check-ins.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Booking Banner */}
      <section className="py-20 bg-[#040e07] border-t border-emerald-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Need emergency fumigation in Accra or Tema today?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our rapid response vans are equipped with hospital-grade foggers, termiticide pumps, and WHO-certified solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center gap-2"
            >
              <span>Schedule Pest Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="px-7 py-4 bg-emerald-950 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct Hotline: {companyDetails.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPestControlPage;
