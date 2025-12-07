import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  bgImage: string;
  longDescription: string;
  features: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface GeminiAnalysisResponse {
  suggestedServices: string[];
  estimatedTimeline: string;
  technicalStack: string[];
  summary: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  stats: string[];
  longDescription: string;
  features: string[];
}