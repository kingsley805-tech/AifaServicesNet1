import React, { useState } from 'react';
import { 
  Truck, 
  Plane, 
  Ship, 
  Warehouse, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Globe, 
  Box 
} from 'lucide-react';
import { servicePillars, companyDetails } from '../data/siteData';

const GeneralGoodsLogisticsPage = ({ onOpenQuote }) => {
  const goodsData = servicePillars.find(p => p.id === 'general-goods');

  const modes = [
    {
      icon: Ship,
      title: "Ocean Freight (FCL & LCL)",
      desc: "Cost-effective containerized shipping through Tema and Takoradi ports. Complete customs clearance, demurrage avoidance, and offloading.",
      stats: "Major Global Sea Corridors"
    },
    {
      icon: Plane,
      title: "Express Air Cargo",
      desc: "Fast, expedited freight for time-critical procurement, emergency equipment, and high-value corporate consignments cleared at Kotoka International Airport.",
      stats: "3 - 7 Day International Express"
    },
    {
      icon: Truck,
      title: "Cross-Regional Land Haulage",
      desc: "Heavy-duty truck distribution, articulated trailers, and secure vans delivering door-to-door across all 16 administrative regions of Ghana.",
      stats: "Nationwide Door-to-Door Delivery"
    },
    {
      icon: Warehouse,
      title: "Secure Warehousing & Staging",
      desc: "Safe, 24/7 monitored holding facilities in Accra and Tema for inventory buffering, consolidation, palletizing, and just-in-time dispatch.",
      stats: "Climate-Controlled Staging Hubs"
    }
  ];

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 pt-16">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a1e12] via-[#06140b] to-[#060d09] border-b border-emerald-900/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                Division 03 • Supply of General Goods & Logistics
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Supply of General Goods, Procurement & Freight Logistics
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Seamless corporate procurement, bulk institutional supplies, ocean & air freight forwarding, and reliable nationwide road transport throughout Ghana.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-7 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-emerald-950 flex items-center gap-2"
                >
                  <span>Request Procurement Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${companyDetails.phone1}`}
                  className="px-6 py-4 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/50 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Logistics Desk: {companyDetails.phoneDisplay1}</span>
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
                  src="https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-ocean-40674-large.mp4"
                  poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Fast & Secure</span>
                  <h4 className="text-sm font-bold text-white">Full-Spectrum Cargo Logistics</h4>
                  <p className="text-[11px] text-slate-300">Tema Port handling & rapid inter-city dispatch.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Logistics Capabilities Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            Multi-Modal Supply Chain
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Integrated Global & Domestic Delivery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modes.map((mode, idx) => {
            const Icon = mode.icon;
            return (
              <div
                key={idx}
                className="bg-glass-card rounded-3xl p-8 border border-emerald-800/40 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-900/50 border border-emerald-700/50 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                      {mode.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {mode.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {mode.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-900/40 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ghana Metro & Ports Coverage</span>
                  <button
                    onClick={onOpenQuote}
                    className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                  >
                    Request Freight Rate
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Procurement Pillars */}
      <section className="py-16 bg-[#040e07] border-y border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Corporate Supply Service
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Reliable General Goods Sourcing & Institutional Supplies
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We manage the entire procurement lifecycle for corporate entities, NGOs, hotels, and government agencies. From initial manufacturer vetting to port customs clearance and final warehouse offloading, we remove supply chain bottlenecks.
              </p>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Institutional furniture, equipment & appliances</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Industrial consumables, packaging & building supplies</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom corporate procurement contracts with scheduled restocking</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#091b10] rounded-3xl p-6 sm:p-8 border border-emerald-800/50">
                <h3 className="text-lg font-bold text-white mb-4">Request Freight / Supply Consultation</h3>
                <div className="space-y-3 text-xs">
                  <p className="text-slate-300">
                    Need a dedicated freight rate or bulk procurement proposal? Connect directly with our logistics coordinator in Accra:
                  </p>
                  <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-800/60 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Hub Location:</span>
                      <span className="font-semibold text-white">Lapaz, Accra, Ghana</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Direct Phone:</span>
                      <a href={`tel:${companyDetails.phone1}`} className="font-bold text-emerald-400">{companyDetails.phoneDisplay1}</a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Email:</span>
                      <span className="text-slate-200">{companyDetails.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all"
                  >
                    Launch Quote Calculator
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default GeneralGoodsLogisticsPage;
