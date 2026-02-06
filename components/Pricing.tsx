import React from 'react';
import { COURSES } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Pricing: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tight">
              SELECIONE SEU NÍVEL DE <span className="text-cyan-500 text-glow">INTERVENÇÃO DIGITAL.</span>
            </h2>
            <div className="flex justify-center md:justify-end max-w-7xl mx-auto mt-4">
               <span className="font-mono text-[10px] text-cyan-400 border border-cyan-900/50 rounded px-3 py-1 bg-cyan-950/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                  VAGAS EM LOTE PROMOCIONAL
               </span>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {COURSES.map((course, index) => (
            <RevealOnScroll key={course.id} delay={index * 150} className="h-full">
              <div 
                className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-500 group
                  ${course.recommended 
                    ? 'bg-slate-900/80 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.15)] z-10 scale-105 md:scale-110' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80'
                  }
                  hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.2)]
                `}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {course.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.4)] z-20">
                    RECOMENDADO
                  </div>
                )}

                {/* Header Tags */}
                <div className="flex justify-between items-center mb-6 relative z-10">
                   <span className={`font-mono text-xs border px-2 py-1 rounded transition-colors duration-300
                      ${course.recommended ? 'border-cyan-500/50 text-cyan-300 bg-cyan-950/30' : 'border-slate-700 text-slate-500 group-hover:border-cyan-500/30 group-hover:text-cyan-400'}
                   `}>
                      {course.id}
                   </span>
                   <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-500/70 tracking-[0.2em] uppercase transition-colors">
                      {course.codeName}
                   </span>
                </div>

                {/* Title & Description */}
                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                      {course.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-4 group-hover:border-cyan-500/50 transition-colors">
                     {course.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10 flex-1 relative z-10">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs font-bold text-slate-300 font-mono uppercase tracking-wide group-hover:text-white transition-colors">
                       <svg className={`w-4 h-4 mr-3 flex-shrink-0 transition-colors ${course.recommended ? 'text-cyan-400' : 'text-slate-600 group-hover:text-cyan-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                       </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="mt-auto pt-8 border-t border-slate-800/50 group-hover:border-cyan-500/20 transition-colors relative z-10">
                   <div className="flex flex-col items-center text-center mb-6">
                      <span className="text-slate-600 line-through text-xs font-mono mb-1">{course.price.original}</span>
                      <div className="flex items-baseline text-white">
                         <span className="text-sm font-bold mr-1 text-slate-400">12x</span>
                         <span className="text-5xl font-black tracking-tighter group-hover:scale-110 transition-transform duration-300 origin-bottom">{course.price.installments.split('R$')[1]}</span>
                      </div>
                      <span className="text-slate-500 text-[10px] font-mono mt-1 uppercase tracking-widest">{course.price.total}</span>
                   </div>

                   <a 
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 font-black font-mono text-xs tracking-[0.15em] transition-all duration-300 rounded-lg uppercase text-center block relative overflow-hidden group/btn
                    ${course.recommended
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                      : 'bg-white text-slate-950 hover:bg-cyan-50'
                    }`}>
                    <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">GARANTIR ACESSO</span>
                    <div className="absolute inset-0 bg-slate-950 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                  
                  <div className="flex justify-center items-center gap-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-[9px] text-slate-400 group-hover:text-green-400 font-bold font-mono tracking-widest uppercase transition-colors">GATEWAY SEGURO</span>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;