import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { X, ArrowRight, AlertCircle, Cpu, ShieldAlert, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsViewProps {
  selectedProjectId: string | null;
  setSelectedProjectId: (projectId: string | null) => void;
}

export default function ProjectsView({ selectedProjectId, setSelectedProjectId }: ProjectsViewProps) {
  const [filter, setFilter] = useState<'all' | 'maker' | 'community'>('all');

  // Find the selected project if there is one
  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId);

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <div className="w-full py-12 md:py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Our Active Programs
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-6 tracking-tight">
            Engineering for Student Inventions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Fremont Student Makers manages our core initiatives ranging from designing custom environmental sensing rovers to supporting regional high school makerspaces and competitive robotics teams.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1 p-1 bg-white border border-slate-200 rounded-xl w-fit mx-auto mb-10 shadow-sm">
          {([
            { id: 'all', label: 'All Projects' },
            { id: 'maker', label: 'Makers & Prototyping' },
            { id: 'community', label: 'School Chapters & Robotics' },
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-52 bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full bg-white/95 backdrop-blur-sm border shadow-sm ${
                    project.category === 'maker' 
                      ? 'text-blue-600 border-blue-100' 
                      : 'text-emerald-600 border-emerald-100'
                  }`}>
                    {project.category === 'maker' 
                      ? 'Maker & Tech' 
                      : 'Community Outreach'}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block">{project.title}</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5 leading-snug">
                    {project.subtitle}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-medium bg-slate-50 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Open Technical Specs
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Goals Roadmap */}
        <div className="mt-20 p-6 sm:p-10 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-blue-600 tracking-wider">STRATEGIC HORIZONS</span>
            <h2 className="text-2xl font-display font-bold text-slate-900 mt-1">Our Long-Term Milestones</h2>
            <p className="text-slate-500 mt-2 text-xs sm:text-sm font-sans">Where we are building. A modular roadmap showing upcoming prototyping trials.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Expand Prototyping Lab', desc: 'Secure advanced soldering tools, custom PCB equipment, and 3D printing stations.' },
              { num: '02', title: 'Expand STEM Workshops', desc: 'Introduce specialized PCB layout and microcontrollers to regional libraries.' },
              { num: '03', title: 'Support Additional Schools', desc: 'Sponsor ten new middle and high school technology chapters in the East Bay area.' },
              { num: '04', title: 'Host Student Maker Fair', desc: 'Create Fremont\'s first local high school innovation rally to exhibit custom projects.' }
            ].map((goal, index) => (
              <div key={index} className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative">
                <span className="absolute top-3 right-3 text-2xl font-display font-black text-slate-200">{goal.num}</span>
                <h4 className="text-slate-900 font-bold text-sm mt-3">{goal.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Expanded Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                onClick={() => setSelectedProjectId(null)}
              ></div>

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.15 }}
                className="bg-white border border-slate-200 rounded-2xl shadow-xl relative w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors z-20 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Hero Graphic inside Modal */}
                <div className="relative h-52 sm:h-64 bg-slate-100 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider">
                      {selectedProject.title}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 mt-0.5 leading-tight">
                      {selectedProject.subtitle}
                    </h2>
                  </div>
                </div>

                {/* Main Content inside Modal */}
                <div className="p-5 sm:p-6 space-y-6">
                  
                  {/* Descriptions */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <h4 className="text-slate-900 font-bold text-sm sm:text-base border-b border-slate-100 pb-1.5">Program Overview</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {selectedProject.longDescription}
                      </p>
                      
                      {selectedProject.category === 'future' ? (
                        <div className="flex gap-2.5 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <div className="text-[11px] sm:text-xs">
                            <strong>Horizon Initiative:</strong> This program is currently under active conceptual drafting. If you are a mentor specializing in embedded systems, custom PCBs, or mechanical fabrication, please contact us!
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
                          <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <div className="text-[11px] sm:text-xs">
                            <strong>Active Initiative:</strong> Fully integrated and funded. Work occurs weekly in Fremont, with all essential hardware, CAD, and coding benches operational.
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Metrics / Technical Spec Panel */}
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-blue-600" />
                          Project Specs
                        </h4>
                        
                        {selectedProject.metrics ? (
                          <div className="space-y-2.5 font-sans">
                            {selectedProject.metrics.map((metric, idx) => (
                              <div key={idx} className="border-b border-slate-100 pb-1.5 last:border-0 last:pb-0">
                                <span className="text-[9px] text-slate-400 uppercase font-bold block">
                                  {metric.label}
                                </span>
                                <span className="text-xs font-bold text-slate-800 mt-0.5 block">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-[11px] text-slate-400">
                            Technical specs and metrics are under active simulation drafting.
                          </div>
                        )}
                      </div>

                      {/* Tags */}
                      <div>
                        <h5 className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">Target Skills</h5>
                        <div className="flex flex-wrap gap-1">
                          {selectedProject.tags.map((tag, idx) => (
                            <span key={idx} className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Operations Flow for Makers */}
                  {selectedProject.category === 'maker' && (
                    <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-200/80">
                      <h4 className="text-blue-800 font-bold text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                        <ShieldAlert className="text-blue-600 w-3.5 h-3.5" />
                        Safety & Operator Clearance Note
                      </h4>
                      <p className="text-[11px] text-blue-700 leading-relaxed font-sans">
                        All hardware assembly, soldering stations, and 3D printing tasks operate under strict supervision. Members undergo mandatory safety briefings on soldering, hot-end handling, and battery safety before active project participation.
                      </p>
                    </div>
                  )}

                  {/* Modal Footer */}
                  <div className="pt-3 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => setSelectedProjectId(null)}
                      className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Close Report
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
