import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] sm:h-[700px] w-full bg-navy-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Steel construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-tight leading-tight mb-6 shadow-black drop-shadow-lg">
          Building America's Future,
          <br />
          <span className="text-gray-100">One Beam at a Time.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl font-light drop-shadow-md">
          Leading Steel Erection Services for Structural and Pre-Engineered Buildings
        </p>
        <a
          href="mailto:info@nwerectors.com"
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-transform hover:scale-105 shadow-lg"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
};