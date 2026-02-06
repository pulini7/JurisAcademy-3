import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-cyan-500">STACK</span> TECNOLÓGICA
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="relative group p-8 bg-slate-900/30 border border-slate-800 hover:border-cyan-500/60 transition-all duration-300 hover:bg-slate-900/60 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-6 text-cyan-400 group-hover:text-cyan-200 transition-colors transform group-hover:scale-110 duration-300 inline-block">
                {feature.icon}
              </div>
              
              <div className="absolute top-4 right-4 font-mono text-4xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                {feature.id}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-mono">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
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