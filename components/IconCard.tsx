import React from 'react';

interface IconCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
}

export const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-[#ff8600] hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#ff8600]/10 text-[#ff8600] mb-4 border border-[#ff8600]/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#160578] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};