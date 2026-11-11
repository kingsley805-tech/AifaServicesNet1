import React, { useState } from 'react';
import { 
  ShieldAlert, 
  HardHat, 
  Truck, 
  Building2, 
  CheckCircle2, 
  Send, 
  Calculator
} from 'lucide-react';
import { companyDetails } from '../data/siteData';

const scopeLabels = {
  'pest-control': [
    "Studio / 1-2 Bedroom Apartment",
    "3-4 Bedroom Standard Home / Compound",
    "Executive 5+ Bedroom Villa / Commercial Office",
    "Large Commercial Facility / Warehouse / Factory"
  ],
  'safety-items': [
    "Starter PPE Pack (10 Workers)",
    "Contractor Site Safety Pack (25 Workers)",
    "Commercial Industrial Safety Pack (60 Workers)",
    "Mining & Civil Major Fleet Pack (150+ Workers)"
  ],
  'general-goods': [
    "Local Metropolitan Delivery / Haulage (Accra/Tema)",
    "Inter-Regional Dedicated Truck Haulage",
    "Consolidated Air / Ocean Cargo Clearance",
    "Full Container Load (FCL) End-to-End Logistics"
  ],
  'construction': [
    "Bathroom / Kitchen Precision Tiling (Up to 25 m²)",
    "Living & Dining Tiling (Up to 80 m²)",
    "Complete Residential Villa Flooring (Up to 250 m²)",
    "Commercial Complex / Mall Floor Tiling (600+ m²)"
  ]
};

const sectorNames = {
  'pest-control': "Pest Control & Fumigation",
  'safety-items': "Wholesale Safety & PPE",
  'general-goods': "Goods & Freight Logistics",
  'construction': "Construction & Architectural Tiling"
};

const QuoteEstimatorPage = ({ onOpenQuote }) => {
  const [sector, setSector] = useState('pest-control');
  const [propertyScale, setPropertyScale] = useState(2); // 1: small, 2: medium, 3: large, 4: industrial
  const [urgency, setUrgency] = useState('standard');
  const [addons, setAddons] = useState({
    warrantyExt: true,
    deepMisting: false,
    drainLarvicide: false,
    brandedPPE: false,
    tankingMembrane: false
  });
  const handleAddonToggle = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const scopeLabel = scopeLabels[sector][propertyScale - 1];

  const selectedAddons = [];
  if (sector === 'pest-control') {
    if (addons.deepMisting) selectedAddons.push("Indoor Airborne Deep ULV Misting");
    if (addons.drainLarvicide) selectedAddons.push("Gutter Biological Larvicide Treatment");
  }
  if (sector === 'safety-items' && addons.brandedPPE) {
    selectedAddons.push("Custom Corporate Logo Screen Printing");
  }
  if (sector === 'construction' && addons.tankingMembrane) {
    selectedAddons.push("Liquid Waterproof Tanking Membrane");
  }
  if (addons.warrantyExt) selectedAddons.push("Extended Written Warranty & Free Follow-up Revisit");

  const whatsappMessage = encodeURIComponent(
    `Hello Aifa Services, I would like a customised quote. Service: ${sectorNames[sector]}. Scope: ${scopeLabel}. Response speed: ${urgency}. Add-ons: ${selectedAddons.join(', ') || 'None'}.`
  );

  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 pt-16">
      
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#0a2013] via-[#06140c] to-[#060d09] border-b border-emerald-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            Customised Quote Request
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get a Tailored Quote For Your Project
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what you need and our team will prepare a personalised quote for your property, workforce, or service scope — no fixed published prices.
          </p>
        </div>
      </section>

      {/* Main Interactive Tool Container */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#091b10] rounded-3xl p-6 sm:p-10 border border-emerald-700/40 shadow-2xl space-y-8">
          
          {/* Step 1: Select Sector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              Step 1: Choose Service Division
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                type="button"
                onClick={() => setSector('pest-control')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  sector === 'pest-control'
                    ? 'bg-emerald-800 border-emerald-400 text-white shadow-lg'
                    : 'bg-emerald-950/50 border-emerald-800/40 text-slate-300 hover:bg-emerald-900/40'
                }`}
              >
                <ShieldAlert className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm">Pest Control</h4>
                <p className="text-[11px] text-slate-300">Fumigation & Termite Barriers</p>
              </button>

              <button
                type="button"
                onClick={() => setSector('safety-items')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  sector === 'safety-items'
                    ? 'bg-emerald-800 border-emerald-400 text-white shadow-lg'
                    : 'bg-emerald-950/50 border-emerald-800/40 text-slate-300 hover:bg-emerald-900/40'
                }`}
              >
                <HardHat className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="font-bold text-sm">Safety Gear</h4>
                <p className="text-[11px] text-slate-300">Wholesale PPE Supply</p>
              </button>

              <button
                type="button"
                onClick={() => setSector('general-goods')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  sector === 'general-goods'
                    ? 'bg-emerald-800 border-emerald-400 text-white shadow-lg'
                    : 'bg-emerald-950/50 border-emerald-800/40 text-slate-300 hover:bg-emerald-900/40'
                }`}
              >
                <Truck className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm">Goods & Freight</h4>
                <p className="text-[11px] text-slate-300">Procurement & Haulage</p>
              </button>

              <button
                type="button"
                onClick={() => setSector('construction')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  sector === 'construction'
                    ? 'bg-emerald-800 border-emerald-400 text-white shadow-lg'
                    : 'bg-emerald-950/50 border-emerald-800/40 text-slate-300 hover:bg-emerald-900/40'
                }`}
              >
                <Building2 className="w-6 h-6 text-slate-300 mb-2" />
                <h4 className="font-bold text-sm">Construction</h4>
                <p className="text-[11px] text-slate-300">BS 5385 Tiling & Renovation</p>
              </button>
            </div>
          </div>

          {/* Step 2: Scale Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Step 2: Property Scale / Workforce Volume
              </label>
              <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                Level 0{propertyScale}: {scopeLabel}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={propertyScale}
              onChange={(e) => setPropertyScale(parseInt(e.target.value))}
              className="w-full h-3 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
              <span>Compact / Residential</span>
              <span>Medium / Compound</span>
              <span>Large / Commercial</span>
              <span>Industrial Facility</span>
            </div>
          </div>

          {/* Step 3: Urgency & Addons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                Step 3: Response Speed
              </label>
              <div className="space-y-2">
                <label className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                  urgency === 'standard' ? 'bg-emerald-950 border-emerald-500 text-white' : 'bg-[#06120a] border-emerald-900/50 text-slate-300'
                }`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'standard'}
                      onChange={() => setUrgency('standard')}
                      className="accent-emerald-500"
                    />
                    <span className="text-xs font-semibold">Standard Scheduled Deployment (24-48 Hours)</span>
                  </div>
                </label>

                <label className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                  urgency === 'emergency' ? 'bg-emerald-950 border-emerald-500 text-white' : 'bg-[#06120a] border-emerald-900/50 text-slate-300'
                }`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'emergency'}
                      onChange={() => setUrgency('emergency')}
                      className="accent-emerald-500"
                    />
                    <span className="text-xs font-semibold">🚨 Emergency Same-Day Dispatch (Within 2-4 Hours)</span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                Optional Enhancements
              </label>
              <div className="space-y-2">
                {sector === 'pest-control' && (
                  <>
                    <label className="flex items-center justify-between p-3 rounded-xl bg-[#06120a] border border-emerald-900/50 text-xs text-slate-200 cursor-pointer">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={addons.deepMisting}
                          onChange={() => handleAddonToggle('deepMisting')}
                          className="accent-emerald-500"
                        />
                        <span>Indoor Airborne Deep ULV Misting</span>
                      </span>
                    </label>
                    <label className="flex items-center justify-between p-3 rounded-xl bg-[#06120a] border border-emerald-900/50 text-xs text-slate-200 cursor-pointer">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={addons.drainLarvicide}
                          onChange={() => handleAddonToggle('drainLarvicide')}
                          className="accent-emerald-500"
                        />
                        <span>Gutter Biological Larvicide Treatment</span>
                      </span>
                    </label>
                  </>
                )}

                {sector === 'safety-items' && (
                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#06120a] border border-emerald-900/50 text-xs text-slate-200 cursor-pointer">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={addons.brandedPPE}
                        onChange={() => handleAddonToggle('brandedPPE')}
                        className="accent-emerald-500"
                      />
                      <span>Custom Corporate Logo Screen Printing</span>
                    </span>
                  </label>
                )}

                {sector === 'construction' && (
                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#06120a] border border-emerald-900/50 text-xs text-slate-200 cursor-pointer">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={addons.tankingMembrane}
                        onChange={() => handleAddonToggle('tankingMembrane')}
                        className="accent-emerald-500"
                      />
                      <span>Liquid Waterproof Tanking Membrane</span>
                    </span>
                  </label>
                )}

                <label className="flex items-center justify-between p-3 rounded-xl bg-[#06120a] border border-emerald-900/50 text-xs text-slate-200 cursor-pointer">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addons.warrantyExt}
                      onChange={() => handleAddonToggle('warrantyExt')}
                      className="accent-emerald-500"
                    />
                    <span>Extended Written Warranty & Free Follow-up Revisit</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Selection Summary & Quote Request */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0a2213] to-emerald-950 border border-emerald-500/50 shadow-2xl">
            <div className="space-y-3 mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Your Selection Summary</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="bg-[#06120a] rounded-xl px-4 py-3 border border-emerald-900/50">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Service</span>
                  <span className="font-semibold text-white">{sectorNames[sector]}</span>
                </div>
                <div className="bg-[#06120a] rounded-xl px-4 py-3 border border-emerald-900/50">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Scope / Level</span>
                  <span className="font-semibold text-white">{scopeLabel}</span>
                </div>
                <div className="bg-[#06120a] rounded-xl px-4 py-3 border border-emerald-900/50">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Response Speed</span>
                  <span className="font-semibold text-white">
                    {urgency === 'standard' ? 'Standard (24-48 Hours)' : 'Emergency (2-4 Hours)'}
                  </span>
                </div>
                <div className="bg-[#06120a] rounded-xl px-4 py-3 border border-emerald-900/50">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Enhancements</span>
                  <span className="font-semibold text-white">
                    {selectedAddons.length ? selectedAddons.join('; ') : 'None'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenQuote}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Request Customised Quote</span>
              </button>

              <a
                href={`https://wa.me/${companyDetails.phone1.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 bg-emerald-950 text-emerald-300 hover:text-white font-bold rounded-xl text-xs uppercase tracking-wider border border-emerald-700/60 flex items-center justify-center gap-2"
              >
                <span>WhatsApp Our Team</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400 mt-4 text-center sm:text-left">
              Our team will confirm scope and send you a formal personalised quote. Figures are not published online.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default QuoteEstimatorPage;
