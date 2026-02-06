import React from 'react';
import { COURSES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="courses" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tight">
            SELECIONE SEU NÍVEL DE <span className="text-cyan-500 text-glow">INTERVENÇÃO DIGITAL.</span>
          </h2>
          <div className="flex justify-end max-w-7xl mx-auto mt-4">
             <span className="font-mono text-[10px] text-slate-400 border border-slate-800 rounded px-2 py-1 bg-slate-900">VAGAS EM LOTE PROMOCIONAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {COURSES.map((course) => (
            <div 
              key={course.id}
              className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-500 group
                ${course.recommended 
                  ? 'bg-slate-900/60 border-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.1)] z-10' 
                  : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                }`}
            >
              {course.recommended && (
                <div className="absolute top-8 right-8 bg-white text-slate-950 font-bold px-3 py-1 rounded-full text-[10px] font-mono tracking-wider shadow-lg">
                  RECOMENDADO
                </div>
              )}

              {/* Header Tags */}
              <div className="flex justify-between items-center mb-6">
                 <span className={`font-mono text-xs border border-slate-700 px-2 py-1 rounded text-cyan-400 bg-slate-900/50`}>
                    {course.id}
                 </span>
                 <span className="font-mono text-[10px] text-slate-600 tracking-[0.2em] uppercase">
                    {course.codeName}
                 </span>
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{course.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-4">
                   {course.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs font-bold text-slate-300 font-mono uppercase tracking-wide">
                     <span className={`w-1 h-1 rounded-full bg-cyan-500 mt-1.5 mr-3 ${course.recommended ? 'shadow-[0_0_5px_#22d3ee]' : ''}`}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="bg-slate-900/50 -mx-8 -mb-8 p-8 rounded-b-3xl border-t border-slate-800/50">
                 <div className="flex flex-col items-center text-center mb-6">
                    <span className="text-slate-600 line-through text-xs font-mono mb-1">{course.price.original}</span>
                    <div className="flex items-baseline text-white">
                       <span className="text-sm font-bold mr-1">12x R$</span>
                       <span className="text-5xl font-black tracking-tighter">{course.price.installments.split('R$')[1]}</span>
                    </div>
                    <span className="text-slate-500 text-[10px] font-mono mt-1 uppercase tracking-widest">{course.price.total}</span>
                 </div>

                 <a 
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 font-black font-mono text-xs tracking-[0.15em] transition-all duration-300 rounded-lg uppercase text-center block
                  ${course.recommended
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]'
                    : 'bg-white hover:bg-slate-200 text-slate-950'
                  }`}>
                  GARANTIR ACESSO IMEDIATO
                </a>
                
                <div className="flex justify-center items-center gap-2 mt-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[9px] text-green-500 font-bold font-mono tracking-widest uppercase">GATEWAY VERIFICADO & ATIVO</span>
                </div>
                <div className="text-center mt-1">
                    <span className="text-[8px] text-slate-600 font-mono uppercase tracking-widest flex justify-center items-center gap-1">
                       <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                       CERTIFICADO SSL 256-BIT
                    </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;