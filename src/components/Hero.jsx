import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Link as ScrollLink } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

// Custom typing hook
function useTypingEffect() {
  const [displayed, setDisplayed] = useState('');
  const jokeUsed = useRef(false);

  const titles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Backend Specialist',
    'Problem Solver',
  ];

  function buildSequence(includeJoke) {
    const steps = [];

    titles.forEach((title, i) => {
      steps.push({ type: 'type',   text: title });
      if (includeJoke && i === titles.length - 1) {
        steps.push({ type: 'pause',  ms: 800 });
        steps.push({ type: 'delete', text: title });
        steps.push({ type: 'type',   text: 'A Weeb' });
        steps.push({ type: 'pause',  ms: 120 });
        steps.push({ type: 'delete', text: 'A Weeb' });
        steps.push({ type: 'type',   text: 'Oops, wrong skill 😅' });
        steps.push({ type: 'pause',  ms: 1200 });
        steps.push({ type: 'delete', text: 'Oops, wrong skill 😅' });
      } else {
        steps.push({ type: 'pause',  ms: 1200 });
        steps.push({ type: 'delete', text: title });
      }
    });

    return steps;
  }

  useEffect(() => {
    let cancelled = false;
    const CHAR_DELAY = 55;
    const DEL_DELAY  = 30;

    async function sleep(ms) {
      return new Promise((res) => setTimeout(res, ms));
    }

    async function runSequence(includeJoke) {
      const steps = buildSequence(includeJoke);

      for (const step of steps) {
        if (cancelled) return;

        if (step.type === 'pause') {
          await sleep(step.ms);

        } else if (step.type === 'type') {
          for (let i = 1; i <= step.text.length; i++) {
            if (cancelled) return;
            setDisplayed(step.text.slice(0, i));
            await sleep(CHAR_DELAY);
          }

        } else if (step.type === 'delete') {
          for (let i = step.text.length - 1; i >= 0; i--) {
            if (cancelled) return;
            setDisplayed(step.text.slice(0, i));
            await sleep(DEL_DELAY);
          }
        }
      }
    }

    async function loop() {
      await runSequence(!jokeUsed.current);
      jokeUsed.current = true;

      while (!cancelled) {
        await runSequence(false);
      }
    }

    loop();
    return () => { cancelled = true; };
  }, []);

  return displayed;
}

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const typedTitle = useTypingEffect();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">

      {/* Subtle technical background texture */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {[
          { text: '#include',   top: '8%',  left: '3%',  size: 'text-sm'  },
          { text: '<iostream>', top: '14%', left: '12%', size: 'text-xs'  },
          { text: 'const {}',  top: '22%', left: '75%', size: 'text-sm'  },
          { text: 'npm run',   top: '45%', left: '5%',  size: 'text-xs'  },
          { text: '</>',       top: '55%', left: '92%', size: 'text-base' },
          { text: 'fn() =>',   top: '62%', left: '2%',  size: 'text-xs'  },
          { text: 'git push',  top: '78%', left: '15%', size: 'text-xs'  },
          { text: '{ }',       top: '85%', left: '90%', size: 'text-sm'  },
          { text: '>>>',       top: '92%', left: '40%', size: 'text-xs'  },
          { text: 'import',    top: '18%', left: '55%', size: 'text-xs'  },
          { text: 'while()',   top: '50%', left: '45%', size: 'text-xs'  },
        ].map((item, i) => (
          <span
            key={i}
            className={`absolute font-mono ${item.size} text-accent-teal/[0.08] whitespace-nowrap`}
            style={{ top: item.top, left: item.left }}
          >
            {item.text}
          </span>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* ── Left: identity ── */}
          <div
            ref={ref}
            className={`lg:w-1/2 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-accent-teal text-sm">$</span>
              <span className="font-mono text-sm text-gray-400">whoami</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className="block text-white mb-2">Ermiyas Girma</span>
              <span className="text-accent-teal min-h-[1.2em] block">
                {typedTitle}
                <span
                  className="inline-block w-0.5 h-[0.9em] bg-accent-teal ml-1 align-middle"
                  style={{ animation: 'cursorBlink 1s step-start infinite' }}
                />
              </span>
            </h1>

            <div className="h-px w-24 bg-gradient-to-r from-accent-teal to-accent-blue mt-4 mb-6 rounded-full" />

            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              I design and build reliable software systems that turn real-world problems into practical solutions.
              I specialize in backend development, while working comfortably across the full stack.
            </p>

            <div className="flex flex-wrap gap-4">
              <ScrollLink to="projects" spy smooth offset={-100} duration={500} className="btn-primary cursor-pointer">
                Explore My Work
              </ScrollLink>
              <ScrollLink to="contact" spy smooth offset={-100} duration={500} className="btn-secondary cursor-pointer">
                Let's Talk
              </ScrollLink>
            </div>

            <div className="flex space-x-4 mt-10">
              <a href="https://github.com/ermiyas-g-moges" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/ermiyas-girma" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* ── Right: photo + floating code card ── */}
          <div
            className={`lg:w-1/2 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative flex justify-center items-center py-10">

              {/* Glow backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-teal/10 to-accent-blue/10 rounded-2xl blur-2xl opacity-50" />

              {/* Photo frame with asymmetric corner accents */}
              <div className="relative z-10">

                {/* Top-left bracket corner */}
                <span className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-accent-teal rounded-tl-sm z-20" />
                {/* Bottom-right bracket corner */}
                <span className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-accent-blue rounded-br-sm z-20" />

                <div className="w-72 md:w-80 h-80 md:h-[28rem] rounded-xl overflow-hidden border border-accent-teal/20 shadow-2xl">
                  <img
                    src="https://placehold.co/320x448/0d1117/64ffda?text=Ermiyas"
                    alt="Ermiyas Girma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating code card — bottom left */}
              <div className="absolute -left-2 md:-left-8 bottom-4 z-20 bg-dark-card border border-dark-border rounded-lg px-4 py-3 shadow-xl font-mono text-xs leading-relaxed backdrop-blur-sm">
                <span className="text-accent-blue">const</span>{' '}
                <span className="text-white">developer</span>{' '}
                <span className="text-gray-400">=</span>{' '}
                <span className="text-accent-teal">&#123;</span>
                <div className="pl-3 mt-0.5">
                  <div>
                    <span className='text-accent-pink'> name </span>
                    <span className="text-gray-400">: </span>
                    <span className="text-yellow-300">"Ermiyas"</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-accent-pink">role</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-yellow-300">"Full-Stack Developer"</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-accent-pink">coffee</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-green-400">false</span>
                  </div>
                <div>
                    <span className="text-accent-pink">uptime</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-green-400">"still running"</span>
                  </div>  
                </div>
                <span className="text-accent-teal">&#125;</span>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center mt-12 gap-1">
          <span className="text-xs font-mono text-gray-600 tracking-widest uppercase">scroll</span>
          <ScrollLink to="about" spy smooth offset={-80} duration={500} className="animate-bounce p-2 cursor-pointer" aria-label="Scroll to About">
            <ArrowDown size={20} className="text-accent-teal" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
