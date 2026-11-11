import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Eye, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Layers,
  MapPin,
  Clock,
  HeartHandshake,
  ShieldAlert,
  HardHat,
  Truck,
  Building2,
  Sparkles,
  Zap,
  Play
} from 'lucide-react';
import { companyDetails, certifications, servicePillars } from '../data/siteData';
import CertificationsBanner from '../components/common/CertificationsBanner';
import Interactive3DCard from '../components/3d/Interactive3DCard';

const AboutPage = ({ onOpenQuote }) => {
  const [activeDivisionTab, setActiveDivisionTab] = useState(0);

  const divisionShowcases = [
    {
      id: "pest-control",
      title: "Pest Control & Scientific Fumigation",
      badge: "Ghana-Licensed Operator",
      image: "/imgs/about-service-team.jpg",
      video: "/imgs/fumigation.mp4",
      highlight: "Licensed Commercial Pest Control Operator",
      summary: "Specialized in structural termite soil barriers, hospital-grade pathogen disinfection, bedbug eradication, and high-pressure chemical misting for residential & commercial facilities across Accra.",
      metrics: [
        { label: "Properties Treated", val: "4,500+" },
        { label: "Warranty Guarantee", val: "Up to 5 Yrs" },
        { label: "Safety Standards", val: "HSE Compliant" }
      ]
    },
    {
      id: "safety-items",
      title: "Wholesale Industrial Safety Gear & PPE",
      badge: "ANSI & EN Certified",
      image: "/imgs/p0.jpg",
      video: "/imgs/7170781-uhd_4096_2160_25fps.mp4",
      highlight: "Direct Factory Wholesale Distributor",
      summary: "Supplying top-tier Personal Protective Equipment (PPE) to mining firms, civil contractors, oil & gas operators, and industrial logistics facilities with full compliance testing.",
      metrics: [
        { label: "Catalog Items", val: "250+ SKUs" },
        { label: "Mining & Site Kits", val: "In Stock" },
        { label: "Direct Wholesale", val: "Tier-1 Pricing" }
      ]
    },
    {
      id: "general-goods",
      title: "Supply of General Goods & Freight Logistics",
      badge: "Global Freight Corridor",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      video: "https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-ocean-40674-large.mp4",
      highlight: "Tema & Takoradi Ports Clearance",
      summary: "End-to-end institutional procurement, sea container cargo (FCL/LCL), expedited air express at Kotoka International Airport, and reliable nationwide road dispatch.",
      metrics: [
        { label: "Regional Coverage", val: "16 Regions" },
        { label: "Port Clearance", val: "Expedited" },
        { label: "On-Time Delivery", val: "99.4%" }
      ]
    },
    {
      id: "construction",
      title: "Construction & Furnishing",
      badge: "BS 5385 Precision Standards",
      image: "/imgs/constru 1.jpg",
      video: "/imgs/bio.mp4",
      highlight: "Laser-Calibrated Master Craftsmanship",
      summary: "High-end residential villas and commercial building renovations. Renowned for laser-leveled porcelain tile laying, structural restoration, and waterproof anti-termite civil prep.",
      metrics: [
        { label: "Craftsman Standards", val: "BS 5385" },
        { label: "Laser Leveling", val: "0.5mm Accuracy" },
        { label: "Completed Projects", val: "120+ Turnkey" }
      ]
    }
  ];

  const currentDivision = divisionShowcases[activeDivisionTab];

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 pt-16">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#092214] via-[#06140b] to-[#060d09] border-b border-emerald-900/40 overflow-hidden">
        <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-700 shadow-lg shadow-emerald-950">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            About Aifa Services Limited • Ghana
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Setting the Benchmark for <span className="text-gradient-brand">Professional Excellence</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Founded with an uncompromising commitment to quality and regulatory compliance, Aifa Services LTD is a Ghana-registered multi-sector powerhouse delivering excellence across Pest Control, Wholesale Safety PPE, Freight Logistics, and Precision Construction.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Real Services Match Showcase */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Corporate Overview & Ghana Operations
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              A Trusted Partner for Ghana's Critical Industries & Homes
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Based in Lapaz, Accra, Aifa Services Limited was established to bridge the gap between rigorous international safety standards and localized, high-touch customer delivery in West Africa.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our pest control division protects thousands of residential homes, commercial complexes, schools, and hospitals using eco-friendly, WHO-approved bio-pesticides and high-pressure dispersion technology. Concurrently, our wholesale safety gear division equips thousands of mining, manufacturing, and construction workers with certified, life-saving personal protective equipment.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#081c11] border border-emerald-700/40 shadow-lg">
                <span className="text-3xl font-black text-emerald-400 font-mono">10+</span>
                <p className="text-xs font-bold text-white mt-1">Years Industry Experience</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Multi-sector certified operators.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#081c11] border border-emerald-700/40 shadow-lg">
                <span className="text-3xl font-black text-amber-400 font-mono">4,500+</span>
                <p className="text-xs font-bold text-white mt-1">Certified Deployments</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Across Accra, Tema & nationwide.</p>
              </div>
            </div>

            {/* Regulatory Credentials */}
            <div className="p-4 rounded-2xl bg-[#040e07] border border-emerald-800/60 flex items-center gap-3">
              <div className="p-2.5 bg-emerald-700 text-white rounded-xl shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block uppercase tracking-wider">
                  Licensed Commercial Pest Control Operator
                </span>
                <span className="text-emerald-300 text-[11px]">
                  Registered with Ghana Environmental Protection Agency
                </span>
              </div>
            </div>
          </div>

          {/* Right 3D Visual Match: Authentic Fumigation & Safety Specialists */}
          <div className="lg:col-span-6">
            <Interactive3DCard depth={16}>
              <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-600/50 bg-black shadow-2xl shadow-emerald-950/80 group hud-border">
                
                {/* Authentic Service Team Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src="/imgs/about-service-team.jpg"
                    alt="Aifa Services Certified Fumigation Specialists at Work in Ghana"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-110"
                  />
                  <div className="scan-beam"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-emerald-500/50 text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>AIFA OPERATIONAL CREW // ACCRA</span>
                  </div>

                  {/* Top Right Live Tag */}
                  <div className="absolute top-4 right-4 bg-emerald-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-emerald-600 text-[10px] font-mono text-emerald-300">
                    GHANA LICENSED
                  </div>
                </div>

                {/* Bottom Overlay with Real Specs */}
                <div className="p-5 bg-[#06180c] border-t border-emerald-700/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        Commercial Fumigation Specialists
                      </h4>
                      <p className="text-[11px] text-emerald-300">
                        Dual-Respirator Protective Hazmat Protocols & High-Pressure Sprayers
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-800">
                      LIVE CREW
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                    <div className="p-2 rounded-lg bg-[#040e07] border border-emerald-900/60">
                      <span className="text-[10px] text-slate-400 block">STANDARD</span>
                      <strong className="text-xs text-white">WHO STANDARD</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-[#040e07] border border-emerald-900/60">
                      <span className="text-[10px] text-slate-400 block">PPE GEAR</span>
                      <strong className="text-xs text-amber-400">EN397 / ANSI</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-[#040e07] border border-emerald-900/60">
                      <span className="text-[10px] text-slate-400 block">ACCRA HQ</span>
                      <strong className="text-xs text-emerald-400">Lapaz Hub</strong>
                    </div>
                  </div>
                </div>

              </div>
            </Interactive3DCard>
          </div>

        </div>
      </section>

      {/* Interactive 4 Divisions Showcase on About */}
      <section className="py-20 bg-[#041008] border-y border-emerald-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Interactive Multi-Sector Division Viewer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Explore Our Four Core Operational Arms
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Click any division below to inspect real video footage, technical equipment, and industry certifications.
            </p>
          </div>

          {/* Division Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {divisionShowcases.map((div, idx) => {
              const isSelected = activeDivisionTab === idx;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveDivisionTab(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-emerald-900/90 to-emerald-950 border-emerald-400 shadow-xl shadow-emerald-950 scale-[1.02]'
                      : 'bg-[#06170d] hover:bg-[#0a2314] border-emerald-900/40 text-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1">
                    Core Division
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {div.title}
                  </span>
                  <span className="text-[10px] text-emerald-300 mt-2 font-mono">
                    {div.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Division Detailed Card */}
          <div className="bg-[#06140b] rounded-3xl border border-emerald-700/40 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Media Column (Video + Poster) */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-emerald-600/40 bg-black aspect-video group shadow-xl">
                  <video
                    key={currentDivision.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    src={currentDivision.video}
                    poster={currentDivision.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-bold flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                      <span>{currentDivision.highlight}</span>
                    </span>
                    <span className="font-mono text-emerald-300 text-[11px] bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-700">
                      ACTIVE VERIFIED
                    </span>
                  </div>
                </div>
              </div>

              {/* Description Column */}
              <div className="lg:col-span-6 space-y-5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-700">
                  {currentDivision.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentDivision.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentDivision.summary}
                </p>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {currentDivision.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#092213] border border-emerald-800/50 text-center">
                      <span className="text-[10px] font-mono text-slate-400 block">{m.label}</span>
                      <strong className="text-sm font-extrabold text-emerald-300 font-mono mt-0.5 block">{m.val}</strong>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={onOpenQuote}
                    className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-xl shadow-emerald-950 flex items-center gap-2"
                  >
                    <span>Request Proposal for this Division</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#060d09]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-glass-card p-8 sm:p-10 rounded-3xl border border-emerald-800/40 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To deliver dependable, certified, and cost-effective multi-sector services that protect human health, ensure industrial occupational safety, accelerate commerce, and elevate structural living spaces throughout Ghana.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Eco-safe, non-toxic formulations for public health</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct manufacturer-tier wholesale PPE pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>British-standard precision craftsmanship in construction</span>
                </li>
              </ul>
            </div>

            <div className="bg-glass-card p-8 sm:p-10 rounded-3xl border border-emerald-800/40 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-900/60 text-amber-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To be the most trusted and operationally reliable corporate services brand in West Africa, recognized globally for uncompromising safety standards, rapid technical dispatch, and lasting client partnerships.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Leading pest management innovator across Ghana</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Primary wholesale PPE supplier for major mining & building firms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                   <span>Top-rated construction & furnishing contractors in Accra</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <CertificationsBanner />

      {/* Operational Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            The Principles That Drive Every Engagement
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 space-y-3">
            <div className="text-emerald-400 font-bold text-lg font-mono">01. Precision</div>
            <h4 className="text-base font-bold text-white">Laser-Calibrated Execution</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Whether dosing chemical dilutions or laying large-format porcelain tiles, we measure meticulously to eliminate margin for error.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 space-y-3">
            <div className="text-emerald-400 font-bold text-lg font-mono">02. Safety First</div>
            <h4 className="text-base font-bold text-white">Zero Compromise on Health</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We protect human life, environmental ecosystems, and workforces with certified protocols and audited protective equipment.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 space-y-3">
            <div className="text-emerald-400 font-bold text-lg font-mono">03. Reliability</div>
            <h4 className="text-base font-bold text-white">Punctual & Responsive</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We arrive on schedule, honor quote commitments without hidden surcharges, and respond 24/7 to pest emergencies.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 space-y-3">
            <div className="text-emerald-400 font-bold text-lg font-mono">04. Accountability</div>
            <h4 className="text-base font-bold text-white">Guaranteed Warranties</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We stand behind our services with structured treatment warranties, formal documentation, and regular post-service audits.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-gradient-to-b from-[#060d09] to-[#040e07] border-t border-emerald-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Looking for a corporate service contract or technical inspection?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Contact our project management team at our Lapaz, Accra headquarters for formal proposals and corporate onboarding.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-xl shadow-emerald-950 flex items-center gap-2"
            >
              <span>Request Formal Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="px-8 py-4 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{companyDetails.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
