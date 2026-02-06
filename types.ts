import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  trend: string;
}

export interface CourseLevel {
  id: string;        // e.g. "LVL_01"
  codeName: string;  // e.g. "BOOT_SECTOR"
  name: string;      // e.g. "PROTOCOLO ENTENDER"
  description: string;
  price: {
    original: string;      // "R$ 828"
    installments: string;  // "12x R$ 41,42"
    total: string;         // "TOTAL: R$ 497"
  };
  features: string[];
  recommended: boolean;
  link: string;
}

export interface Instructor {
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TransformationStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  result: string; // Ex: "Poupou 20h/semana"
}

export interface FAQItem {
  question: string;
  answer: string;
}