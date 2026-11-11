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
  Info,
  Sparkles,
  Zap,
  Sliders,
  AlertTriangle,
  Play
} from 'lucide-react';
import { safetyCatalog, companyDetails } from '../data/siteData';
import Interactive3DCard from '../components/3d/Interactive3DCard';

const SafetyItemsPage = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItemPreview, setActiveItemPreview] = useState(null);

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
        <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-950/90 text-amber-400 border border-amber-700 shadow-lg shadow-amber-950">
                <HardHat className="w-4 h-4 text-amber-400" />
                Certified Wholesale PPE & Site Safety
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Wholesale Industrial <span className="text-gradient-gold">Safety Gear & PPE</span> in Ghana
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Direct factory-tier wholesale supplier of certified Personal Protective Equipment (PPE) for civil construction contractors, mining concessions, industrial manufacturing plants, and logistics hubs throughout Ghana.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-amber-950 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Request Wholesale Bulk Price Sheet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="px-7 py-4 bg-amber-950/70 hover:bg-amber-900/80 text-amber-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-amber-700/50 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Wholesale Desk: {companyDetails.phoneDisplay1}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Interactive3DCard depth={16}>
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-600/50 bg-black shadow-2xl shadow-amber-950 group hud-border">
                  <div className="relative h-80 sm:h-96">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover brightness-95 contrast-110"
                      src="/imgs/7170781-uhd_4096_2160_25fps.mp4"
                      poster="/imgs/p0.jpg"
                    />
                    <div className="scan-beam"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-950/90 text-amber-300 border border-amber-600">
                        ANSI & EN397 CERTIFIED
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider">
                        High-Risk Industrial Deployment
                      </span>
                      <h4 className="text-base font-bold text-white">
                        Full-Spectrum Personal Protective Equipment
                      </h4>
                      <p className="text-[11px] text-slate-300">
                        Direct wholesale containers arriving at Tema Port with fast nationwide delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </Interactive3DCard>
            </div>

          </div>
        </div>
      </section>

      {/* Catalog Search & Category Filters */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Counter Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#0a180f] p-4 rounded-2xl border border-emerald-800/40">
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

          <div className="text-xs text-slate-300 font-mono">
            Showing <span className="font-bold text-amber-400">{filteredCatalog.length}</span> verified industrial safety products
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-extrabold border-amber-300 shadow-lg shadow-amber-950 scale-105'
                  : 'bg-emerald-950/60 text-slate-300 hover:bg-emerald-900/60 border-emerald-800/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Catalog Grid with ZERO Image Duplications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCatalog.map((item) => (
            <Interactive3DCard key={item.id} depth={10}>
              <div className="h-full bg-glass-card rounded-3xl p-5 border border-emerald-800/40 hover:border-amber-400/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                <div>
                  {/* Product Image */}
                  <div className="relative h-60 rounded-2xl overflow-hidden mb-4 bg-slate-950 border border-emerald-900/40">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Item Code Pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold bg-black/75 backdrop-blur-md text-amber-400 px-2.5 py-1 rounded-md border border-amber-600/40">
                        {item.code}
                      </span>
                    </div>

                    {/* Stock Status Pill */}
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono font-bold bg-emerald-950/90 backdrop-blur-sm text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-700">
                        In Stock • Bulk Ready
                      </span>
                    </div>
                  </div>

                  {/* Category */}
                  <span className="text-[11px] font-mono font-bold text-amber-400 block mb-1">
                    {item.category}
                  </span>

                  {/* Product Title */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 font-mono">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-emerald-950/80 text-slate-300 px-2.5 py-0.5 rounded border border-emerald-800/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-emerald-900/40 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">
                    Min: <strong className="text-white">{item.minOrder}</strong>
                  </span>
                  <button
                    onClick={onOpenQuote}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-black rounded-xl transition-all shadow-md flex items-center gap-1.5 active:scale-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Quote Wholesale</span>
                  </button>
                </div>
              </div>
            </Interactive3DCard>
          ))}
        </div>
      </section>

      {/* Bulk Quote Banner */}
      <section className="py-20 bg-gradient-to-b from-[#060d09] to-[#040e07] border-t border-emerald-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Need customized corporate branding or contract PPE supplies?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We provide custom company logo screen-printing on high-vis vests and hard hats, and scheduled monthly restocking for civil engineering and mining operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-amber-950 flex items-center gap-2"
            >
              <span>Download Contract Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="px-7 py-4 bg-emerald-950 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Wholesale Desk: {companyDetails.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SafetyItemsPage;
