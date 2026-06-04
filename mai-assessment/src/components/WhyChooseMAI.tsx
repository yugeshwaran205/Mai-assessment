import { useState } from 'react';
import { ShieldCheck, UserCheck, Scale, Award, HeartHandshake, Zap, BarChart, Wallet, Sparkles } from 'lucide-react';

export default function WhyChooseMAI() {
  const [activeTab, setActiveTab] = useState<'homeowner' | 'trader'>('homeowner');

  const homeownerFeatures = [
    {
      icon: Zap,
      title: 'AI-Matched Traders',
      desc: 'No more cold-calling. Our smart algorithm matches your specifications with the top 3 fabricators near your postcode within minutes.'
    },
    {
      icon: Scale,
      title: 'End-to-End Transparency',
      desc: 'Store project files, templates, dimensions, and sign-offs directly inside one dashboard. No hidden material fees.'
    },
    {
      icon: Wallet,
      title: 'Milestone-Secured Payments',
      desc: 'Your cash remains held securely in our digital wallet and is released to the Mason only as designated milestone phases are completed.'
    },
    {
      icon: ShieldCheck,
      title: 'Vetted & Verified Community',
      desc: 'Every trader on our UK platform undergoes background credential, business registry, and historical reviews.'
    }
  ];

  const traderFeatures = [
    {
      icon: BarChart,
      title: 'High-Velocity Sourcing Leads',
      desc: 'Unlock active stonemasonry and tiling jobs tagged near your exact postcode radius. Fill up your work schedule easily.'
    },
    {
      icon: HeartHandshake,
      title: 'Zero Traditional Marketing Risk',
      desc: 'Stop burning cash on Google or Yelp Ads. Join MAI for free, pick relevant jobs, and quote with complete transparency.'
    },
    {
      icon: Wallet,
      title: 'Paid on Milestones',
      desc: 'Say goodbye to unpaid deposits. Client funds are locked before you begin cutting stone. Guaranteed payout on milestone completion.'
    },
    {
      icon: Award,
      title: 'Bespoke Custom Galleries',
      desc: 'Ditch basic portfolios. Upload slab photos, link available stone offcuts, and build local brand ratings.'
    }
  ];

  return (
    <section id="why-mai" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-bold text-indigo-900 font-mono uppercase tracking-wide">
            <UserCheck className="w-4 h-4" />
            <span>Why Choose MAI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Where Traders & Homeowners Both Win
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Whether you need a marble kitchen worktop cut or you are a fabricator looking to discover high-yield masonry jobs, MAI streamlines the entire UK stone sector.
          </p>
        </div>

        {/* Roles Toggle Tab */}
        <div className="flex justify-center mb-16">
          <div className="p-1 bg-slate-100 rounded-xl inline-flex relative border border-slate-200">
            {/* Slide background */}
            <div
              style={{
                left: activeTab === 'homeowner' ? '4px' : 'calc(50% - 2px)',
                width: 'calc(50% - 2px)'
              }}
              className="absolute top-1 bottom-1 bg-white border border-slate-200 rounded-lg shadow-sm transition-all duration-300 pointer-events-none"
            ></div>
            
            <button
              onClick={() => setActiveTab('homeowner')}
              className={`relative z-10 px-8 py-2.5 rounded-lg text-xs font-bold font-mono uppercase tracking-wide transition-colors cursor-pointer ${
                activeTab === 'homeowner' ? 'text-indigo-950' : 'text-slate-500 hover:text-indigo-900'
              }`}
              id="toggle-homeowner"
            >
              For Homeowners & Builders
            </button>
            <button
              onClick={() => setActiveTab('trader')}
              className={`relative z-10 px-8 py-2.5 rounded-lg text-xs font-bold font-mono uppercase tracking-wide transition-colors cursor-pointer ${
                activeTab === 'trader' ? 'text-indigo-950' : 'text-slate-500 hover:text-indigo-900'
              }`}
              id="toggle-trader"
            >
              For Fabricators & Masons
            </button>
          </div>
        </div>

        {/* Animated layout grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch transition-opacity duration-300"
          style={{ opacity: 1 }}
        >
          {activeTab === 'homeowner' 
            ? homeownerFeatures.map((f, i) => {
                const IconComponent = f.icon;
                return (
                  <div
                    key={f.title}
                    className="p-6 bg-slate-50 hover:bg-slate-100/60 border border-slate-100 hover:border-slate-200 rounded-2xl flex flex-col justify-between transition-all group scale-in"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-teal-600" />
                      </div>
                      <h3 className="font-sans font-bold text-slate-900 text-sm sm:text-base">
                        {f.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })
            : traderFeatures.map((f, i) => {
                const IconComponent = f.icon;
                return (
                  <div
                    key={f.title}
                    className="p-6 bg-slate-900 text-white hover:bg-slate-950 border border-slate-800 rounded-2xl flex flex-col justify-between transition-all group scale-in"
                    id={`trader-feat-${i}`}
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-indigo-400" />
                      </div>
                      <h3 className="font-sans font-bold text-slate-100 text-sm sm:text-base">
                        {f.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })
          }
        </div>

        {/* Additional security seal tag */}
        <div className="mt-12 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-900" />
            <span className="text-xs text-slate-600 font-medium leading-relaxed">
              MAI uses fully-compliant UK escrow transaction protocols. Safe matches. Vetted records.
            </span>
          </div>
          <span className="text-[10px] font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider font-mono">
            Protected & Secure
          </span>
        </div>

      </div>
    </section>
  );
}
