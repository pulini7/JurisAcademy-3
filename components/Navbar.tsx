import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <span className="font-sans text-2xl font-black text-slate-950">J</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xl font-bold text-white tracking-tighter leading-none">
                JURIS<span className="text-cyan-400">ACADEMY</span>
              </span>
              <span className="font-mono text-[0.6rem] text-slate-500 tracking-[0.2em]">
                FORENSIC LAB
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-xs font-bold text-slate-400 hover:text-white transition-colors duration-300 tracking-widest uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <a href="#courses" className="bg-white text-slate-950 font-mono text-xs font-extrabold px-8 py-3 rounded-full hover:bg-cyan-50 transition-all duration-300 tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              MATRICULAR AGORA
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-900 inline-flex items-center justify-center p-2 text-cyan-500 hover:text-white hover:bg-slate-800 focus:outline-none border border-cyan-500/30 rounded"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-cyan-500/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-mono border-l-2 border-transparent hover:border-cyan-500 bg-slate-900/50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
               href="#courses"
               className="text-slate-950 bg-cyan-500 hover:bg-cyan-400 block px-3 py-2 text-base font-bold font-mono text-center mt-4 rounded mx-2"
               onClick={() => setIsOpen(false)}
            >
              MATRICULAR AGORA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;