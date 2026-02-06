import React from 'react';

const Comparison: React.FC = () => {
  const matrixRows = [
    {
      label: 'ESCOPO DE CONTEÚDO',
      basic: 'Módulo 01',
      inter: 'Módulo 01 + 02',
      adv: 'SISTEMA COMPLETO (01+02+03)'
    },
    {
      label: 'OBJETIVO CENTRAL',
      basic: 'Tirar o medo e evitar erro',
      inter: 'Ganhar tempo e produtividade',
      adv: 'Criar vantagem competitiva'
    },
    {
      label: 'FOCO TÉCNICO',
      basic: 'Ética, LGPD e Prompt Base',
      inter: 'Petições e Contratos',
      adv: 'Automação e Agentes'
    },
    {
      label: 'RESULTADO FINAL',
      basic: 'Uso seguro e sem receio',
      inter: 'Trabalho rápido e qualidade',
      adv: 'Diferencial estratégico real'
    }
  ];

  return (
    <section className="py-16 bg-slate-950 relative border-t border-slate-900">
       {/* Background noise/glow */}
       <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
            <h4 className="font-mono text-cyan-400 text-sm tracking-[0.2em] mb-2 uppercase">MATRIZ DE DIFERENCIAÇÃO V6</h4>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              A ANATOMIA DA <span className="text-cyan-400">EVOLUÇÃO.</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Entenda como cada protocolo se empilha para formar o Kernel Definitivo do advogado tecnológico.
            </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-800 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950">
                <th className="p-6 font-mono text-slate-500 text-xs uppercase tracking-wider border-b border-slate-800 w-1/4">PROTOCOLO HABILIDADE</th>
                <th className="p-6 font-mono text-slate-400 text-center text-xs font-bold uppercase tracking-wider border-b border-slate-800 w-1/4">BÁSICO</th>
                <th className="p-6 font-mono text-cyan-400 text-center text-xs font-bold uppercase tracking-wider border border-slate-800 bg-slate-900/50 w-1/4 box-glow">INTERMEDIÁRIO</th>
                <th className="p-6 font-mono text-white text-center text-xs font-bold uppercase tracking-wider border-b border-slate-800 w-1/4">AVANÇADO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-900/20">
              {matrixRows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-6 font-mono text-slate-500 text-xs font-bold uppercase tracking-wide border-r border-slate-800/50">
                    {row.label}
                  </td>
                  <td className="p-6 text-center text-slate-400 font-sans text-sm border-r border-slate-800/50">
                    {row.basic}
                  </td>
                  <td className="p-6 text-center text-cyan-300 font-sans text-sm font-bold border-x border-slate-800 bg-slate-900/40 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]">
                    {row.inter}
                  </td>
                  <td className="p-6 text-center text-white font-sans text-sm font-bold">
                    {row.adv}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;