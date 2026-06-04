import { useState } from 'react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';
import { MOCK_TESTIMONIALS } from '../mockData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? MOCK_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === MOCK_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const getRoleLabel = (testimonial: Testimonial) => {
    if (testimonial.role === 'Trader') {
      return testimonial.company || 'Verified Stone Trader';
    }
    return 'UK Homeowner';
  };

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden">
      
      {/* Decorative backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(14,165,233,0.06),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-bold text-teal-400 font-mono uppercase tracking-widest">
            <Quote className="w-4 h-4 text-teal-400" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            The Proof Is In The Pudding
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            From London flats to Yorkshire masonry projects, hear what real verified traders and homeowners have to say about saving costs and getting fast quotes.
          </p>
        </div>

        {/* Dynamic Carousel / Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Slider Panel */}
          <div className="lg:col-span-8 bg-slate-950 p-6 sm:p-10 border border-slate-850 rounded-2xl shadow-2xl relative min-h-[300px] flex flex-col justify-between">
            <div className="absolute top-6 right-8 text-slate-800 pointer-events-none">
              <Quote className="w-20 h-20 opacity-20 stroke-1" />
            </div>

            <div className="space-y-6">
              {/* Stars rating */}
              <div className="flex gap-1">
                {Array.from({ length: MOCK_TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote value */}
              <p className="text-slate-200 text-sm sm:text-base md:text-lg italic leading-relaxed leading-7">
                "{MOCK_TESTIMONIALS[currentIndex].content}"
              </p>
            </div>

            {/* Profile footer and navigation links */}
            <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
              
              {/* User profile */}
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-slate-800 bg-slate-900 shrink-0">
                  <img
                    src={MOCK_TESTIMONIALS[currentIndex].avatarUrl}
                    alt={MOCK_TESTIMONIALS[currentIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-sans font-bold text-sm text-white">{MOCK_TESTIMONIALS[currentIndex].name}</span>
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="text-slate-400 text-[10px] sm:text-xs font-mono font-medium">
                    {getRoleLabel(MOCK_TESTIMONIALS[currentIndex])} · {MOCK_TESTIMONIALS[currentIndex].location}
                  </p>
                </div>
              </div>

              {/* Slider Toggles */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 border border-slate-800 bg-slate-900 hover:bg-slate-850 rounded-lg hover:text-teal-400 transition-colors cursor-pointer"
                  id="testimonial-prev-btn"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center px-2 text-xs font-mono text-slate-500">
                  {currentIndex + 1} / {MOCK_TESTIMONIALS.length}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 border border-slate-800 bg-slate-900 hover:bg-slate-850 rounded-lg hover:text-teal-400 transition-colors cursor-pointer"
                  id="testimonial-next-btn"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Quick stats side column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 bg-gradient-to-br from-indigo-950 to-slate-950 rounded-2xl border border-slate-850 space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider">MAI TRUST PARAMETERS</h4>
              
              <div className="space-y-4">
                <div className="border-b border-slate-900 pb-3">
                  <div className="text-2xl font-bold font-mono text-white">4.92 / 5</div>
                  <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-widest font-mono">Verified Customer Score</p>
                </div>
                <div className="border-b border-slate-900 pb-3">
                  <div className="text-2xl font-bold font-mono text-teal-400">1,200+</div>
                  <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-widest font-mono">British Fabricators Connected</p>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-indigo-300">£1.4m</div>
                  <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-widest font-mono">Milestone Payments Protected</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-slate-950/30 rounded-xl border border-dashed border-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Are you a contractor?</span>
              <p className="text-[11px] text-slate-500 mt-1">Get certified, list your stone remnants and secure high-intent leads near your area.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
