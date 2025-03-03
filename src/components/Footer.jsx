import { Code, Github, Heart, Linkedin, Twitter } from 'lucide-react';

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2">
              <Code size={24} className="text-accent-teal" />
              <span className="text-xl font-bold tracking-tight">
                ermiyas<span className="text-accent-teal">-g-</span>moges
              </span>
            </div>
            <p className="text-gray-400 mt-2 max-w-md">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="text-gray-400 hover:text-accent-teal transition-colors duration-300 cursor-pointer"
                    >
                      {item}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/ermiyas-g-moges" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-teal transition-colors duration-300 flex items-center"
                  >
                    <Github size={16} className="mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-teal transition-colors duration-300 flex items-center"
                  >
                    <Linkedin size={16} className="mr-2" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Addis Ababa, Ethiopia</li>
                <li>
                  <a 
                    href="mailto:ermiyas345@gmail.com" 
                    className="text-gray-400 hover:text-accent-teal transition-colors duration-300"
                  >
                    ermiyas345@gmail.com
                  </a>
                </li>
                <li className="text-gray-400">+251-931752380</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ermiyas Girma. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/ermiyas-g-moges" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-teal transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={30} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-teal transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={30} />
            </a>

          </div>
        </div>
  
      </div>
    </footer>
  );
};

export default Footer;