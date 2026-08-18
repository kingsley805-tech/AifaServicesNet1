import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { companyDetails } from '../../data/siteData';

const Footer = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#040c07] text-slate-300 border-t border-emerald-950/80 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-emerald-900/10 blur-[120px] pointer-events-none"></div>

      {/* Top CTA Banner */}
      <div className="border-b border-emerald-900/40 bg-gradient-to-r from-emerald-950/60 via-[#071a0f]/80 to-emerald-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-glass-card p-6 sm:p-8 rounded-3xl border border-emerald-700/30">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/80 text-emerald-300 border border-emerald-700/50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Licensed • Certified • Insured in Ghana
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to protect your property or order wholesale supplies?
              </h3>
              <p className="text-slate-400 text-sm max-w-2xl">
                Get an instant quote, book an on-site inspection in Accra, or consult with our technical team today.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 text-sm font-bold text-white uppercase tracking-wider rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 shadow-xl shadow-emerald-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={companyDetails.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 rounded-xl border border-emerald-700/40 hover:border-emerald-600 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-900 p-2 shadow-lg shadow-emerald-900/40">
                <img 
                  src="/imgs/aifaa.svg" 
                  alt="Aifa Services LTD" 
                  className="w-full h-full object-contain filter brightness-110" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  AIFA <span className="text-emerald-400">SERVICES</span> LTD
                </span>
                <span className="text-xs text-emerald-300/80 font-medium block">
                  Ghana's Trusted Multi-Sector Enterprise
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Providing standard-setting solutions in EPA-certified pest eradication, wholesale industrial PPE, global freight logistics, and British-standard construction & tiling across Greater Accra and all regions of Ghana.
            </p>

            {/* Certifications preview badge */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  EPA Ghana Reg.
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  GSA Standards
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  BS 5385 Tiling
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={companyDetails.socials.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800/60 hover:border-emerald-500 hover:bg-emerald-800/50 flex items-center justify-center text-emerald-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-base"></i>
              </a>
              <a 
                href={companyDetails.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800/60 hover:border-emerald-500 hover:bg-emerald-800/50 flex items-center justify-center text-emerald-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a 
                href={companyDetails.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800/60 hover:border-emerald-500 hover:bg-emerald-800/50 flex items-center justify-center text-emerald-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a 
                href={companyDetails.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800/60 hover:border-emerald-500 hover:bg-emerald-800/50 flex items-center justify-center text-emerald-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a 
                href={companyDetails.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800/60 hover:border-emerald-500 hover:bg-emerald-800/50 flex items-center justify-center text-emerald-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-base"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2.5">
              Our Core Divisions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/pest-control" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Termite & Pest Eradication
                </Link>
              </li>
              <li>
                <Link to="/services/pest-control" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Commercial Fumigation
                </Link>
              </li>
              <li>
                <Link to="/services/safety-items" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Wholesale Safety Gear & PPE
                </Link>
              </li>
              <li>
                <Link to="/services/general-goods" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Supply of General Goods
                </Link>
              </li>
              <li>
                <Link to="/services/general-goods" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Global Freight & Haulage
                </Link>
              </li>
              <li>
                <Link to="/services/construction" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> British Standard Tiling
                </Link>
              </li>
              <li>
                <Link to="/services/construction" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Structural Renovations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2.5">
              Navigation & Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> About Aifa Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> EPA Certifications
                </Link>
              </li>
              <li>
                <Link to="/quote-estimator" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Project Cost Estimator
                </Link>
              </li>
              <li>
                <Link to="/services/safety-items" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> PPE Catalog & Specs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Lapaz Office Location
                </Link>
              </li>
              <li>
                <button 
                  onClick={onOpenQuote}
                  className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="text-emerald-500">›</span> Request Urgent Service
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-2.5">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{companyDetails.location}</span>
              </div>

              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${companyDetails.phone1}`} className="hover:text-emerald-400 block font-medium">
                    {companyDetails.phoneDisplay1}
                  </a>
                  <a href={`tel:${companyDetails.phone2}`} className="hover:text-emerald-400 block text-slate-400">
                    {companyDetails.phoneDisplay2}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-emerald-400 break-all">
                  {companyDetails.email}
                </a>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{companyDetails.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-emerald-950 bg-[#020704] py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Aifa Services Limited. All rights reserved.</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-500">Registered in the Republic of Ghana</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-emerald-400 font-medium">
              Lapaz, Accra • Nationwide Service
            </span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
