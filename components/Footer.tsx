import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-12 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="flex flex-col space-y-2 text-sm md:text-base font-light tracking-wide text-gray-300">
             <div className="mb-6">
                <a href="#" className="inline-block hover:opacity-90 transition-opacity">
                    <Logo />
                </a>
             </div>
            <p>2580 St Rose Pkwy # 335</p>
            <p>Henderson, NV 89074</p>
            <p className="text-white font-bold pt-2">(817) 567-8015</p>
            <p>info@nwerectors.com</p>
            <p className="pt-8 text-xs text-gray-500">© 2026 Nationwide Erectors</p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-end space-y-2 text-sm text-gray-300">
            <a href="#" className="hover:text-orange-500 transition-colors underline decoration-gray-600 underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors underline decoration-gray-600 underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};