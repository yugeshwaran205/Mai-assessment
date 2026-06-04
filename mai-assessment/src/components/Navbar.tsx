import { useState } from 'react';
import { Menu, X, Layers3, Flame, Shield, Compass, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  onPostProjectClick: () => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, onPostProjectClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Explore Projects', id: 'projects', icon: Compass },
    { name: 'Stone Offcuts Hub', id: 'offcuts', icon: Layers3 },
    { name: 'Why MAI', id: 'why-mai', icon: Shield },
    { name: 'Blog Guides', id: 'blogs', icon: Flame },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
              id="brand-logo"
            >
              <div className="relative w-9 h-9 flex items-center justify-center bg-indigo-900 rounded-lg shadow-md group-hover:bg-indigo-950 transition-colors">
                <span className="font-bold text-lg text-white font-mono antialiased">M</span>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-teal-400 rounded-sm rotate-45 border-2 border-white"></div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="font-sans font-extrabold text-lg text-slate-900 tracking-tight">MAI</span>
                  <span className="text-teal-500 font-extrabold text-lg">.</span>
                </div>
                <p className="text-[10px] text-slate-500 tracking-widest font-mono uppercase -mt-1 font-semibold">Stone & Craft</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-slate-50 text-indigo-950 shadow-inner border border-slate-100' 
                      : 'text-slate-600 hover:text-indigo-950 hover:bg-slate-50'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-500' : 'text-slate-400'}`} />
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Right Action Menu */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => handleNavClick('why-mai')}
              className="px-3.5 py-1.5 text-xs font-semibold text-teal-600 bg-teal-50 hover:bg-teal-100 rounded-full transition-colors font-mono uppercase tracking-wider"
              id="trader-portal-btn"
            >
              Trader Hub
            </button>
            <button
              onClick={onPostProjectClick}
              className="inline-flex items-center gap-1 bg-gradient-to-r from-indigo-900 to-indigo-950 hover:from-teal-600 hover:to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-indigo-900/10 hover:shadow-teal-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              id="nav-post-cta"
            >
              <span>Post a Job Free</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-indigo-950 hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer"
              aria-expanded="false"
              id="mobile-menu-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-slate-100 text-indigo-950 font-semibold border-l-4 border-teal-500' 
                      : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  <Icon className="w-5 h-5 text-slate-400" />
                  {item.name}
                </button>
              );
            })}
            <div className="pt-4 pb-2 border-t border-slate-100 px-4 space-y-3">
              <button 
                onClick={() => handleNavClick('why-mai')}
                className="block w-full text-center px-4 py-2 text-sm font-semibold text-teal-600 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
                id="mobile-trader-btn"
              >
                Trader Hub (Verify Business)
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onPostProjectClick();
                }}
                className="block w-full text-center px-4 py-2.5 text-sm font-bold text-white bg-indigo-900 rounded-lg hover:bg-indigo-950 shadow-md transition-colors"
                id="mobile-post-cta"
              >
                Post a Job Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
