import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 uppercase mb-8">
          Who We Are
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Nationwide Erectors: Leading Steel Erection Company in the USA<br />
          Nationwide Erectors is a premier steel erection company, specializing in commercial and industrial steel erection projects. With decades of experience, our team specializes in a wide range of steel erection projects, including warehouse steel erection, high-rise building steel erection, pre-engineered steel buildings, and custom steel erection projects. We operate from offices in Dallas, TX, and Las Vegas, NV, deploying crews nationwide.<br />
          Our expertise spans large-scale projects such as massive football stadiums in Texas to smaller projects like setting precast in Nevada. Our years of experience in various steel erection projects have earned us a reputation for quality, safety, and attention to detail.<br />
          At Nationwide Erectors, we prioritize investing in both technology and people. By leveraging modern tools and innovative approaches in the traditional steel construction industry, we ensure faster and safer project turnarounds than anyone else in the field.<br />
          Join our many satisfied customers and industry partners by choosing Nationwide Erectors for your next project. Let us help make your future construction dreams a smooth reality.
        </p>
      </div>
    </section>
  );
};