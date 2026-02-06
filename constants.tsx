import React from 'react';
import { NavItem, StatItem, CourseLevel, Instructor, Feature, Testimonial, FAQItem, TransformationStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'ECOSSISTEMA', href: '#features' },
  { label: 'JORNADA', href: '#roadmap' },
  { label: 'CURSOS', href: '#courses' },
  { label: 'DEPOIMENTOS', href: '#testimonials' },
];

export const STATS: StatItem[] = [
  { value: '14,200h', label: 'HORAS RECAPTURADAS', trend: '+12% M/M' },
  { value: '98.5%', label: 'PRECISÃO SINTÁTICA', trend: 'OTIMIZADO' },
  { value: 'R$ 4.2M', label: 'ECONOMIA GERADA', trend: 'TOTAL ACUMULADO' },
];

export const COURSES: CourseLevel[] = [
  {
    id: 'LVL 01',
    codeName: 'BOOT SECTOR',
    name: 'PROTOCOLO ENTENDER',
    description: 'O alicerce da transição digital. Domine a arquitetura de prompts e os protocolos de segurança para uso ético e seguro.',
    price: {
      original: 'R$ 828',
      installments: '12x R$ 41,42',
      total: 'TOTAL: R$ 497'
    },
    recommended: false,
    link: 'https://hotmart.com/pt-br',
    features: [
      'ARQUITETURAS NEURAIS',
      'SEGURANÇA DE DADOS FORENSES',
      'PROMPT ENGINEERING BASE'
    ]
  },
  {
    id: 'LVL 02',
    codeName: 'POWER UNIT',
    name: 'PROTOCOLO PRODUZIR',
    description: 'O multiplicador de escala. Redação de peças complexas e análise multimodal de provas para dobrar seu faturamento.',
    price: {
      original: 'R$ 1661',
      installments: '12x R$ 83,08',
      total: 'TOTAL: R$ 997'
    },
    recommended: false,
    link: 'https://hotmart.com/pt-br',
    features: [
      'TUDO DO PROTOCOLO ENTENDER',
      'REDAÇÃO FORENSE ACELERADA',
      'ANÁLISE SEMÂNTICA DE PROVAS'
    ]
  },
  {
    id: 'LVL 03',
    codeName: 'MASTER KERNEL',
    name: 'PROTOCOLO DOMINAR',
    description: 'O ápice da engenharia jurídica. Agentes autônomos e fluxos que trabalham enquanto você dorme.',
    price: {
      original: 'R$ 3328',
      installments: '12x R$ 166,42',
      total: 'TOTAL: R$ 1997'
    },
    recommended: true,
    link: 'https://hotmart.com/pt-br',
    features: [
      'TUDO DO ENTENDER + PRODUZIR',
      'CRIAÇÃO DE AGENTES JURÍDICOS',
      'AUTOMAÇÃO FULL WORKFLOW'
    ]
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    name: 'Dr. Pulini',
    role: 'Lead AI Engineer',
    specialty: 'Prompt Engineering & EU AI Act',
    image: 'https://picsum.photos/300/300?grayscale&random=1'
  },
  {
    name: 'Dr. Helton',
    role: 'Legal Futurist',
    specialty: 'Governança & Visual Law',
    image: 'https://picsum.photos/300/300?grayscale&random=2'
  }
];

export const FEATURES: Feature[] = [
  {
    id: '01',
    title: 'AGENTES AUTÔNOMOS',
    description: 'Crie robôs jurídicos que executam tarefas repetitivas, como triagem de provas e monitoramento de diários oficiais.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'BUSCA SEMÂNTICA',
    description: 'Domine IAs de busca que encontram jurisprudência por conceito, não apenas por palavras-chave limitadas.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'MULTIMODALIDADE',
    description: 'Use IA para analisar vídeos de audiências, extrair dados de áudios e refatorar documentos escaneados.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'ÉTICA SISTÊMICA',
    description: 'Garanta a segurança dos dados dos seus clientes em qualquer ferramenta, com protocolos de sigilo avançados.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

export const TRANSFORMATION_STEPS: TransformationStep[] = [
  {
    id: '01',
    title: 'PROTOCOLO: ENTENDER',
    description: 'Construção da base ética e técnica. Remova o receio tecnológico e aprenda a operar IAs com total segurança profissional.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'PROTOCOLO: PRODUZIR',
    description: 'Aceleração de entrega. Implemente prompts de elite e automação de peças para dobrar sua produtividade sem perder qualidade.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'PROTOCOLO: DOMINAR',
    description: 'Vantagem Competitiva. Use a IA para gestão, escala estratégica e diferenciação real no mercado jurídico moderno.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Ricardo M.',
    role: 'Sócio Sênior | Trabalhista',
    content: 'O módulo de Automação de Petições reduziu o tempo da minha equipe em 80%. O que levava 5 dias, agora fazemos em 4 horas. É desleal com a concorrência.',
    image: 'https://picsum.photos/100/100?random=10',
    result: '⚡ EFICIÊNCIA: +400%'
  },
  {
    id: 2,
    name: 'Dra. Amanda S.',
    role: 'Advogada Autônoma | Cível',
    content: 'Eu tinha medo de tecnologia. O curso me ensinou que não preciso saber programar, apenas "falar" com a máquina. Hoje atendo 3x mais clientes sozinha.',
    image: 'https://picsum.photos/100/100?random=11',
    result: '🚀 FATURAMENTO: 3x MAIOR'
  },
  {
    id: 3,
    name: 'Dr. Paulo "Tech" B.',
    role: 'Head de Inovação',
    content: 'A análise preditiva me permitiu prever o resultado de uma liminar com 95% de precisão baseada no histórico do juiz. O cliente ficou em choque.',
    image: 'https://picsum.photos/100/100?random=12',
    result: '🎯 PRECISÃO: 95%'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Preciso saber programar (Python/Código)?",
    answer: "Não. O Nível 01 e 02 são focados em Engenharia de Prompt (Linguagem Natural). Você usará o português estruturado para comandar a IA. O código é opcional e ensinado apenas no Nível 02 como bônus."
  },
  {
    question: "A OAB permite o uso dessas ferramentas?",
    answer: "Absolutamente. A IA é uma ferramenta de produtividade, como um editor de texto. A responsabilidade técnica e a revisão final continuam sendo do advogado. Ensinamos a ética no uso da IA."
  },
  {
    question: "Serve para qual área do Direito?",
    answer: "Todas. Os princípios de Lógica Jurídica e Estruturação de Argumentos que ensinamos são universais. Temos templates específicos para Cível, Trabalhista, Previdenciário e Tributário."
  },
  {
    question: "Tenho garantia se não gostar?",
    answer: "Sim. Garantia incondicional de 7 dias. Se você achar que o 'Mainframe' não é para você, devolvemos 100% do seu investimento sem perguntas."
  }
];