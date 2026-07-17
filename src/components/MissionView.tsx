
// import React from 'react';
// import { Target, Eye, Shield, Users, Globe, BookOpen, Lightbulb, HeartHandshake } from 'lucide-react';

// export default function MissionView() {
//   const values = [
//     {
//       icon: <Users className="w-5 h-5 text-blue-600" />,
//       title: 'Radical Inclusivity',
//       description: 'We believe engineering belongs to everyone. FSM is 100% free of charge to students. We provide materials, training, tools, and project support so that socio-economic constraints never hold back an aspiring maker.'
//     },
//     {
//       icon: <Shield className="w-5 h-5 text-emerald-600" />,
//       title: 'Safety & Credibility',
//       description: 'Hands-on prototyping comes with physical and electrical hazards. We foster a robust safety culture with mandatory operator tool training, formal checklists, structured workshop guidelines, and professional advisor panels.'
//     },
//     {
//       icon: <Lightbulb className="w-5 h-5 text-indigo-600" />,
//       title: 'True Student Autonomy',
//       description: 'Adult advisors are vital for safety reviews, but students run the projects. We design the circuits, solder the sensor components, write the firmware code, and manage the administrative structures.'
//     },
//     {
//       icon: <BookOpen className="w-5 h-5 text-violet-600" />,
//       title: 'Open Source Mentorship',
//       description: 'We document everything. FSM publishes lesson modules, safety workflows, CAD assemblies, and coding guidelines to help other schools and cities build their own local student maker chapters from scratch.'
//     }
//   ];

//   return (
//     <div className="w-full py-12 md:py-20 bg-slate-50 text-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
//             Our Mission & Philosophy
//           </span>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-6 tracking-tight">
//             Democratizing Technology Education
//           </h1>
//           <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
//             Fremont Student Makers is on a mission to prove that with high safety guidelines, structured mentorship, and community funding, students can design, build, and deploy genuine advanced engineering prototypes.
//           </p>
//         </div>

//         {/* Purpose & Vision Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
//             <div className="p-2.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg w-fit mb-5">
//               <Target className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">Our Purpose</h3>
//             <p className="text-slate-600 leading-relaxed text-xs sm:text-sm font-sans">
//               The primary purpose of Fremont Student Makers is to build an educational incubator for students interested in hardware engineering, robotics, and digital fabrication. Traditional school curricula rarely include multi-disciplinary hardware projects. FSM steps into that void by giving youth a workspace where they can apply computer science, physics, and design directly to functional rovers, smart IoT nodes, and student satellite software.
//             </p>
//           </div>
 
//           <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
//             <div className="p-2.5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-lg w-fit mb-5">
//               <Eye className="w-6 h-6" />
//             </div>
//             <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">Our Vision</h3>
//             <p className="text-slate-600 leading-relaxed text-xs sm:text-sm font-sans">
//               We envision a future where high school engineering teams are active partners in hands-on technology innovation. By designing our custom environmental rovers and sustaining a continuous pipeline of student-led projects, we aim to establish a template for student-led maker groups globally. We want to show school districts, universities, and technology companies that students are ready for real engineering parameters.
//             </p>
//           </div>
//         </div>

