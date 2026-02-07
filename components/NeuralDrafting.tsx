import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const NeuralDrafting: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-slate-950 overflow-hidden relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Esquerdo: Pitch (Texto Marketing) */}
          <div className="w-full lg:w-1/2 pt-8">
            <RevealOnScroll>
              <div className="inline-block px-3 py-1 mb-4 text-[10px] font-mono font-bold text-cyan-400 border border-cyan-900 bg-cyan-900/10 rounded uppercase tracking-widest">
                Metodologia Proprietária
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-[1.1]">
                DO RASCUNHO À <span className="text-cyan-400 text-glow">PERFEIÇÃO TÉCNICA</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                Pare de brigar com a página em branco. Com o <strong>nosso método de prompts</strong>, você insere os fatos brutos e recebe uma peça juridicamente perfeita, formatada e fundamentada.
              </p>
              
              <div className="space-y-5 mb-10">
                  <div className="flex items-center gap-4 text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-base">Qualificação Completa das Partes</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-base">Fundamentação Legal (CDC/STJ)</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-base">Pedidos Estruturados e Valor da Causa</span>
                  </div>
              </div>

              <button className="group relative px-8 py-4 bg-white text-slate-950 font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] rounded-lg overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-3">
                   GARANTIR MEU ACESSO
                   <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </span>
                <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </RevealOnScroll>
          </div>

          {/* Lado Direito: Imagem Estática da Petição */}
          <div className="w-full lg:w-1/2 relative group perspective-1000">
            <RevealOnScroll delay={200}>
               {/* Decoração de fundo (Glow) */}
               <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none"></div>

               {/* Container "3D" da Imagem */}
               <div className="relative transform rotate-1 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                  
                  {/* Etiqueta de Arquivo */}
                  <div className="absolute -top-4 -right-4 z-20 bg-green-500 text-slate-950 font-black text-xs px-4 py-2 rounded shadow-lg transform rotate-6 border-2 border-white">
                    ARQUIVO: FINAL.DOCX
                  </div>

                  {/* A Petição Visual (Simulando uma imagem de alta qualidade) */}
                  <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-600 relative min-h-[600px] flex flex-col">
                      
                      {/* Interface Word Minimalista (Topo) */}
                      <div className="bg-[#2b579a] h-8 flex items-center px-4 gap-2 sticky top-0 z-10">
                          <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                          </div>
                          <div className="flex-1 text-center">
                              <span className="text-white/80 text-[10px] font-sans tracking-wide">Peticao_Inicial_Consumidor_FINAL.docx</span>
                          </div>
                      </div>
                      
                      {/* O Documento em Si */}
                      <div className="p-8 md:p-12 bg-white flex-1 relative">
                          {/* Sombra interna para dar profundidade ao papel */}
                          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]"></div>

                          {/* Cabeçalho */}
                          <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-900 pb-4">
                              <div className="w-10 h-10 border-2 border-slate-900 rounded-full flex items-center justify-center">
                                  <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                              </div>
                              <div>
                                  <h1 className="text-slate-900 font-serif font-black text-sm tracking-widest">JURIS CONSULTORES</h1>
                                  <p className="text-slate-500 text-[8px] uppercase tracking-wider">Excelência Jurídica & Tecnologia</p>
                              </div>
                          </div>

                          {/* Texto da Petição (Estático e Visual) */}
                          <div className="space-y-4 opacity-90">
                              <p className="font-serif text-[10px] sm:text-xs text-black font-bold uppercase text-center mb-6">
                                  EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA ___ VARA CÍVEL DA COMARCA DE SÃO PAULO/SP.
                              </p>

                              <p className="font-serif text-[10px] sm:text-xs text-justify leading-relaxed text-slate-800">
                                  <span className="font-bold">CARLOS EDUARDO MENDES</span>, brasileiro, casado, engenheiro civil, inscrito no CPF/MF sob o nº 123.456.789-00, vem respeitosamente propor a presente <span className="font-bold">AÇÃO DE OBRIGAÇÃO DE FAZER C/C INDENIZAÇÃO</span> em face de <span className="font-bold">AUTO ELITE MOTORS LTDA.</span>
                              </p>

                              <div className="pl-4 border-l-2 border-slate-300 my-4">
                                  <p className="font-serif text-[10px] sm:text-xs font-bold text-slate-900 mb-1">I - DOS FATOS</p>
                                  <p className="font-serif text-[9px] sm:text-[11px] text-justify leading-relaxed text-slate-600">
                                      Em 10/01/2026, o Autor adquiriu veículo zero km por R$ 120.000,00. Decorridos apenas 03 dias, o automóvel apresentou falha crítica (motor ferveu), deixando a família em situação de risco na rodovia por 4 horas. A Ré recusou a troca imediata, alegando "mau uso".
                                  </p>
                              </div>

                              <div className="pl-4 border-l-2 border-slate-300 my-4">
                                  <p className="font-serif text-[10px] sm:text-xs font-bold text-slate-900 mb-1">II - DO DIREITO</p>
                                  <p className="font-serif text-[9px] sm:text-[11px] text-justify leading-relaxed text-slate-600">
                                      Aplica-se o art. 18, §1º do CDC (Vício de Qualidade). A jurisprudência do STJ é pacífica quanto ao Dano Moral <em>in re ipsa</em> pela frustração da expectativa de veículo novo.
                                  </p>
                              </div>

                              <div className="bg-slate-100 p-3 rounded border border-slate-200 mt-4">
                                  <p className="font-serif text-[9px] sm:text-[10px] font-bold text-slate-900 mb-2">IV - DOS PEDIDOS</p>
                                  <ul className="list-disc list-inside font-serif text-[9px] sm:text-[10px] text-slate-700 space-y-1">
                                      <li>Concessão de Tutela de Urgência (Carro Reserva);</li>
                                      <li>Substituição do bem por outro zero km;</li>
                                      <li>Indenização por Danos Morais (R$ 20.000,00).</li>
                                  </ul>
                              </div>
                              
                              <div className="mt-8 pt-4 text-center">
                                  <p className="font-serif text-[10px] text-slate-800">Termos em que, Pede deferimento.</p>
                                  <p className="font-serif text-[10px] text-slate-800 mt-1">São Paulo, 12 de Fevereiro de 2026.</p>
                                  <div className="mt-4 border-t border-black w-32 mx-auto pt-1">
                                      <p className="font-serif text-[9px] font-bold">DR. JOÃO VITOR</p>
                                  </div>
                              </div>
                          </div>

                          {/* Efeito de "Scan" passando por cima para dar ar tech */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-32 w-full animate-scan opacity-30 pointer-events-none"></div>
                      </div>
                  </div>
               </div>

            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeuralDrafting;