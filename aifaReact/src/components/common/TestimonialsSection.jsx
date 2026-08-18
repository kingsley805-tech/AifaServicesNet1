import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { clientReviews } from '../../data/siteData';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % clientReviews.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + clientReviews.length) % clientReviews.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#061009] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
              Verified Client Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Trusted by Homes, Estates & Corporations Across Ghana
            </h2>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-slate-300 hover:text-white hover:border-emerald-500 transition-colors"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-slate-300 hover:text-white hover:border-emerald-500 transition-colors"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {clientReviews.map((review, idx) => (
            <div
              key={review.id}
              className={`bg-glass-card rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                idx === activeIndex 
                  ? 'border-emerald-500 shadow-xl shadow-emerald-950/70 -translate-y-1' 
                  : 'border-emerald-900/40 hover:border-emerald-700/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-800/60" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-900/50 flex items-center space-x-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-700/50"
                  onError={(e) => {
                    e.target.src = "/img/user.jpg";
                  }}
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate flex items-center gap-1">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3 h-3 text-emerald-400 inline" />
                  </h4>
                  <p className="text-[11px] text-emerald-400 truncate">{review.role}</p>
                  <p className="text-[10px] text-slate-400 truncate">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
