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
  Play
} from 'lucide-react';
import { servicePillars, companyDetails } from '../data/siteData';

const ServicesPestControlPage = ({ onOpenQuote }) => {
  const pestData = servicePillars.find(p => p.id === 'pest-control');
  const [selectedPest, setSelectedPest] = useState('termites');

  const pestSymptoms = {
    termites: {
      name: "Subterranean Termites & Wood Borers",
      signs: ["Mud tubes on walls or foundation slabs", "Hollow-sounding wood or sagging door frames", "Discarded wings near windows and doors", "Cracked or bubbling paint with wood dust"],
      solution: "High-pressure sub-slab chemical injection with non-repellent termiticide + 5-year guarantee warranty.",
      urgency: "High - Causes severe structural failure if delayed.",
      media: "/imgs/termitepg-img1.jpg",
      video: "/imgs/bait_compressed.mp4"
    },
    bedbugs: {
      name: "Bedbug Infestation",
      signs: ["Itchy red bite welts in clusters on arms/legs", "Tiny blood specks or rust-colored spots on mattresses", "Sweet musty odor in bedroom corners", "Visible bugs along seams of headboards and sofas"],
      solution: "Dual-action thermal eradication combined with micro-encapsulated residual spray targeting egg cycles.",
      urgency: "Immediate - Exponential breeding rate (200+ eggs per female).",
      media: "/imgs/crawling-bg.jpg",
      video: "/imgs/man-spraying-insect-spray.mp4"
    },
    cockroaches: {
      name: "German & American Cockroaches",
      signs: ["Droppings resembling ground black pepper", "Unpleasant pungent oil odor in kitchen cabinets", "Nocturnal sightings when switching on kitchen lights", "Egg capsules (oothecae) behind refrigerators"],
      solution: "Odorless fipronil gel bait placement in micro-crevices + crack-and-crevice barrier misting.",
      urgency: "Moderate to High - Carries salmonella, E. coli, and triggers asthma.",
      media: "/imgs/crawling-insect-img1.jpg",
      video: "/imgs/spraying_compressed.mp4"
    },
    rodents: {
      name: "Rats & Mice (Rodent Infiltration)",
      signs: ["Gnaw marks on electrical wires, plastic pipes, and ceiling beams", "Capsule-shaped droppings in pantries or roof cavities", "Scratching noises inside drywall at night", "Smudge marks along baseboards"],
      solution: "Tamper-resistant lockable bait stations + ultrasonic exclusion + entry point metal mesh sealing.",
      urgency: "Critical - Severe fire hazard from gnawed electrical wiring and disease transmission.",
      media: "/imgs/rodent-bg.jpg",
      video: "/imgs/trap_compressed.mp4"
    },
    mosquitoes: {
      name: "Mosquitoes & Flying Insects",
      signs: ["Continuous buzzing around living spaces and compounds", "Stagnant drainage and gutter water breeding zones", "High frequency of mosquito bites in evening hours"],
      solution: "Thermal outdoor fogging + biological larvicide application in drains + commercial insect light traps.",
      urgency: "High - Primary vector for Malaria and Dengue in Ghana.",
      media: "/imgs/flying-bg.jpg",
      video: "/imgs/man-spraying-insect-spray.mp4"
    }
  };

  const activePest = pestSymptoms[selectedPest];

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 pt-16">
      
      {/* Sector Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#092214] via-[#06150c] to-[#060d09] border-b border-emerald-900/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
                <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
                Division 01 • EPA Certified
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Pest Control & Scientific Fumigation Services in Ghana
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Total eradication of termites, cockroaches, bedbugs, rodents, and biological pathogens. We deploy WHO-approved, low-toxicity formulations that guarantee zero pest resurgence without endangering families, pets, or commercial personnel.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-7 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950 flex items-center gap-2"
                >
                  <span>Book Immediate Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="px-6 py-4 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Dispatch: {companyDetails.phoneDisplay1}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-700/40 bg-black shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-80 object-cover"
                  src="/imgs/man-spraying-insect-spray.mp4"
                  poster="/imgs/banner-img.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Live Execution</span>
                  <h4 className="text-sm font-bold text-white">Ultra-Low Volume (ULV) Misting Application</h4>
                  <p className="text-[11px] text-slate-300">Hospital-grade surface & airborne disinfection in Greater Accra.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Core Sub-Services Detailed Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            Specialized Treatments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Targeted Eradication Protocols
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pestData?.subServices?.map((sub, idx) => (
            <div
              key={idx}
              className="bg-glass-card rounded-3xl p-6 sm:p-8 border border-emerald-800/40 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-emerald-900/50">
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
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-emerald-300 uppercase tracking-wider">
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
                <span className="text-[11px] text-emerald-400 font-mono">Warranty Supported</span>
                <button
                  onClick={onOpenQuote}
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                >
                  Book This Treatment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Pest Diagnostic & Symptom Checker */}
      <section className="py-20 bg-[#040e07] border-y border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
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
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {Object.keys(pestSymptoms).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedPest(key)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedPest === key
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950 scale-105'
                    : 'bg-emerald-950/60 text-slate-300 hover:bg-emerald-900/60 border border-emerald-800/40'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Diagnostic Card */}
          <div className="bg-[#091b10] rounded-3xl p-6 sm:p-10 border border-emerald-700/40 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800">
                    {activePest.urgency}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono">EPA Protocol #GH-08</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {activePest.name}
                </h3>

                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Common Signs of Infestation:</h4>
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
                    className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
                  >
                    <span>Request Treatment for {selectedPest}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-emerald-800/60 bg-black aspect-square">
                  {activePest?.video ? (
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
                  ) : (
                    <img
                      src={activePest.media}
                      alt={activePest.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/imgs/banner-img.jpg";
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="text-[11px] font-semibold text-emerald-300 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-emerald-700/50">
                      Certified Laboratory Tested Formula
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4-Step Treatment Lifecycle */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            Systematic Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            How Our Certified Pest Treatment Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs mb-4">
              1
            </div>
            <h4 className="text-base font-bold text-white mb-1">Site Survey & Diagnosis</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our technicians thoroughly inspect harborage points, moisture sources, and entry fractures in walls and ceilings.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs mb-4">
              2
            </div>
            <h4 className="text-base font-bold text-white mb-1">Targeted Eradication</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Applying exact calibrated chemical or thermal fogging targeting both active adult populations and juvenile stages.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs mb-4">
              3
            </div>
            <h4 className="text-base font-bold text-white mb-1">Preventive Barrier</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Establishing a continuous chemical or physical exclusion barrier along perimeters to prevent future exterior infiltration.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs mb-4">
              4
            </div>
            <h4 className="text-base font-bold text-white mb-1">Warranty & Certification</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Delivery of official EPA fumigation certificates and scheduled warranty audit check-ins.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Booking Banner */}
      <section className="py-16 bg-[#040e07] border-t border-emerald-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need emergency fumigation in Accra or Tema today?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our rapid response vans are equipped with hospital-grade foggers, termiticide pumps, and WHO-certified solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center gap-2"
            >
              <span>Schedule Pest Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="px-6 py-4 bg-emerald-950 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct: {companyDetails.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPestControlPage;
