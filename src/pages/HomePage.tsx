import React from 'react';
import { motion } from 'framer-motion';
import { ClassesWidget } from '../components/widgets/ClassesWidget';
import { AssignmentsWidget } from '../components/widgets/AssignmentsWidget';
import { AcademicOverviewWidget } from '../components/widgets/AcademicOverviewWidget';
import { CatCompanionWidget } from '../components/widgets/CatCompanionWidget';
import { GitHubWidget } from '../components/widgets/GitHubWidget';
import { useCampus } from '../context/CampusContext';

export const HomePage: React.FC = () => {
  const { setCurrentPath } = useCampus();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
    >
      <div className="lg:col-span-1 h-[420px]">
        <ClassesWidget onViewAll={() => setCurrentPath('/calendar')} />
      </div>
      <div className="lg:col-span-1 h-[420px]">
        <AssignmentsWidget />
      </div>
      <div className="lg:col-span-1 flex flex-col gap-6 h-[420px]">
        <div className="flex-1 min-h-0">
          <AcademicOverviewWidget />
        </div>
        <div className="h-40 shrink-0">
          <CatCompanionWidget />
        </div>
      </div>
      <GitHubWidget />
    </motion.div>
  );
};
