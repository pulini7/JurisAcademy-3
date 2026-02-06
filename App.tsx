import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import NeuralDrafting from './components/NeuralDrafting';
import Features from './components/Features';
import RoiCalculator from './components/RoiCalculator';
import AiTerminal from './components/AiTerminal';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* Fundamentals Section (Video Embed placeholder) */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">O <span className="text-blue-500">MAINFRAME</span> DA NOVA ADVOCACIA</h2>
          <div className="relative aspect-video bg-slate-900 border-2 border-slate-800 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm border border-cyan-500/50">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-cyan-400 border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-xs text-cyan-400 bg-black/50 px-2 py-1">
              VIDEO_SOURCE: INTRO_V2.MP4
            </div>
            {/* Grid overlay on video placeholder */}
            <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-20 pointer-events-none"></div>
          </div>
        </div>
      </section>

      <NeuralDrafting />
      <Features />
      <RoiCalculator />
      
      {/* Comparison Table */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-800">
                <th className="p-4 font-mono text-slate-500">RECURSOS</th>
                <th className="p-4 font-mono text-slate-400 text-center">LVL_01</th>
                <th className="p-4 font-mono text-cyan-400 text-center text-glow">LVL_02</th>
                <th className="p-4 font-mono text-slate-400 text-center">LVL_03</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900">
              {['Acesso à Rede Neural', 'Templates de Prompts', 'Mentoria Mensal', 'Servidor Dedicado'].map((item, i) => (
                <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 text-slate-300 font-medium">{item}</td>
                  <td className="p-4 text-center text-slate-500">{i < 2 ? '●' : '-'}</td>
                  <td className="p-4 text-center text-cyan-500 font-bold">●</td>
                  <td className="p-4 text-center text-blue-500 font-bold">●</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Pricing />
      <AiTerminal />
      <Footer />
    </div>
  );
};

export default App;