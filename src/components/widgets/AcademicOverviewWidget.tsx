import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { MOCK_ACADEMIC } from '../../data/mockData';
import type { AcademicStats } from '../../types';

export interface AcademicOverviewWidgetProps {
  stats?: AcademicStats;
  delay?: number;
}

export const AcademicOverviewWidget: React.FC<AcademicOverviewWidgetProps> = ({ 
  stats = MOCK_ACADEMIC,
  delay = 0.3 
}) => {
  const progressPercent = (stats.completedCredits / stats.totalCredits) * 100;

  return (
    <Card delay={delay} className="h-full flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold dark:text-white flex items-center gap-2 mb-6">
          <TrendingUp className="text-[#B2AC88]" size={20} />
          Academic Overview
        </h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#FDFBF7] dark:bg-white/5 rounded-2xl p-4 border border-[#F0EBE1] dark:border-white/5">
            <p className="text-sm font-medium text-slate-500 mb-1">Average Grade</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-slate-800 dark:text-white">{stats.averageGrade}</span>
              <span className="text-sm font-medium text-[#B2AC88]">/ 10</span>
            </div>
          </div>
          <div className="bg-[#FDFBF7] dark:bg-white/5 rounded-2xl p-4 border border-[#F0EBE1] dark:border-white/5">
            <p className="text-sm font-medium text-slate-500 mb-1">Attendance</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-slate-800 dark:text-white">{stats.attendance}%</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
          <span>Course Progress</span>
          <span>{stats.completedCredits} / {stats.totalCredits} Credits</span>
        </div>
        <div className="h-3 w-full bg-[#F0EBE1] dark:bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#AEC6CF] to-[#D8B4E2] rounded-full"
          />
        </div>
      </div>
    </Card>
  );
};
