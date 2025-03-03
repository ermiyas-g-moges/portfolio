import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black-50 px-6">
      <div className="container mx-auto">
        <h2 className="section-title mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
              alt="Developer working" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm an aspiring web developer with 2 years of experience creating modern and responsive websites. 
              I work on front-end development with React, but I'm also comfortable working with back-end technologies.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in web development started when I built my first website for a class project. 
              Since then, I've worked with some clients and projects.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">ermiyas345@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-gray-600">2+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability</h4>
                <p className="text-gray-600">Freelance / Full-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;