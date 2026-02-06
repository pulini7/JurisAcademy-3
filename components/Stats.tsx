import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-slate-950 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="relative p-6 bg-slate-900/50 border border-slate-800 overflow-hidden group hover:border-cyan-500/50 transition-colors duration-500">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-scanline bg-scanline-sm opacity-10 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-slate-500">METRIC_0{index + 1}</span>
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

              {/* Decorative progress bar */}
              <div className="w-full h-1 bg-slate-800 mt-6 overflow-hidden">
                <div 
                  className="h-full bg-cyan-500 animate-pulse-fast" 
                  style={{ width: `${Math.random() * 40 + 60}%` }}
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