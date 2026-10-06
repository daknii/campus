import React, { createContext, useContext, useState, useEffect } from 'react';
import type { UserProfile, AssignmentItem } from '../types';
import { MOCK_USER, MOCK_ASSIGNMENTS } from '../data/mockData';

interface CampusContextType {
  user: UserProfile;
  tasks: AssignmentItem[];
  toggleTask: (id: number) => void;
  currentPath: string;
  setCurrentPath: (path: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CampusContext = createContext<CampusContextType | undefined>(undefined);

export const CampusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user] = useState<UserProfile>(MOCK_USER);
  const [tasks, setTasks] = useState<AssignmentItem[]>(MOCK_ASSIGNMENTS);
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CampusContext.Provider
      value={{
        user,
        tasks,
        toggleTask,
        currentPath,
        setCurrentPath,
        isCollapsed,
        setIsCollapsed,
        isMobile,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </CampusContext.Provider>
  );
};

export const useCampus = (): CampusContextType => {
  const context = useContext(CampusContext);
  if (!context) {
    throw new Error('useCampus must be used within a CampusProvider');
  }
  return context;
};
