import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Fundamentals: React.FC = () => {
  return (
    <section className="py-12 bg-slate-950 border-b border-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-50"></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
            O <span className="text-blue-500 text-glow">MAINFRAME</span> DA NOVA ADVOCACIA
          </h2>
          
          <div className="relative aspect-video bg-slate-900 border-2 border-slate-800 rounded-lg overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            {/* Video Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 group-hover:bg-slate-950/30 transition-colors duration-500">
              <div className="w-24 h-24 bg-cyan-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer backdrop-blur-sm border border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                 <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-cyan-400 border-b-[12px] border-b-transparent ml-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              </div>
            </div>
            
            {/* HUD Overlay */}
            <div className="absolute top-4 right-4 flex gap-2">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
               <span className="font-mono text-xs text-red-500 tracking-widest">REC</span>
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-xs text-cyan-400 bg-black/80 border border-cyan-900/50 px-3 py-1 rounded backdrop-blur-md">
              FONTE: INTRODUÇÃO KERNEL V2
            </div>
            
            {/* Grid overlay on video placeholder */}
            <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-20 pointer-events-none"></div>
            
            {/* Scanline animation overlay */}
            <div className="absolute inset-0 bg-scanline bg-scanline-sm opacity-10 animate-scan pointer-events-none"></div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Fundamentals;