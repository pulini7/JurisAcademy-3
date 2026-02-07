import React, { useState, useEffect, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface LegalScenario {
  bad: string;
  good: string;
  filename: string;
}

const LEGAL_SCENARIOS: LegalScenario[] = [
  {
    filename: 'acao_cobranca.docx',
    bad: `EXMO SR DR JUIZ DE DIREITO.
Vem por meio desta dizer que o réu não pagou o que devia. A gente quer o dinheiro de volta com juros. Ele agiu de má fé e violou o contrato assinado ano passado. Requer a condenação.`,
    good: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA __ VARA CÍVEL.

Em face do inadimplemento contratual inequívoco por parte do Requerido, consubstanciado na ausência de quitação da obrigação pecuniária pactuada, a Requerente pugna pela restituição integral dos valores, devidamente atualizados e acrescidos de juros moratórios. 

Evidencia-se a violação do princípio da 'pacta sunt servanda' e a conduta de má-fé processual, exigindo a imediata reparação conforme artigos 389 e 475 do Código Civil.`
  },
  {
    filename: 'danos_morais_voo.docx',
    bad: `Juiz, o voo atrasou 12 horas. Perdi uma reunião importante e fiquei dormindo no chão do aeroporto. A companhia aérea não deu nem água. Quero indenização por tudo que passei.`,
    good: `MM. JUÍZO DA VARA CÍVEL.

Trata-se de Ação de Indenização por Danos Morais decorrente de falha na prestação de serviço de transporte aéreo. O atraso injustificado de 12 horas, somado à ausência de assistência material (Resolução 400/ANAC), configuram ato ilícito.

A situação ultrapassa o mero dissabor cotidiano, caracterizando dano moral 'in re ipsa', conforme jurisprudência pacificada do STJ, ensejando a devida reparação pecuniária pelo abalo sofrido.`
  },
  {
    filename: 'habeas_corpus.docx',
    bad: `Excelência, meu cliente tá preso faz 100 dias sem julgamento. Não tem prova nenhuma contra ele. Ele é trabalhador e tem residência fixa. Solta ele por favor, é ilegal isso.`,
    good: `EXCELENTÍSSIMO SENHOR DESEMBARGADOR PRESIDENTE DO TRIBUNAL DE JUSTIÇA.

Impetra-se a presente ordem de HABEAS CORPUS, com pedido liminar, em favor do Paciente, vítima de constrangimento ilegal por excesso de prazo na formação da culpa (art. 648, II, CPP).

O Paciente encontra-se segregado cautelarmente há mais de 100 dias sem previsão de instrução, violando o princípio da razoável duração do processo. Sendo primário, com bons antecedentes e residência fixa, faz jus à liberdade provisória.`
  },
  {
    filename: 'divorcio_consensual.docx',
    bad: `Juiz, eu e minha esposa queremos separar. Já combinamos tudo. A casa fica pra ela, o carro pra mim. As crianças vão ficar com ela e eu pago 2 mil de pensão. Só assinar.`,
    good: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DE FAMÍLIA.

Requerem a homologação de DIVÓRCIO CONSENSUAL, nos termos do art. 226, § 6º da CF/88. As partes, de comum acordo, estipularam a partilha de bens, fixação de alimentos e regime de convivência com os menores.

O cônjuge varão ofertará alimentos no importe de R$ 2.000,00, enquanto a guarda será unilateral materna, preservando-se o melhor interesse dos menores e a harmonia familiar.`
  },
  {
    filename: 'trabalhista_horas_extras.docx',
    bad: `Juiz do trabalho, eu trabalhava das 8 as 20h todo dia e nunca recebi hora extra. Meu patrão falava que era banco de horas mas nunca me dava folga. Quero receber tudo.`,
    good: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DA VARA DO TRABALHO.

O Reclamante laborava em jornada extenuante, das 08h às 20h, extrapolando o limite constitucional de 8 horas diárias e 44 semanais. Jamais houve contraprestação pecuniária ou compensação via banco de horas válido.

Requer-se o pagamento das horas extraordinárias, com o adicional de 50% e reflexos em DSR, férias, 13º salário e FGTS, ante a habitualidade da prestação, conforme Súmula 376 do TST.`
  },
  {
    filename: 'revisional_alimentos.docx',
    bad: `Juiz, perdi meu emprego e não consigo mais pagar 3 salários de pensão. Preciso diminuir o valor senão vou passar fome. Minha ex mulher ganha bem também.`,
    good: `MM. JUÍZO DE DIREITO DA VARA DE FAMÍLIA E SUCESSÕES.

Ação Revisional de Alimentos. Ocorreu alteração superveniente no binômio necessidade-possibilidade (art. 1.699, CC). O Alimentante sofreu drástica redução em sua capacidade contributiva em virtude de desemprego involuntário.

Pugna-se pela readequação do 'quantum' alimentar para patamar compatível com a nova realidade fática, garantindo a subsistência do alimentante sem desamparar as necessidades básicas do alimentando.`
  },
  {
    filename: 'usucapiao_urbano.docx',
    bad: `Moro nesse terreno faz 15 anos. O dono sumiu e nunca mais apareceu. Construí minha casa, pago luz e água. Quero passar pro meu nome.`,
    good: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO.

AÇÃO DE USUCAPIÃO EXTRAORDINÁRIA. Os Autores exercem a posse mansa, pacífica e ininterrupta do imóvel há mais de 15 anos, com 'animus domini', tendo nele estabelecido sua moradia habitual.

Preenchidos os requisitos do art. 1.238 do Código Civil, requer-se a declaração da prescrição aquisitiva e a consequente expedição de mandado para registro no Cartório de Registro de Imóveis competente.`
  },
  {
    filename: 'mandado_seguranca_concurso.docx',
    bad: `Juiz, passei no concurso em 5º lugar. Tinha 10 vagas. O prefeito não me chamou e o prazo do concurso venceu ontem. É meu direito assumir.`,
    good: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA VARA DA FAZENDA PÚBLICA.

MANDADO DE SEGURANÇA. Direito Líquido e Certo. O Impetrante foi aprovado dentro do número de vagas previsto no edital. A omissão da Administração Pública em nomeá-lo até o termo final da validade do certame configura violação a direito subjetivo (Tema 161/STF).

Requer-se a concessão da segurança para determinar a imediata nomeação e posse do Impetrante no cargo público para o qual foi devidamente habilitado.`
  },
  {
    filename: 'defesa_multa_transito.docx',
    bad: `Sr. Diretor do Detran, não fui eu que passei no sinal vermelho. Emprestei o carro pro meu cunhado. A foto tá escura, não dá pra ver quem dirigia. Anula essa multa aí.`,
    good: `ILUSTRÍSSIMO SENHOR PRESIDENTE DA JARI DO DETRAN.

Defesa de Autuação. Nulidade do Auto de Infração. O veículo autuado não era conduzido pelo Proprietário no momento do fato. Apresenta-se, tempestivamente, o Formulário de Identificação do Condutor Infrator, devidamente assinado.

Ademais, a notificação apresenta vício formal por ausência de nitidez na imagem (art. 280, CTB), impossibilitando a plena defesa, razão pela qual requer-se o arquivamento do auto e a extinção da penalidade.`
  },
  {
    filename: 'isencao_imposto_renda.docx',
    bad: `Receita Federal, eu tenho câncer faz 5 anos. Li na internet que não preciso pagar imposto de renda. Quero meu dinheiro dos últimos anos de volta.`,
    good: `EXMO. SR. JUIZ FEDERAL.

Ação Declaratória de Isenção de Imposto de Renda c/c Repetição de Indébito. O Autor é portador de neoplasia maligna, conforme laudo pericial anexo. A Lei 7.713/88 (art. 6º, XIV) garante a isenção tributária sobre proventos de aposentadoria.

Requer-se o reconhecimento da isenção desde o diagnóstico da moléstia grave e a restituição dos valores indevidamente retidos na fonte nos últimos 5 anos (Súmula 85/STJ).`
  },
  {
    filename: 'tutela_urgencia_medicamento.docx',
    bad: `Juiz, o plano de saúde negou meu remédio de câncer. Custa 50 mil e eu vou morrer se não tomar. Eles falam que não tá no rol da ANS, mas o médico mandou tomar.`,
    good: `MM. JUÍZO CÍVEL. TUTELA DE URGÊNCIA.

Obrigação de Fazer. Negativa de cobertura de tratamento oncológico sob alegação de ausência no rol da ANS. Abusividade. O rol é exemplificativo (Lei 14.454/2022). A escolha da terapêutica cabe exclusivamente ao médico assistente.

Presentes o 'fumus boni iuris' e o 'periculum in mora', requer-se liminar para compelir a Operadora a custear o fármaco prescrito em 24h, sob pena de multa diária, visando a preservação da vida do Autor.`
  },
  {
    filename: 'despejo_falta_pagamento.docx',
    bad: `Juiz, o inquilino não paga aluguel tem 6 meses. Destruiu a casa toda. Quero ele fora de lá hoje e que pague tudo que deve.`,
    good: `EXMO. SR. DR. JUIZ DE DIREITO.

AÇÃO DE DESPEJO POR FALTA DE PAGAMENTO C/C COBRANÇA. O Locatário encontra-se inadimplente há 6 meses, infringindo cláusula contratual e o art. 9º, III, da Lei do Inquilinato (Lei 8.245/91).

Requer-se a expedição de mandado de despejo, inclusive com liminar para desocupação em 15 dias (art. 59, §1º, IX), bem como a condenação ao pagamento dos aluguéis vencidos, acessórios e reparação pelos danos constatados no imóvel.`
  },
  {
    filename: 'crimes_digitais_calunia.docx',
    bad: `Delegado, um perfil fake no instagram tá falando que eu sou ladrão. Tá todo mundo vendo. Quero que descubra quem é e prenda esse cara.`,
    good: `EXMO. SR. DR. JUIZ DE DIREITO. QUEIXA-CRIME.

Imputação dos crimes de Calúnia e Difamação (arts. 138 e 139, CP) cometidos em ambiente virtual. O Querelado, ocultando-se sob perfil anônimo, atribuiu falsamente fato definido como crime ao Querelante, maculando sua honra objetiva.

Requer-se a quebra de sigilo de dados telemáticos (IP e logs de acesso) junto ao provedor da aplicação para identificação da autoria e o regular processamento da ação penal privada.`
  },
  {
    filename: 'auxilio_doenca_inss.docx',
    bad: `Juiz federal, o perito do INSS disse que posso trabalhar, mas estou com a coluna travada. Não consigo nem andar direito. Preciso do meu benefício.`,
    good: `EXMO. JUIZ FEDERAL DO JUIZADO ESPECIAL PREVIDENCIÁRIO.

Restabelecimento de Auxílio por Incapacidade Temporária. O Autor apresenta patologia lombar crônica incapacitante (CID M54.5), corroborada por exames de imagem e atestados médicos recentes, divergindo da conclusão administrativa do INSS.

Pugna-se pela realização de perícia médica judicial com especialista em ortopedia para constatar a incapacidade laboral habitual e a condenação da Autarquia ao pagamento das parcelas vencidas desde a cessação indevida.`
  },
  {
    filename: 'consumidor_produto_defeito.docx',
    bad: `Comprei uma geladeira e parou de gelar em 1 semana. A loja não quer trocar, manda pra assistência que demora 30 dias. Eu tenho comida estragando.`,
    good: `MM. JUÍZO DO JUIZADO ESPECIAL CÍVEL.

Vício do Produto. Bem essencial. A geladeira adquirida apresentou defeito oculto com apenas 7 dias de uso. Tratando-se de produto essencial, aplica-se o art. 18, § 3º do CDC, exigindo-se a troca imediata ou devolução do valor, não se aplicando o prazo de 30 dias para conserto.

Requer-se a substituição imediata do produto por outro novo, sob pena de multa, além da indenização pelos danos materiais (alimentos perecidos) e morais decorrentes do transtorno.`
  },
  {
    filename: 'investigacao_paternidade.docx',
    bad: `Juiz, o pai do meu filho sumiu quando eu tava grávida. Ele não registrou a criança. Quero que faça o exame de DNA e pague pensão.`,
    good: `EXMO. SR. DR. JUIZ DE DIREITO DA VARA DE FAMÍLIA.

AÇÃO DE INVESTIGAÇÃO DE PATERNIDADE C/C ALIMENTOS. O Requerido negou-se ao reconhecimento voluntário do filho. A presunção de paternidade milita em favor do menor, devendo ser confirmada mediante prova pericial genética (DNA).

Requer-se a citação para realização do exame e, confirmada a paternidade, a retificação do registro civil e a fixação de alimentos provisórios e definitivos, retroativos à data da citação (Súmula 277/STJ).`
  },
  {
    filename: 'contestacao_civel.docx',
    bad: `Juiz, tudo que o autor falou é mentira. Eu não bati no carro dele, ele que furou a preferencial. Tenho testemunha. Não vou pagar nada.`,
    good: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO.

CONTESTAÇÃO. A narrativa autoral não condiz com a dinâmica fática. O acidente ocorreu por culpa exclusiva da vítima (excludente de responsabilidade), que desrespeitou a sinalização de parada obrigatória, interceptando a trajetória do Réu.

Impugna-se o orçamento apresentado por ser exorbitante. Requer-se a produção de prova testemunhal e pericial para comprovar a imprudência do Autor e a total improcedência dos pedidos indenizatórios.`
  },
  {
    filename: 'fraude_bancaria_pix.docx',
    bad: `Juiz, fizeram um pix de 5 mil da minha conta de madrugada. O banco disse que usei a senha, mas eu tava dormindo. O sistema deles é falho. Quero meu dinheiro.`,
    good: `MM. JUÍZO CÍVEL.

Responsabilidade Civil Bancária. Fraude em transação via PIX. Operação realizada fora do perfil do correntista, em horário noturno e valor vultoso. Falha no sistema de segurança da instituição financeira (Súmula 479/STJ). Inversão do ônus da prova (art. 6º, VIII, CDC).

O banco responde objetivamente pelos danos gerados por fortuito interno. Requer-se a restituição em dobro do valor subtraído e indenização por danos morais pela falha na custódia dos valores.`
  },
  {
    filename: 'adicional_insalubridade.docx',
    bad: `Trabalho no hospital limpando banheiro e lixo hospitalar. Não ganho nada a mais por isso. Acho que tenho direito a insalubridade grau máximo.`,
    good: `EXMO. JUIZ DO TRABALHO.

Adicional de Insalubridade. A Reclamante exerce a função de higienização de instalações sanitárias de uso público e coleta de lixo urbano/hospitalar, expondo-se a agentes biológicos nocivos à saúde (Súmula 448/TST).

Requer-se a realização de perícia técnica para caracterização da insalubridade em grau máximo (40%) e o pagamento dos reflexos legais sobre as verbas contratuais e rescisórias de todo o período imprescrito.`
  },
  {
    filename: 'reintegracao_posse.docx',
    bad: `Juiz, invadiram minha fazenda semana passada. Quebraram a cerca e colocaram gado lá. Tenho a escritura. Tira eles de lá.`,
    good: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO.

AÇÃO DE REINTEGRAÇÃO DE POSSE COM PEDIDO LIMINAR. O Autor, legítimo proprietário e possuidor, sofreu esbulho possessório há menos de ano e dia (posse nova). Os invasores destruíram cercas e ocuparam a área, caracterizando a violência da posse.

Com fulcro no art. 562 do CPC, requer-se a expedição de mandado liminar de reintegração de posse, 'inaudita altera pars', para restabelecer a ordem e o direito de propriedade violado, com autorização de força policial se necessário.`
  }
];

const NeuralDrafting: React.FC = () => {
  const [currentText, setCurrentText] = useState(LEGAL_SCENARIOS[0].bad);
  const [targetText, setTargetText] = useState(LEGAL_SCENARIOS[0].good);
  const [currentFilename, setCurrentFilename] = useState(LEGAL_SCENARIOS[0].filename);
  const [status, setStatus] = useState<'IDLE' | 'APPLYING_METHOD' | 'GENERATING' | 'COMPLETED'>('IDLE');
  
  const processingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (processingRef.current) clearInterval(processingRef.current);
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, []);

  const startSimulation = () => {
    if (status !== 'IDLE' && status !== 'COMPLETED') return;
    
    // Pick a random scenario
    const randomIndex = Math.floor(Math.random() * LEGAL_SCENARIOS.length);
    const scenario = LEGAL_SCENARIOS[randomIndex];

    setStatus('APPLYING_METHOD');
    setCurrentText(scenario.bad);
    setTargetText(scenario.good);
    setCurrentFilename(scenario.filename.replace('.docx', '_draft.txt'));

    // Phase 1: Applying Methodology
    let cycles = 0;
    processingRef.current = setInterval(() => {
      cycles++;
      if (Math.random() > 0.5) {
        const glitchChars = '█▓▒░<>/{}[]';
        const pos = Math.floor(Math.random() * scenario.bad.length);
        const newText = scenario.bad.substring(0, pos) + glitchChars[Math.floor(Math.random() * glitchChars.length)] + scenario.bad.substring(pos + 1);
        setCurrentText(newText);
      }

      if (cycles >= 25) {
        if (processingRef.current) clearInterval(processingRef.current);
        startGeneration(scenario);
      }
    }, 50);
  };

  const startGeneration = (scenario: LegalScenario) => {
    setStatus('GENERATING');
    setCurrentText('');
    setCurrentFilename(scenario.filename);
    
    let charIndex = 0;
    typingRef.current = setInterval(() => {
      if (charIndex < scenario.good.length) {
        setCurrentText(scenario.good.substring(0, charIndex + 1));
        charIndex++;
      } else {
        if (typingRef.current) clearInterval(typingRef.current);
        setStatus('COMPLETED');
      }
    }, 10);
  };

  return (
    <section id="demo" className="py-16 bg-slate-950 overflow-hidden relative border-t border-slate-900">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <RevealOnScroll>
              <div className="inline-block px-3 py-1 mb-4 text-[10px] font-mono font-bold text-cyan-400 border border-cyan-900 bg-cyan-900/10 rounded uppercase tracking-widest">
                Metodologia Proprietária
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                NEURAL <span className="text-cyan-400 text-glow">DRAFTING</span>
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                Não vendemos software. <span className="text-white font-bold">Ensinamos você a comandar a Inteligência Artificial.</span>
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Aprenda a criar <strong>Prompts Estruturados</strong> que transformam qualquer ferramenta (ChatGPT, Gemini, Claude) em um Associado Sênior. Você entra com o rascunho, a nossa metodologia extrai a peça perfeita.
              </p>
              
              <button 
                onClick={startSimulation}
                disabled={status === 'APPLYING_METHOD' || status === 'GENERATING'}
                className={`
                  group relative px-8 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-mono font-bold tracking-widest uppercase transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                  ${(status === 'APPLYING_METHOD' || status === 'GENERATING') ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {status === 'IDLE' || status === 'COMPLETED' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      VER O MÉTODO EM AÇÃO
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      APLICANDO PROTOCOLO...
                    </>
                  )}
                </span>
              </button>
            </RevealOnScroll>
          </div>

          {/* New Editor Window UI - Microsoft Word Style */}
          <div className="w-full md:w-1/2 relative group">
            <RevealOnScroll delay={200}>
               <div className="relative rounded-lg overflow-hidden bg-[#e3e3e3] border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 hover:scale-[1.02]">
                  
                  {/* Word Blue Title Bar */}
                  <div className="bg-[#2b579a] text-white px-4 py-2 flex justify-between items-center text-xs select-none">
                     <div className="flex gap-4 items-center">
                        <div className="flex gap-2 text-[10px] opacity-80">
                           <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">💾</div>
                           <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">↩️</div>
                        </div>
                        <span className="opacity-50">|</span>
                        <span className="font-semibold tracking-wide">Documento1 - Word</span>
                     </div>
                     <div className="flex gap-3 items-center opacity-80">
                         <span className="hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">_</span>
                         <span className="hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer">□</span>
                         <span className="hover:bg-red-500 px-2 py-0.5 rounded cursor-pointer">✕</span>
                     </div>
                  </div>

                  {/* Ribbon / Menu Bar */}
                  <div className="bg-white border-b border-gray-300 text-slate-800">
                     {/* Menu Tabs */}
                     <div className="flex px-4 py-1 gap-4 text-[11px] text-slate-600 border-b border-gray-200">
                        <span className="text-[#2b579a] font-bold border-b-2 border-[#2b579a] -mb-1.5 pb-1">Página Inicial</span>
                        <span>Inserir</span>
                        <span>Design</span>
                        <span>Layout</span>
                        <span>Referências</span>
                     </div>
                     
                     {/* Toolbar Buttons */}
                     <div className="px-4 py-2 flex items-center gap-4 h-12">
                        {/* Font Family Box */}
                        <div className="flex items-center gap-1 border border-gray-200 rounded px-1.5 py-0.5 bg-gray-50 h-7 w-32 justify-between cursor-default">
                           <span className="text-[11px] font-sans">Times New Roman</span>
                           <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </div>
                         {/* Font Size */}
                        <div className="flex items-center gap-1 border border-gray-200 rounded px-1.5 py-0.5 bg-gray-50 h-7 w-12 justify-between cursor-default">
                           <span className="text-[11px]">12</span>
                           <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </div>

                        <div className="w-px h-6 bg-gray-300 mx-1"></div>

                        {/* Bold/Italic/Underline */}
                        <div className="flex items-center gap-1 text-slate-600">
                           <div className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded font-bold font-serif cursor-pointer">N</div>
                           <div className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded italic font-serif cursor-pointer">I</div>
                           <div className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded underline font-serif cursor-pointer">S</div>
                        </div>

                        <div className="w-px h-6 bg-gray-300 mx-1"></div>

                        {/* Alignment */}
                         <div className="flex items-center gap-1 text-slate-500">
                           <div className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" /></svg>
                           </div>
                           <div className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">
                               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Document Workspace (Gray Background) */}
                  <div className="bg-[#e3e3e3] p-6 h-[400px] overflow-y-auto custom-scrollbar shadow-inner relative">
                      
                      {/* The "Paper" */}
                      <div className="bg-white max-w-full mx-auto shadow-xl min-h-[500px] p-8 md:p-10 relative transition-all duration-300">
                         
                         {/* Text Content */}
                         <div className={`font-serif text-black text-sm md:text-base leading-[1.6] whitespace-pre-wrap
                              ${status === 'APPLYING_METHOD' ? 'opacity-70 blur-[1px]' : ''}
                         `}>
                            {currentText}
                            {status === 'GENERATING' && (
                               <span className="inline-block w-px h-5 bg-black ml-0.5 animate-pulse align-middle"></span>
                            )}
                         </div>

                         {/* AI Processing Overlay on Paper */}
                         {status === 'APPLYING_METHOD' && (
                           <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[1px] z-10">
                              <div className="bg-[#2b579a] text-white px-4 py-2 rounded shadow-lg flex items-center gap-3 font-sans text-xs">
                                 <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                 Reescrevendo com Juris AI...
                              </div>
                           </div>
                         )}

                      </div>
                  </div>

                  {/* Status Footer */}
                  <div className="bg-[#2b579a] border-t border-blue-800/30 px-3 py-1 flex justify-between items-center text-[10px] text-white/90 select-none font-sans">
                     <div className="flex gap-4">
                        <span>Página 1 de 1</span>
                        <span>{currentText.split(' ').length} palavras</span>
                        <span>Português (Brasil)</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <span className="uppercase">{status === 'IDLE' ? 'PRONTO' : 'PROCESSANDO'}</span>
                        <div className="w-20 h-1.5 bg-blue-900/50 rounded-full overflow-hidden">
                           <div className="h-full bg-white/50 w-[70%]"></div>
                        </div>
                        <span>+ 100% -</span>
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