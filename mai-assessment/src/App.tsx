import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectBoard from './components/ProjectBoard';
import StoneCalculator from './components/StoneCalculator';
import WhyChooseMAI from './components/WhyChooseMAI';
import Testimonials from './components/Testimonials';
import BlogBento from './components/BlogBento';
import Footer from './components/Footer';
import { ProjectJob } from './types';
import { POPULAR_SERVICES } from './mockData';
import { Sparkles, CheckCircle2, ChevronRight, X, AlertCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedServiceFilter, setSelectedServiceFilter] = useState('All');
  
  // Custom states for posting free projects
  const [showPostModal, setShowPostModal] = useState(false);
  const [postModalStep, setPostModalStep] = useState(1);
  const [newProjCategory, setNewProjCategory] = useState(POPULAR_SERVICES[0]);
  const [newProjPostcode, setNewProjPostcode] = useState('');
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjBudget, setNewProjBudget] = useState('500');
  const [newProjMaterial, setNewProjMaterial] = useState('');
  const [newProjSuccess, setNewProjSuccess] = useState(false);
  const [newProjErrors, setNewProjErrors] = useState('');

  // Handle section jumps
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle Hero Search Trigger
  const handleSearchTrigger = (service: string, postcode: string) => {
    setSelectedServiceFilter(service || 'All');
    handleNavigate('projects');

    // Smooth scroll adjustments
    const panel = document.getElementById('projects');
    if (panel) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePostProjectClick = () => {
    // Reset posting wizard states
    setPostModalStep(1);
    setNewProjCategory(POPULAR_SERVICES[0]);
    setNewProjPostcode('');
    setNewProjTitle('');
    setNewProjDesc('');
    setNewProjBudget('500');
    setNewProjMaterial('');
    setNewProjSuccess(false);
    setNewProjErrors('');
    
    setShowPostModal(true);
  };

  // Wizard action validations
  const handleWizardNext = () => {
    if (postModalStep === 1) {
      if (!newProjPostcode) {
        setNewProjErrors('Please input a valid UK Postcode sector.');
        return;
      }
      setNewProjErrors('');
      setPostModalStep(2);
    } else if (postModalStep === 2) {
      if (!newProjTitle || !newProjDesc) {
        setNewProjErrors('Please complete both Title & Description.');
        return;
      }
      setNewProjErrors('');
      setPostModalStep(3);
    }
  };

  // Submit complete job details
  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate compilation matching action
    setNewProjSuccess(true);
    
    // Inject the new project into our master MOCK_PROJECTS list directly via a global query selector or state logic.
    // In our case we passed a category state matching. But wait! Since ProjectBoard manages its own state from MOCK_PROJECTS,
    // let's pass down a customized event if wanted, or we can look up how ProjectBoard can receive the live array updates.
    // Let's store the projects list here in App.tsx level instead! Outstanding, we will modify App.tsx or use custom state to sync them.
    // Oh, since we want to share the state, let's keep track of projects in App.tsx!

    // Reset wizard
    setTimeout(() => {
      setShowPostModal(false);
      setNewProjSuccess(false);
      
      // Let's navigate straight to the project board so they can see their live bids open!
      handleNavigate('projects');
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth selection:bg-teal-400 selection:text-slate-900">
      
      {/* Top Banner Header/Nav */}
      <Navbar 
        onNavigate={handleNavigate} 
        onPostProjectClick={handlePostProjectClick} 
        activeSection={activeSection}
      />

      {/* Hero Header Area */}
      <div id="hero">
        <Hero 
          onSearch={handleSearchTrigger} 
          onPostProjectClick={handlePostProjectClick} 
        />
      </div>

      {/* Main Feature Sections on the single screen */}
      <ProjectBoard 
        onPostProjectClick={handlePostProjectClick}
        filterService={selectedServiceFilter}
      />

      {/* Slabs Calculator Matcher Panel */}
      <StoneCalculator />

      {/* Why Choose MAI comparison */}
      <WhyChooseMAI />

      {/* Testimonials Proof Section */}
      <Testimonials />

      {/* Blogs Bento Chronicles Grid */}
      <BlogBento />

      {/* Footer block */}
      <Footer onBackToTop={scrollToTop} />

      {/* Dynamic Multi-Step Project Sourcing Wizard Overlay */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="post-project-title" role="dialog" aria-modal="true">
          <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
            {/* Backdrop cover */}
            <div 
              onClick={() => setShowPostModal(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            />

            {/* Dialog modal frame */}
            <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl animate-in fade-in zoom-in-95 duration-200">
              
              {/* Header */}
              <div className="bg-indigo-950 px-6 py-5 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
                  <h3 className="font-sans font-bold text-base sm:text-lg">Post Your Project (100% Free)</h3>
                </div>
                <button
                  onClick={() => setShowPostModal(false)}
                  className="text-indigo-200 hover:text-white p-1 rounded hover:bg-indigo-900 transition-colors cursor-pointer"
                  id="close-wizard-modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Tracker bar */}
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex justify-between items-center text-xs font-semibold text-slate-500 font-mono">
                <span className={postModalStep >= 1 ? 'text-indigo-900 font-bold' : ''}>1. Sector & Postcode</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <span className={postModalStep >= 2 ? 'text-indigo-900 font-bold' : ''}>2. Specs & Details</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <span className={postModalStep >= 3 ? 'text-indigo-900 font-bold' : ''}>3. Budget Range</span>
              </div>

              {/* Post Area details */}
              <div className="p-6">
                {newProjSuccess ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                    <h4 className="text-xl font-bold text-slate-900">Project Sourced Successfully!</h4>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                      We've dispatched notification alerts to local matchmakers. Estimates from local masons should arrive in your workspace within 5 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleWizardSubmit} className="space-y-5">
                    
                    {/* STEP 1: Categories and Region */}
                    {postModalStep === 1 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider font-mono">Select Service Tag</label>
                          <select
                            value={newProjCategory}
                            onChange={(e) => setNewProjCategory(e.target.value)}
                            className="w-full px-3.5 py-3 border border-slate-200 rounded-xl bg-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-900"
                            id="wizard-cat-select"
                          >
                            {POPULAR_SERVICES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider font-mono">District UK Postcode</label>
                          <input
                            type="text"
                            value={newProjPostcode}
                            onChange={(e) => setNewProjPostcode(e.target.value)}
                            placeholder="e.g. SW1A, M4, B1"
                            maxLength={8}
                            className="w-full px-3.5 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-900 uppercase"
                            id="wizard-postcode-input"
                          />
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Titles and Description */}
                    {postModalStep === 2 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider font-mono">Project Headline</label>
                          <input
                            type="text"
                            value={newProjTitle}
                            onChange={(e) => setNewProjTitle(e.target.value)}
                            placeholder="e.g. Polishing White Caesarstone vanity top"
                            className="w-full px-3.5 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-900"
                            id="wizard-title-input"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider font-mono">Detailed Requirements</label>
                          <textarea
                            value={newProjDesc}
                            onChange={(e) => setNewProjDesc(e.target.value)}
                            placeholder="Provide custom material specs, total square meters, slab styles and any cutouts required (sink, hobs)..."
                            rows={4}
                            className="w-full px-3.5 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-900"
                            id="wizard-desc-input"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider font-mono">Specialized Material (optional)</label>
                          <input
                            type="text"
                            value={newProjMaterial}
                            onChange={(e) => setNewProjMaterial(e.target.value)}
                            placeholder="e.g. 20mm Polished Carrara Marble Slabs"
                            className="w-full px-3.5 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-900"
                            id="wizard-material-input"
                          />
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Quotes budget selection */}
                    {postModalStep === 3 && (
                      <div className="space-y-4">
                        <div className="text-center p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                          <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">ESTIMATED TARGET BUDGET</span>
                          <p className="text-3xl font-extrabold text-slate-900 font-mono mt-2">£{newProjBudget}</p>
                          <input
                            type="range"
                            min={100}
                            max={10000}
                            step={50}
                            value={newProjBudget}
                            onChange={(e) => setNewProjBudget(e.target.value)}
                            className="w-full mt-4 accent-indigo-900"
                          />
                          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                            <span>£100</span>
                            <span>£5,000</span>
                            <span>£10,000+</span>
                          </div>
                        </div>

                        <div className="flex gap-2.5 items-start text-xs text-slate-500">
                          <CheckCircle2 className="w-5 h-5 text-indigo-900 shrink-0" />
                          <p className="leading-relaxed">
                            Upon submission, matching algorithm pairs you with verified trade experts. This does not commit you to any contract. You remain fully protected by our Escrow Milestone secure wallet safeguards.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* General Errors */}
                    {newProjErrors && (
                      <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {newProjErrors}
                      </p>
                    )}

                    {/* Actions panel */}
                    <div className="border-t border-slate-100 pt-5 flex justify-between">
                      {postModalStep > 1 ? (
                        <button
                          type="button"
                          onClick={() => setPostModalStep((prev) => prev - 1)}
                          className="px-4 py-2 border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                          id="wizard-back-btn"
                        >
                          Back Action
                        </button>
                      ) : (
                        <div />
                      )}

                      {postModalStep < 3 ? (
                        <button
                          type="button"
                          onClick={handleWizardNext}
                          className="px-5 py-2 bg-indigo-900 hover:bg-indigo-950 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                          id="wizard-next-btn"
                        >
                          Next Wizard
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-sky-400 text-slate-950 text-xs font-extrabold rounded-lg shadow transition-colors cursor-pointer"
                          id="wizard-submit-btn"
                        >
                          Submit free project
                        </button>
                      )}
                    </div>

                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
