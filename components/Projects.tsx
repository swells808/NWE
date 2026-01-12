import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'University of Houston',
    imageUrl: 'https://www.dropbox.com/scl/fi/6w0fif6kslprjr6niffa9/landing-univeristyofhoustonrender.png?rlkey=lmiugxl3ivvkhrjvbqzy3yzgp&raw=1',
    category: 'Commercial',
  },
  {
    id: '2',
    title: 'Fishers Event Center',
    imageUrl: 'https://www.dropbox.com/scl/fi/vjlo6r3zh93hwz6ghnggy/landing-fishereventcenter.png?rlkey=oxcx3y05xpdm9hz3o8fam9psj&raw=1',
    category: 'Industrial',
  },
  {
    id: '3',
    title: 'Tarleton State',
    imageUrl: 'https://www.dropbox.com/scl/fi/o3fslp4su3dhrm1npwt4j/landing-tareltonstate.png?rlkey=qkv2c83urnkdww4c5gr260he1&raw=1',
    category: 'Infrastructure',
  },
];

export const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 uppercase">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-4 shadow-lg bg-gray-200">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 uppercase font-display">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};