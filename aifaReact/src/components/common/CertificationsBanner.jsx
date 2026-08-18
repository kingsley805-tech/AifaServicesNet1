import React from 'react';
import { ShieldCheck, Award, CheckCircle, Leaf, CheckCircle2 } from 'lucide-react';
import { certifications } from '../../data/siteData';

const CertificationsBanner = () => {
  return (
    <section className="relative py-12 bg-gradient-to-b from-[#05120a] via-[#091f12] to-[#05120a] border-y border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Licensed & Verified Accreditations
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
            Complying With National & International Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((item, index) => (
            <div 
              key={index}
              className="bg-glass-card p-5 rounded-2xl border border-emerald-800/30 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-emerald-900/40 text-emerald-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-[11px] text-emerald-400 font-medium mb-1.5">
                  {item.label}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-900/40 flex items-center gap-1.5 text-[11px] text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Fully Certified & Active in Ghana</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsBanner;
