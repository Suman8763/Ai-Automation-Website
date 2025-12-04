import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className, 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none tracking-wide";
  
  const variants = {
    // Electric Blue Gradient
    primary: "bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-blue-500/50",
    
    // Glassmorphism
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-sm shadow-lg",
    
    // Outline
    outline: "bg-transparent border border-[#2A2A2A] text-gray-300 hover:text-white hover:border-gray-500 hover:bg-white/5",
    
    // Ghost
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;