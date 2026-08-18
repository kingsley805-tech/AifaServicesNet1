import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { faqList, companyDetails } from '../../data/siteData';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#050e08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
            Clear Answers About Our Services & Operations
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Have another question? Call our direct hotline in Lapaz, Accra at <a href={`tel:${companyDetails.phone1}`} className="text-emerald-400 font-semibold">{companyDetails.phoneDisplay1}</a>.
          </p>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#0b1c11] border-emerald-600/60 shadow-lg shadow-emerald-950/50' 
                    : 'bg-[#08150d] border-emerald-900/40 hover:border-emerald-700/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-700 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-emerald-900/40 animate-in fade-in duration-150">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
