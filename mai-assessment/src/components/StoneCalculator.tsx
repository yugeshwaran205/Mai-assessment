import React, { useState } from 'react';
import { Layers3, Calculator, BadgePercent, Check, ShieldAlert, Sparkles, MapPin, Star } from 'lucide-react';
import { StoneOffcut } from '../types';
import { MOCK_OFFCUTS } from '../mockData';

export default function StoneCalculator() {
  const [material, setMaterial] = useState('Quartz');
  const [colorStyle, setColorStyle] = useState('Calacatta White & Gold Veined');
  const [userLength, setUserLength] = useState(1500); // mm
  const [userWidth, setUserWidth] = useState(600);   // mm
  const [thickness, setThickness] = useState(20);

  const [isMatching, setIsMatching] = useState(false);
  const [matchedOffcuts, setMatchedOffcuts] = useState<StoneOffcut[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [reservedSlabId, setReservedSlabId] = useState<string | null>(null);

  // Material to color pairings
  const materialColors: Record<string, string[]> = {
    Quartz: ['Calacatta White & Gold Veined', 'Siberian Pure White', 'Sparkling Grey Diamond'],
    Granite: ['Absolute Black Polish', 'Kashmir White Gloss', 'Baltic Brown Premium'],
    Marble: ['Bianco Carrara Premium', 'Crema Marfil Classic', 'Nero Marquina Solid'],
    'Ceramic / Dekton': ['Industrial Grey Oxide Concrete', 'Entzo Gold Marble Style']
  };

  const handleMaterialChange = (mat: string) => {
    setMaterial(mat);
    if (materialColors[mat]) {
      setColorStyle(materialColors[mat][0]);
    }
  };

  const runMatchmaker = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMatching(true);
    setReservedSlabId(null);

    setTimeout(() => {
      // Find offcuts from the master list of matching material and large enough dimensions
      const results = MOCK_OFFCUTS.filter((slab) => {
        const meetsMaterial = slab.material.toLowerCase().includes(material.toLowerCase()) || 
                              (material === 'Ceramic / Dekton' && slab.material.includes('Ceramic'));
        const meetsLength = slab.length >= userLength;
        const meetsWidth = slab.width >= userWidth;
        return meetsMaterial && meetsLength && meetsWidth;
      });

      setMatchedOffcuts(results);
      setIsMatching(false);
      setHasSearched(true);
    }, 1200);
  };

  const handleReserve = (slabId: string) => {
    setReservedSlabId(slabId);
  };

  return (
    <section id="offcuts" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background design */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(99,102,241,0.06),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-xs font-semibold font-mono uppercase tracking-widest">
            <Layers3 className="w-4 h-4 animate-spin-slow" />
            <span>Remnant Slabs & Offcut Optimizer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Submit Your Project. Let MAI Find Your Perfect Stone.
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Why pay full-slab prices? Homeowners can save up to 70% on countertops, fireplaces, shower walls, or tabletops by utilizing premium offcuts directly from fabricator inventories. Give us your dimensions below.
          </p>
        </div>

        {/* Master grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Form Side */}
          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2 mb-6 font-mono uppercase tracking-wider">
              <Calculator className="w-5 h-5 text-teal-500" />
              <span>Define Your Custom Layout</span>
            </h3>

            <form onSubmit={runMatchmaker} className="space-y-5">
              {/* Select Material */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono tracking-wider">Stone Material</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(materialColors).map((mat) => (
                    <button
                      key={mat}
                      type="button"
                      onClick={() => handleMaterialChange(mat)}
                      className={`text-xs px-3 py-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                        material === mat
                          ? 'bg-indigo-900 border-indigo-500 font-bold text-white shadow'
                          : 'bg-slate-900/40 border-slate-800/70 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                      }`}
                      id={`stone-mat-btn-${mat.replace(/\//g, '').replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Sub-color selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase font-mono tracking-wider">Styling Profile & Color</label>
                <select
                  value={colorStyle}
                  onChange={(e) => setColorStyle(e.target.value)}
                  className="w-full px-3.5 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-400 transition-colors"
                  id="slab-color-style"
                >
                  {materialColors[material]?.map((col) => (
                    <option key={col} value={col} className="bg-slate-950">
                      {col}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dimensions sliders/inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase font-mono">Min Length (mm)</label>
                  <input
                    type="number"
                    value={userLength}
                    onChange={(e) => setUserLength(Number(e.target.value))}
                    min={200}
                    max={3200}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-850 rounded-xl text-center text-sm font-mono focus:outline-none"
                    id="slab-length-input"
                  />
                  <input
                    type="range"
                    min={200}
                    max={3200}
                    value={userLength}
                    onChange={(e) => setUserLength(Number(e.target.value))}
                    className="w-full mt-2 accent-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase font-mono">Min Width (mm)</label>
                  <input
                    type="number"
                    value={userWidth}
                    onChange={(e) => setUserWidth(Number(e.target.value))}
                    min={200}
                    max={1500}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-850 rounded-xl text-center text-sm font-mono focus:outline-none"
                    id="slab-width-input"
                  />
                  <input
                    type="range"
                    min={200}
                    max={1500}
                    value={userWidth}
                    onChange={(e) => setUserWidth(Number(e.target.value))}
                    className="w-full mt-2 accent-teal-400"
                  />
                </div>
              </div>

              {/* Slab Thickness selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase font-mono tracking-wider font-bold">Thickness Profile</label>
                <div className="flex gap-4">
                  {[20, 30].map((th) => (
                    <label key={th} className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="radio"
                        name="thickness"
                        checked={thickness === th}
                        onChange={() => setThickness(th)}
                        className="accent-teal-400"
                      />
                      <span>{th} mm Standard Slab</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isMatching}
                className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-sky-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-teal-500/10 hover:shadow-teal-400/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                id="slab-calculator-submit"
              >
                <span>Find Your Match</span>
                <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
              </button>
            </form>
          </div>

          {/* Matches Output Display Board */}
          <div className="lg:col-span-7 bg-slate-950/40 border border-slate-850 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">MATCHMAKER INVENTORY RESPONSE</span>
                {hasSearched && (
                  <span className="text-xs text-slate-400 font-mono">
                    Found <span className="text-teal-400 font-bold">{matchedOffcuts.length} overlaps</span>
                  </span>
                )}
              </div>

              {isMatching ? (
                <div className="py-24 text-center space-y-4">
                  <div className="w-10 h-10 border-2 border-t-teal-400 border-slate-800 rounded-full animate-spin mx-auto"></div>
                  <p className="text-xs text-slate-400 font-mono">Scanning 1,000+ UK Fabricator Yards...</p>
                </div>
              ) : !hasSearched ? (
                <div className="py-20 text-center space-y-4 max-w-sm mx-auto">
                  <Layers3 className="w-12 h-12 text-slate-600 mx-auto stroke-1" />
                  <h4 className="font-sans font-bold text-slate-200">No layout submitted yet</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Set your desired stone specifications and click "Find Your Match" to run MAI real-time yard matching.
                  </p>
                </div>
              ) : matchedOffcuts.length === 0 ? (
                <div className="py-16 text-center space-y-4 max-w-sm mx-auto">
                  <ShieldAlert className="w-10 h-10 text-amber-500 mx-auto" />
                  <h4 className="font-sans font-bold text-slate-200">No exact dimension overlaps</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Local stock might be short of {userLength}x{userWidth}mm offcuts in {material}. Try lowering your size slightly or choosing a different material to search alternative remnant yards.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
                  {matchedOffcuts.map((slab) => {
                    const isReserved = reservedSlabId === slab.id;
                    return (
                      <div
                        key={slab.id}
                        className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                      >
                        {/* Slab Image */}
                        <div className="md:col-span-3 h-20 w-full bg-slate-950 rounded-lg overflow-hidden relative border border-slate-800/80">
                          <img
                            src={slab.imageUrl}
                            alt={slab.color}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-1 left-1 bg-slate-950/80 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase font-bold text-teal-400">
                            {slab.material}
                          </div>
                        </div>

                        {/* Slab Info */}
                        <div className="md:col-span-6 space-y-1.5">
                          <p className="text-xs font-bold text-white mt-1 font-mono">{slab.color}</p>
                          <div className="flex gap-2 text-[10px] text-slate-400 font-mono">
                            <span>{slab.length}L x {slab.width}W x {slab.thickness}T mm</span>
                          </div>
                          
                          {/* Supplier details */}
                          <div className="flex items-center gap-1.5 pt-0.5">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span className="text-[10px] text-slate-400">{slab.location} · {slab.supplierName}</span>
                          </div>
                        </div>

                        {/* Saving price and actions */}
                        <div className="md:col-span-3 text-right flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2">
                          <div className="text-left md:text-right">
                            <div className="text-xs text-slate-400 line-through">Slab: £720</div>
                            <div className="text-sm font-bold text-teal-400 font-mono">£{slab.price} ONLY</div>
                          </div>

                          {isReserved ? (
                            <span className="w-full bg-emerald-500 text-slate-950 text-[10px] font-bold py-1.5 rounded-lg text-center flex items-center justify-center gap-1">
                              <Check className="w-3 h-3" />
                              <span>Reserved!</span>
                            </span>
                          ) : (
                            <button
                              onClick={() => handleReserve(slab.id)}
                              className="w-full bg-indigo-900 border border-indigo-700/50 hover:bg-indigo-950 text-[10px] text-indigo-100 font-semibold py-1.5 rounded-lg text-center transition-colors cursor-pointer"
                              id={`reserve-btn-${slab.id}`}
                            >
                              Reserve Slab
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Math Summary Highlight */}
            {hasSearched && matchedOffcuts.length > 0 && (
              <div className="mt-6 border-t border-slate-800/80 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-teal-400" />
                  <span className="text-xs text-slate-400">Matchmaker Savings estimate:</span>
                </div>
                <p className="text-sm font-extrabold text-white font-mono uppercase tracking-wide">
                  Save up to <span className="text-teal-400">72% (£540 Average)</span>
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
