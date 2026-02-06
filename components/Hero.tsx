import React, { useState, useEffect } from 'react';

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
      {/* Background Effects with Animation */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-20 animate-grid-flow"></div>
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Badge - Updated to match image */}
        <div className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-800 bg-slate-950/80 backdrop-blur-sm mb-12 font-mono shadow-2xl">
          <span className="text-slate-600 mr-4 text-lg tracking-tighter">{'>>'}</span>
          <span className="text-cyan-400 font-bold tracking-[0.2em] text-sm md:text-base uppercase">ESCALA JURIS</span>
          <span className="w-2.5 h-5 bg-cyan-500 ml-1 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
        </div>

        {/* Main Title */}
        <h1 className="flex flex-col items-center justify-center font-black tracking-tighter text-center leading-[0.85] mb-8 select-none">
          <span className="text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            ALGORITMIZE
          </span>
          <span className="text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            SUA
          </span>
          <span className="text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 pb-2 text-glow">
            ADVOCACIA.
          </span>
        </h1>

        {/* Dynamic Typewriter Text */}
        <div className="h-8 mb-8 flex items-center justify-center">
            <p className="font-mono font-bold text-cyan-400 text-sm md:text-base tracking-[0.2em] text-center drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
                {displayText}
                <span className="animate-pulse inline-block w-2.5 h-5 bg-cyan-400 ml-2 align-middle shadow-[0_0_10px_#22d3ee]"></span>
            </p>
        </div>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-slate-300 mb-12 text-lg md:text-xl leading-relaxed font-light">
          Deixe de ser um digitador de luxo e torne-se um{" "}
          <span className="text-white font-bold border-b-2 border-cyan-400 pb-0.5 shadow-[0_2px_10px_rgba(34,211,238,0.1)]">
            Engenheiro Jurídico
          </span>.
          Domine a Inteligência Artificial para processar em minutos o que antes levava semanas de esforço manual.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-950 font-mono font-black tracking-wider hover:bg-cyan-neon hover:text-white transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] hover:animate-glitch">
            INICIAR AGORA
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 font-mono font-bold tracking-wider transition-all duration-300 rounded-full">
            EXPLORAR STACK
          </button>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;