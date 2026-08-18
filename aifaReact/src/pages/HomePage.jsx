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
  Pause,
  Award,
  Clock,
  ShieldCheck,
  Zap,
  Layers,
  ChevronRight
} from 'lucide-react';
import { servicePillars, companyDetails } from '../data/siteData';
import CertificationsBanner from '../components/common/CertificationsBanner';
import TestimonialsSection from '../components/common/TestimonialsSection';
import FAQSection from '../components/common/FAQSection';

const HomePage = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const heroVideos = [
    {
      src: "/imgs/man-spraying-insect-spray.mp4",
      title: "Pest Eradication & Disinfection",
      sector: "Division 01"
    },
    {
      src: "/imgs/7170781-uhd_4096_2160_25fps.mp4",
      title: "Industrial Safety Gear & PPE",
      sector: "Division 02"
    },
    {
      src: "https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-ocean-40674-large.mp4",
      title: "General Procurement & Logistics",
      sector: "Division 03"
    },
    {
      src: "/imgs/bio.mp4",
      title: "Construction & Tiling Solutions",
      sector: "Division 04"
    }
  ];

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dynamic Video / Background Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-25 filter brightness-90 contrast-125"
            poster="/imgs/banner-img.jpg"
          >
            <source src="/imgs/7170781-uhd_4096_2160_25fps.mp4" type="video/mp4" />
          </video>
          {/* Gradients to blend smoothly into page */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d09] via-[#060d09]/80 to-[#060d09]/60"></div>
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#060d09]/70 to-[#060d09]"></div>
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
              data-aos="fade-right"
            >
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-700/60 shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Ghana's Licensed Multi-Sector Specialist
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Protecting Spaces. <br />
                <span className="text-gradient-brand">Supplying Safety.</span> <br />
                Building Excellence.
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Aifa Services Limited provides certified, rapid-response <strong className="text-emerald-300 font-semibold">Pest Control & Fumigation</strong>, wholesale <strong className="text-amber-300 font-semibold">Industrial Safety Gear</strong>, reliable <strong className="text-emerald-300 font-semibold">General Goods Logistics</strong>, and British-standard <strong className="text-slate-200 font-semibold">Construction & Tiling</strong> across Accra and nationwide.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Instant Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-700/50 hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Emergency: {companyDetails.phoneDisplay1}</span>
                </a>
              </div>

              {/* Trust Indicators Pill */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>EPA Certified Technicians</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>WHO Eco-Safe Chemicals</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>BS 5385 Tiling Standards</span>
                </span>
              </div>
            </motion.div>

            {/* Right Interactive Reel Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
              data-aos="fade-left"
            >
              <div className="relative bg-glass-card rounded-3xl p-3 border border-emerald-700/40 shadow-2xl overflow-hidden group">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    src={heroVideos[activeTab].src}
                    poster="/imgs/about-banner.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e07] via-transparent to-black/30"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-emerald-950/90 text-emerald-300 border border-emerald-700">
                      {heroVideos[activeTab].sector}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {heroVideos[activeTab].title}
                    </h3>
                    <p className="text-xs text-emerald-300">
                      Standard-grade execution in Lapaz & Greater Accra.
                    </p>
                  </div>
                </div>

                {/* Video Switcher Tabs */}
                <div className="grid grid-cols-4 gap-1.5 mt-3">
                  {heroVideos.map((video, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`p-2 rounded-xl text-center text-[10px] font-bold transition-all ${
                        activeTab === idx
                          ? 'bg-emerald-700 text-white shadow-md'
                          : 'bg-emerald-950/60 text-slate-300 hover:bg-emerald-900/60'
                      }`}
                    >
                      <span>Div 0{idx + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-8 bg-[#040e07] border-y border-emerald-950" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {companyDetails.stats.map((stat, i) => (
              <div key={i} className="p-3" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  <span className="text-gradient-brand">{stat.value}</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE 4 DIVISIONS / SERVICE PILLARS */}
      <section className="py-20 bg-[#061009] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Comprehensive Corporate Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              Our Four Core Business Divisions
            </h2>
            <p className="text-sm text-slate-300 mt-3">
              Aifa Services LTD provides specialized, turnkey operations engineered for durability, regulatory compliance, and maximum cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePillars.map((pillar, index) => {
              const isGreen = pillar.color === 'emerald';
              return (
                <div 
                  key={pillar.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="bg-glass-card rounded-3xl p-6 sm:p-8 border border-emerald-800/30 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-950/70"
                >
                  <div>
                    {/* Header with badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
                        Division 0{index + 1}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        Ghana Operations
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400 mt-1 mb-3">
                      {pillar.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {pillar.summary}
                    </p>

                    {/* Image / Video Preview */}
                    <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-emerald-900/50">
                      <img
                        src={pillar.cardImage || pillar.heroImage}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "/imgs/banner-img.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                        <span className="font-semibold">Professional Standard</span>
                        <span className="text-emerald-300 font-mono text-[11px]">EPA / BS Compliant</span>
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
                      className="px-3.5 py-2 text-xs font-bold text-white bg-emerald-950 hover:bg-emerald-700 border border-emerald-700/50 rounded-xl transition-colors"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AIFA SERVICES */}
      <section className="py-20 bg-[#040e07] relative border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
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
                    Government EPA Certification
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Full compliance with Environmental Protection Agency regulations and WHO eco-safe standards.
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

            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40" data-aos="zoom-in" data-aos-delay="100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-3">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Zero Resurgence Guarantee</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Targeted residual treatments and multi-stage lifecycle barrier applications ensure persistent protection against pests.
                  </p>
                </div>

                <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40" data-aos="zoom-in" data-aos-delay="200">
                  <div className="w-10 h-10 rounded-xl bg-amber-900/60 text-amber-400 flex items-center justify-center mb-3">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Wholesale Direct Pricing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Direct bulk supply of industrial PPE, certified helmets, boots, and respirators at manufacturer-tier wholesale pricing.
                  </p>
                </div>

                <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40" data-aos="zoom-in" data-aos-delay="300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-3">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Nationwide Logistics</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Door-to-door cargo handling, ocean & air clearance, and secure regional transit across all 16 regions of Ghana.
                  </p>
                </div>

                <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40" data-aos="zoom-in" data-aos-delay="400">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">British Standard Tiling</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Laser-level floor and wall tiling adhering strictly to BS 5385 with complete waterproof tanking membranes.
                  </p>
                </div>
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
      <section className="py-16 bg-gradient-to-r from-emerald-950 via-[#071d10] to-emerald-950 border-t border-emerald-900/50 text-center" data-aos="zoom-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Consult With Our Experts in Lapaz Today
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you require commercial fumigation, wholesale safety PPE, global cargo logistics, or architectural tiling, our team is ready to assist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950 flex items-center gap-2"
            >
              <span>Request Free Consultation</span>
            </button>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="px-6 py-4 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {companyDetails.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
