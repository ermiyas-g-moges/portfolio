import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import React, { useEffect } from 'react';

import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div 
            ref={ref} 
            className={`lg:w-1/2 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <p className="text-accent-blue mb-4 font-mono">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block text-white mb-2">Ermiyas Girma</span>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  1000,
                  'UI/UX Designer',
                  1000,
                  'React Specialist',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent-blue"
              />
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              I build exceptional digital experiences with modern technologies.
              Specializing in creating responsive, performant web applications
              that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn-secondary cursor-pointer"
              >
                View My Work
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn-primary cursor-pointer"
              >
                Contact Me
              </ScrollLink>
            </div>
            
            <div className="flex space-x-4 mt-12">
              <a 
                href="https://github.com/ermiyas-g-moges" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub Profile"
              >
                <Github size={30} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={30} />
              </a>
            </div>
          </div>
          
          <div 
            className={`lg:w-1/2 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-teal/20 to-accent-pink/20 rounded-lg blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -inset-1 bg-dark-card rounded-lg transform rotate-3 border border-accent-teal/30"></div>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                alt="Developer Portrait" 
                className="relative rounded-lg shadow-2xl object-cover h-96 w-full object-center border border-dark-border"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="animate-bounce p-2 cursor-pointer"
          >
            <ArrowDown size={24} className="text-accent-teal" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;