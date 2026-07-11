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
  { label: 'Active Student Members', value: 50, suffix: '+' },
  { label: 'Projects Built Together', value: 15, suffix: '+' },
  { label: 'Younger Students Reached', value: 1000, suffix: '+' },
  { label: 'Local Schools Supported', value: 5, suffix: '' },
];

export const MILESTONES: Milestone[] = [
  {
    id: 'm1',
    year: '2025',
    title: 'Fremont Student Makers Founded',
    description:
      'Fremont Student Makers is created to empower students through hands-on engineering, maker education, and collaborative STEM projects.',
    category: 'club',
  },
  {
    id: 'm2',
    year: '2025',
    title: 'Program Teams Established',
    description:
      'FSM develops dedicated student-led programs including Untitled Rocketry, Irvington Maker Club, Maker³ CubeSat, and Take 3 Robotics.',
    category: 'competition',
  },
  {
    id: 'm3',
    year: '2025',
    title: 'Maker³ CubeSat Initiative Begins',
    description:
      'Students begin designing a CubeSat mission focused on giving students practical experience with space systems engineering.',
    category: 'competition',
  },
  {
    id: 'm4',
    year: '2025',
    title: 'Student Portfolio Ecosystem Launches',
    description:
      'FSM expands beyond teams by hosting individual student maker projects and portfolios under the shared organization.',
    category: 'community',
  },
  {
    id: 'm5',
    year: '2026',
    title: 'Expanded STEM Community Programs',
    description:
      'Student teams continue developing aerospace, robotics, CAD, and fabrication programs throughout Fremont.',
    category: 'future',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'rocketry',
    title: 'Untitled Rocketry',
    subtitle: 'Student Aerospace Engineering Team',
    description:
      'A student-run rocketry team competing in the American Rocketry Challenge while teaching aerospace engineering, CAD, fabrication, and launch operations.',
    longDescription:
      'Untitled Rocketry gives students hands-on experience designing, building, and launching high-powered model rockets. Members work on mechanical design, simulations, 3D printing, recovery systems, electronics, and flight testing.',
    image:
      '${import.meta.env.BASE_URL}/photos/Untitled_Artwork.png',
    category: 'maker',
    tags: [
      'Aerospace',
      'Rocketry',
      'CAD',
      '3D Printing',
      'American Rocketry Challenge',
    ],
    metrics: [
      { label: 'Competition', value: 'American Rocketry Challenge' },
      { label: 'Focus', value: 'Student Aerospace' },
    ],
  },

  {
    id: 'makersat',
    title: 'Maker³',
    subtitle: 'Student Designed CubeSat Mission',
    description:
      'A student-led CubeSat initiative where members design spacecraft systems, avionics, software, and mission architecture.',
    longDescription:
      'Maker³ provides students experience with real spacecraft development workflows including mechanical structures, power systems, embedded software, communications, and mission operations.',
    image:
      '${import.meta.env.BASE_URL}/photos/MakerSat.jpg',
    category: 'maker',
    tags: [
      'CubeSat',
      'Embedded Systems',
      'Avionics',
      'Space Engineering',
    ],
    metrics: [
      { label: 'Mission Type', value: '1U CubeSat' },
      { label: 'Focus', value: 'Student Space Technology' },
    ],
  },

  {
    id: 'robotics',
    title: 'Take 3 Robotics',
    subtitle: 'FTC Robotics Team',
    description:
      'A student robotics team competing through the FIRST Tech Challenge while developing software, mechanical systems, and strategy.',
    longDescription:
      'Take 3 Robotics teaches students engineering through iterative robot design, programming, control systems, and competition preparation.',
    image:
      '${import.meta.env.BASE_URL}/photos/take3.png',
    category: 'community',
    tags: [
      'FTC',
      'Robotics',
      'Programming',
      'Mechanical Design',
    ],
    metrics: [
      { label: 'Competition', value: 'FIRST Tech Challenge' },
      { label: 'Focus', value: 'Robotics Engineering' },
    ],
  },

  {
    id: 'irvington',
    title: 'Irvington Maker Club',
    subtitle: 'School Maker Branch',
    description:
      'A maker club focused on CAD, prototyping, engineering challenges, and competitions including the Henry Ford Invention Convention.',
    longDescription:
      'Irvington Maker Club introduces students to engineering through CAD modeling, fabrication, design challenges, and collaborative projects.',
    image:
      '${import.meta.env.BASE_URL}/photos/ihsmakerclublogo.png',
    category: 'community',
    tags: [
      'CAD',
      'Prototyping',
      'Invention Convention',
      'Fabrication',
    ],
    metrics: [
      { label: 'School', value: 'Irvington High School' },
      { label: 'Focus', value: 'Maker Education' },
    ],
  },
];

export const LEADERSHIP: TeamMember[] = [
  {
    id: 'l1',
    name: 'Srihari Muralidharan',
    role: 'President',
    bio:
      'Leads organization strategy, partnerships, and overall direction for Fremont Student Makers.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },

  {
    id: 'l2',
    name: 'Dylan Kwok',
    role: 'Treasurer',
    bio:
      'Manages organization operations, finances, and administrative coordination.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },

  {
    id: 'l3',
    name: 'Renuka Sivarajan',
    role: 'Secretary',
    bio:
      'Coordinates internal communication and organizational documentation.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
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
    answer: 'We meet every Saturday from 10:00 AM to 3:00 PM at our Student Workshop. Members collaborate here on robotics, microcontrollers, and 3D printing design.',
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
  /*
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
  */
];

export const EVENTS: UpcomingEvent[] = [

  /*
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
  */
];

export const SPONSORS = [
  { name: 'Build a CubeSat', logoText: 'BACS' },
  { name: 'GitHub', logoText: 'GitHub' },
];

/*

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

*/