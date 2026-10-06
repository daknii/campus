import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { CalendarPage } from './pages/CalendarPage';
import { AssignmentsPage } from './pages/AssignmentsPage';
import { GradesPage } from './pages/GradesPage';
import { SettingsPage } from './pages/SettingsPage';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CampusProvider, useCampus } from './context/CampusContext';

const MainLayout: React.FC = () => {
  const { isDark } = useTheme();
  const { currentPath, isMobile, isCollapsed, setIsCollapsed, user } = useCampus();

  const getPageConfig = () => {
    const formattedDate = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    });

    switch (currentPath) {
      case '/':
        return {
          component: <HomePage />,
          title: (
            <span>
              Welcome back, {user.name}{' '}
              <span className="text-2xl origin-bottom-right hover:animate-wave inline-block cursor-default">
                👋
              </span>
            </span>
          ),
          subtitle: `${formattedDate} • ${user.course}`
        };
      case '/calendar':
        return {
          component: <CalendarPage />,
          title: 'Calendar',
          subtitle: 'Manage your academic schedule and events.'
        };
      case '/assignments':
        return {
          component: <AssignmentsPage />,
          title: 'Assignments',
          subtitle: 'Track your pending and completed tasks.'
        };
      case '/grades':
        return {
          component: <GradesPage />,
          title: 'Grades & Attendance',
          subtitle: 'Academic overview and course progress.'
        };
      case '/settings':
        return {
          component: <SettingsPage />,
          title: 'Settings',
          subtitle: 'Customize your dashboard and integrations.'
        };
      default:
        return {
          component: <HomePage />,
          title: 'Welcome back',
          subtitle: 'Dashboard'
        };
    }
  };

  const currentConfig = getPageConfig();

  return (
    <div className={`${isDark ? 'dark' : ''} font-sans antialiased text-slate-900`}>
      <div className="flex h-screen bg-[#FDFBF7] dark:bg-[#1A1A1C] transition-colors duration-500 overflow-hidden text-slate-800 dark:text-slate-200">
        {/* Mobile backdrop */}
        {isMobile && !isCollapsed && (
          <div 
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCollapsed(true)}
          />
        )}

        <Sidebar />

        <main className="flex-1 overflow-y-auto w-full relative">
          <div className="max-w-7xl mx-auto px-6 py-8 md:px-10 md:py-12 min-h-full flex flex-col justify-between">
            <div>
              <Header 
                title={currentConfig.title}
                subtitle={currentConfig.subtitle}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPath}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentConfig.component}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <CampusProvider>
        <MainLayout />
      </CampusProvider>
    </ThemeProvider>
  );
}
