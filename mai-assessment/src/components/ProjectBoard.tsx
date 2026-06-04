import React, { useState } from 'react';
import { Compass, MapPin, BadgeCheck, Clock, FileText, Check, Landmark, X, ChevronRight, Calculator, AlertCircle } from 'lucide-react';
import { ProjectJob } from '../types';
import { MOCK_PROJECTS, POPULAR_SERVICES } from '../mockData';

interface ProjectBoardProps {
  onPostProjectClick: () => void;
  filterService: string;
}

export default function ProjectBoard({ onPostProjectClick, filterService }: ProjectBoardProps) {
  const [projects, setProjects] = useState<ProjectJob[]>(MOCK_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState(filterService || 'All');
  const [searchPostcode, setSearchPostcode] = useState('');
  const [activeProject, setActiveProject] = useState<ProjectJob | null>(null);
  
  // Custom bid simulator state
  const [bidAmount, setBidAmount] = useState('');
  const [bidDuration, setBidDuration] = useState('3 days');
  const [bidMessage, setBidMessage] = useState('');
  const [bidSuccess, setBidSuccess] = useState(false);
  const [errors, setErrors] = useState('');

  // Handle category update from incoming filterService
  if (filterService && selectedCategory !== filterService) {
    setSelectedCategory(filterService);
  }

  const categoryOptions = ['All', ...POPULAR_SERVICES.slice(0, 6)];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesPostcode = searchPostcode === '' || project.postcode.toLowerCase().includes(searchPostcode.toLowerCase());
    return matchesCategory && matchesPostcode;
  });

  const handleOpenProject = (project: ProjectJob) => {
    setActiveProject(project);
    setBidSuccess(false);
    setBidAmount('');
    setBidMessage('');
    setErrors('');
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  const handlePlaceBid = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bidAmount || isNaN(Number(bidAmount.replace(/[^\d]/g, '')))) {
      setErrors('Please enter a valid numeric quote amount.');
      return;
    }

    // Success action simulation
    setBidSuccess(true);
    setErrors('');

    // Update Project Bid counts locally in state
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === activeProject?.id) {
          return { ...p, bidsCount: p.bidsCount + 1 };
        }
        return p;
      })
    );

    // Fade block
    setTimeout(() => {
      setBidSuccess(false);
      setActiveProject((prev) => prev ? { ...prev, bidsCount: prev.bidsCount + 1 } : null);
    }, 2500);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-xs font-semibold tracking-wider font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>ACTIVE UK JOBS BOARD</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Live Sourcing Projects
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-xl">
              Verified homeowners and constructors posting daily jobs free. Select an active project and submit a bid through the MAI matching system.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button
              onClick={onPostProjectClick}
              className="px-5 py-3 bg-indigo-900 text-white font-bold rounded-xl shadow-lg shadow-indigo-900/10 hover:bg-teal-500 hover:text-slate-950 transition-all font-mono text-sm cursor-pointer"
              id="projects-post-button"
            >
              + Submit Your Own Project
            </button>
          </div>
        </div>

        {/* Search & Filter bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categoryOptions.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-2 font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                  id={`cat-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* District Search Box */}
          <div className="relative w-full md:w-64 shrink-0">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <MapPin className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchPostcode}
              onChange={(e) => setSearchPostcode(e.target.value)}
              placeholder="Filter by Postcode e.g. M4"
              className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-100 hover:border-slate-200 text-slate-700 placeholder-slate-400 uppercase tracking-widest rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-900"
              id="project-postcode-filter"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <span className="text-sm font-semibold text-slate-800 block">No projects found matching your filters</span>
            <p className="text-slate-500 text-xs mt-1">Try changing your category selections or clear your postcode search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchPostcode('');
              }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              id="clear-all-filters"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isBiddingOpen = project.status === 'Bidding Open';
              return (
                <div
                  key={project.id}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group h-[320px]"
                >
                  <div className="space-y-4">
                    {/* Status bar */}
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-mono font-bold">
                        {project.category}
                      </span>
                      <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold font-mono ${
                        project.status === 'Bidding Open'
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                          : project.status === 'Matched'
                            ? 'bg-blue-50 text-blue-600 border border-blue-100'
                            : 'bg-slate-100 text-slate-500'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-slate-900 text-base group-hover:text-indigo-900 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">EST BUDGET</div>
                        <p className="font-mono font-bold text-slate-900 text-sm leading-4">{project.budget}</p>
                      </div>
                      <div className="h-6 w-[1px] bg-slate-100"></div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">BIDS</div>
                        <p className="font-mono font-bold text-indigo-950 text-sm leading-4">{project.bidsCount} offers</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-900 group-hover:text-teal-600 transition-colors cursor-pointer"
                      id={`project-detail-btn-${project.id}`}
                    >
                      <span>Bid Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Slide-over Detail Drawer / Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className="absolute inset-0 overflow-hidden">
            {/* Dark background shield */}
            <div 
              onClick={handleCloseProject}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            />

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md transform transition-all duration-300 ease-in-out">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-2xl">
                  
                  {/* Header */}
                  <div className="bg-indigo-950 px-6 py-6 text-white flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded">
                        {activeProject.category}
                      </span>
                      <h3 className="text-lg font-bold mt-2 pr-4">{activeProject.title}</h3>
                    </div>
                    <button
                      onClick={handleCloseProject}
                      className="text-indigo-200 hover:text-white p-1 rounded-md hover:bg-indigo-900 transition-colors cursor-pointer"
                      id="close-drawer-btn"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 p-6 space-y-6">
                    {/* Basic details */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-widest">POSTCODE</span>
                        <span className="font-mono text-sm font-semibold text-slate-900">{activeProject.postcode}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-widest">STATUS</span>
                        <span className="text-xs font-semibold text-teal-600 font-mono">{activeProject.status}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-widest">BUDGET</span>
                        <span className="font-semibold text-sm text-slate-900">{activeProject.budget}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-widest">POSTED</span>
                        <span className="text-slate-600 text-xs font-mono">{activeProject.datePosted}</span>
                      </div>
                    </div>

                    {/* Detailed info */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <FileText className="w-4 h-4" />
                        <span>Project Specification</span>
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line bg-white border border-slate-100 p-4 rounded-xl">
                        {activeProject.description}
                      </p>
                    </div>

                    {/* Material requirements */}
                    {activeProject.material && (
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Requested Slabs / Materials:</span>
                        <div className="px-3 py-2 bg-indigo-50/50 border border-indigo-100/50 rounded-lg text-xs font-semibold text-indigo-950 font-mono">
                          {activeProject.material}
                        </div>
                      </div>
                    )}

                    {/* Bidding interaction */}
                    {activeProject.status === 'Bidding Open' ? (
                      <div className="border-t border-slate-100 pt-6 space-y-4">
                        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                          <Calculator className="w-4 h-4 text-emerald-500" />
                          <span>Submit A Bid Quotation</span>
                        </h4>

                        {bidSuccess ? (
                          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-2 animate-pulse">
                            <Check className="w-8 h-8 text-emerald-500 mx-auto" />
                            <h5 className="font-bold text-sm text-emerald-950">Quote Submitted Safely!</h5>
                            <p className="text-xs text-emerald-700">Matched successfully. Real-time bids incremented.</p>
                          </div>
                        ) : (
                          <form onSubmit={handlePlaceBid} className="space-y-3">
                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">Quote Amount (£)</label>
                              <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 font-mono text-sm font-bold">£</span>
                                <input
                                  type="text"
                                  value={bidAmount}
                                  onChange={(e) => setBidAmount(e.target.value)}
                                  placeholder="e.g. 1500"
                                  className="w-full pl-7 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-indigo-900 font-medium"
                                  id="bid-amount-input"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">Estimate Fitting Time</label>
                              <select
                                value={bidDuration}
                                onChange={(e) => setBidDuration(e.target.value)}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none"
                                id="bid-duration-select"
                              >
                                <option value="1 day">1 Day</option>
                                <option value="2-3 days">2-3 Days</option>
                                <option value="1 week">1 Week</option>
                                <option value="2+ weeks">2+ Weeks</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-700 mb-1">Proposal message (optional)</label>
                              <textarea
                                value={bidMessage}
                                onChange={(e) => setBidMessage(e.target.value)}
                                placeholder="Introduce your trade experience, certifications, and availability..."
                                rows={3}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-900"
                                id="bid-message-input"
                              />
                            </div>

                            {errors && (
                              <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" />
                                {errors}
                              </p>
                            )}

                            <button
                              type="submit"
                              className="w-full py-2.5 bg-indigo-900 text-white hover:bg-indigo-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
                              id="bid-submit-button"
                            >
                              Send Bid Proposal
                            </button>
                          </form>
                        )}
                      </div>
                    ) : (
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                        <BadgeCheck className="w-5 h-5 text-indigo-900 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">Matched & Locked</span>
                          <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                            This project is already active under mutual agreement or completed. Bidding is disabled.
                          </p>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Trust Footer */}
                  <div className="bg-slate-50 p-4 border-t border-slate-100 text-center flex items-center justify-center gap-2">
                    <Landmark className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] text-slate-500 font-mono tracking-wider font-semibold uppercase">MILESTONE SECURED GUARANTEE · MAI CO.</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
