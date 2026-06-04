import { Landmark, ArrowUp, Github, Heart } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export default function Footer({ onBackToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    'Worktop Fitters',
    'Stone Repairs',
    'Worktop Fabricators',
    'Wall Tilers',
    'Stone Offcuts',
    'Firehearth Fitters'
  ];

  const ukTerritories = [
    'London & Greater South East',
    'Midlands & East Anglia',
    'North West & Manchester',
    'Yorkshire & North East',
    'Scotland & Edinburgh',
    'Wales & West Country'
  ];

  const tradeResources = [
    'Trade Hub Guidelines',
    'Escrow Escutcheon System',
    'Service Fee Structure',
    'Verified Background Checks',
    'Homeowner Safety Pact',
    'Latest Blog Chronicles'
  ];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Signoff / Slogan Flag */}
        <div className="border-b border-slate-900 pb-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1.5 text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              Let's Build Our Nation Great.
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Connecting British homeowners with verified local crafts, stones & masonry.
            </p>
          </div>

          <button
            onClick={onBackToTop}
            className="p-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg hover:text-teal-400 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            id="back-to-top-footer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Intro Column */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-indigo-900 rounded-lg shadow-md">
                <span className="font-bold text-base text-white font-mono">M</span>
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white">MAI</span>
                <span className="text-[10px] text-slate-500 block font-mono">Stone & Craft</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed">
              MAI manages 1,000+ local masonry, tiling and stone fabrication hubs across the UK. Creating fair bidding ecosystems, protected milestone payments and 100% verified portfolios.
            </p>

            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-500">
              <Landmark className="w-4 h-4 text-teal-400" />
              <span>Compliant Escrow Protocols</span>
            </div>
          </div>

          {/* Sourcing services list */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 font-mono mb-4">Sourcing Categories</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {serviceCategories.map((item) => (
                <li key={item}>
                  <span className="hover:text-white transition-colors cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sourcing sectors list */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 font-mono mb-4">UK Territories</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {ukTerritories.map((item) => (
                <li key={item}>
                  <span className="hover:text-white transition-colors cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career and legal */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 font-mono mb-4">Guidelines & Tools</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {tradeResources.map((item) => (
                <li key={item}>
                  <span className="hover:text-white transition-colors cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} MAI Corporation. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Sourcing</span>
            <span>·</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Escrow Shield Policy</span>
            <span>·</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Notice</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
