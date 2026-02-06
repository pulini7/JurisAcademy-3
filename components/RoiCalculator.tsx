import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import RevealOnScroll from './RevealOnScroll';

const RoiCalculator: React.FC = () => {
  const [piecesPerMonth, setPiecesPerMonth] = useState(50);
  const [hoursPerPiece, setHoursPerPiece] = useState(4);
  const hourlyRate = 250; // Hidden constant or could be input

  const data = useMemo(() => {
    const manualHours = piecesPerMonth * hoursPerPiece;
    const aiHours = piecesPerMonth * (hoursPerPiece * 0.1); // 90% reduction
    
    const manualCost = manualHours * hourlyRate;
    const aiCost = aiHours * hourlyRate;
    
    return [
      { name: 'Manual', hours: manualHours, cost: manualCost },
      { name: 'Com IA', hours: aiHours, cost: aiCost },
    ];
  }, [piecesPerMonth, hoursPerPiece]);

  const savedMoney = data[0].cost - data[1].cost;

  return (
    <section className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">CALCULADORA DE ROI</h2>
            <p className="text-slate-400">Quanto dinheiro você está perdendo por não usar IA?</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 shadow-2xl flex flex-col md:flex-row gap-8">
            
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">
                  PEÇAS POR MÊS: <span className="text-white">{piecesPerMonth}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={piecesPerMonth}
                  onChange={(e) => setPiecesPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
              
              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">
                  HORAS POR PEÇA: <span className="text-white">{hoursPerPiece}h</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={hoursPerPiece}
                  onChange={(e) => setHoursPerPiece(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div className="p-4 bg-cyan-900/20 border border-cyan-500/30 rounded mt-8">
                <div className="text-slate-400 text-xs font-mono mb-1">ECONOMIA ESTIMADA MENSAL</div>
                <div className="text-3xl font-bold text-green-400 text-glow">
                  R$ {savedMoney.toLocaleString('pt-BR')}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" width={60} tick={{fontFamily: 'JetBrains Mono', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#020617', borderColor: '#334155', color: '#fff' }}
                  />
                  <Bar dataKey="cost" barSize={30} radius={[0, 4, 4, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#334155' : '#22d3ee'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-xs text-slate-500 mt-2 font-mono">*Considerando hora técnica de R$ {hourlyRate}</p>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default RoiCalculator;