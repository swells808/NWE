import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}