import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide ${className}`}>
    {children}
  </span>
);
