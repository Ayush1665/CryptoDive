import React from "react";
export function Button({ children, onClick, variant = 'default', className = '', ...props }) {
  const baseStyles = 'px-4 py-1 rounded text-[#000000] font-medium transition duration-300';
  const variants = {
    
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${className} ${variants[variant] || variants.default}`}
      {...props}
    >
      {children}
    </button>
  );
}
