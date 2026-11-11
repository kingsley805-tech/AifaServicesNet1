import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  ShieldAlert,
  HardHat,
  Truck,
  Building2
} from 'lucide-react';
import { companyDetails } from '../../data/siteData';

const Navbar = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = React.useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  const serviceLinks = [
    {
      title: "Pest Control & Fumigation",
      desc: "Professional termite, insect & rodent control",
      path: "/services/pest-control",
      icon: ShieldAlert,
      badge: "Fumigation"
    },
    {
      title: "Wholesale Safety Items & PPE",
      desc: "Industrial helmets, boots, gloves & gear",
      path: "/services/safety-items",
      icon: HardHat,
      badge: "Wholesale Direct"
    },
    {
      title: "Supply of General Goods",
      desc: "Corporate procurement & freight logistics",
      path: "/services/general-goods",
      icon: Truck,
      badge: "Global Freight"
    },
    {
      title: "Construction & Furnishing",
      desc: "British-standard precision tiling & building",
      path: "/services/construction",
      icon: Building2,
      badge: "BS 5385 Std"
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-[#051a0e] text-slate-300 text-xs border-b border-emerald-950/80 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-emerald-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Ghana & International Standards Compliant</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mon-Sat: 7:30AM – 6:00PM | 24/7 Rapid Pest Response</span>
            </span>
            <span className="text-slate-400 hidden lg:inline">
              📍 Lapaz, Accra, Ghana
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href={`tel:${companyDetails.phone1}`} 
              className="flex items-center space-x-1 text-slate-200 hover:text-emerald-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hotline: {companyDetails.phoneDisplay1}</span>
            </a>
            <a 
              href={`mailto:${companyDetails.email}`} 
              className="flex items-center space-x-1 text-slate-200 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden lg:inline">{companyDetails.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#09150d]/95 backdrop-blur-md shadow-2xl border-b border-emerald-900/40 py-3' 
            : 'bg-[#09150d]/85 backdrop-blur-sm border-b border-emerald-900/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left section: Mobile Hamburger Toggle + Brand Logo */}
          <div className="flex items-center space-x-3">
            {/* Mobile Hamburger on Left */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-800/70 focus:outline-none transition-colors"
              aria-label="Toggle navigation"
            >
              <Menu className="w-5 h-5 text-emerald-400" />
            </button>

            {/* Brand Logo */}
            <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 group">
              <div className="relative flex items-center justify-center w-[68px] h-[68px] sm:w-20 sm:h-20 rounded-xl bg-white shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform border border-emerald-100">
                <img 
                  src="/imgs/aifaa.svg" 
                  alt="Aifa Services LTD Logo" 
                  className="w-auto h-[52px] sm:h-[60px] object-contain" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="hidden items-center justify-center w-full h-full text-white font-black text-base leading-none">AS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  AIFA <span className="text-emerald-400">SERVICES</span>
                  <span className="text-[10px] uppercase font-semibold bg-emerald-900/70 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-700/50">LTD</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-emerald-300/80 font-medium tracking-wide">
                  Multi-Sector Solutions • Ghana
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'text-emerald-400 bg-emerald-950/60' 
                    : 'text-slate-200 hover:text-white hover:bg-emerald-950/30'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown (Click-to-open) */}
            <div className="relative" ref={dropdownRef}>
              <button 
                type="button"
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center space-x-1.5 ${
                  location.pathname.startsWith('/services') || servicesDropdownOpen
                    ? 'text-emerald-400 bg-emerald-950/60'
                    : 'text-slate-200 hover:text-white hover:bg-emerald-950/30'
                }`}
                onClick={() => setServicesDropdownOpen(prev => !prev)}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services & Sectors</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {/* Mega Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-[#0c1c12] border border-emerald-800/40 rounded-2xl shadow-2xl p-4 transition-all duration-200 origin-top mt-1 ${
                  servicesDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
                }`}
              >
                <div className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 px-3 pb-2 border-b border-emerald-900/50 mb-2 flex items-center justify-between">
                  <span>Our 4 Core Divisions</span>
                  <span className="text-slate-400 lowercase font-normal">Accra & Nationwide Coverage</span>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {serviceLinks.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link 
                        key={index}
                        to={service.path}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start space-x-3.5 p-2.5 rounded-xl hover:bg-emerald-950/70 border border-transparent hover:border-emerald-700/40 transition-all group/item"
                      >
                        <div className="p-2 rounded-lg bg-emerald-900/40 border border-emerald-700/30 text-emerald-400 group-hover/item:bg-emerald-700 group-hover/item:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-white group-hover/item:text-emerald-300 transition-colors">
                              {service.title}
                            </h4>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-medium">
                              {service.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5 truncate">
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-3 pt-2.5 border-t border-emerald-900/50 flex items-center justify-between px-2 text-xs">
                  <span className="text-slate-400">Need emergency fumigation or bulk safety gear?</span>
                  <button 
                    onClick={() => { setServicesDropdownOpen(false); onOpenQuote(); }}
                    className="text-emerald-400 font-semibold hover:text-emerald-300 flex items-center gap-1"
                  >
                    <span>Instant Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'text-emerald-400 bg-emerald-950/60' 
                    : 'text-slate-200 hover:text-white hover:bg-emerald-950/30'
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink 
              to="/quote-estimator" 
              className={({ isActive }) => 
                `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'text-emerald-400 bg-emerald-950/60' 
                    : 'text-slate-200 hover:text-white hover:bg-emerald-950/30'
                }`
              }
            >
              Get a Quote
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'text-emerald-400 bg-emerald-950/60' 
                    : 'text-slate-200 hover:text-white hover:bg-emerald-950/30'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href={`tel:${companyDetails.phone1}`}
              className="flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-800/40 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Us</span>
            </a>

            <button 
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase tracking-wider rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Book / Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          {/* Right section for Mobile: Emergency call icon + Quote button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${companyDetails.phone1}`}
              className="p-2 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 hover:bg-emerald-900 transition-colors"
              title="Call Emergency Hotline"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button 
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-green-500 rounded-xl shadow-md active:scale-95 transition-all"
            >
              Quote
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer (Drops / Slides in from the LEFT) */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Dark Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel Sliding in from Left */}
        <div 
          className={`absolute top-0 bottom-0 left-0 w-[310px] sm:w-[350px] max-w-[85vw] bg-[#07140b] border-r border-emerald-600/50 shadow-2xl flex flex-col justify-between p-5 transform transition-transform duration-300 ease-out z-10 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-emerald-900/60">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2.5">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center">
                <img src="/imgs/aifaa.svg" alt="Aifa Logo" className="w-auto h-[46px] object-contain" />
              </div>
              <div>
                <span className="text-base font-black text-white block">AIFA <span className="text-emerald-400">SERVICES</span></span>
                <span className="text-[10px] text-emerald-300/80 font-mono">Lapaz, Accra • Ghana</span>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-xl bg-emerald-950 text-slate-300 hover:text-white border border-emerald-800"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-emerald-400" />
            </button>
          </div>

          {/* Drawer Scrollable Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4 space-y-2">
            <NavLink 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                `flex items-center px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider ${
                  isActive ? 'bg-emerald-950 text-emerald-400 border border-emerald-700' : 'text-slate-200 hover:bg-emerald-950/40'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown in Drawer */}
            <div className="py-2 px-1">
              <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 tracking-widest block mb-2 px-2.5">
                Our 4 Core Divisions
              </span>
              <div className="space-y-1.5">
                {serviceLinks.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <NavLink
                      key={idx}
                      to={service.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => 
                        `flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs font-semibold ${
                          isActive 
                            ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-600' 
                            : 'text-slate-300 hover:bg-emerald-950/50 hover:text-white'
                        }`
                      }
                    >
                      <div className="p-1.5 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 truncate">
                        <span className="block truncate">{service.title}</span>
                        <span className="text-[10px] font-mono text-emerald-400 block">{service.badge}</span>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <NavLink 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                `flex items-center px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider ${
                  isActive ? 'bg-emerald-950 text-emerald-400 border border-emerald-700' : 'text-slate-200 hover:bg-emerald-950/40'
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink 
              to="/quote-estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                `flex items-center px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider ${
                  isActive ? 'bg-emerald-950 text-emerald-400 border border-emerald-700' : 'text-slate-200 hover:bg-emerald-950/40'
                }`
              }
            >
              Request a Quote
            </NavLink>

            <NavLink 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                `flex items-center px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider ${
                  isActive ? 'bg-emerald-950 text-emerald-400 border border-emerald-700' : 'text-slate-200 hover:bg-emerald-950/40'
                }`
              }
            >
              Contact & Headquarters
            </NavLink>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-4 border-t border-emerald-900/60 space-y-2.5">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="w-full py-3.5 text-center text-xs font-black text-white uppercase tracking-wider rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 shadow-xl shadow-emerald-950 active:scale-95 transition-all"
            >
              Book Service / Request Quote
            </button>
            <a 
              href={`tel:${companyDetails.phone1}`}
              className="w-full py-3 text-center text-xs font-bold text-emerald-300 bg-emerald-950/80 rounded-xl border border-emerald-700/50 flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hotline: {companyDetails.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
