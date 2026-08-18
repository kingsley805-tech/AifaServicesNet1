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

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  const serviceLinks = [
    {
      title: "Pest Control & Fumigation",
      desc: "EPA-certified termite, insect & rodent control",
      path: "/services/pest-control",
      icon: ShieldAlert,
      badge: "EPA Certified"
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
      title: "Construction & Architectural Tiling",
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
              <span>EPA Certified & ISO Standards Compliant</span>
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
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white p-1.5 shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform border border-emerald-100">
              <img 
                src="/imgs/aifaa.svg" 
                alt="Aifa Services LTD Logo" 
                className="w-full h-full object-contain filter brightness-110 drop-shadow" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span className="hidden items-center justify-center w-full h-full text-white font-black text-base leading-none">AS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                AIFA <span className="text-emerald-400">SERVICES</span>
                <span className="text-[10px] uppercase font-semibold bg-emerald-900/70 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-700/50">LTD</span>
              </span>
              <span className="text-[11px] text-emerald-300/80 font-medium tracking-wide">
                Multi-Sector Solutions • Ghana
              </span>
            </div>
          </Link>

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

            {/* Services Dropdown */}
            <div className="relative group" onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button 
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center space-x-1.5 ${
                  location.pathname.startsWith('/services')
                    ? 'text-emerald-400 bg-emerald-950/60'
                    : 'text-slate-200 hover:text-white hover:bg-emerald-950/30'
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
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
                    <span>Instant Quote</span>
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
              Cost Calculator
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

          {/* Action CTAs */}
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

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button 
              onClick={onOpenQuote}
              className="px-2.5 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg shadow"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-emerald-950/60 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07130a] border-b border-emerald-900/60 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'text-slate-200'
                }`
              }
            >
              Home
            </NavLink>

            <div className="py-2">
              <span className="text-xs uppercase font-bold text-emerald-400 px-3 tracking-wider">Our Services</span>
              <div className="mt-1.5 space-y-1 pl-2">
                {serviceLinks.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <NavLink
                      key={idx}
                      to={service.path}
                      className={({ isActive }) => 
                        `flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-medium ${
                          isActive ? 'bg-emerald-950 text-emerald-400' : 'text-slate-300 hover:bg-emerald-950/40'
                        }`
                      }
                    >
                      <Icon className="w-4 h-4 text-emerald-400" />
                      <span>{service.title}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'text-slate-200'
                }`
              }
            >
              About Us & Certifications
            </NavLink>

            <NavLink 
              to="/quote-estimator" 
              className={({ isActive }) => 
                `px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'text-slate-200'
                }`
              }
            >
              Project Cost Estimator
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'text-slate-200'
                }`
              }
            >
              Contact & Location (Lapaz)
            </NavLink>
          </div>

          <div className="pt-3 border-t border-emerald-900/50 flex flex-col space-y-2.5">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="w-full py-3 text-center text-xs font-bold text-white uppercase tracking-wider rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-md"
            >
              Book Service / Request Quote
            </button>
            <a 
              href={`tel:${companyDetails.phone1}`}
              className="w-full py-2.5 text-center text-xs font-semibold text-emerald-300 bg-emerald-950 rounded-xl border border-emerald-800/60 flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: {companyDetails.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
