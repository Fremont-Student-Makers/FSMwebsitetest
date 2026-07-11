import React, { useState, useEffect } from 'react';
import HomeView from './components/HomeView';
import MissionView from './components/MissionView';
import StoryView from './components/StoryView';
import ProjectsView from './components/ProjectsView';
import UpdatesView from './components/UpdatesView';
import ResourcesView from './components/ResourcesView';
import ContactView from './components/ContactView';
import { Compass, Menu, X, Cpu, MapPin, Mail, Github, Linkedin, MessageSquare, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  
  // Footer Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);

  // Handle scroll-to-top visibility and sticky navigation effect
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync scroll to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsMobileMenuOpen(false);
  }, [activeTab]);

  // Prevent page scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterSuccess(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'mission', label: 'Mission' },
    { id: 'story', label: 'Story' },
    { id: 'projects', label: 'Projects' },
    { id: 'updates', label: 'Updates' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView 
            setActiveTab={setActiveTab} 
            setSelectedProject={(id) => {
              setSelectedProjectId(id);
              setActiveTab('projects');
            }} 
          />
        );
      case 'mission':
        return <MissionView />;
      case 'story':
        return <StoryView />;
      case 'projects':
        return (
          <ProjectsView 
            selectedProjectId={selectedProjectId} 
            setSelectedProjectId={setSelectedProjectId} 
          />
        );
      case 'updates':
        return <UpdatesView />;
      case 'resources':
        return <ResourcesView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setActiveTab={setActiveTab} setSelectedProject={setSelectedProjectId} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-blue-600/10 selection:text-blue-800">
      
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo */}
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0"
            >
              <div className="p-2 rounded bg-gradient-to-tr from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-display font-bold text-slate-900 tracking-tight text-[13px] sm:text-base block truncate">
                   Fremont Student Makers
                </span>
                <span className="block text-[9px] sm:text-[10px] text-emerald-600 font-mono font-bold leading-none mt-0.5 truncate">
                  501(c)(3) Tech & Maker Nonprofit
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs lg:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-slate-100 border border-slate-200 text-blue-600 font-bold'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Join Us CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => setActiveTab('contact')}
                className="px-4.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-500/10 cursor-pointer transition-all"
              >
                Join Us
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Navigation Side Drawer (Moved to root level to prevent backdrop-filter position containment bugs) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] md:hidden"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-[101] shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-gradient-to-tr from-blue-600 to-sky-500 text-white shadow-sm">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display font-black text-slate-900 tracking-tight text-xs sm:text-sm">
                      Fremont Student Makers
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-grow px-6 py-6 space-y-2 overflow-y-auto">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  MAIN DIRECTORY
                </p>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all cursor-pointer block ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-600 font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Drawer Footer / CTA */}
              <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                <button
                  onClick={() => {
                    setActiveTab('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-500/10 cursor-pointer transition-all"
                >
                  Join Us Today
                </button>
                <p className="text-[10px] text-center text-slate-400 leading-normal font-sans">
                  Fremont Student Makers is a registered 501(c)(3) nonprofit empowering youth in Maker Education.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main View Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8 text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
            
            {/* Column 1: Brand & Mission summary */}
            <div className="lg:col-span-4 space-y-4">
              <div 
                onClick={() => setActiveTab('home')}
                className="flex items-center gap-2 cursor-pointer w-fit group"
              >
                <div className="p-2 rounded bg-gradient-to-tr from-blue-600 to-sky-500 text-white shadow">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="font-display font-bold text-slate-900 tracking-tight">
                  Fremont Student Makers
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-sm">
                Fremont Student Makers is a youth-run 501(c)(3) educational organization building accessible technology and maker programs. We train students on custom microcontroller design, CAD modeling, and environmental robotics.
              </p>
              <div className="text-[10px] text-slate-400 font-mono">
                © {new Date().getFullYear()} Fremont Student Makers. All rights reserved.<br />
                Licensed public charity. Tax Exempt status verified.
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className="text-xs text-slate-500 hover:text-blue-600 transition-colors cursor-pointer text-left"
                    >
                      {item.label} Page
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <a href="mailto:info@fremontstudentmakers.org" className="hover:text-blue-600 transition-colors">
                    info@fremontstudentmakers.org
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    38136 Smith Ct, Fremont, CA 94536
                  </span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-2.5 pt-3">
                {[
                  { icon: <Github className="w-4 h-4" />, url: '#' },
                  { icon: <Linkedin className="w-4 h-4" />, url: '#' },
                  { icon: <MessageSquare className="w-4 h-4" />, url: '#' }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    className="p-1.5 rounded bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Newsletter Signup */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Mission Updates</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Subscribe to our newsletter to receive project updates, workshop schedules, and student innovation reviews.
              </p>

              {newsletterSuccess ? (
                <div className="p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  Subscribed to project newsletter!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="student@school.edu"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Subscribe
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('contact')}
                      className="px-3.5 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:text-slate-900 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      Donate
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
            <div className="flex gap-4">
              <span className="hover:text-slate-600 cursor-pointer">Privacy Charter</span>
              <span>•</span>
              <span className="hover:text-slate-600 cursor-pointer">Safety Guidelines</span>
              <span>•</span>
              <span className="hover:text-slate-600 cursor-pointer">Sponsor Terms</span>
            </div>
            <div>
              Designed with precision for young pioneers in technology.
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/10 z-50 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
