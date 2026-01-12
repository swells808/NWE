import React from 'react';
import { Service } from '../types';
import { IconModel3D, IconDrafting, IconProposal, IconManagement, IconValue } from './Icons';

const services: Service[] = [
  {
    id: 'structural',
    title: '3D Modeling',
    description: 'Advanced 3D modeling for accurate project visualization and planning.',
    icon: IconModel3D,
  },
  {
    id: 'pre-engineered',
    title: 'In-House Engineering',
    description: 'Dedicated in-house engineering team for seamless project execution.',
    icon: IconDrafting,
  },
  {
    id: 'crane',
    title: 'Pre-Construction Proposal',
    description: 'Detailed pre-construction proposals to streamline your project kickoff.',
    icon: IconProposal,
  },
  {
    id: 'project-mgmt',
    title: 'Project Management',
    description: 'Expert project management ensuring timely and efficent project completion.',
    icon: IconManagement,
  },
  {
    id: 'value-eng',
    title: 'Value Engineering',
    description: 'Innovative value engineering to optimize cost efficiency and performance.',
    icon: IconValue,
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 uppercase">
            Core Services
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center group">
              <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-white border-4 border-navy-900 group-hover:border-orange-500 transition-colors duration-300 shadow-md">
                <service.icon className="w-12 h-12 text-navy-900 group-hover:text-orange-500 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 uppercase mb-4 font-display tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};