import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  HardHat, 
  Truck, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Play, 
  Award, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ChevronRight,
  Crosshair,
  Sparkles,
  Sliders,
  AlertTriangle
} from 'lucide-react';
import { servicePillars, companyDetails } from '../data/siteData';
import CertificationsBanner from '../components/common/CertificationsBanner';
import TestimonialsSection from '../components/common/TestimonialsSection';
import FAQSection from '../components/common/FAQSection';
import Interactive3DCard from '../components/3d/Interactive3DCard';
import Fumigation3DVisualizer from '../components/3d/Fumigation3DVisualizer';
import PestScannerMatrix from '../components/3d/PestScannerMatrix';
import BeforeAfterSlider from '../components/3d/BeforeAfterSlider';

const HomePage = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState(0);

  const heroVideos = [
    {
      src: "/imgs/fumigation.mp4",
      poster: "/imgs/3d-fumigation-hero.jpg",
      title: "ULV Fumigation & Pest Eradication",
      sector: "Pest Control & Fumigation",
      tagline: "Eco-Friendly WHO Formulations & 5-Year Termite Defense"
    },
    {
      src: "/imgs/7170781-uhd_4096_2160_25fps.mp4",
      poster: "/imgs/p0.jpg",
      title: "Wholesale Industrial PPE & Safety",
      sector: "Wholesale Safety & PPE",
      tagline: "ANSI/EN Certified Helmets, Boots, Respirators & Harnesses"
    },
    {
      src: "https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-ocean-40674-large.mp4",
      poster: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      title: "Supply of General Goods & Logistics",
      sector: "General Goods & Logistics",
      tagline: "Ocean FCL/LCL, Air Cargo Express & Nationwide Road Haulage"
    },
    {
      src: "/imgs/bio.mp4",
      poster: "/imgs/constru 1.jpg",
      title: "Precision Construction & Tiling",
      sector: "Construction & Tiling",
      tagline: "Laser-Calibrated Tiling BS 5385 & Luxury Renovation Fit-Outs"
    }
  ];

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Dynamic 3D Volumetric Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 filter brightness-90 contrast-125"
            poster="/imgs/3d-fumigation-hero.jpg"
          >
            <source src="/imgs/fumigation.mp4" type="video/mp4" />
          </video>

          {/* Holographic grid and gradient overlays */}
          <div className="absolute inset-0 hud-grid opacity-25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d09] via-[#060d09]/80 to-[#060d09]/60"></div>
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#060d09]/75 to-[#060d09]"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 shadow-xl shadow-emerald-950/80 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Trusted Multi-Sector Specialist • Ghana
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Protecting Spaces. <br />
                <span className="text-gradient-brand">Supplying Safety.</span> <br />
                Building Excellence.
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Aifa Services Limited delivers certified, rapid-response <strong className="text-emerald-300 font-semibold">Pest Control & Scientific Fumigation</strong>, wholesale <strong className="text-amber-300 font-semibold">Industrial Safety Equipment & PPE</strong>, dependable <strong className="text-emerald-300 font-semibold">General Goods Logistics</strong>, and British-standard <strong className="text-slate-200 font-semibold">Construction & Architectural Tiling</strong> across Accra and nationwide.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Instant 60s Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-700/50 hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Hotline: {companyDetails.phoneDisplay1}</span>
                </a>
              </div>

              {/* Trust Indicators Pill */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Trained & Experienced Technicians</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WHO Eco-Safe Formulations</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>BS 5385 Tiling Standards</span>
                </span>
              </div>
            </motion.div>

            {/* Right Interactive 3D Reel Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <Interactive3DCard depth={18} className="w-full">
                <div className="relative bg-[#05120a] rounded-3xl p-3 sm:p-4 border-2 border-emerald-600/50 shadow-2xl shadow-emerald-950 overflow-hidden group hud-border">
                  
                  {/* Video Screen with HUD Reticle */}
                  <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black">
                    <video
                      key={heroVideos[activeTab].src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover brightness-95 contrast-110"
                      src={heroVideos[activeTab].src}
                      poster={heroVideos[activeTab].poster}
                    />

                    {/* Scan beam laser effect */}
                    <div className="scan-beam"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040e07] via-transparent to-black/40"></div>

                    {/* Top HUD badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-950/90 text-emerald-300 border border-emerald-600 shadow-md">
                        {heroVideos[activeTab].sector}
                      </span>
                    </div>

                    {/* Bottom Title & Tagline */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <h3 className="text-lg font-black text-white mb-1">
                        {heroVideos[activeTab].title}
                      </h3>
                      <p className="text-xs text-emerald-300 font-medium">
                        {heroVideos[activeTab].tagline}
                      </p>
                    </div>
                  </div>

                  {/* Division Switcher Buttons */}
                  <div className="grid grid-cols-4 gap-2 mt-3 font-mono">
                    {heroVideos.map((video, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`py-2 px-1 rounded-xl text-center text-[10px] font-bold transition-all border ${
                          activeTab === idx
                            ? 'bg-gradient-to-r from-emerald-700 to-green-600 text-white border-emerald-400 shadow-lg shadow-emerald-950'
                            : 'bg-emerald-950/60 text-slate-300 border-emerald-900/60 hover:bg-emerald-900/60'
                        }`}
                      >
                        <span>{['Pest', 'Safety', 'Logistics', 'Construction'][idx]}</span>
                      </button>
                    ))}
                  </div>

                </div>
              </Interactive3DCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-8 bg-[#040e07] border-y border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {companyDetails.stats.map((stat, i) => (
              <Interactive3DCard key={i} depth={8}>
                <div className="p-4 rounded-2xl bg-[#07190e] border border-emerald-800/40 shadow-lg">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
                    <span className="text-gradient-brand">{stat.value}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              </Interactive3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* SHOCKING 3D FUMIGATION VIDEO COMMAND CENTER */}
      <Fumigation3DVisualizer onOpenQuote={onOpenQuote} />

      {/* 3D HOLOGRAPHIC FOUNDATION PEST SCANNER & PROTOCOL MATRIX */}
      <PestScannerMatrix onOpenQuote={onOpenQuote} />

      {/* INTERACTIVE BEFORE & AFTER SLIDER */}
      <BeforeAfterSlider />

      {/* CORE 4 DIVISIONS / SERVICE PILLARS */}
      <section className="py-24 bg-[#061009] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Four Turnkey Pillars of Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
              Our Core Business Divisions
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              Aifa Services LTD provides specialized, turnkey operations engineered for durability, regulatory compliance, and maximum cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePillars.map((pillar, index) => {
              const previewImg = index === 0 
                ? "/imgs/about-service-team.jpg" 
                : (pillar.cardImage || pillar.heroImage);

              return (
                <Interactive3DCard key={pillar.id} depth={12}>
                  <div className="h-full bg-[#08180e] rounded-3xl p-6 sm:p-8 border border-emerald-700/40 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-emerald-950/80">
                    <div>
                      {/* Header with badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
                          Core Service
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          Licensed in Ghana
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-400 mt-1 mb-3">
                        {pillar.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                        {pillar.summary}
                      </p>

                      {/* Image Preview */}
                      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-emerald-800/50">
                        <img
                          src={previewImg}
                          alt={pillar.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                          onError={(e) => {
                            e.target.src = "/imgs/banner-img.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                          <span className="font-semibold">Professional Standard</span>
                          <span className="text-emerald-300 font-mono text-[11px]">BS 5385 Compliant</span>
                        </div>
                      </div>

                      {/* Feature Highlights */}
                      <ul className="space-y-2 mb-6">
                        {pillar.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-emerald-900/40 flex items-center justify-between">
                      <Link
                        to={pillar.route}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors"
                      >
                        <span>Explore Sector Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <button
                        onClick={onOpenQuote}
                        className="px-4 py-2 text-xs font-bold text-white bg-emerald-950 hover:bg-emerald-700 border border-emerald-700/50 rounded-xl transition-colors shadow-md"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </Interactive3DCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AIFA SERVICES */}
      <section className="py-24 bg-[#040e07] relative border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                The Aifa Difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Why Ghana's Leading Organizations Rely On Aifa Services LTD
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We combine environmental certification, rigorous safety testing, and seasoned British-standard craftsmen under one accountable corporate roof in Lapaz, Accra.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-800/40">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Rapid Emergency Response
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct pest control and safety dispatch squads across Accra and Tema within 2 to 4 hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-800/40">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    Regulatory Compliance
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Adherence to national environmental safety regulations and internationally recognized hygiene standards across all service lines.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300"
                >
                  <span>Read Full Corporate Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Interactive3DCard depth={10}>
                  <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40 h-full">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-3">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Long-Lasting Protection</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Targeted residual treatments and multi-stage lifecycle applications are designed to deliver durable protection against returning pests.
                    </p>
                  </div>
                </Interactive3DCard>

                <Interactive3DCard depth={10}>
                  <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40 h-full">
                    <div className="w-10 h-10 rounded-xl bg-amber-900/60 text-amber-400 flex items-center justify-center mb-3">
                      <HardHat className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Wholesale Direct Pricing</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Direct bulk supply of industrial PPE, certified helmets, boots, and respirators at manufacturer-tier wholesale pricing.
                    </p>
                  </div>
                </Interactive3DCard>

                <Interactive3DCard depth={10}>
                  <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40 h-full">
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-3">
                      <Truck className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Nationwide Logistics</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Door-to-door cargo handling, ocean & air clearance, and secure regional transit across all 16 regions of Ghana.
                    </p>
                  </div>
                </Interactive3DCard>

                <Interactive3DCard depth={10}>
                  <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40 h-full">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center mb-3">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">British Standard Tiling</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Laser-level floor and wall tiling adhering strictly to BS 5385 with complete waterproof tanking membranes.
                    </p>
                  </div>
                </Interactive3DCard>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CERTIFICATIONS ACCREDITATION */}
      <CertificationsBanner />

      {/* CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ ACCORDION */}
      <FAQSection />

      {/* BOTTOM CONVERSION CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-950 via-[#071d10] to-emerald-950 border-t border-emerald-900/50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Consult With Our Experts in Lapaz Today
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you require commercial fumigation, wholesale safety PPE, global cargo logistics, or architectural tiling, our team is ready to assist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-black rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950 flex items-center gap-2"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="px-8 py-4 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Hotline: {companyDetails.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
