import React from 'react';
import { INSTRUCTORS } from '../constants';

const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            DEV <span className="text-cyan-500">TEAM</span> (PROFESSORES)
          </h2>
          <p className="text-slate-400 font-mono text-sm">Arquitetos do novo sistema jurídico.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {INSTRUCTORS.map((instructor, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-cyan-500 transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                {/* Image: Grayscale by default, color on group hover */}
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {instructor.name}
              </h3>
              <div className="font-mono text-xs text-blue-500 mb-2 uppercase tracking-wider border border-blue-900/50 bg-blue-900/10 px-2 py-1 rounded">
                {instructor.role}
              </div>
              <p className="text-slate-400 text-sm">
                {instructor.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;