import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              JURIS<span className="text-cyan-400">_ACADEMY</span>
            </h3>
            <p className="text-slate-400 max-w-md mb-6">
              A primeira escola de programação jurídica do Brasil. Transformamos advogados em engenheiros de prompts.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-slate-500 hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
                  <span className="font-mono text-xs">SC{i}</span>
                </div>
              ))}
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
          <p>&copy; 2024 JURIS_ACADEMY. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400">TERMOS_DE_USO</a>
            <a href="#" className="hover:text-cyan-400">PRIVACIDADE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;