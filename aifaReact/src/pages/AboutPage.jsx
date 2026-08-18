import React from 'react';
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
  HeartHandshake
} from 'lucide-react';
import { companyDetails, certifications } from '../data/siteData';
import CertificationsBanner from '../components/common/CertificationsBanner';

const AboutPage = ({ onOpenQuote }) => {
  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 pt-16">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#091f13] via-[#06140b] to-[#060d09] border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            About Aifa Services Limited
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Setting the Benchmark for Professional Services in Ghana
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Founded with a commitment to uncompromised quality, Aifa Services LTD is an EPA-certified multi-sector service provider delivering excellence across Pest Control, Industrial Safety Wholesale, Freight Logistics, and Construction.
          </p>
        </div>
      </section>

      {/* Company Story & Heritage */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Corporate Overview & Heritage
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A Trusted Partner for Ghana's Critical Sectors
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Based in Lapaz, Accra, Aifa Services Limited was established to bridge the gap between rigorous international standards and localized, high-touch customer delivery in West Africa.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our pest control division protects thousands of residential residences, commercial complexes, schools, and hospitals using eco-friendly WHO-approved bio-pesticides. Concurrently, our wholesale safety gear division equips thousands of mining, manufacturing, and construction workers with certified, life-saving personal protective equipment (PPE).
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#091c11] border border-emerald-800/40">
                <span className="text-2xl font-black text-emerald-400">10+</span>
                <p className="text-xs font-semibold text-white mt-0.5">Years Experience</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Multi-industry certified technicians.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#091c11] border border-emerald-800/40">
                <span className="text-2xl font-black text-amber-400">4,500+</span>
                <p className="text-xs font-semibold text-white mt-0.5">Completed Missions</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Across Accra, Tema & nationwide.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-700/40 bg-slate-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80"
                alt="Aifa Services Specialist at Work"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#091b10]/90 backdrop-blur-md p-4 rounded-2xl border border-emerald-700/40">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-700 text-white rounded-xl">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Environmental Protection Agency (EPA)</h4>
                    <p className="text-[11px] text-emerald-300">Authorized Commercial Pesticide Operator License</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#040e07] border-y border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-glass-card p-8 rounded-3xl border border-emerald-800/40 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To deliver dependable, certified, and cost-effective multi-sector services that protect health, ensure occupational safety, accelerate commerce, and elevate structural living spaces throughout Ghana.
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

            <div className="bg-glass-card p-8 rounded-3xl border border-emerald-800/40 space-y-4">
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
                  <span>Top-rated architectural tiling contractors in Accra</span>
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            The Principles That Drive Every Engagement
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 space-y-3">
            <div className="text-emerald-400 font-bold text-lg">01. Precision</div>
            <h4 className="text-base font-bold text-white">Laser-Calibrated Execution</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Whether dosing chemical dilutions or laying large-format porcelain tiles, we measure meticulously to eliminate margin for error.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 space-y-3">
            <div className="text-emerald-400 font-bold text-lg">02. Safety First</div>
            <h4 className="text-base font-bold text-white">Zero Compromise on Health</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We protect human life, environmental ecosystems, and workforces with certified protocols and audited protective equipment.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 space-y-3">
            <div className="text-emerald-400 font-bold text-lg">03. Reliability</div>
            <h4 className="text-base font-bold text-white">Punctual & Responsive</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We arrive on schedule, honor quote commitments without hidden surcharges, and respond 24/7 to pest emergencies.
            </p>
          </div>

          <div className="bg-[#091c11] p-6 rounded-2xl border border-emerald-800/40 space-y-3">
            <div className="text-emerald-400 font-bold text-lg">04. Accountability</div>
            <h4 className="text-base font-bold text-white">Guaranteed Warranties</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We stand behind our services with structured treatment warranties, formal documentation, and regular post-service audits.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#040e07] border-t border-emerald-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Looking for a corporate service contract or technical inspection?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Contact our project management team at our Lapaz, Accra headquarters for formal proposals and corporate onboarding.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-xl shadow-emerald-950 flex items-center gap-2"
            >
              <span>Request Formal Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyDetails.phone1}`}
              className="px-6 py-3.5 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
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
