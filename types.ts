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
  level: string;
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
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