import React, { useState, useEffect, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';

const BAD_TEXT = `EXMO SR DR JUIZ DE DIREITO.
Vem por meio desta dizer que o réu não pagou o que devia. A gente quer o dinheiro de volta com juros. Ele agiu de má fé e violou o contrato assinado ano passado. Requer a condenação.`;

const GOOD_TEXT = `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA __ VARA CÍVEL.

Em face do inadimplemento contratual inequívoco por parte do Requerido, consubstanciado na ausência de quitação da obrigação pecuniária pactuada, a Requerente pugna pela restituição integral dos valores, devidamente atualizados e acrescidos de juros moratórios. 

Evidencia-se a violação do princípio da 'pacta sunt servanda' e a conduta de má-fé processual, exigindo a imediata reparação conforme artigos 389 e 475 do Código Civil.`;

const NeuralDrafting: React.FC = () => {
  const [currentText, setCurrentText] = useState(BAD_TEXT);
  const [status, setStatus] = useState<'IDLE' | 'APPLYING_METHOD' | 'GENERATING' | 'COMPLETED'>('IDLE');
  
  const processingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (processingRef.current) clearInterval(processingRef.current);
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, []);

  const startSimulation = () => {
    if (status !== 'IDLE' && status !== 'COMPLETED') return;
    
    setStatus('APPLYING_METHOD');
    setCurrentText(BAD_TEXT);

    // Phase 1: Applying Methodology (Simulating prompt injection)
    let cycles = 0;
    processingRef.current = setInterval(() => {
      cycles++;
      
      // Glitch effect implies the "transformation" happening via prompt
      if (Math.random() > 0.5) {
        const glitchChars = '█▓▒░<>/{}[]';
        const pos = Math.floor(Math.random() * BAD_TEXT.length);
        const newText = BAD_TEXT.substring(0, pos) + glitchChars[Math.floor(Math.random() * glitchChars.length)] + BAD_TEXT.substring(pos + 1);
        setCurrentText(newText);
      }

      if (cycles >= 25) {
        if (processingRef.current) clearInterval(processingRef.current);
        startGeneration();
      }
    }, 50);
  };

  const startGeneration = () => {
    setStatus('GENERATING');
    setCurrentText('');
    let charIndex = 0;
    
    // Phase 2: Generating (The result of the method)
    typingRef.current = setInterval(() => {
      if (charIndex < GOOD_TEXT.length) {
        setCurrentText(GOOD_TEXT.substring(0, charIndex + 1));
        charIndex++;
      } else {
        if (typingRef.current) clearInterval(typingRef.current);
        setStatus('COMPLETED');
      }
    }, 15);
  };

  return (
    <section id="demo" className="py-16 bg-slate-950 overflow-hidden relative border-t border-slate-900">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Text Content - Focus on Method */}
          <div className="w-full md:w-1/2">
            <RevealOnScroll>
              <div className="inline-block px-3 py-1 mb-4 text-[10px] font-mono font-bold text-cyan-400 border border-cyan-900 bg-cyan-900/10 rounded uppercase tracking-widest">
                Metodologia Proprietária
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                NEURAL <span className="text-cyan-400 text-glow">DRAFTING</span>
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                Não vendemos software. <span className="text-white font-bold">Ensinamos você a comandar a Inteligência Artificial.</span>
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Aprenda a criar <strong>Prompts Estruturados</strong> que transformam qualquer ferramenta (ChatGPT, Gemini, Claude) em um Associado Sênior. Você entra com o rascunho, a nossa metodologia extrai a peça perfeita.
              </p>
              
              <button 
                onClick={startSimulation}
                disabled={status === 'APPLYING_METHOD' || status === 'GENERATING'}
                className={`
                  group relative px-8 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-mono font-bold tracking-widest uppercase transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                  ${(status === 'APPLYING_METHOD' || status === 'GENERATING') ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {status === 'IDLE' || status === 'COMPLETED' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      VER O MÉTODO EM AÇÃO
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      APLICANDO PROTOCOLO...
                    </>
                  )}
                </span>
              </button>
            </RevealOnScroll>
          </div>

          {/* Terminal / Editor Window */}
          <div className="w-full md:w-1/2 relative group">
            <RevealOnScroll delay={200}>
               {/* Glowing border effect */}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
               
               {/* Main Window */}
              <div className="relative bg-slate-950 border border-slate-800 rounded-lg shadow-2xl overflow-hidden">
                
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    {status === 'COMPLETED' ? 'peticao_final_v1.docx' : 'minuta_rascunho.txt'}
                  </div>
                  <div className="w-8"></div> {/* Spacer for centering */}
                </div>

                {/* Editor Content */}
                <div className="p-6 font-mono text-sm min-h-[320px] bg-slate-950/90 relative">
                  
                  {/* Cyan Corner Brackets (As in image) */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500"></div>

                  {/* Text Area */}
                  <div className={`transition-all duration-300 whitespace-pre-wrap leading-relaxed
                    ${status === 'APPLYING_METHOD' ? 'text-cyan-600 opacity-50 blur-[1px]' : ''}
                    ${status === 'GENERATING' || status === 'COMPLETED' ? 'text-cyan-50' : 'text-slate-500'}
                  `}>
                     {currentText}
                     {(status === 'GENERATING') && (
                       <span className="inline-block w-2.5 h-5 bg-cyan-500 ml-1 animate-pulse align-middle shadow-[0_0_8px_#22d3ee]"></span>
                     )}
                  </div>

                  {/* Status Overlay */}
                  {status === 'APPLYING_METHOD' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 backdrop-blur-[1px]">
                       <div className="bg-slate-900 border border-cyan-500/30 px-4 py-2 rounded text-cyan-400 font-mono text-xs shadow-lg flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                          INJETANDO CONTEXTO JURÍDICO...
                       </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Context Label (Bottom) */}
              <div className="absolute -bottom-8 right-0 text-right">
                  <p className="font-mono text-[10px] text-slate-600 uppercase">
                      OUTPUT GERADO PELO ALUNO
                  </p>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeuralDrafting;