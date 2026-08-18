import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Phone } from 'lucide-react';
import { companyDetails } from '../data/siteData';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#060d09] text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#091b10] border border-emerald-800/50 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
        <div className="text-6xl font-black text-emerald-400 font-mono">404</div>
        <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          The requested page could not be located. You can navigate back to our homepage or contact our technical team in Lapaz, Accra.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <a
            href={`tel:${companyDetails.phone1}`}
            className="px-5 py-2.5 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 rounded-xl border border-emerald-700/50 text-xs font-semibold flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
