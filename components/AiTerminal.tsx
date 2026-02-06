import React, { useState, useRef, useEffect } from 'react';
import { getLegalAdvice } from '../services/geminiService';
import RevealOnScroll from './RevealOnScroll';

interface Log {
  type: 'user' | 'ai';
  content: string;
}

const AiTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<Log[]>([
    { type: 'ai', content: 'JURIS CORE v3.0 ONLINE. AGUARDANDO INPUT JURÍDICO...' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userPrompt = input;
    setInput('');
    setLogs(prev => [...prev, { type: 'user', content: userPrompt }]);
    setLoading(true);

    const response = await getLegalAdvice(userPrompt);
    
    setLogs(prev => [...prev, { type: 'ai', content: response }]);
    setLoading(false);
  };

  return (
    <section id="consultant" className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-900/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">CONSULTOR <span className="text-cyan-400">JURIS AI</span></h2>
            <p className="text-slate-400 font-mono text-sm">Teste nossa API (Powered by Gemini)</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="w-full bg-black rounded-lg border border-slate-700 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-sm md:text-base">
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-slate-400 text-xs">usuario@juris-academy:~</span>
            </div>

            {/* Terminal Body */}
            <div 
              ref={scrollRef}
              className="h-[400px] overflow-y-auto p-4 space-y-4 bg-black/90 text-green-400 selection:bg-green-900 selection:text-white"
            >
              {logs.map((log, idx) => (
                <div key={idx} className={`${log.type === 'user' ? 'text-white' : 'text-cyan-400'}`}>
                  <span className="opacity-50 mr-2">{log.type === 'user' ? '>' : '#'}</span>
                  {log.content}
                </div>
              ))}
              
              {loading && (
                <div className="text-cyan-400 animate-pulse">
                  # ANALISANDO JURISPRUDÊNCIA...
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="border-t border-slate-700 bg-slate-900/50 p-4 flex gap-2">
              <span className="text-green-500">{'>'}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua dúvida jurídica (Ex: Como alegar prescrição intercorrente?)"
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-slate-600 focus:ring-0"
                autoFocus
              />
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AiTerminal;