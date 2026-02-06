import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              BASE DE <span className="text-cyan-500">CONHECIMENTO</span>
            </h2>
            <p className="text-slate-400 font-mono">Perguntas frequentes sobre o protocolo.</p>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 50}>
              <div 
                className={`border transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'bg-slate-900/80 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.1)]' 
                    : 'bg-slate-900/30 border-slate-800 hover:border-slate-600'
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-mono font-bold text-sm md:text-base ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                    <span className="text-cyan-500 mr-2">{'>'}</span>
                    {item.question}
                  </span>
                  <span className="text-cyan-500 font-mono ml-4">
                    {openIndex === index ? '[-]' : '[+]'}
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-l-2 border-cyan-500/20 ml-6 mb-4">
                    {item.answer}
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

export default FAQ;