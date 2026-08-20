import { Code, Menu, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = ({ scrolled, mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) => {
  const navLinks = [
    { name: 'Home',     to: 'hero' },
    { name: 'About',    to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills',   to: 'skills' },
    { name: 'Contact',  to: 'contact' },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-bg/95 backdrop-blur-sm shadow-lg shadow-dark-bg/50' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <ScrollLink
              to="hero"
              spy smooth
              offset={-100}
              duration={500}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Code size={28} className="text-accent-teal" />
              <span className="text-xl font-bold tracking-tight">
                ermiyas<span className="text-accent-teal">-g-</span>moges
              </span>
            </ScrollLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy smooth
                  offset={-100}
                  duration={500}
                  activeClass="text-accent-teal"
                  className="nav-link cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <a
                href="/Ermiyas Girma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-4 py-2 border border-accent-teal text-accent-teal rounded-md transition-all duration-300 hover:bg-accent-teal hover:text-dark-bg"
              >
                Resume
              </a>
            </nav>

            {/* Hamburger button */}
            <button
              className="md:hidden text-white focus:outline-none z-[60]"
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu rendered via portal — fully outside header DOM */}
      {createPortal(
        <div
          className={`fixed inset-0 z-[100] bg-dark-bg transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-6 text-white focus:outline-none"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy smooth
                offset={-100}
                duration={500}
                className="text-2xl font-medium hover:text-accent-teal transition-colors duration-300 cursor-pointer"
                onClick={closeMobileMenu}
              >
                {link.name}
              </ScrollLink>
            ))}
            <a
              href="/Ermiyas Girma.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 border border-accent-teal text-accent-teal rounded-md transition-all duration-300 hover:bg-accent-teal hover:text-dark-bg"
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Header;
