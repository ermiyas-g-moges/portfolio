import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect } from 'react';

import { STATUS_STYLES } from '../data/projects';

const ProjectModal = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative bg-dark-card border border-dark-border rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden rounded-t-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 p-1.5 rounded-full bg-dark-bg/80 border border-dark-border text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-xl font-semibold text-white leading-snug">{project.title}</h2>
            <span className={`font-mono text-xs px-2 py-0.5 rounded border shrink-0 ${STATUS_STYLES[project.status]}`}>
              {project.status}
            </span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Engineering highlights */}
          <div className="mb-5">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">// what it involved</p>
            <ul className="space-y-1.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-accent-teal font-mono mt-0.5">›</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="mb-6">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">// stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-dark-bg text-accent-teal text-xs rounded-full border border-accent-teal/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.liveLink || project.githubLink) && (
            <div className="flex gap-4 pt-4 border-t border-dark-border">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-accent-teal hover:text-accent-teal/80 transition-colors duration-200"
                >
                  <ExternalLink size={15} /> Live Site
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-accent-blue hover:text-accent-blue/80 transition-colors duration-200"
                >
                  <Github size={15} /> Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
