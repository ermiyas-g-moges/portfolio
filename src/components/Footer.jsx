import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="border-t border-dark-border">
        <div className="container mx-auto px-6 py-6 flex flex-col items-center gap-4">

          {/* Socials */}
          <div className="flex gap-3">
            <a
              href="https://github.com/ermiyas-g-moges"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md border border-dark-border text-gray-400 hover:text-accent-teal hover:border-accent-teal/40 transition-colors duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/ermiyas-girma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md border border-dark-border text-gray-400 hover:text-accent-teal hover:border-accent-teal/40 transition-colors duration-200"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Copyright as if😂*/}
          <p className="text-gray-500 text-xs text-center">
            © {currentYear} Ermiyas Girma. Built with React &amp; Tailwind CSS.
          </p>

          <p className="font-mono text-xs text-gray-600">
            // thanks for making it this far
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
