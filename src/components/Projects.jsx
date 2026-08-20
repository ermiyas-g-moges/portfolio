import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

import ProjectModal from './ProjectModal';
import { STATUS_STYLES, projects } from '../data/projects';
import { useInView } from 'react-intersection-observer';

const total = projects.length;

function getCardStyle(offset) {
  const abs = Math.abs(offset);
  if (abs > 2)  return { transform: `translateX(${offset * 110}%) scale(0.6)`,  opacity: 0,    zIndex: 0,  pointerEvents: 'none' };
  if (offset === 0) return { transform: 'translateX(0%) scale(1)',               opacity: 1,    zIndex: 10, pointerEvents: 'auto' };
  if (abs === 1)    return { transform: `translateX(${offset * 72}%) scale(0.82)`, opacity: 0.45, zIndex: 5,  pointerEvents: 'none' };
  return              { transform: `translateX(${offset * 68}%) scale(0.65)`, opacity: 0.2,  zIndex: 1,  pointerEvents: 'none' };
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [current, setCurrent]       = useState(0);
  const [paused, setPaused]         = useState(false);
  const [selected, setSelected]     = useState(null);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  useEffect(() => {
    if (paused || selected) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [paused, selected]);

  return (
    <>
      <section id="projects" className="py-20 px-6 bg-dark-surface overflow-hidden">
        <div className="container mx-auto">
          <div ref={ref} className={inView ? 'animate-fadeIn' : 'opacity-0'}>

            {/* Terminal heading */}
            <div className="mb-2">
              <span className="font-mono text-xs text-gray-500">$ ls ./work</span>
            </div>
            <h2 className="section-title mb-2">Selected Works</h2>
            <p className="text-gray-400 text-sm mb-5 max-w-xl">
              Software isn't just about writing code. It's about turning problems into systems.
            </p>

            {/* Status legend */}
            <div className="flex flex-wrap gap-2 mb-10">
              {Object.entries(STATUS_STYLES).map(([label, cls]) => (
                <span key={label} className={`font-mono text-xs px-2 py-0.5 rounded border ${cls}`}>
                  {label}
                </span>
              ))}
            </div>

            {/* Carousel */}
            <div
              className="relative flex items-center justify-center"
              style={{ height: '480px' }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Prev */}
              <button onClick={prev} aria-label="Previous project"
                className="absolute left-2 md:left-4 z-20 p-2 rounded-full bg-dark-bg border border-accent-teal/30 text-accent-teal hover:bg-accent-teal/10 transition-colors duration-300">
                <ChevronLeft size={24} />
              </button>

              {projects.map((project, i) => {
                let offset = i - current;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;
                const style = getCardStyle(offset);

                return (
                  <button
                    key={project.id}
                    onClick={() => offset === 0 && setSelected(project)}
                    className="absolute w-full max-w-xl card overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                    style={{
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease',
                      cursor: offset === 0 ? 'pointer' : 'default',
                      ...style,
                    }}
                    aria-label={offset === 0 ? `View details for ${project.title}` : undefined}
                    tabIndex={offset === 0 ? 0 : -1}
                  >
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {/* Status badge over image */}
                      <span className={`absolute bottom-3 right-3 font-mono text-xs px-2 py-0.5 rounded border backdrop-blur-sm ${STATUS_STYLES[project.status]}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Minimal card info */}
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-white mb-2 leading-snug">{project.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-dark-bg text-accent-teal text-xs rounded-full border border-accent-teal/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {offset === 0 && (
                        <p className="font-mono text-xs text-gray-500 mt-3">click to view details →</p>
                      )}
                    </div>
                  </button>
                );
              })}

              {/* Next */}
              <button onClick={next} aria-label="Next project"
                className="absolute right-2 md:right-4 z-20 p-2 rounded-full bg-dark-bg border border-accent-teal/30 text-accent-teal hover:bg-accent-teal/10 transition-colors duration-300">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to project ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${i === current ? 'bg-accent-teal' : 'bg-gray-600 hover:bg-gray-400'}`}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="https://github.com/ermiyas-g-moges" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-accent-blue text-accent-blue font-medium rounded-md transition-all duration-300 hover:bg-accent-blue/10 hover:shadow-lg hover:shadow-accent-blue/20 transform hover:-translate-y-1">
                <Github size={20} className="mr-2" /> View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

export default Projects;
