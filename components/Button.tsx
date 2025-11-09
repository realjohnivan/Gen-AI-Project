import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyle = "px-5 py-2.5 text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300";
  
  const styles = {
    primary: "bg-[#ff8600] text-white hover:bg-[#e87900] focus:ring-[#ff8600]",
    secondary: "bg-gray-100 text-[#160578] hover:bg-gray-200 focus:ring-gray-300",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};