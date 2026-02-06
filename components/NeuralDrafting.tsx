import React, { useState, useEffect } from 'react';

const BAD_TEXT = `EXMO SR DR JUIZ DE DIREITO.
Vem por meio desta dizer que o réu não pagou o que devia. A gente quer o dinheiro de volta com juros. Ele agiu de má fé e violou o contrato assinado ano passado. Requer a condenação.`;

const GOOD_TEXT = `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO.
Em face do inadimplemento contratual inequívoco por parte do Requerido, consubstanciado na ausência de quitação da obrigação pecuniária pactuada, a Requerente pugna pela restituição integral dos valores, devidamente atualizados e acrescidos de juros moratórios. Evidencia-se a violação do princípio da 'pacta sunt servanda' e a conduta de má-fé contratual.`;

const NeuralDrafting: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(BAD_TEXT);
  const [status, setStatus] = useState<'IDLE' | 'PROCESSING' | 'COMPLETED'>('IDLE');

  const startSimulation = () => {
    if (status === 'PROCESSING') return;
    setStatus('PROCESSING');
    setProgress(0);
    setCurrentText(BAD_TEXT);

    // Simulate processing steps
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      setProgress(p);
      
      // Glitch effect on text during processing
      if (p < 90 && Math.random() > 0.7) {
        const glitchChars = '!@#$%^&*<>?';
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        const pos = Math.floor(Math.random() * currentText.length);
        const newText = currentText.substring(0, pos) + randomChar + currentText.substring(pos + 1);
        setCurrentText(newText);
      }

      if (p >= 100) {
        clearInterval(interval);
        setStatus('COMPLETED');
        setCurrentText(GOOD_TEXT);
      }
    }, 50);
  };

  return (
    <section id="demo" className="py-20 bg-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">
              NEURAL <span className="text-cyan-400">DRAFTING</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Nosso sistema utiliza LLMs treinadas em milhões de peças jurídicas de alta complexidade para refatorar argumentos fracos em teses robustas. Observe o <span className="text-cyan-400 font-mono">Kernel Jurídico</span> em ação.
            </p>
            <button 
              onClick={startSimulation}
              className="bg-slate-900 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 font-mono py-3 px-6 transition-all duration-300 flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              EXECUTAR REFATORAÇÃO
            </button>
          </div>

          <div className="w-full md:w-1/2 relative">
             {/* HUD Frame */}
            <div className="relative bg-slate-900/80 border border-slate-700 p-1 rounded-lg shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800 rounded-t-lg">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-slate-500">draft_v1.docx</div>
              </div>

              <div className="p-6 font-mono text-sm min-h-[300px] relative">
                {status === 'PROCESSING' && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
                    <div className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]" style={{ width: `${progress}%` }}></div>
                  </div>
                )}
                
                <div className={`${status === 'PROCESSING' ? 'opacity-50 blur-[1px]' : 'opacity-100'} transition-all duration-500 text-slate-300 whitespace-pre-wrap`}>
                   {currentText}
                </div>

                {status === 'COMPLETED' && (
                  <div className="absolute bottom-4 right-4 text-green-400 text-xs flex items-center gap-1 animate-pulse">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    OTIMIZAÇÃO CONCLUÍDA
                  </div>
                )}
              </div>
              
              {/* Decorative corners */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeuralDrafting;