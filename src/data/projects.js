export const projects = [
  {
    id: 1,
    title: 'SSGI Geospatial Data Platform',
    status: 'Built',
    description:
      'A web-based GIS platform for the management and sale of geodetic points, for the Space Science and Geospatial Institute, enabling customers to request and purchase geodetic control points online — eliminating the need for in-person office visits.',
      
      highlights: [
      'REST API design',
      'Geospatial data with PostGIS',
      'Institutional workflow',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'PostGIS', 'Tailwind'],
    liveLink: 'https://gns.ssgi.gov.et/',
    githubLink: null,
    images: [
      'project_images/ssgi/SSGI1.webp',
      'project_images/ssgi/SSGI2.webp',
      'project_images/ssgi/SSGI3.webp',
      'project_images/ssgi/SSGI4.webp',
    ],
  },
  {
    id: 2,
    title: 'DMU Campus Map',
    status: 'In Progress',
    description:
      'A full campus navigation system for Debre Markos University, with a web-based administration platform for managing buildings, offices, and locations. Allowing students, staff, and guests to locate buildings, offices with ease.',
    highlights: [
      'Admin CMS for location management',
      'Interactive campus map',
      'Mobile-first with React Native',
      'Realtime tracking with Docker',
    ],
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Supabase', 'React'],
    liveLink: null,
    githubLink: null,
    images: [
      'project_images/dmu/Login page.webp',
      'project_images/dmu/Campus admin.webp',
      'project_images/dmu/System admin.webp',
      'project_images/dmu/Sign up page.webp',
      'project_images/dmu/Home.webp',
    ],
  },
  {
    id: 3,
    title: 'Olla Ethiopia',
    status: 'Collab',
    description:
      'A lifestyle and discovery platform that connects users with events, places, and local services. Contributed to the development of backend APIs and web-based administrative interfaces, while collaborating on production features.',
    highlights: [
      'Backend API development',
      'Web admin panel',
    ],
    tags: ['Node.js', 'MongoDB', 'React'],
    liveLink: null,
    githubLink: null,
    images: [

      'project_images/olla/olla logo.png',
      'project_images/olla/nearby.webp',
      'project_images/olla/activities.webp',
      'project_images/olla/explore.webp',
      'project_images/olla/feeds.webp',
    ],
  },
  {
    id: 4,
    title: 'House Rental System',
    status: 'Built',
    description:
      'A completed full-stack project that handles the house rental process — tenants can search for properties and contact landlords without the manual back-and-forth. The project is not currently publicly deployed.',
    highlights: [
      'Property listing & search',
      'Tenant and landlord flows',
      'Server-side rendering',
      'Relational data model',
    ],
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    liveLink: null,
    githubLink: null,
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1470&q=80',
    ],
  },
  {
    id: 5,
    title: 'Student Freelancing Platform',
    status: 'Concept',
    description:
      'A concept for a freelancing marketplace built specifically for students — lower barrier to entry than Upwork or Fiverr, with flows designed around student availability and academic context.',
    highlights: [
      'Student-focused onboarding',
      'Project matching system',
      'Skill-based profiles',
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
    liveLink: null,
    githubLink: null,
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80',
    ],
  },
  {
    id: 6,
    title: 'Chapter Two',
    status: 'Concept',
    description:
      'A marketplace for buying and selling second-hand books. Born out of a real frustration: good used books are hard to find online in Ethiopia. The concept focuses on discovery, condition transparency, and local pickup.',
    highlights: [
      'Book discovery & search',
      'Condition grading system',
      'Seller and buyer flows',
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
    liveLink: null,
    githubLink: null,
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1470&q=80',
    ],
  },
];

export const STATUS_STYLES = {
  'Built':       'text-lime-600 border-lime-600/100 bg-lime-00/5',
  'In Progress': 'text-orange-400 border-orange-400/40 bg-orange-400/5',
  'Concept':     'text-accent-blue border-accent-blue/40 bg-accent-blue/5',
  'Collab':      'text-accent-pink border-accent-pink/40 bg-accent-pink/5',
};
