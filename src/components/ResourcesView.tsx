import React, { useState } from 'react';
import { RESOURCES } from '../data';
import { Search, Download, Lock, ExternalLink, ShieldCheck, Mail, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ResourcesView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [downloadingItem, setDownloadingItem] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  
  // Newsletter signup state inside the locked asset modal
  const [lockedItemModal, setLockedItemModal] = useState<{ title: string; desc: string } | null>(null);
  const [lockEmail, setLockEmail] = useState('');
  const [lockEmailSuccess, setLockEmailSuccess] = useState(false);

  // Filter categories
  const categories = [
    { id: 'all', title: 'All Resources' },
    { id: 'cad', title: 'CAD Models' },
    { id: 'programming', title: 'Code & Embedded' },
    { id: 'embedded_docs', title: 'IoT & Sensing' },
    { id: 'cubesat_docs', title: 'Space Lab Specs' },
    { id: 'safety', title: 'Safety & Regulatory' },
  ];

  const handleDownload = (itemTitle: string) => {
    setDownloadingItem(itemTitle);
    setDownloadSuccess(null);
    setTimeout(() => {
      setDownloadingItem(null);
      setDownloadSuccess(itemTitle);
      setTimeout(() => setDownloadSuccess(null), 3000);
    }, 1500);
  };

  const handleLockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockEmail) {
      setLockEmailSuccess(true);
      setTimeout(() => {
        setLockEmailSuccess(false);
        setLockEmail('');
        setLockedItemModal(null);
      }, 2500);
    }
  };

  // Filter items based on search and selected category
  const filteredCategories = RESOURCES.map((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }

    const filteredItems = cat.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredItems.length === 0) return null;

    return {
      ...cat,
      items: filteredItems,
    };
  }).filter(Boolean) as typeof RESOURCES;

  return (
    <div className="w-full py-12 md:py-20 bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            FSM Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-6 tracking-tight">
            Member Engineering Resources
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Access our open-source CAD models, workshop safety checklists, embedded code libraries, and prototyping manuals.
          </p>
        </div>

        {/* Notice of Member Lock */}
        <div className="mb-10 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto shadow-sm text-center sm:text-left">
          <div className="p-2.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-slate-950 font-bold text-sm">Future Member Portal Launching Fall 2026</h4>
            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
              Standard study sheets and open templates are immediately downloadable below. Proprietary mission blueprints, custom transceivers, and workshop codes are marked with a <span className="text-emerald-600 font-bold inline-flex items-center gap-0.5"><Lock className="w-3 h-3" /> Lock</span> icon and require a verified student account.
            </p>
          </div>
        </div>

        {/* Search & Filtering Control Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-10 pb-5 border-b border-slate-200">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto max-w-full py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:max-w-sm shrink-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search guides, CAD models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
            />
          </div>

        </div>

        {/* Resources Content Listing */}
        <div className="space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-3">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900">{category.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`p-5 rounded-xl border flex flex-col justify-between h-full transition-all duration-200 ${
                        item.isLocked 
                          ? 'bg-slate-50 border-slate-200/80 text-slate-400' 
                          : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded border ${
                            item.type === 'zip' 
                              ? 'bg-amber-50 text-amber-700 border-amber-100' 
                              : item.type === 'pdf' 
                              ? 'bg-red-50 text-red-700 border-red-100' 
                              : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                          }`}>
                            {item.type.toUpperCase()} ASSET
                          </span>

                          {item.isLocked ? (
                            <span className="flex items-center gap-1 text-[9px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold">
                              <Lock className="w-3 h-3" />
                              MEMBER ACCESS
                            </span>
                          ) : (
                            <span className="text-[9px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-bold flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              OPEN SOURCE
                            </span>
                          )}
                        </div>

                        <h4 className={`text-sm sm:text-base font-bold ${item.isLocked ? 'text-slate-500' : 'text-slate-900'}`}>
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Download or lock action */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        {item.isLocked ? (
                          <button
                            onClick={() => setLockedItemModal({ title: item.title, desc: item.description })}
                            className="w-full py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Lock className="w-3 h-3 text-emerald-600" />
                            Request Member Access
                          </button>
                        ) : (
                          <button
                            onClick={() => handleDownload(item.title)}
                            disabled={downloadingItem !== null}
                            className={`w-full py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              downloadSuccess === item.title
                                ? 'bg-emerald-600 text-white'
                                : downloadingItem === item.title
                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                          >
                            {downloadSuccess === item.title ? (
                              <>
                                <ShieldCheck className="w-3.5 h-3.5 animate-bounce" />
                                File Ready!
                              </>
                            ) : downloadingItem === item.title ? (
                              <>
                                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping"></span>
                                Packaging...
                              </>
                            ) : (
                              <>
                                <Download className="w-3.5 h-3.5" />
                                Download Asset
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center bg-white border border-slate-200 rounded-xl">
              <h4 className="text-slate-800 font-bold">No assets found</h4>
              <p className="text-xs text-slate-400 mt-0.5">Try adjusting your search keywords or category.</p>
            </div>
          )}
        </div>

        {/* Useful External Resources */}
        <div className="mt-16 p-6 sm:p-10 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-5">Useful External Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'OpenRocket Simulator', desc: 'Free open-source model rocket flight simulator to check stability factors.', url: 'https://openrocket.info/' },
              { title: 'Adafruit Learning System', desc: 'Free, high-quality guides for beginner and advanced electronics, soldering, and sensor interfaces.', url: 'https://learn.adafruit.com/' },
              { title: 'NASA Space Science Data Coordinated Archive', desc: 'Explore historic satellite sensor parameters and atmospheric flight payloads.', url: 'https://nssdc.gsfc.nasa.gov/' }
            ].map((link, idx) => (
              <a 
                key={idx} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-white hover:shadow-sm transition-all block group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-slate-900 font-bold text-xs sm:text-sm group-hover:text-blue-600 transition-colors">{link.title}</h4>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Locked Asset Modal */}
        <AnimatePresence>
          {lockedItemModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                onClick={() => setLockedItemModal(null)}
              ></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl max-w-md w-full relative z-10 text-center shadow-xl"
              >
                <div className="mx-auto w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-display font-bold text-slate-900">Unlock Engineering Asset</h3>
                <p className="text-xs text-slate-500 mt-1">
                  To open <strong>"{lockedItemModal.title}"</strong>, a validated student or advisor log is required.
                </p>

                {lockEmailSuccess ? (
                  <div className="mt-5 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm">
                    <strong>Success!</strong> You have been added to our early login notify list. We will send updates when the registration portal goes active.
                  </div>
                ) : (
                  <form onSubmit={handleLockSubmit} className="mt-5 space-y-3 text-left">
                    <label className="text-[10px] text-slate-400 font-bold block uppercase font-mono">Subscribe for early portal access</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="student@school.edu"
                        value={lockEmail}
                        onChange={(e) => setLockEmail(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs sm:text-sm cursor-pointer transition-colors"
                    >
                      Add to Notify List
                    </button>
                    <button
                      type="button"
                      onClick={() => setLockedItemModal(null)}
                      className="w-full text-center text-xs text-slate-400 hover:text-slate-600 transition-colors mt-2"
                    >
                      Cancel
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
