import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="w-10 h-10 border border-cyan-500 flex items-center justify-center mr-3 group-hover:bg-cyan-500/10 transition-all duration-300">
              <span className="font-mono text-2xl font-bold text-cyan-400 group-hover:text-white group-hover:text-glow">J</span>
            </div>
            <span className="font-mono text-xl text-slate-100 tracking-tighter">
              JURIS<span className="text-cyan-400">_ACADEMY</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500">_</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-transparent border border-cyan-500/50 text-cyan-400 font-mono text-sm px-6 py-2 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]">
              [ MATRICULAR_AGORA ]
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-900 inline-flex items-center justify-center p-2 text-cyan-500 hover:text-white hover:bg-slate-800 focus:outline-none border border-cyan-500/30"
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
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;