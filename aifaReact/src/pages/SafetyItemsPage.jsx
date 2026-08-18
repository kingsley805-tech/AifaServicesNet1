import React, { useState } from 'react';
import { 
  HardHat, 
  Search, 
  Filter, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Package, 
  ShoppingBag,
  Info
} from 'lucide-react';
import { safetyCatalog, companyDetails } from '../data/siteData';

const SafetyItemsPage = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Head & Face Protection',
    'Hand Protection',
    'Apparel & Visibility',
    'Foot Protection',
    'Respiratory Protection',
    'Fall Protection',
    'Site Equipment & Tools'
  ];

  const filteredCatalog = safetyCatalog.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 pt-16">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#1c1809] via-[#120f06] to-[#060d09] border-b border-amber-900/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-950/80 text-amber-400 border border-amber-800">
                <HardHat className="w-3.5 h-3.5 text-amber-400" />
                Division 02 • Wholesale PPE & Site Safety
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Wholesale Industrial Safety Gear & PPE in Ghana
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Direct wholesale supplier of certified Personal Protective Equipment (PPE) for construction contractors, mining hubs, logistics warehouses, and industrial manufacturing plants in Ghana.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-7 py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 text-slate-950 font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-amber-950 flex items-center gap-2"
                >
                  <span>Request Wholesale Price Sheet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="px-6 py-4 bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-amber-700/50 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Wholesale Desk: {companyDetails.phoneDisplay1}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-amber-700/40 bg-black shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-80 object-cover"
                  src="/imgs/7170781-uhd_4096_2160_25fps.mp4"
                  poster="/imgs/p0.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Quality Inspected</span>
                  <h4 className="text-sm font-bold text-white">Full-Body Safety & Site Protection Gear</h4>
                  <p className="text-[11px] text-slate-300">ANSI, OSHA & EN compliant testing certification.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Catalog Search & Category Filters */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Counter Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#09180f] p-4 rounded-2xl border border-emerald-800/40">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search safety helmets, gloves, boots, respirators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#06100a] border border-emerald-700/50 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Showing <span className="font-bold text-amber-400">{filteredCatalog.length}</span> certified industrial products
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-950 scale-105'
                  : 'bg-emerald-950/60 text-slate-300 hover:bg-emerald-900/60 border border-emerald-800/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCatalog.map((item) => (
            <div
              key={item.id}
              className="bg-glass-card rounded-3xl p-5 border border-emerald-800/30 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-black/60"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 rounded-2xl overflow-hidden mb-4 bg-slate-950 border border-emerald-900/40">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/imgs/p0.jpg";
                    }}
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md text-amber-400 px-2 py-0.5 rounded border border-amber-600/40">
                      {item.code}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-700">
                      In Stock
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-amber-400 block mb-1">
                  {item.category}
                </span>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] bg-emerald-950/80 text-slate-300 px-2 py-0.5 rounded border border-emerald-800/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-emerald-900/40 flex items-center justify-between text-xs">
                <span className="text-slate-400">Min. Order: <strong className="text-white">{item.minOrder}</strong></span>
                <button
                  onClick={onOpenQuote}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center gap-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Quote Bulk</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bulk Quote Banner */}
      <section className="py-16 bg-[#040e07] border-t border-emerald-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need customized corporate branding or contract PPE supplies?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            We provide custom logo screen-printing on high-vis vests and hard hats, and scheduled monthly restocking for civil and mining operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center gap-2"
            >
              <span>Submit Wholesale Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SafetyItemsPage;
