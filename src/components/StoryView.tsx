import React, { useState } from 'react';
import { MILESTONES, LEADERSHIP } from '../data';
import { Calendar, Users, Trophy, Rocket, Sparkles, ChevronRight } from 'lucide-react';

export default function StoryView() {
  const [filter, setFilter] = useState<'all' | 'club' | 'competition' | 'community' | 'future'>('all');

  const filteredMilestones = MILESTONES.filter(
    (m) => filter === 'all' || m.category === filter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'club':
        return <Users className="w-4 h-4 text-blue-600" />;
      case 'competition':
        return <Trophy className="w-4 h-4 text-emerald-600" />;
      case 'community':
        return <Sparkles className="w-4 h-4 text-violet-600" />;
      case 'future':
        return <Rocket className="w-4 h-4 text-indigo-600" />;
      default:
        return <Calendar className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="w-full py-12 md:py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            Our Story & Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-6 tracking-tight">
            How FSM Began
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            From a garage startup of five students to an incorporated 501(c)(3) nonprofit managing environmental rovers, advanced hardware prototyping, and student satellite payload software.
          </p>
        </div>

        {/* Narrative & History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">Our Story</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              One of humanity's earliest desires is to build things. Whether it's a simple sand castle or complex sensor grids, we all want to create things we can be proud of. But in traditional classrooms, students are often told to simply watch experiments, instead of conducting them.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              We realized that schools often lack the tools to properly support those who truly want to build something worthwhile. So a group of Fremont high school students decided to come together and create Fremont Student Makers. Unifying students from across our city, we collaborate on complex technology projects, training new students to follow in our footsteps.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              With students across 4 local high schools, we do our best to encourage real-world engineering. Our goal is to create our own municipal student-led makerspace, making ourselves a fundamental part of student development in the community.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 font-sans">
            <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" 
                alt="Students analyzing rover chassis" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                <span className="text-[10px] text-sky-300 font-mono font-bold">FIELD TESTING</span>
                <p className="text-xs text-white font-semibold">Sensor Calibration Setup</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-28 sm:h-34 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400" 
                  alt="3D printing customized cases" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
                  <p className="text-[10px] text-emerald-300 font-mono font-bold">MANUFACTURING</p>
                  <p className="text-xs text-white font-semibold">3D Printed Casings</p>
                </div>
              </div>
              <div className="relative h-28 sm:h-34 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400" 
                  alt="Telemetry visualizer" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
                  <p className="text-[10px] text-purple-300 font-mono font-bold">TRANSMISSION PREP</p>
                  <p className="text-xs text-white font-semibold">Transceiver Specs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900">Milestone Timeline</h2>
              <p className="text-slate-500 mt-1 text-xs sm:text-sm font-sans">Follow our progression from a simple garage lab to an active student maker hub.</p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-1 p-1 bg-white border border-slate-200 rounded-lg shrink-0 shadow-sm">
              {([
                { id: 'all', label: 'All' },
                { id: 'club', label: 'Club' },
                { id: 'competition', label: 'Milestones' },
                { id: 'community', label: 'Outreach' },
                { id: 'future', label: 'Future' }
              ] as const).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer transition-all ${
                    filter === cat.id 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-10 py-2">
            {filteredMilestones.map((m) => (
              <div key={m.id} className="relative pl-8 md:pl-12">
                {/* Visual marker */}
                <span className="absolute -left-3 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-300 z-10 shadow-sm">
                  {getCategoryIcon(m.category)}
                </span>

                {/* Left-side Year Label on Desktop */}
                <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right font-display font-extrabold text-base text-blue-600">
                  {m.year}
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm max-w-3xl">
                  {/* Mobile Year Badge */}
                  <span className="inline-block md:hidden text-xs font-extrabold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full mb-2">
                    {m.year}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">{m.title}</h4>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wide px-1.5 py-0.5 bg-slate-50 border border-slate-200 text-slate-500 rounded">
                      {m.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-sans">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Student Leadership</h2>
            <p className="text-slate-500 mt-2 text-xs sm:text-sm font-sans">
              FSM is entirely run by high school makers and engineers. Meet the administrative board directing project proposals and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((member) => (
              <div key={member.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="relative h-56 bg-slate-100">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 inset-x-3">
                    <h3 className="text-base font-bold text-white leading-tight">{member.name}</h3>
                    <p className="text-[11px] text-sky-200 font-bold mt-0.5">{member.role}</p>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <p className="text-xs text-slate-500 leading-relaxed italic font-sans">
                    "{member.bio}"
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex justify-between items-center text-[9px] text-slate-400 font-mono">
                    <span>BOARD MEMBER</span>
                    <span>FREMONT, CA</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Ambitions */}
        <div className="p-6 sm:p-10 bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-4">Our Future Ambitions</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
              We aren't stopping here. As Fremont Student Makers continues to grow, we are scaling our infrastructure to tackle advanced autonomous rovers, collaborative student payloads, and custom IoT mesh communication networks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
              {[
                { title: 'Embedded Sensor Stands', desc: 'Secure custom calibration platforms and testing benches to dry-test and calibrate environmental sensor nodes.' },
                { title: 'Academic Partnerships', desc: 'Partner with local Bay Area university research squads for advanced smart agriculture and microclimate studies.' },
                { title: 'Statewide Advocacy', desc: 'Draft legislative recommendations to make engineering and prototyping facilities accessible and safe for youth nonprofits.' },
                { title: 'Global Chapters', desc: 'Sponsor local student maker chapters in municipal libraries nationwide, sharing lesson plans and CAD models.' }
              ].map((item, index) => (
                <div key={index} className="flex gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-slate-900 font-bold text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
