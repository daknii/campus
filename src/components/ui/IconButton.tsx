import React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  iconSize?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon: Icon, 
  iconSize = 20,
  onClick, 
  className = "", 
  ...props 
}) => (
  <button 
    onClick={onClick}
    className={`p-2 rounded-xl transition-all duration-200 hover:bg-[#F0EBE1] dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 ${className}`}
    {...props}
  >
    <Icon size={iconSize} />
  </button>
);
