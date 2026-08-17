import { Link as ScrollLink } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const timeline = [
  {
    label: '#include <iostream>',
    sub: 'First line of code — C++ as a university freshman',
    meta: 'THE BEGINNING',
    color: 'accent-teal',
  },
  {
    label: 'Building & Breaking',
    lang: 'C++  →  PHP  →  JS',
    sub: 'Breaking things, rebuilding them, learning fast',
    meta: 'THE LEARNING CURVE',
    color: 'accent-blue',
  },
  {
    
    label: 'Backend Systems',
    sub: 'APIs, databases, scalable architecture',
    meta: 'THE SPECIALIZATION',
    color: 'accent-teal',
  },
  {
    
    label: 'Full Stack  +  Problem Solver',
    sub: 'End-to-end products that solve real problems',
    meta: 'THE BUILDER',
    color: 'accent-blue',
  },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="about" className="py-20 bg-dark-surface px-6">
      <div className="container mx-auto">
        <h2 className="section-title mb-12">Who I am</h2>

        <div ref={ref} className={`flex flex-col lg:flex-row gap-16 items-start ${inView ? 'animate-fadeIn' : 'opacity-0'}`}>

          {/* ── Left: visual journey timeline ── */}
          <div className="lg:w-1/2">
            <p className="font-mono text-xs text-gray-500 mb-6 tracking-widest uppercase">
              // my journey
            </p>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-teal/60 via-accent-blue/40 to-accent-teal/20" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`group flex gap-5 items-start ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Dot */}
                    <div
                      className={`mt-1 shrink-0 rounded-full border-2 ${
                        item.color === 'accent-teal'
                          ? 'border-accent-teal bg-dark-bg'
                          : 'border-accent-blue bg-dark-bg'
                      } z-10 flex items-center justify-center`}
                      style={{
                        width: hoveredIndex === i ? '28px' : '22px',
                        height: hoveredIndex === i ? '28px' : '22px',
                        transition: 'width 0.25s ease, height 0.25s ease',
                      }}
                    >
                      <div
                        className={`rounded-full ${
                          item.color === 'accent-teal' ? 'bg-accent-teal' : 'bg-accent-blue'
                        }`}
                        style={{
                          width: hoveredIndex === i ? '12px' : '8px',
                          height: hoveredIndex === i ? '12px' : '8px',
                          transition: 'width 0.25s ease, height 0.25s ease',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="bg-dark-card/50 border border-dark-border/70 rounded-lg px-4 py-3 flex-1 hover:border-accent-teal/30 transition-colors duration-300">
                      <span className={`font-mono text-xs ${
                        item.color === 'accent-teal' ? 'text-accent-teal/60' : 'text-accent-blue/60'
                      } block mb-1`}>
                        {item.meta}
                      </span>
                      <p className={`font-mono text-sm font-semibold ${
                        item.color === 'accent-teal' ? 'text-accent-teal' : 'text-accent-blue'
                      } mb-1`}>
                        {item.label}
                      </p>
                      {item.lang && (
                        <p className={`text-xs font-mono text-gray-500 ${
                          item.color === 'accent-teal' ? 'text-accent-teal' : 'text-accent-blue'
                        } mb-1`}>{item.lang}</p>
                      )}
                      <p className="text-gray-400 text-xs leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}

                {/* Terminal "still running" indicator */}
                <div
                  className={`flex gap-5 items-start ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="mt-1 w-[22px] h-[22px] shrink-0 rounded-full border-2 border-accent-teal/30 bg-dark-bg z-10 flex items-center justify-center">
                    <div
                      className="w-2 h-2 rounded-full bg-accent-teal"
                      style={{ animation: 'cursorBlink 1s step-start infinite' }}
                    />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-gray-600 pt-1">
                    <span>process still running</span>
                    <span
                      className="inline-block w-1.5 h-3.5 bg-accent-teal/40"
                      style={{ animation: 'cursorBlink 1s step-start infinite' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: story text ── */}
          <div className="lg:w-1/2 lg:pt-10">

            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a Software Engineer and Full-Stack Developer with 3+ years of experience building software projects
              and over a year of real-world experience developing systems that solve practical problems.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in backend development, where I enjoy designing reliable and scalable systems.
              I'm equally comfortable on the frontend, allowing me to understand and build products end to end.
            </p>

            <p className="text-gray-300 mb-4 leading-relaxed">
              From the day I wrote my first
            </p>

            {/* #include visual moment */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-bg border border-accent-teal/40 rounded-md mb-4">
              <span className="font-mono text-lg text-accent-teal">
                #include <span className="text-accent-blue">&lt;iostream&gt;</span>
              </span>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              to the systems I build today, the goal has remained the same:
            </p>

            <p className="text-l md:text-l font-semibold text-white leading-relaxed mb-8">
              Solve problems.<br />
              Build things that matter.<br />
              Keep getting better.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <div>
                <h4 className="text-xl text-accent-teal font-semibold mb-1">Availability</h4>
                <p className="text-gray-400 text-sm">Open to freelance &amp; remote work</p>
              </div>
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
