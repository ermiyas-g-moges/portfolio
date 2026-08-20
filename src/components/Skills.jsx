import { Code, Database, Map, Server, Smartphone, Wrench } from 'lucide-react';

import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code size={22} className="text-accent-teal" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    delay: 0.1,
  },
  {
    title: 'Backend',
    icon: <Server size={22} className="text-accent-teal" />,
    skills: ['Node.js', 'Express', 'PHP', 'REST APIs', 'Authentication'],
    featured: true,
    delay: 0.2,
  },
  {
    title: 'Databases',
    icon: <Database size={22} className="text-accent-teal" />,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
    delay: 0.3,
  },
  {
    title: 'Mobile',
    icon: <Smartphone size={22} className="text-accent-blue" />,
    skills: ['React Native', 'Expo'],
    delay: 0.4,
  },
  {
    title: 'Geospatial',
    icon: <Map size={22} className="text-accent-blue" />,
    skills: ['PostGIS', 'QGIS', 'GeoJSON', 'Spatial Queries'],
    delay: 0.5,
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={22} className="text-accent-blue" />,
    skills: ['Git', 'GitHub', 'Vite', 'npm', 'Postman', 'Vercel', 'Netlify', 'PM2', 'Supabase'],
    delay: 0.6,
  },
];

const familiarWith = ['Docker', 'Firebase', 'Flutter', 'Python', 'Figma'];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-6 bg-dark-bg">
      <div className="container mx-auto">
        <div ref={ref} className={inView ? 'animate-fadeIn' : 'opacity-0'}>

          {/* Terminal heading */}
          <div className="mb-2">
            <span className="font-mono text-xs text-gray-500">$ stack --list</span>
          </div>
          <h2 className="section-title mb-2">Technologies I Work With</h2>
          <p className="text-gray-400 text-sm mb-10 max-w-xl">
            A practical toolkit built through projects, experimentation, and solving real problems.
          </p>

          {/* Skill category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`rounded-lg p-5 transition-colors duration-300 ${inView ? 'animate-fadeIn' : 'opacity-0'} ${
                  category.featured
                    ? 'bg-dark-card border border-accent-teal/30 shadow-[0_0_18px_-4px_rgba(0,255,187,0.12)] hover:border-accent-teal/60'
                    : 'bg-dark-card/60 border border-dark-border/70 hover:border-accent-teal/30'
                }`}
                style={{ animationDelay: `${category.delay}s` }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-md ${category.featured ? 'bg-accent-teal/10' : 'bg-dark-bg'}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-white">{category.title}</h3>
                  {category.featured && (
                    <span className="ml-auto font-mono text-xs text-accent-teal/60">core</span>
                  )}
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-dark-bg border border-dark-border text-sm text-gray-300 hover:border-accent-teal/50 hover:text-accent-teal transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Familiar with */}
          <div className={`mt-10 ${inView ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            <p className="font-mono text-xs text-gray-500 mb-3 uppercase tracking-widest">// familiar with</p>
            <div className="flex flex-wrap gap-2">
              {familiarWith.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md bg-dark-card/30 border border-dark-border/40 text-sm text-gray-500 hover:text-gray-300 hover:border-dark-border transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
