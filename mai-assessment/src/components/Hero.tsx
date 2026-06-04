import React, { useState, useEffect } from 'react';
import { Search, MapPin, Sparkles, Star, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { POPULAR_SERVICES } from '../mockData';

interface HeroProps {
  onSearch: (service: string, postcode: string) => void;
  onPostProjectClick: () => void;
}

export default function Hero({ onSearch, onPostProjectClick }: HeroProps) {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  const [postcode, setPostcode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchStep, setSearchStep] = useState(0);
  const [searchResultCount, setSearchResultCount] = useState(0);

  // Rotating header services list
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % POPULAR_SERVICES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService && !postcode) return;

    setIsSearching(true);
    setSearchStep(0);

    // Dynamic AI scan simulation steps
    const steps = [
      'Initializing MAI Intelligent Matching...',
      'Locating local fabricators and stonemasons...',
      'Analyzing rating parameters and load limits...',
      'Matching completed!'
    ];

    const interval = setInterval(() => {
      setSearchStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSearching(false);
            // Fire parent trigger
            onSearch(selectedService, postcode);
          }, 1200);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  const selectQuickTag = (tag: string) => {
    setSelectedService(tag);
  };

  return (
    <div className="relative bg-slate-900 overflow-hidden pt-12 pb-24 md:py-28 lg:py-36">
      {/* Absolute Geometric Backdrop & Grain Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15),transparent_60%)]"></div>
        {/* Stone Texture Pattern Overlay - Simulated */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=20')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-400/20 rounded-full">
              <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-200 tracking-wider font-mono">UK TRADERS & STONE MATCHMAKING ENGINE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              We Find You The <br />
              <div className="h-16 sm:h-20 overflow-hidden relative inline-block w-full">
                {POPULAR_SERVICES.map((service, index) => {
                  const isActive = index === activeWordIndex;
                  return (
                    <span
                      key={service}
                      style={{
                        transform: isActive 
                          ? 'translateY(0)' 
                          : index < activeWordIndex 
                            ? 'translateY(-100%)' 
                            : 'translateY(100%)',
                        opacity: isActive ? 1 : 0,
                        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-indigo-300 font-sans tracking-tight font-extrabold block"
                    >
                      {service}
                    </span>
                  );
                })}
              </div>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Your project reaches{' '}
              <strong className="text-white font-semibold">1,000+ Verified Fabricators</strong>, Suppliers, Slabs & Stonemasons in the United Kingdom. Post your job free and get fast quotes dynamically.
            </p>

            {/* Main Interactive Form */}
            <div className="p-2 sm:p-3 bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-2xl shadow-2xl max-w-2xl">
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2">
                
                {/* Service Selector */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400" />
                  </div>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                    id="hero-service-select"
                  >
                    <option value="" className="bg-slate-800 text-slate-400">Select Stone Service / Tiling</option>
                    {POPULAR_SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-slate-800 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Postcode Input */}
                <div className="relative w-full sm:w-44">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="Postcode e.g. SW1"
                    maxLength={8}
                    className="w-full pl-10 pr-3 py-3 bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 rounded-xl text-white text-sm placeholder-slate-400 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                    id="hero-postcode-input"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-teal-500 hover:bg-teal-400 active:scale-95 disabled:scale-100 disabled:opacity-50 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 group transition-all shrink-0 cursor-pointer"
                  id="hero-search-submit"
                >
                  <span>Find Matches</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Popular Shortcut Badges */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-400 font-mono tracking-wider uppercase">POPULAR SEARCH SHORTCUTS:</p>
              <div className="flex flex-wrap gap-1.5">
                {['Stone Repairs', 'Worktop Fabricator', 'Trusted Stonemason', 'Wall Tilers'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => selectQuickTag(tag)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      selectedService === tag
                        ? 'bg-teal-500/20 border-teal-400 text-teal-300 font-semibold shadow'
                        : 'bg-slate-800/40 border-slate-700/65 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                    id={`shortcut-tag-${tag.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Hero Interactive UI Panel (Dashboard/Matchmaker Screen representation) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Visual glow frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-teal-400 rounded-2xl blur opacity-30 animate-pulse"></div>
            
            <div className="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Card Header Bar */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-[11px] font-mono font-medium text-slate-500 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800/65">
                  AI-ALGORITHM: ACTIVE
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-5 space-y-6">
                
                {/* Real-time Ticker */}
                <div className="p-3 bg-slate-900/50 border border-slate-800/60 rounded-xl flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 animate-ping"></div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">Active UK Masonry Match Tracker</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-mono">1,429 trade specialists currently connected near London & Edinburgh.</p>
                  </div>
                </div>

                {/* Simulated matches animation */}
                {isSearching ? (
                  <div className="py-6 space-y-4 flex flex-col items-center justify-center text-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full border-2 border-indigo-500 border-t-teal-400 animate-spin flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-teal-300 animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-sm font-semibold text-white transition-all font-mono">
                        {searchStep === 0 && 'Initializing MAI Intelligent Matching...'}
                        {searchStep === 1 && 'Locating local fabricators and stonemasons...'}
                        {searchStep === 2 && 'Analyzing rating parameters and load limits...'}
                        {searchStep === 3 && 'Matching completed!'}
                      </p>
                      <div className="w-36 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
                        <div
                          style={{ width: `${(searchStep + 1) * 25}%`, transition: 'width 0.8s' }}
                          className="h-full bg-gradient-to-r from-sky-400 to-teal-400"
                        ></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-xs text-slate-400 font-semibold tracking-wider font-mono">LIVE MATCHMAKER OVERVIEW</div>
                    
                    {/* Item 1 */}
                    <div className="p-3.5 bg-slate-900 border border-slate-800/80 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                          <StarsBackground />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-200">Kitchen Island Quartz Fit</p>
                          <p className="text-[10px] font-mono text-slate-400">Match radius: 15 miles · Watford</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold rounded-full uppercase leading-3">Matched</span>
                        <p className="text-[10px] text-slate-500 font-mono mt-1">4 Quotes Sourced</p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="p-3.5 bg-slate-900 border border-slate-800/80 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-teal-400" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-200">Granite Seal & Crack Fill</p>
                          <p className="text-[10px] font-mono text-slate-400">Match radius: 8 miles · Chelsea</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] px-2 py-0.5 bg-sky-500/10 border border-sky-500/30 text-sky-400 font-semibold rounded-full uppercase leading-3">Awaiting Approval</span>
                        <p className="text-[10px] text-slate-500 font-mono mt-1">2 Vetted Craftsmen</p>
                      </div>
                    </div>

                    {/* Value highlights */}
                    <div className="pt-2 grid grid-cols-2 gap-2 text-center">
                      <div className="p-2.5 bg-slate-900/30 border border-slate-800/50 rounded-lg">
                        <div className="text-lg font-bold text-teal-400 font-mono">1.1 min</div>
                        <div className="text-[10px] text-slate-400">Avg Quote Time</div>
                      </div>
                      <div className="p-2.5 bg-slate-900/30 border border-slate-800/50 rounded-lg">
                        <div className="text-lg font-bold text-indigo-300 font-mono">£0 Fees</div>
                        <div className="text-[10px] text-slate-400">Free to Post Project</div>
                      </div>
                    </div>

                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Icon helper
function StarsBackground() {
  return (
    <div className="relative">
      <Star className="w-5 h-5 fill-indigo-400/20 text-indigo-400" />
      <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-teal-400" />
    </div>
  );
}
