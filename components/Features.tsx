import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
            DOMINE O ECOSSISTEMA DE <span className="text-cyan-500 text-glow">PODER TECNOLÓGICO</span>.
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="relative group p-6 bg-slate-900/30 border border-slate-800 hover:border-cyan-500/60 transition-all duration-300 hover:bg-slate-900/60 hover:-translate-y-2 overflow-hidden rounded-xl">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="text-cyan-400 group-hover:text-cyan-200 transition-colors transform group-hover:scale-110 duration-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                  {feature.icon}
                </div>
                <div className="font-mono text-2xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                  {feature.id}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 font-mono tracking-wide uppercase">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-xs md:text-sm border-l-2 border-slate-800 pl-4 group-hover:border-cyan-500/30 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;