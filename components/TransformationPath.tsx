import React from 'react';
import { TRANSFORMATION_STEPS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const TransformationPath: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h4 className="font-mono text-cyan-500 text-sm tracking-[0.2em] mb-2 uppercase animate-pulse">SUA JORNADA EVOLUTIVA</h4>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
              O CAMINHO DA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">TRANSFORMAÇÃO.</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2">
            <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
          </div>

          <div className="space-y-12 md:space-y-20">
            {TRANSFORMATION_STEPS.map((step, index) => {
              const isEven = index % 2 !== 0; // False for 0 (Left), True for 1 (Right)

              return (
                <RevealOnScroll key={step.id} delay={index * 100}>
                  <div className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Card Content Side */}
                    <div className={`w-full md:w-[45%] pl-16 md:pl-0 group`}>
                       <div className={`relative p-8 bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm rounded-xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:-translate-y-1`}>
                          
                          {/* Icon Box - Floating on border */}
                          <div className={`absolute -top-6 ${isEven ? 'md:right-8' : 'md:left-8'} left-0 ml-[-1rem] md:ml-0 bg-slate-950 p-3 border border-slate-700 rounded-lg group-hover:scale-110 group-hover:border-cyan-500 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] text-cyan-400 z-20`}>
                             {step.icon}
                          </div>

                          {/* Large Ghost Number (Desktop) */}
                          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isEven ? '-left-28' : '-right-28'} font-black text-7xl text-slate-800/30 select-none font-mono tracking-tighter transition-colors group-hover:text-slate-800/60`}>
                              {step.id}
                          </div>

                          {/* Content */}
                          <div className="mt-2 relative z-10">
                              <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide group-hover:text-cyan-100 transition-colors">
                              {step.title}
                              </h3>
                              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-4 group-hover:border-cyan-500/50 transition-colors">
                              {step.description}
                              </p>
                          </div>
                       </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 shadow-[0_0_10px_#22d3ee] z-10 group-hover:scale-125 transition-transform">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Empty Spacer for Flex (Desktop) */}
                    <div className="hidden md:block md:w-[45%]"></div>

                    {/* Mobile Ghost Number */}
                     <div className="md:hidden absolute left-16 -top-10 font-black text-5xl text-slate-800/40 font-mono z-0 pointer-events-none">
                        {step.id}
                     </div>

                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationPath;