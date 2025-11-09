import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Credtics.com. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#ff8600] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ff8600] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};