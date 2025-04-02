import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import React, { useState } from 'react';

import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-accent-teal" />,
      title: 'Location',
      content: 'Addis Ababa, Ethiopia',
      delay: 0.1,
    },
    {
      icon: <Mail size={20} className="text-accent-teal" />,
      title: 'Email',
      content: 'ermiyas345@gmail.com',
      delay: 0.2,
    },
    {
      icon: <Phone size={20} className="text-accent-teal" />,
      title: 'Phone',
      content: '+251-93175230',
      delay: 0.3,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/ermiyas-g-moges',
      label: 'GitHub',
      delay: 0.1,
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      delay: 0.2,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-dark-surface">
      <div className="container mx-auto">
        <div ref={ref} className={inView ? 'animate-fadeIn' : 'opacity-0'}>
          <h2 className="section-title mb-12">Contact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out to me with any questions or opportunities. I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start ${inView ? 'animate-slideInLeft' : 'opacity-0'}`}
                    style={{ animationDelay: `${item.delay}s` }}
                  >
                    <div className="bg-dark-card p-3 rounded-lg mr-4 border border-dark-border">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-300">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3 bg-dark-card rounded-lg border border-dark-border hover:border-accent-teal 
                                transition-all duration-300 hover:text-accent-teal transform hover:scale-110 
                                ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
                      style={{ animationDelay: `${link.delay + 0.3}s` }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <form 
                onSubmit={handleSubmit} 
                className={`bg-dark-card p-8 rounded-lg border border-dark-border ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s' }}
              >
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-accent-teal/10 text-accent-teal rounded-md border border-accent-teal/30">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent text-white"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent text-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent-teal text-dark-bg font-medium rounded-md 
                           transition -all duration-300 hover:bg-accent-teal/90 hover:shadow-lg 
                           hover:shadow-accent-teal/20 transform hover:-translate-y-1 flex items-center justify-center
                           disabled:bg-accent-teal/50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Sending</span>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
