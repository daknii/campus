import React from 'react';
import { Menu, Search, Bell, Sun, Moon } from 'lucide-react';
import { IconButton } from '../ui/IconButton';
import { useTheme } from '../../context/ThemeContext';
import { useCampus } from '../../context/CampusContext';

export interface HeaderProps {
  title: React.ReactNode;
  subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const { isDark, toggleTheme } = useTheme();
  const { isCollapsed, setIsCollapsed, searchQuery, setSearchQuery, user } = useCampus();

  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <button 
          className="md:hidden text-slate-600 dark:text-slate-300 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle navigation menu"
        >
          <Menu size={24} />
        </button>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-2 tracking-tight">
            {title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">{subtitle}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4">
        <div className="hidden md:flex items-center bg-white dark:bg-[#242426] rounded-full px-4 py-2 shadow-sm border border-[#F0EBE1] dark:border-white/5 transition-colors">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks, classes..." 
            className="bg-transparent border-none outline-none ml-2 text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 w-48 focus:w-56 transition-all"
          />
        </div>
        <IconButton icon={Bell} aria-label="Notifications" />
        <IconButton 
          icon={isDark ? Sun : Moon} 
          onClick={toggleTheme} 
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} 
        />
        <div 
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-[#242426] shadow-sm ml-2 cursor-pointer hover:scale-105 transition-transform"
          title={`${user.name} - ${user.course}`}
        >
          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};
