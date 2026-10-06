import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { AcademicOverviewWidget } from '../components/widgets/AcademicOverviewWidget';
import { MOCK_GRADES } from '../data/mockData';
import type { GradeItem } from '../types';

export interface GradesPageProps {
  grades?: GradeItem[];
}

export const GradesPage: React.FC<GradesPageProps> = ({ 
  grades = MOCK_GRADES 
}) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <h2 className="text-lg font-bold dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-[#AEC6CF]" size={20} />
            Current Semester Subjects
          </h2>
          <div className="space-y-6">
            {grades.map(subject => (
              <div key={subject.id} className="p-4 rounded-2xl bg-white dark:bg-[#2A2A2C] border border-[#F0EBE1] dark:border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100">{subject.subject}</h3>
                    <p className="text-sm text-slate-500 mt-1">Absences: {subject.absences} / {subject.maxAbsences}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-2xl font-bold ${subject.grade >= 7 ? 'text-slate-800 dark:text-white' : 'text-red-500'}`}>
                      {subject.grade.toFixed(1)}
                    </span>
                    <p className="text-xs font-medium text-slate-400">Current Average</p>
                  </div>
                </div>
                <div className="relative h-2 w-full bg-[#F0EBE1] dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(subject.absences / subject.maxAbsences) * 100}%` }}
                    transition={{ duration: 1 }}
                    className={`absolute left-0 top-0 h-full rounded-full ${subject.absences > subject.maxAbsences * 0.75 ? 'bg-red-400' : 'bg-[#D8B4E2]'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <div className="flex flex-col gap-6">
          <AcademicOverviewWidget />
        </div>
      </div>
    </motion.div>
  );
};
