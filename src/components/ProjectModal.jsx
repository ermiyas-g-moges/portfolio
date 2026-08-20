import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { STATUS_STYLES } from '../data/projects';

const ProjectModal = ({ project, onClose }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = project?.images ?? [];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Reset image index when project changes
  useEffect(() => { setImgIndex(0); }, [project?.id]);

  if (!project) return null;

  const prevImg = () => setImgIndex((i) => (i - 1 + images.length) % images.length);
  const nextImg = () => setImgIndex((i) => (i + 1) % images.length);

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
        {/* Image slider */}
        <div className="relative overflow-hidden rounded-t-xl bg-dark-bg">
          {/* Current image */}
          <img
            key={imgIndex}
            src={images[imgIndex]}
            alt={`${project.title} screenshot ${imgIndex + 1}`}
            className="w-full max-h-[60vh] object-contain"
          />

          {/* Prev / Next arrows — only when multiple images */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-dark-bg/80 border border-dark-border text-gray-300 hover:text-white transition-colors duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                aria-label="Next image"
                className="absolute right-10 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-dark-bg/80 border border-dark-border text-gray-300 hover:text-white transition-colors duration-200"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                    aria-label={`Go to image ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                      i === imgIndex ? 'bg-accent-teal' : 'bg-gray-500 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

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
