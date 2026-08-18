import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall } from 'lucide-react';
import { companyDetails } from '../../data/siteData';

const WhatsAppFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Pest Control & Fumigation');
  const [customNote, setCustomNote] = useState('');

  const services = [
    'Pest Control & Fumigation',
    'Wholesale Safety Items & PPE',
    'Supply of General Goods',
    'Construction & Tiling',
    'Emergency Inspection'
  ];

  const handleStartChat = (e) => {
    e.preventDefault();
    const message = `Hello Aifa Services Ltd! I am inquiring about: ${selectedService}.${customNote ? ' Note: ' + customNote : ''}`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/233244374069?text=${encoded}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Chat Launcher */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#0c1d12] border border-emerald-700/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-950 p-1 border border-emerald-400">
                  <img src="/imgs/aifaa.svg" alt="Aifa Services" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Aifa Services Support</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online • Typically replies instantly
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-emerald-800/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#08140c] text-xs">
            <div className="bg-emerald-950/70 border border-emerald-800/50 rounded-xl p-3 text-slate-200">
              <p>
                👋 Hello! Welcome to Aifa Services Limited. How can our technical specialists assist you today?
              </p>
            </div>

            <form onSubmit={handleStartChat} className="space-y-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Select Service of Interest:</label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#0e2416] border border-emerald-800/70 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500 text-xs"
                >
                  {services.map((s, idx) => (
                    <option key={idx} value={s} className="bg-[#0c1d12] text-white">{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Your message or specific requirement:</label>
                <input 
                  type="text"
                  placeholder="e.g. Need urgent fumigation in East Legon..."
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full bg-[#0e2416] border border-emerald-800/70 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/50 transition-all text-xs"
              >
                <span>Chat on WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Quick Call footer */}
          <div className="bg-[#050e08] px-4 py-2 border-t border-emerald-950 flex items-center justify-between text-[11px] text-slate-400">
            <span>Prefer a direct phone call?</span>
            <a 
              href={`tel:${companyDetails.phone1}`}
              className="text-emerald-400 font-semibold hover:text-emerald-300 flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>{companyDetails.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white px-4 py-3.5 rounded-full shadow-2xl shadow-emerald-900/60 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Contact via WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <i className="fab fa-whatsapp text-2xl"></i>
        <span className="font-bold text-xs uppercase tracking-wider hidden sm:inline">
          Live Chat / WhatsApp
        </span>
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;
