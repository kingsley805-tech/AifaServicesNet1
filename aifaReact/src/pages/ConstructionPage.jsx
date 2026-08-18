import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Ruler, 
  ShieldCheck, 
  Award, 
  Hammer 
} from 'lucide-react';
import { constructionProjects, companyDetails } from '../data/siteData';

const ConstructionPage = ({ onOpenQuote }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Architectural Tiling', 'Commercial Renovation', 'Structural Works', 'Pest Prevention & Civil Works'];

  const filteredProjects = selectedFilter === 'All' 
    ? constructionProjects 
    : constructionProjects.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 pt-16">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#111c15] via-[#09150d] to-[#060d09] border-b border-emerald-900/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                Division 04 • British Standard BS 5385
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Architectural Tiling, Building Renovations & Civil Works
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Master-craftsman building services in Ghana. Renowned for laser-calibrated precision wall & floor tiling, structural refurbishment, luxury interior fit-outs, and anti-termite soil civil protection.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-7 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950 flex items-center gap-2"
                >
                  <span>Book Site Measurement & Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="px-6 py-4 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Civil Engineer: {companyDetails.phoneDisplay1}</span>
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
                  src="/imgs/bio.mp4"
                  poster="/imgs/tile1.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Craftsmanship</span>
                  <h4 className="text-sm font-bold text-white">Laser-Level Precision Installation</h4>
                  <p className="text-[11px] text-slate-300">Porcelain, marble & structural masonry in Accra.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The British Tiling Standard Distinction */}
      <section className="py-16 bg-[#040e07] border-y border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              British Standard BS 5385
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Why Our Tiling Never Cracks, Lifts, or Stains
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40 space-y-2">
              <div className="text-emerald-400 font-bold text-base flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                Laser Leveling
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Optical laser lines verify sub-millimeter flatness across walls and large-format porcelain floors.
              </p>
            </div>

            <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40 space-y-2">
              <div className="text-emerald-400 font-bold text-base flex items-center gap-2">
                <Layers className="w-4 h-4" />
                100% Adhesive Bedding
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Back-buttering technique prevents hollow acoustic spots and protects tiles from heavy impact fractures.
              </p>
            </div>

            <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40 space-y-2">
              <div className="text-emerald-400 font-bold text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Waterproof Tanking
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete liquid membrane tanking applied behind shower walls and wet areas to prevent ceiling leaks.
              </p>
            </div>

            <div className="bg-[#091a10] p-6 rounded-2xl border border-emerald-800/40 space-y-2">
              <div className="text-emerald-400 font-bold text-base flex items-center gap-2">
                Epoxy Stainproof Grout
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero-mold, non-porous resin grouting that maintains pristine color in high-traffic and kitchen areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
              Project Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Featured Construction & Tiling Works in Ghana
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-950'
                    : 'bg-emerald-950/60 text-slate-300 hover:bg-emerald-900/60 border border-emerald-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-glass-card rounded-3xl overflow-hidden border border-emerald-800/40 hover:border-emerald-500/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/imgs/banner-img.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-950/90 text-emerald-300 border border-emerald-700">
                    {proj.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold">📍 {proj.location}</span>
                  <span className="font-mono text-emerald-300">Completed {proj.year}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {proj.desc}
                </p>

                <div className="pt-3 border-t border-emerald-900/40 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-medium">BS 5385 Verified Finish</span>
                  <button
                    onClick={onOpenQuote}
                    className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                  >
                    Request Similar Build
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 bg-[#040e07] border-t border-emerald-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Plan your next luxury residential or commercial tiling project
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our master tilers and site engineers provide on-site laser measurements, substrate preparation analysis, and material bills of quantity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center gap-2"
            >
              <span>Schedule Site Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConstructionPage;
