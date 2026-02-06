import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                JURIS<span className="text-cyan-400"> ACADEMY</span>
              </h3>
              <p className="text-slate-400 max-w-md mb-6">
                A primeira escola de programação jurídica do Brasil. Transformamos advogados em engenheiros de prompts.
              </p>
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-slate-500 hover:bg-cyan-600 hover:text-white transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-slate-500 hover:bg-purple-600 hover:text-white transition-all cursor-pointer">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* YouTube */}
                <a href="#" className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-slate-500 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>

            <div className="bg-slate-900/50 p-8 border border-slate-800 rounded-lg">
              <h4 className="text-white font-bold mb-4">NEWSLETTER CRIPTOGRAFADA</h4>
              <p className="text-slate-400 text-sm mb-4">Receba hacks de prompts semanais.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="flex-1 bg-slate-950 border border-slate-700 text-white px-4 py-2 outline-none focus:border-cyan-500 transition-colors"
                />
                <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 font-mono font-bold text-sm">
                  ASSINAR
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm font-mono">
            <div className="mb-4 md:mb-0">
               <p>&copy; 2024 JURIS ACADEMY. TODOS OS DIREITOS RESERVADOS.</p>
               <div className="flex gap-4 mt-2 opacity-50">
                  {/* Generic Payment Icons (SVGs) for Trust */}
                  <svg className="h-6 w-auto text-slate-400" viewBox="0 0 38 24" fill="currentColor">
                     <rect width="38" height="24" rx="2" fill="#1e293b"/>
                     <text x="5" y="16" fontFamily="sans-serif" fontSize="10" fill="white">VISA</text>
                  </svg>
                  <svg className="h-6 w-auto text-slate-400" viewBox="0 0 38 24" fill="currentColor">
                     <rect width="38" height="24" rx="2" fill="#1e293b"/>
                     <circle cx="14" cy="12" r="7" fill="white" opacity="0.5"/>
                     <circle cx="24" cy="12" r="7" fill="white" opacity="0.5"/>
                  </svg>
                  <div className="flex items-center gap-1">
                     <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                     <span className="text-[10px]">PAGAMENTO SEGURO</span>
                  </div>
               </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-cyan-400">TERMOS DE USO</a>
              <a href="#" className="hover:text-cyan-400">PRIVACIDADE</a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
};

export default Footer;