import { Code, Database, Palette, Server, Terminal, Wrench } from 'lucide-react';

import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={24} className="text-accent-teal" />,
      skills: [
        { name: 'HTML5', level: 85 },
        { name: 'CSS3/SASS', level: 75 },
        { name: 'JavaScript (ES6+)', level: 70 },
        { name: 'React', level: 70 },
        { name: 'TailwindCSS', level: 75 },
      ],
      delay: 0.1,
    },
    {
      title: 'Backend',
      icon: <Server size={24} className="text-accent-teal" />,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 70 },
        { name: 'RESTful APIs', level: 60 },
        { name: 'Authentication', level: 75 },
        { name: 'Serverless', level: 70 },
      ],
      delay: 0.2,
    },
    {
      title: 'Database',
      icon: <Database size={24} className="text-accent-teal" />,
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 70 },
        { name: 'SQL', level: 75 },
      ],
      delay: 0.3,
    },
    {
      title: 'Design',
      icon: <Palette size={24} className="text-accent-blue" />,
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'UI/UX', level: 70 },
        { name: 'Responsive Design', level: 75 },
        { name: 'Wireframing', level: 80 },
        { name: 'Color Theory', level: 80 },
        { name: 'Typography', level: 80 },
      ],
      delay: 0.4,
    },
    {
      title: 'DevOps',
      icon: <Terminal size={24} className="text-accent-blue" />,
      skills: [
        { name: 'Git/GitHub', level: 75 },
        { name: 'Docker', level: 65 },
        { name: 'Netlify/Vercel', level: 80 },
      ],
      delay: 0.5,
    },
    {
      title: 'Tools',
      icon: <Wrench size={24} className="text-accent-blue" />,
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'Vite', level: 75 },
        { name: 'npm', level: 70 },
        { name: 'Chrome DevTools', level: 70 },
      ],
      delay: 0.6,
    },
  ];

  const SkillBar = ({ name, level, delay }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm text-accent-teal">{level}%</span>
      </div>
      <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
        <div 
          className={`h-2 rounded-full ${inView ? 'animate-slideInRight' : 'w-0'}`}
          style={{ 
            width: `${level}%`, 
            animationDelay: `${delay + 0.2}s`,
            background: `linear-gradient(90deg, var(--tw-gradient-stops))`,
            '--tw-gradient-from': '#00ffbb',
            '--tw-gradient-to': '#4d9fff',
            '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div ref={ref} className={inView ? 'animate-fadeIn' : 'opacity-0'}>
          <h2 className="section-title mb-12">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`bg-dark-card p-6 rounded-lg border border-dark-border ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: `${category.delay}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-dark-bg rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div>
                  {category.skills.map((skill, idx) => (
                    <SkillBar 
                      key={idx} 
                      name={skill.name} 
                      level={skill.level} 
                      delay={category.delay + (idx * 0.05)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;