import React, { useState } from 'react';
import { Flame, Clock, Calendar, ArrowRight, X, Heart, MessageSquare } from 'lucide-react';
import { BlogArticle } from '../types';
import { MOCK_BLOGS } from '../mockData';

export default function BlogBento() {
  const [blogs, setBlogs] = useState<BlogArticle[]>(MOCK_BLOGS);
  const [readingBlog, setReadingBlog] = useState<BlogArticle | null>(null);
  const [likedBlogs, setLikedBlogs] = useState<Record<string, boolean>>({});

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedBlogs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="blogs" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-bold text-indigo-900 font-mono uppercase tracking-wide">
            <Flame className="w-4 h-4 text-rose-500" />
            <span>MAI Trade Chronicles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest Industry Guides & Sourcing Advice
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Expert guides on sandstone, marble care, cost structures, and trade pathways curated for homeowners and fitters across the UK.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const isLiked = likedBlogs[blog.id];
            return (
              <div
                key={blog.id}
                onClick={() => setReadingBlog(blog)}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                id={`blog-card-${blog.id}`}
              >
                <div>
                  
                  {/* Thumbnail */}
                  <div className="h-48 overflow-hidden relative bg-slate-100">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-indigo-950/80 backdrop-blur text-white text-[9px] font-bold font-mono uppercase px-2.5 py-1 rounded">
                      {blog.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    
                    {/* Meta stats */}
                    <div className="flex items-center gap-4 text-[10px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-slate-900 text-sm sm:text-base group-hover:text-indigo-900 transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                      {blog.summary}
                    </p>

                  </div>
                </div>

                {/* Footer action */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-900 group-hover:text-teal-600 transition-colors flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="flex items-center gap-3 text-slate-400">
                    <button
                      onClick={(e) => toggleLike(e, blog.id)}
                      className={`hover:text-rose-500 transition-colors p-1 cursor-pointer ${isLiked ? 'text-rose-500' : ''}`}
                      id={`blog-like-${blog.id}`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500' : ''}`} />
                    </button>
                    <button className="hover:text-amber-500 transition-colors p-1">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Reader Dialog Overlay */}
      {readingBlog && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
            {/* Backdrop lock */}
            <div 
              onClick={() => setReadingBlog(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
            />

            {/* Modal card */}
            <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl animate-in fade-in zoom-in-95 duration-200">
              
              <div className="relative h-64 bg-slate-100">
                <img
                  src={readingBlog.imageUrl}
                  alt={readingBlog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <button
                  onClick={() => setReadingBlog(null)}
                  className="absolute top-4 right-4 text-slate-100 hover:text-white bg-slate-950/30 hover:bg-slate-950/50 p-2 rounded-full transition-all cursor-pointer"
                  id="close-reader-modal"
                >
                  <X className="w-4 h-4" />
                </button>
                
                {/* Meta header labels */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] uppercase font-mono bg-teal-500 text-slate-950 px-2.5 py-1 rounded font-bold">
                    {readingBlog.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 leading-tight">
                    {readingBlog.title}
                  </h3>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-mono border-b border-slate-100 pb-4">
                  <span>Published: {readingBlog.date}</span>
                  <span>·</span>
                  <span>Duration: {readingBlog.readTime}</span>
                  <span>·</span>
                  <span>Editor Vetted</span>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p className="font-semibold text-slate-800">
                    {readingBlog.summary}
                  </p>
                  <p>
                    Across the UK building trade, layout details matter. When starting your {readingBlog.category.toLowerCase()} project, selecting correct parameters helps avoid typical installation mishaps. Many tradesmen fail to calculate moisture permeability values and drip coordinates resulting in severe interior erosion.
                  </p>
                  <p>
                    By utilizing modern matching services like our platform, UK homeowners coordinate with fabricators directly, ensuring proper stone, ceramic, or quartz materials are prepared to precision blueprints.
                  </p>
                  <p className="bg-slate-50 border-l-4 border-indigo-900 p-4 rounded-r-xl italic text-slate-700 text-xs sm:text-sm">
                    "Proper care of natural stones begins with using specialized impregnating sealers before any external placement works are completed." — MAI Editorial Team
                  </p>
                </div>

                <div className="border-t border-slate-14 pb-1 pt-6 flex justify-between items-center text-xs">
                  <span className="font-semibold text-indigo-950 font-mono">Reference Topic: UK SOURCING CORE SERIES</span>
                  <button
                    onClick={() => setReadingBlog(null)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-lg transition-colors cursor-pointer"
                    id="reader-back-btn"
                  >
                    Done Reading
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
