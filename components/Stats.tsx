import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-12 bg-slate-950 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="relative p-6 bg-slate-900/50 border border-slate-800 overflow-hidden group hover:border-cyan-500/50 transition-colors duration-500">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-scanline bg-scanline-sm opacity-10 pointer-events-none"></div>
              
              <div className="flex justify-end items-start mb-4">
                <span className="font-mono text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-900">
                  {stat.trend}
                </span>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </h3>
              <p className="text-slate-400 font-light text-sm uppercase tracking-wider">
                {stat.label}
              </p>

              {/* Decorative progress bar - Fixed widths for professional stability */}
              <div className="w-full h-1 bg-slate-800 mt-6 overflow-hidden">
                <div 
                  className="h-full bg-cyan-500 animate-[pulse_3s_ease-in-out_infinite]" 
                  style={{ width: index === 0 ? '75%' : index === 1 ? '98%' : '100%', animationDelay: `${index * 0.2}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;