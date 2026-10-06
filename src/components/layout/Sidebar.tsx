import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Calendar as CalendarIcon, 
  BookOpen, 
  GraduationCap, 
  Settings, 
  X 
} from 'lucide-react';
import { useCampus } from '../../context/CampusContext';
import type { NavItem } from '../../types';

export const NAV_ITEMS: NavItem[] = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/calendar", icon: CalendarIcon, label: "Calendar" },
  { path: "/assignments", icon: BookOpen, label: "Assignments" },
  { path: "/grades", icon: GraduationCap, label: "Grades" },
  { path: "/settings", icon: Settings, label: "Settings" },
];

export const Sidebar: React.FC = () => {
  const { isCollapsed, setIsCollapsed, isMobile, currentPath, setCurrentPath } = useCampus();

  return (
    <motion.aside
      animate={{ 
        width: isMobile ? (isCollapsed ? 0 : 256) : (isCollapsed ? 88 : 256),
        opacity: isMobile && isCollapsed ? 0 : 1
      }}
      className={`fixed md:relative z-50 h-full bg-[#FDFBF7]/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl border-r border-[#F0EBE1] dark:border-white/5 flex flex-col pt-8 pb-6 transition-all duration-300 overflow-hidden ${isMobile && isCollapsed ? 'pointer-events-none' : ''}`}
    >
      <div className="flex items-center px-6 mb-12">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D8B4E2] to-[#AEC6CF] flex items-center justify-center shrink-0 shadow-sm">
          <BookOpen className="text-white" size={20} />
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="ml-4 font-bold text-xl tracking-tight text-slate-800 dark:text-white"
            >
              CAMPUS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {NAV_ITEMS.map((item, idx) => {
          const isActive = currentPath === item.path;
          return (
            <button 
              key={idx}
              onClick={() => {
                setCurrentPath(item.path);
                if (isMobile) setIsCollapsed(true);
              }}
              className={`w-full flex items-center px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-white dark:bg-white/10 shadow-sm dark:shadow-none text-[#748CAB] dark:text-[#AEC6CF]' 
                  : 'text-slate-500 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <item.icon 
                size={22} 
                className={`shrink-0 ${isActive ? 'text-[#748CAB] dark:text-[#AEC6CF]' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200'}`} 
              />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span 
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="ml-4 font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>

      {isMobile && (
        <button 
          onClick={() => setIsCollapsed(true)} 
          className="absolute top-6 right-4 p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>
      )}
    </motion.aside>
  );
};
