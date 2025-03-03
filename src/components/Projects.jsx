import { Code, ExternalLink, Github } from 'lucide-react';

import React from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, and payment processing.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: null,
      githubLink: null,
      delay: 0.1,
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description: 'An AI-powered application that generates content for blogs, social media, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      tags: ['React', 'OpenAI API', 'TailwindCSS', 'Firebase'],
      liveLink: null,
      githubLink: null,
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, user authentication, and real-time updates.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      tags: ['React', 'Firebase', 'TailwindCSS'],
      liveLink: null,
      githubLink: 'https://github.com/ermiyas-g-moges/todo.git',
      delay: 0.3,
    },
    {
      id: 4,
      title: 'Freelancing website for Students',
      description: 'A website where stdents can go and work using their skills.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['React', 'Express', 'MongoDB'],
      liveLink: null,
      githubLink: null,
      delay: 0.4,
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'A beautiful weather application with 7-day forecast, location search, and animated weather conditions.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'OpenWeather API', 'Framer Motion', 'Geolocation'],
      liveLink: null,
      githubLink: null,
      delay: 0.5,
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing and analyzing social media accounts across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
      tags: ['React', 'Node.js', 'Express', 'Social APIs'],
      liveLink: null,
      githubLink: null,
      delay: 0.6,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-dark-surface">
      <div className="container mx-auto">
        <div ref={ref} className={inView ? 'animate-fadeIn' : 'opacity-0'}>
          <h2 className="section-title mb-12">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`card ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: `${project.delay}s` }}
              >
                <div className="relative group h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-accent-teal text-dark-bg rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-accent-blue text-dark-bg rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        style={{ transitionDelay: '0.05s' }}
                        aria-label="View Source Code"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent-teal transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-dark-bg text-accent-teal text-xs rounded-full border border-accent-teal/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-accent-teal hover:text-accent-teal/80 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-accent-blue hover:text-accent-blue/80 transition-colors duration-300"
                    >
                      <Github size={16} className="mr-1" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/ermiyas-g-moges" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-accent-blue text-accent-blue font-medium rounded-md 
                        transition-all duration-300 hover:bg-accent-blue/10 hover:shadow-lg 
                        hover:shadow-accent-blue/20 transform hover:-translate-y-1"
            >
              <Github size={20} className="mr-2" /> View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;