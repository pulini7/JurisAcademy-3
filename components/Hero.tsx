import React, { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';

const TYPEWRITER_TEXTS = [
  ":: SISTEMA OPERACIONAL LEGAL V3.0 ONLINE ::",
  ":: ANALISE PREDITIVA DE SENTENCAS ATIVADA ::",
  ":: REDE NEURAL JURIDICA CONECTADA ::",
  ":: PROTOCOLO DE SEGURANCA MAXIMA ::"
];

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State for immediate load animation

  // Trigger animations immediately upon mount (faster than IntersectionObserver)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const currentFullText = TYPEWRITER_TEXTS[textIndex];

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
        }
      } else {
        if (charIndex < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }
      }
    };

    const typingSpeed = isDeleting ? 30 : 50;

    if (!isDeleting && charIndex === currentFullText.length) {
      // Pause handled by separate effect
      return;
    }

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const currentFullText = TYPEWRITER_TEXTS[textIndex];
    if (!isDeleting && charIndex === currentFullText.length) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Effects with Animation - Optimized with will-change */}
      <div 
        className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-20 animate-grid-flow"
        style={{ willChange: 'background-position' }}
      ></div>
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Floating Elements (Parallax Simulation) - Optimized with will-change */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Element 1: Section Symbol */}
        <div 
          className="absolute top-[15%] left-[5%] text-slate-800 text-9xl font-serif opacity-10 animate-float" 
          style={{ animationDuration: '8s', willChange: 'transform' }}
        >§</div>
        
        {/* Element 2: Code Brackets */}
        <div 
          className="absolute bottom-[20%] right-[5%] text-cyan-900/30 text-8xl font-mono opacity-20 animate-float" 
          style={{ animationDelay: '2s', animationDuration: '10s', willChange: 'transform' }}
        >{`{ }`}</div>
        
        {/* Element 3: Binary Stream */}
        <div className="absolute top-[25%] right-[15%] text-green-500/10 font-mono text-sm leading-none opacity-60 animate-pulse">
           101101<br/>010010<br/>110011<br/>001010
        </div>

        {/* Element 4: Decorative Circle/HUD */}
        <div 
          className="absolute bottom-[10%] left-[15%] w-32 h-32 border border-blue-500/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]"
          style={{ willChange: 'transform' }}
        ></div>
        <div className="absolute bottom-[10%] left-[15%] w-32 h-32 border border-cyan-500/10 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Badge - Immediate Load */}
        <div 
          className={`transform transition-all duration-700 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-800 bg-slate-950/80 backdrop-blur-sm mb-12 font-mono shadow-2xl">
            <span className="text-slate-600 mr-4 text-lg tracking-tighter">{'>>'}</span>
            <span className="text-cyan-400 font-bold tracking-[0.2em] text-sm md:text-base uppercase">ESCALA JURIS</span>
            <span className="w-2.5 h-5 bg-cyan-500 ml-1 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
          </div>
        </div>

        {/* Main Title - Immediate Load with Staggered Focus Effect */}
        <h1 className="flex flex-col items-center justify-center font-black tracking-tighter text-center leading-[0.85] mb-8 select-none">
          <span 
            className={`text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transform transition-all duration-1000 delay-100 ease-out ${
              isMounted ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            ALGORITMIZE
          </span>
          <span 
             className={`text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transform transition-all duration-1000 delay-200 ease-out ${
              isMounted ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            SUA
          </span>
          <span 
             className={`text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 pb-2 text-glow transform transition-all duration-1000 delay-300 ease-out ${
              isMounted ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            ADVOCACIA.
          </span>
        </h1>

        {/* Dynamic Typewriter Text - Immediate Load */}
        <div 
          className={`h-8 mb-8 flex items-center justify-center transform transition-opacity duration-700 delay-500 ${
            isMounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
            <p className="font-mono font-bold text-cyan-400 text-sm md:text-base tracking-[0.2em] text-center drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                {displayText}
                <span className="animate-pulse inline-block w-2.5 h-5 bg-cyan-400 ml-2 align-middle shadow-[0_0_10px_#22d3ee]"></span>
            </p>
        </div>

        {/* Subtitle - Still deferred slightly for visual hierarchy */}
        <div 
          className={`max-w-3xl mx-auto transform transition-all duration-1000 delay-700 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-slate-300 mb-12 text-lg md:text-xl leading-relaxed font-light">
            Deixe de ser um digitador de luxo e torne-se um{" "}
            <span className="text-white font-bold border-b-2 border-cyan-400 pb-0.5 shadow-[0_2px_10px_rgba(34,211,238,0.1)]">
              Engenheiro Jurídico
            </span>.
            Domine a Inteligência Artificial para processar em minutos o que antes levava semanas de esforço manual.
          </p>
        </div>

        {/* Buttons - Keep RevealOnScroll for bottom elements or use delay */}
        <RevealOnScroll delay={900}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative w-full sm:w-auto px-10 py-4 bg-white text-slate-950 font-mono font-black tracking-wider transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                  INICIAR AGORA
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
              </span>
              <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
            </button>
            
            <button className="w-full sm:w-auto px-10 py-4 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-slate-900/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] font-mono font-bold tracking-wider transition-all duration-300 rounded-full">
              EXPLORAR STACK
            </button>
          </div>
        </RevealOnScroll>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;