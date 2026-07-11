export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'club' | 'competition' | 'community' | 'future';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'maker' | 'community' | 'future';
  tags: string[];
  metrics?: { label: string; value: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    link: string;
    isLocked: boolean;
    type: 'pdf' | 'link' | 'zip' | 'doc';
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'volunteer' | 'sponsor';
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export const STATS = [
  { label: 'Active Student Members', value: 75, suffix: '+' },
  { label: 'Projects Built Together', value: 45, suffix: '+' },
  { label: 'Younger Students Reached', value: 1500, suffix: '+' },
  { label: 'Local Schools Supported', value: 12, suffix: '' },
];

export const MILESTONES: Milestone[] = [
  {
    id: 'm1',
    year: '2023',
    title: 'Organization Founded',
    description: 'Fremont Student Makers is established by five passionate high school students aiming to make hands-on technology, engineering, and digital manufacturing accessible to everyone in Fremont.',
    category: 'club',
  },
  {
    id: 'm2',
    year: 'Spring 2024',
    title: 'First Prototyping & Sensor Stations',
    description: 'Our founding members successfully design, build, and deploy custom environmental sensor arrays to monitor local microclimate variations in regional community parks.',
    category: 'competition',
  },
  {
    id: 'm3',
    year: 'Fall 2024',
    title: 'Weather Balloon Payload Flight',
    description: 'We send a custom-built atmospheric telemetry package to 85,000 feet, gathering real-time sensory readings and publishing the open-source weather data.',
    category: 'community',
  },
  {
    id: 'm4',
    year: 'Spring 2025',
    title: 'Student Space Lab Initiative',
    description: 'We officially receive our 501(c)(3) status and initiate our 1U student CubeSat software program, partnering with local technology mentors.',
    category: 'club',
  },
  {
    id: 'm5',
    year: 'Late 2025',
    title: 'Hardware Simulation Complete',
    description: 'Our team successfully validates our sensor subsystems on flat-sat testing benches, marking a major milestone for student-written payload code.',
    category: 'competition',
  },
  {
    id: 'm6',
    year: '2026 - 2027',
    title: 'Community Space Payload Integration',
    description: 'Our primary objective is to finalize testing and integrate our student sensor payload with our educational partners.',
    category: 'future',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'cubesat',
    title: 'Maker³ Space Lab Initiative',
    subtitle: 'Student-Led Payload Development',
    description: 'Maker3 is a student-led sensor payload and software initiative, developed in partnership with Lothan Space, giving high schoolers direct experience with orbital electronics.',
    longDescription: 'Maker3 is a student-led satellite electronics and coding initiative, developed in partnership with Lothan Space. From designing our own avionics and subsystem module boards to developing robust sensor tracking software, we build the digital framework necessary to run custom payloads. Members gain hands-on experience in microcontroller programming, CAD modeling, structural thermal analysis, PCB layout, and wireless radio communications.',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800',
    category: 'maker',
    tags: ['Avionics', 'CAD', 'PCB Design', 'Radio Tech', 'Lothan Space'],
    metrics: [
      { label: 'Form Factor', value: '1U Sensor Module' },
      { label: 'Primary Partner', value: 'Lothan Space' },
      { label: 'Power System', value: 'Solar & LiFePO4' },
    ],
  },
  {
    id: 'rovers',
    title: 'IoT Environmental Rovers',
    subtitle: 'Autonomous Sensing Systems',
    description: 'Designing, building, and deploying solar-powered ecological rovers and stationary sensor nodes to map local environmental factors and coordinate real-time meshes.',
    longDescription: 'Our Environmental Rovers program focuses heavily on student collaboration across mechanical and electrical systems. Members design 3D-printed chassis, solder sensor integrations, and program microcontrollers to navigate, collect climate variables, and transmit data. This project emphasizes open-source software, battery safety systems, autonomous navigation algorithms, and real-time environmental mapping.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    category: 'maker',
    tags: ['Microcontrollers', '3D Printing', 'Sensing', 'Mesh Networking', 'Solar Power'],
    metrics: [
      { label: 'Rover Weight', value: '4.5 lbs' },
      { label: 'Communication Range', value: '1.2 miles' },
      { label: 'Sensor Suite', value: 'CO2, Temp, UV, TVOC' },
    ],
  },
  {
    id: 'robotics',
    title: 'Take 3 Robotics',
    subtitle: 'FTC Robotics Team',
    description: 'Take 3 Robotics is our FTC Robotics team associated with Fremont Student Makers, introducing members to applied software and hardware engineering in a structured team environment.',
    longDescription: 'Take 3 Robotics is our FTC Robotics team associated with Fremont Student Makers. With a relatively smaller team size, we introduce members to applied concepts of engineering across both software and hardware while working in a structured team environment. Students learn autonomous path planning, computer vision tracking, metal chassis fabrication, and precision motor control.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    category: 'community',
    tags: ['FTC Robotics', 'Java Programming', 'Computer Vision', 'Mechanics'],
    metrics: [
      { label: 'Team Name', value: 'Take 3 Robotics' },
      { label: 'League', value: 'FTC Association' },
      { label: 'Active Status', value: 'Transition/Active' },
    ],
  },
  {
    id: 'irvington',
    title: 'Irvington Maker Club',
    subtitle: 'High School Maker Branch',
    description: 'A branch of Fremont Student Makers based in Irvington High School, focused on participating in Invention Convention and accessible engineering projects.',
    longDescription: 'Irvington Maker Club is a branch of Fremont Student Makers based in Irvington High School. Mainly participating in Invention Convention and other engineering projects, the Irvington branch places a focus on introducing engineering concepts to students while staying accessible and engaging. It acts as an open portal for younger high school students to explore microcontrollers, 3D printing, and creative prototyping in a supportive environment.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    category: 'community',
    tags: ['Invention Convention', 'Irvington HS', 'Prototyping', 'Mentorship'],
    metrics: [
      { label: 'Affiliation', value: 'Irvington HS' },
      { label: 'Primary Focus', value: 'Invention Convention' },
      { label: 'Engagement Level', value: 'Highly Accessible' },
    ],
  },
];

export const LEADERSHIP: TeamMember[] = [
  {
    id: 'l1',
    name: 'Siddharth Mehta',
    role: 'Executive Director & Co-Founder',
    bio: 'Senior at Fremont High. Enjoys system design, embedded software, and securing community grants. Sid founded Fremont Student Makers to build an inclusive launchpad for student tech projects.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'l2',
    name: 'Chloe Zhang',
    role: 'Chief Avionics Engineer',
    bio: 'Junior at Mission San Jose High. Specializes in multi-layer PCB design, RTOS microcontrollers, and wireless communication links. Chloe is currently directing our sensor transmitter modules.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'l3',
    name: 'Marcus Vance',
    role: 'Prototyping & Fabrication Lead',
    bio: 'Senior at Irvington High. Expert in 3D modeling, CNC machining, and hardware assembly. Marcus manages rover chassis designs, custom sensor rigs, and workshop safety protocols.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'l4',
    name: 'Nisha Patil',
    role: 'Outreach & Partnerships Director',
    bio: 'Junior at Fremont High. Oversees middle school chapters, coordinates library maker fairs, and drafts local sponsorship and donation packages.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
];

export const RESOURCES: ResourceCategory[] = [
  {
    id: 'cad',
    title: 'CAD & Modeling Resources',
    description: 'Learn parameter-driven 3D modeling for satellites, robotics, and custom electronic chassis.',
    items: [
      { title: 'Onshape Student Fundamentals Guide', description: 'Step-by-step introduction to sketching, constraints, and assemblies.', link: '#', isLocked: false, type: 'link' },
      { title: 'SolidWorks CSWA Preparation Pack', description: 'Practice problems, speed modeling workflows, and exam outline.', link: '#', isLocked: true, type: 'zip' },
      { title: 'Rover Chassis 3D Template', description: 'Official customizable base CAD model for 3D-printable environmental rovers.', link: '#', isLocked: false, type: 'zip' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Embedded Tutorials',
    description: 'Code guides for real-time firmware, telemetry networks, and sensor logging.',
    items: [
      { title: 'ESP32 RTOS Sensing Framework', description: 'Guide on handling GPS, temperature, and atmospheric logging in separate tasks.', link: '#', isLocked: false, type: 'pdf' },
      { title: 'C++ Safe Memory Practices for Microcontrollers', description: 'Memory budget limits and error tolerance rules for student hardware.', link: '#', isLocked: true, type: 'pdf' },
      { title: 'Ground Station Dashboard Kit', description: 'Python/PyQt telemetry visualizer templates for real-time rover data feeds.', link: '#', isLocked: false, type: 'zip' },
    ],
  },
  {
    id: 'embedded_docs',
    title: 'IoT & Environmental Sensing Guides',
    description: 'Essential manuals for microcontrollers, sensor integration, and PCB assembly.',
    items: [
      { title: 'Arduino & ESP32 Prototyping Pack', description: 'Everything needed to build, program, and run your first wireless sensor station.', link: '#', isLocked: false, type: 'pdf' },
      { title: 'Solar Power & Battery Safety Logic', description: 'Standard operating procedures for managing li-ion batteries and solar arrays safely.', link: '#', isLocked: false, type: 'pdf' },
      { title: '3D Printing & Fabrication Guide', description: 'Best practices for printing robust parts, choosing plastics, and structural engineering.', link: '#', isLocked: false, type: 'pdf' },
    ],
  },
  {
    id: 'cubesat_docs',
    title: 'Student Space Lab References',
    description: 'Systems engineering documentation and low Earth orbit sensor standards.',
    items: [
      { title: 'Satellite Engineering 101 Handbook', description: 'A detailed walkthrough of mission timelines, structural reviews, and code checklists.', link: '#', isLocked: false, type: 'link' },
      { title: 'Maker3 Sensor Subsystem Software Spec', description: 'Complete architecture map of the command and environmental data handling systems.', link: '#', isLocked: true, type: 'doc' },
      { title: 'Thermal & Vacuum Simulation Plans', description: 'How to simulate extreme temperatures and conditions for custom student boards.', link: '#', isLocked: true, type: 'pdf' },
    ],
  },
  {
    id: 'safety',
    title: 'Safety & Regulatory Documents',
    description: 'Strict guidelines to guarantee workshop safety and amateur band radio compliance.',
    items: [
      { title: 'FSM Workshop Operations Safety Code', description: 'Mandatory workshop tool usage, soldering guidelines, and eye safety rules.', link: '#', isLocked: false, type: 'pdf' },
      { title: 'FCC Amateur Radio License Guide', description: 'Blank forms with guided examples to secure local frequencies for student radios.', link: '#', isLocked: true, type: 'doc' },
      { title: 'Lithium Battery Storage Protocol', description: 'Safe charging, transport, and fire prevention guidelines in the student workshop.', link: '#', isLocked: false, type: 'pdf' },
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I join Fremont Student Makers?',
    answer: 'Any student aged 12-18 in the Fremont area can join! Sign ups open at the start of each semester. No prior experience is required—we train you on CAD, safety, coding, and electronics from scratch. Click "Join Us" on the contact page or attend our next welcome meeting.',
    category: 'general',
  },
  {
    question: 'Does it cost money to participate?',
    answer: 'No! As a 501(c)(3) nonprofit, we are funded entirely by corporate sponsors, municipal grants, and private donations. We supply all materials, electronics, and lab tools at zero cost to our members.',
    category: 'general',
  },
  {
    question: 'Where do you meet and build?',
    answer: 'We meet every Saturday from 10:00 AM to 3:00 PM at the Fremont Municipal Community Hub Workshop. Members collaborate here on robotics, microcontrollers, and 3D printing design.',
    category: 'general',
  },
  {
    question: 'Can my company sponsor a specific project?',
    answer: 'Absolutely! Corporate sponsors can fund general operations or sponsor specific student initiatives like the Maker3 sensor payload, robotics equipment, custom PCB manufacturing, or school chapters.',
    category: 'sponsor',
  },
  {
    question: 'How can adult professionals mentor or volunteer?',
    answer: 'We are always looking for adult engineering mentors (software, electrical, mechanical) to sit on our advisory board, review CAD/schematics, or give safety guest lectures. All mentors go through background checks.',
    category: 'volunteer',
  },
];

export const NEWS: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Fremont Student Makers Wins Community Tech Grant',
    excerpt: 'Our student IoT sensing cohort has been awarded a $5,000 local technology grant to procure educational solar cells and microcontrollers.',
    date: 'July 2, 2026',
    category: 'Grant',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'n2',
    title: 'Take 3 Robotics Triumphs at Local League Match',
    excerpt: 'Four robotics members successfully designed and programmed an autonomous rover to navigate complex indoor obstacle courses.',
    date: 'June 18, 2026',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'n3',
    title: 'FSM Mentors Spark Curiosity at Centerville School',
    excerpt: 'We hosted a hands-on Arduino Day for 120 middle school students, teaching basic sensor inputs, logic loops, and programming.',
    date: 'May 24, 2026',
    category: 'Outreach',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400',
  },
];

export const EVENTS: UpcomingEvent[] = [
  {
    id: 'e1',
    title: 'Welcome Meeting & Lab Tour',
    date: 'Sept 12, 2026',
    time: '10:00 AM - 12:00 PM',
    location: 'Fremont Municipal Community Hub',
    description: 'Our annual open-house. Come tour the workshop, inspect student-built rovers and CubeSat boards, and meet fellow student innovators.',
  },
  {
    id: 'e2',
    title: 'Onshape CAD Bootcamp',
    date: 'Sept 19, 2026',
    time: '1:00 PM - 4:00 PM',
    location: 'Online (Zoom)',
    description: 'A fast-paced interactive training session. Learn parameters, constraints, and standard modeling for custom enclosures.',
  },
  {
    id: 'e3',
    title: 'Annual Summer Maker Exhibition',
    date: 'Oct 17, 2026',
    time: '10:00 AM - 3:00 PM',
    location: 'Fremont Municipal Community Hub',
    description: 'We host a public showcase at the Community Hub for environmental sensors, collaborative IoT nodes, and custom robot trials.',
  },
];

export const SPONSORS = [
  { name: 'Bay Area Technology Corp', logoText: 'BATC' },
  { name: 'Vanguard Electronics', logoText: 'VANGUARD' },
  { name: 'Apex Metal CNC', logoText: 'APEX CNC' },
  { name: 'Fremont Community Foundation', logoText: 'FCF' },
  { name: 'Silicon Valley PCB', logoText: 'SV-PCB' },
  { name: 'LaunchPad Systems', logoText: 'LP SYSTEMS' },
];

export const TESTIMONIALS = [
  {
    quote: "Fremont Student Makers completely changed my high school path. I went from having no coding skills to programming the real telemetry systems on our student-built environmental rovers. It was an incredible booster for my college applications.",
    author: "Elena Rodriguez",
    school: "Fremont High School Class of 25 / UC Berkeley Computer Science",
  },
  {
    quote: "As a parent, I was amazed by the level of technical safety, mentorship, and pure excitement Siddharth and the leadership team bring to Fremont Student Makers. This is hands-down the best extracurricular STEM program in the district.",
    author: "David Vance",
    school: "Parent of Marcus (Irvington HS)",
  },
  {
    quote: "By mentoring the Maker3 student satellite payload team, I get to see high school kids grapple with true systems engineering. They design, program, and build with a level of maturity that is truly inspiring.",
    author: "Dr. Arthur Lindell",
    school: "Advisory Board Member / NASA Ames Research Engineer",
  },
];
