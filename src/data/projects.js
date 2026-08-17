export const projects = [
  {
    id: 1,
    title: 'SSGI Geospatial Data Platform',
    status: 'Built',
    description:
      'A data commerce platform for the Space Science and Geospatial Institute, enabling customers to request and purchase geodetic control points (zero, first, and second order) online — eliminating the need for in-person office visits.',
    highlights: [
      'REST API design',
      'Geospatial data with PostGIS',
      'Role-based access control',
      'Institutional workflow',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'PostGIS', 'Tailwind'],
    liveLink: 'https://gns.ssgi.gov.et/',
    githubLink: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    title: 'DMU Campus Map',
    status: 'In Progress',
    description:
      'A full campus navigation system for Debre Markos University, allowing students, staff, and guests to locate buildings, offices, and services while giving administrators control over location data.',
    highlights: [
      'Admin CMS for location management',
      'Interactive campus map',
      'Mobile-first with React Native',
      'Spatial queries with PostGIS',
    ],
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'PostGIS', 'Supabase', 'React'],
    liveLink: null,
    githubLink: null,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    title: 'Olla Ethiopia',
    status: 'Collab',
    description:
      'A location-based discovery app for Ethiopia — think Yelp for local businesses and services. Hired as a backend engineer and web admin developer. The app is live on the Play Store.',
    highlights: [
      'Location-based querying',
      'Backend API development',
      'Web admin panel',
      'Production-deployed on Play Store',
    ],
    tags: ['Node.js', 'MongoDB', 'React'],
    liveLink: null,
    githubLink: null,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 4,
    title: 'House Rental System',
    status: 'Built',
    description:
      'A completed full-stack project that digitises the house rental process — tenants can search for properties and contact landlords without the manual back-and-forth. The project is not currently publicly deployed.',
    highlights: [
      'Property listing & search',
      'Tenant and landlord flows',
      'Server-side rendering',
      'Relational data model',
    ],
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    liveLink: null,
    githubLink: null,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1470&q=80',
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
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80',
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
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1470&q=80',
  },
];

export const STATUS_STYLES = {
  'Built':       'text-green-400 border-green-400/40 bg-green-400/5',
  'In Progress': 'text-yellow-400 border-yellow-400/40 bg-yellow-400/5',
  'Concept':     'text-accent-blue border-accent-blue/40 bg-accent-blue/5',
  'Collab':      'text-accent-pink border-accent-pink/40 bg-accent-pink/5',
};