//         {/* Core Values Section */}
//         <div className="mb-20">
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Our Core Values</h2>
//             <p className="text-slate-500 mt-2 text-xs sm:text-sm font-sans">The principles guiding every design review, project build, and community workshop.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {values.map((v, i) => (
//               <div key={i} className="p-5 bg-white border border-slate-200 hover:border-blue-200 rounded-xl transition-all flex gap-4">
//                 <div className="p-2.5 rounded-lg bg-slate-50 shrink-0 h-fit border border-slate-100">
//                   {v.icon}
//                 </div>
//                 <div>
//                   <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{v.title}</h4>
//                   <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">{v.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Deep Dive Section */}
//         <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//             <div className="space-y-4">
//               <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1.5">
//                 <Globe className="w-4 h-4" />
//                 THE BIGGER PICTURE
//               </span>
//               <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
//                 Why Student-Led Engineering Matters
//               </h2>
//               <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
//                 When adult administrators run STEM activities, they often construct rigid templates with pre-determined outcomes. The student merely follows instructions to achieve the expected result.
//               </p>
//               <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
//                 But in real engineering, there is no instruction manual. In Fremont Student Makers, members must negotiate hardware components, source materials, configure battery constraints, write safety checklists, and solder custom circuits.
//               </p>
//               <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
//                 This teaches our students critical problem-solving, team management, resilience in the face of hardware failures, and true leadership—qualities that turn young minds into real-world innovators.
//               </p>
//             </div>
//             <div className="space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
//               <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 flex items-center gap-2">
//                 <HeartHandshake className="text-blue-600 w-4.5 h-4.5" />
//                 Our Community Impact
//               </h3>
//               <div className="space-y-3.5 font-sans">
//                 {[
//                   { title: 'Empowering Underfunded Schools', desc: 'Providing full robotics kits, CAD mentorship, and components to local school chapters that lack funding for technical clubs.' },
//                   { title: 'Free Public Library Maker Days', desc: 'Demystifying technology for younger children and parents via hands-on soldering and programming stalls.' },
//                   { title: 'Career & University Pipeline', desc: 'Over 90% of our alumni secure placements in top-tier collegiate engineering divisions, including Stanford, UC Berkeley, and MIT.' },
//                 ].map((item, index) => (
//                   <div key={index} className="pl-3.5 border-l-2 border-emerald-500">
//                     <h4 className="text-slate-950 font-bold text-xs sm:text-sm">{item.title}</h4>
//                     <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Target, Eye, Shield, Users, Globe, BookOpen, Lightbulb, HeartHandshake } from 'lucide-react';

export default function MissionView() {
  const values = [
    { icon: <Users className="w-5 h-5 text-blue-600" />, title: 'Radical Inclusivity', desc: '100% free of charge to students. Socio-economic constraints never hold back a maker.' },
    { icon: <Shield className="w-5 h-5 text-emerald-600" />, title: 'Safety & Credibility', desc: 'Robust safety culture with mandatory tool training and professional advisor oversight.' },
    { icon: <Lightbulb className="w-5 h-5 text-indigo-600" />, title: 'Student Autonomy', desc: 'Students design the circuits, write the firmware, and manage project structures.' },
    { icon: <BookOpen className="w-5 h-5 text-violet-600" />, title: 'Open Source', desc: 'We document everything so other schools can build their own chapters.' }
  ];

  return (
    <div className="w-full py-12 md:py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
         <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Our Mission & Philosophy
           </span>
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-6 tracking-tight">
             Democratizing Technology Education
           </h1>
           <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
             Fremont Student Makers is on a mission to prove that with high safety guidelines, structured mentorship, and community funding, students can design, build, and deploy genuine advanced engineering prototypes.
           </p>
         </div>


        {/* Feature/Image Block 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400">
            {/* INSERT IMAGE HERE */}
            [Project Action Shot]
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Our Purpose & Vision</h2>
            <p className="text-slate-600">We bridge the gap between classroom theory and real-world engineering. By providing a professional-grade workspace, we empower students to apply physics and code to functional robotics and IoT nodes.</p>
          </div>
        </div>

        {/* Core Values - Simplified */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl">
                <div className="mb-3">{v.icon}</div>
                <h4 className="font-bold text-slate-900 mb-1">{v.title}</h4>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature/Image Block 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-2xl font-bold text-slate-900">Why Student-Led Matters</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              When students own their projects, they learn to navigate failure without a manual. We trade rigid, pre-determined outcomes for true innovation, resilience, and leadership.
            </p>
          </div>
          <div className="aspect-video bg-slate-200 rounded-2xl order-1 md:order-2 flex items-center justify-center text-slate-400">
            {/* INSERT IMAGE HERE */}
            [Community/Collaborative Shot]
          </div>
        </div>

      </div>
    </div>
  );
}