import React from 'react';
import { NavItem, StatItem, CourseLevel, Instructor, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '//_CURSOS', href: '#courses' },
  { label: '//_METRICAS', href: '#stats' },
  { label: '//_AI_DEMO', href: '#demo' },
  { label: '//_CONSULTOR', href: '#consultant' },
];

export const STATS: StatItem[] = [
  { value: '14,200h', label: 'HORAS RECAPTURADAS', trend: '+12% M/M' },
  { value: '98.5%', label: 'PRECISÃO SINTÁTICA', trend: 'OTIMIZADO' },
  { value: 'R$ 4.2M', label: 'ECONOMIA GERADA', trend: 'TOTAL ACUMULADO' },
];

export const COURSES: CourseLevel[] = [
  {
    level: 'LVL_01',
    name: 'JURIS_INIT',
    price: 'R$ 997',
    recommended: false,
    features: [
      'Engenharia de Prompts Básica',
      'Automação de Petições Simples',
      'Acesso ao Discord da Comunidade',
      'Certificado Hash Validado'
    ]
  },
  {
    level: 'LVL_02',
    name: 'NEURAL_ADVOCACY',
    price: 'R$ 1.997',
    recommended: true,
    features: [
      'Todos os recursos do LVL_01',
      'Fine-Tuning de Modelos Jurídicos',
      'Análise Preditiva de Sentenças',
      'Workshop de Python para Advogados',
      'Acesso Antecipado a Ferramentas'
    ]
  },
  {
    level: 'LVL_03',
    name: 'CYBER_PARTNER',
    price: 'R$ 4.997',
    recommended: false,
    features: [
      'Mentoria Individual de Kernel',
      'Implementação de Servidor Privado',
      'Auditoria de Segurança de Dados',
      'Rede Neural Exclusiva',
      'Mastermind Hacker-Jurídico'
    ]
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    name: 'Dra. Elena "Glitch" Vaz',
    role: 'Chief Legal Engineer',
    specialty: 'Direito Digital & Criptografia',
    image: 'https://picsum.photos/300/300?grayscale&random=1'
  },
  {
    name: 'Dr. Marcus "Mainframe" Silva',
    role: 'AI Architect',
    specialty: 'LLMs para Contratos',
    image: 'https://picsum.photos/300/300?grayscale&random=2'
  }
];

export const FEATURES: Feature[] = [
  {
    id: '01',
    title: 'PROMPT ENGINEERING FORENSE',
    description: 'Aprenda a manipular a latência e temperatura dos modelos para extrair argumentos jurídicos infalíveis.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'ANÁLISE PREDITIVA DE KERNEL',
    description: 'Utilize big data para prever o outcome de juízes específicos com base em padrões históricos de decisão.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'AUTOMATIZAÇÃO DE WORKFLOW',
    description: 'Crie agentes autônomos que redigem, revisam e protocolam peças enquanto você dorme.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
];
