import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            LOGS DE <span className="text-green-500 text-glow">USUÁRIOS VERIFICADOS</span>
          </h2>
          <p className="text-slate-400 font-mono">Advogados que já atualizaram seu sistema operacional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-900/40 border border-slate-800 p-8 rounded-lg relative group hover:bg-slate-900/60 transition-all duration-300">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-700 group-hover:border-cyan-500 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-700 group-hover:border-cyan-500 transition-colors"></div>

              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border border-slate-600 grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="text-white font-bold font-mono text-sm">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-6 relative">
                <span className="text-4xl text-slate-700 absolute -top-4 -left-2">"</span>
                <p className="text-slate-300 text-sm leading-relaxed italic relative z-10 pl-2">
                  {testimonial.content}
                </p>
              </div>

              <div className="bg-slate-950/50 border border-green-900/30 rounded p-2 text-center">
                <span className="text-green-400 font-mono text-xs font-bold tracking-widest animate-pulse">
                  {testimonial.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;