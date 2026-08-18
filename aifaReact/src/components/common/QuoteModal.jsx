import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Send, 
  Phone, 
  Calendar, 
  Building, 
  ShieldAlert, 
  HardHat, 
  Truck, 
  Building2,
  MapPin,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyDetails } from '../../data/siteData';

const QuoteModal = ({ isOpen, onClose }) => {
  const [sector, setSector] = useState('pest-control');
  const [propertyType, setPropertyType] = useState('residential');
  const [urgency, setUrgency] = useState('standard');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    notes: '',
    date: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateEstimatePreview = () => {
    let base = 0;
    let label = "Standard Service Scope";

    if (sector === 'pest-control') {
      if (propertyType === 'residential') { base = 350; label = "Residential Pest Treatment (3-5 Bedrooms)"; }
      else if (propertyType === 'commercial') { base = 950; label = "Commercial / Office Facility Fumigation"; }
      else { base = 1800; label = "Industrial Warehouse / Pre-construction Barrier"; }
    } else if (sector === 'safety-items') {
      base = 1200; label = "Wholesale PPE Package (Sample Starter Bundle)";
    } else if (sector === 'general-goods') {
      base = 2500; label = "Procurement & Freight Logistics Consultation";
    } else if (sector === 'construction') {
      base = 3500; label = "British-Standard Precision Tiling & Civil Inspection";
    }

    if (urgency === 'emergency') base = Math.round(base * 1.25);
    return { base, label };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const estimate = calculateEstimatePreview();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#09170e] border border-emerald-700/50 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 p-5 sm:p-6 text-white flex items-center justify-between border-b border-emerald-600/40">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">Request Quote & Inspection</h3>
              <p className="text-xs text-emerald-200">Accra & Greater Accra Region • Licensed by EPA Ghana</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-xl hover:bg-emerald-900/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-900/60 text-emerald-400 border border-emerald-500/40 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-white">Quote Request Received!</h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-emerald-400">{formData.name || 'valued client'}</span>. Our technical dispatch team in Lapaz has received your inquiry. We will contact you at <span className="font-semibold text-emerald-400">{formData.phone}</span> within 30–60 minutes.
              </p>

              <div className="bg-emerald-950/70 border border-emerald-800/60 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-slate-300">
                <div className="flex justify-between border-b border-emerald-900/60 pb-1.5">
                  <span className="text-slate-400">Sector:</span>
                  <span className="font-semibold text-white uppercase">{sector}</span>
                </div>
                <div className="flex justify-between border-b border-emerald-900/60 pb-1.5">
                  <span className="text-slate-400">Target Date:</span>
                  <span className="font-semibold text-white">{formData.date || 'Immediate'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white">{formData.location || 'Accra Metro'}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`https://wa.me/233244374069?text=Hello%20Aifa%20Services,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.name)}%20(${sector}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Sector Selection Grid */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  1. Select Division / Sector
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSector('pest-control')}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center sm:items-start text-xs transition-all ${
                      sector === 'pest-control'
                        ? 'bg-emerald-900/80 border-emerald-400 text-white shadow-md shadow-emerald-950'
                        : 'bg-emerald-950/40 border-emerald-800/40 text-slate-300 hover:bg-emerald-950/70'
                    }`}
                  >
                    <ShieldAlert className="w-5 h-5 text-emerald-400 mb-1.5" />
                    <span className="font-bold">Pest Control</span>
                    <span className="text-[10px] text-slate-400 hidden sm:inline">Fumigation & Termites</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSector('safety-items')}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center sm:items-start text-xs transition-all ${
                      sector === 'safety-items'
                        ? 'bg-emerald-900/80 border-emerald-400 text-white shadow-md shadow-emerald-950'
                        : 'bg-emerald-950/40 border-emerald-800/40 text-slate-300 hover:bg-emerald-950/70'
                    }`}
                  >
                    <HardHat className="w-5 h-5 text-amber-400 mb-1.5" />
                    <span className="font-bold">Safety Gear</span>
                    <span className="text-[10px] text-slate-400 hidden sm:inline">PPE Wholesale</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSector('general-goods')}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center sm:items-start text-xs transition-all ${
                      sector === 'general-goods'
                        ? 'bg-emerald-900/80 border-emerald-400 text-white shadow-md shadow-emerald-950'
                        : 'bg-emerald-950/40 border-emerald-800/40 text-slate-300 hover:bg-emerald-950/70'
                    }`}
                  >
                    <Truck className="w-5 h-5 text-emerald-400 mb-1.5" />
                    <span className="font-bold">Goods & Freight</span>
                    <span className="text-[10px] text-slate-400 hidden sm:inline">Procurement</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSector('construction')}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center sm:items-start text-xs transition-all ${
                      sector === 'construction'
                        ? 'bg-emerald-900/80 border-emerald-400 text-white shadow-md shadow-emerald-950'
                        : 'bg-emerald-950/40 border-emerald-800/40 text-slate-300 hover:bg-emerald-950/70'
                    }`}
                  >
                    <Building2 className="w-5 h-5 text-slate-300 mb-1.5" />
                    <span className="font-bold">Construction</span>
                    <span className="text-[10px] text-slate-400 hidden sm:inline">Tiling & Civil</span>
                  </button>
                </div>
              </div>

              {/* Property / Scope & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Property / Facility Scale:</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-[#0c1f13] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="residential">Residential Villa / Apartment</option>
                    <option value="commercial">Commercial Office / Hotel / School</option>
                    <option value="industrial">Industrial Warehouse / Civil Site</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Urgency & Deployment Speed:</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full bg-[#0c1f13] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="standard">Standard (Next 24 - 48 Hours)</option>
                    <option value="emergency">🚨 Emergency Same-Day (Within 2-4 Hours)</option>
                    <option value="scheduled">Scheduled Project (Next Week/Month)</option>
                  </select>
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Samuel Mensah"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#0c1f13] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number (WhatsApp Active) *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +233 24 437 4069"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#0c1f13] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. samuel@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#0c1f13] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Property Location in Ghana *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Lapaz, East Legon, Tema..."
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-[#0c1f13] border border-emerald-800/70 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* Scope notes */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Specific Problem / Requirements</label>
                <textarea
                  name="notes"
                  rows={2}
                  placeholder="Describe your pest issue, PPE quantity needed, logistics destination, or tiling area in sq. meters..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full bg-[#0c1f13] border border-emerald-800/70 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                ></textarea>
              </div>

              {/* Estimate Preview Bar */}
              <div className="bg-emerald-950/80 border border-emerald-800/60 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Preliminary Base Estimate Preview:</span>
                  <span className="font-semibold text-emerald-300">{estimate.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-amber-400">GH₵ {estimate.base.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400 block">*Final quote confirmed after inspection</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Fast response within 30 mins
                </span>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-950 flex items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
