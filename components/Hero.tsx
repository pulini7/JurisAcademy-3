import React, { useState, useEffect } from 'react';

const TYPING_TEXTS = [
  "ENGENHARIA DE PROMPTS FORENSES",
  "OTIMIZAÇÃO DE KERNEL JURÍDICO",
  "DEBUGGING DE PROCESSOS CIVIS",
  "REDE NEURAL DE JURISPRUDÊNCIA"
];

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = TYPING_TEXTS[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const handleTyping = () => {
      if (!isDeleting && displayText !== currentFullText) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText !== '') {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      {/* Overlay for darkness */}
      <div className="absolute inset-0 bg-slate-950/90 bg-grid-pattern bg-grid-sm"></div>
      
      {/* HUD Elements */}
      <div className="absolute top-32 left-10 hidden lg:block opacity-40">
        <div className="font-mono text-xs text-cyan-600 mb-1">SYS.STATUS: ONLINE</div>
        <div className="w-32 h-32 border border-cyan-600/30 rounded-full flex items-center justify-center animate-spin-slow">
           <div className="w-24 h-24 border-t border-b border-cyan-400/50 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block border border-cyan-500/30 bg-cyan-950/20 px-4 py-1 mb-6 backdrop-blur-sm rounded">
          <span className="font-mono text-xs text-cyan-400 tracking-widest animate-pulse">
            ● SYSTEM_READY // V3.0
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 font-sans">
          ALGORITMIZE SUA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-glow">
            ADVOCACIA
          </span>
        </h1>

        <div className="h-8 md:h-12 mb-8">
           <p className="font-mono text-lg md:text-2xl text-cyan-200">
             {'>'} {displayText}
             <span className="animate-cursor">_</span>
           </p>
        </div>

        <p className="max-w-2xl mx-auto text-slate-400 mb-10 font-light text-lg">
          Deixe de ser um operador de processos analógico. Torne-se um arquiteto de sistemas jurídicos.
          Domine a Inteligência Artificial e multiplique sua produtividade por 10x.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold tracking-wider transition-all duration-300 clip-path-polygon box-glow relative overflow-hidden group">
            <span className="relative z-10">INICIAR PROTOCOLO DE MATRÍCULA</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-mono font-bold transition-all duration-300 backdrop-blur-sm">
            VER DOCUMENTAÇÃO
          </button>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
};

export default Hero;