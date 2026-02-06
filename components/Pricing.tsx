import React from 'react';
import { COURSES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="courses" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">ACESSAR <span className="text-blue-500">DATABASE</span></h2>
          <p className="text-slate-400">Escolha seu nível de acesso ao sistema.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {COURSES.map((course, index) => (
            <div 
              key={course.level}
              className={`relative p-8 rounded-xl border flex flex-col h-full transition-transform duration-300 hover:-translate-y-2
                ${course.recommended 
                  ? 'bg-slate-900/80 border-cyan-500 box-glow scale-105 z-10' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-600'
                }`}
            >
              {course.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-slate-950 font-bold px-4 py-1 rounded-full text-xs font-mono tracking-wider">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-8">
                <span className="font-mono text-xs text-slate-500 block mb-2">{course.level}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{course.name}</h3>
                <div className="text-4xl font-bold text-white">
                  {course.price}
                  <span className="text-base font-normal text-slate-500">/único</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 font-bold font-mono transition-all duration-300
                ${course.recommended
                  ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}>
                INICIAR DOWNLOAD
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;