import React from 'react';
import { Clock, CheckCircle2, MapPin } from 'lucide-react';
import { Card } from '../ui/Card';
import { MOCK_CLASSES } from '../../data/mockData';
import type { ClassItem } from '../../types';

export interface ClassesWidgetProps {
  classes?: ClassItem[];
  onViewAll?: () => void;
}

export const ClassesWidget: React.FC<ClassesWidgetProps> = ({ 
  classes = MOCK_CLASSES,
  onViewAll 
}) => {
  return (
    <Card delay={0.1} className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold dark:text-white flex items-center gap-2">
          <Clock className="text-[#AEC6CF]" size={20} />
          Today's Classes
        </h2>
        {onViewAll && (
          <button 
            onClick={onViewAll}
            className="text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            View All
          </button>
        )}
      </div>
      
      <div className="relative flex-1">
        <div className="absolute left-3.5 top-2 bottom-4 w-0.5 bg-slate-100 dark:bg-slate-800" />
        <div className="space-y-6 relative">
          {classes.map((cls) => (
            <div key={cls.id} className="flex gap-4 group">
              <div className="relative z-10 flex flex-col items-center mt-1">
                <div 
                  className={`w-7 h-7 rounded-full flex items-center justify-center bg-white dark:bg-[#242426] border-2 transition-colors duration-300
                    ${cls.status === 'completed' ? 'border-[#B2AC88]' : 
                      cls.status === 'current' ? 'border-[#D8B4E2]' : 'border-slate-200 dark:border-slate-700'}`}
                >
                  {cls.status === 'completed' ? (
                    <CheckCircle2 size={14} className="text-[#B2AC88]" />
                  ) : cls.status === 'current' ? (
                    <div className="w-2.5 h-2.5 bg-[#D8B4E2] rounded-full animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  )}
                </div>
              </div>
              
              <div 
                className={`flex-1 p-4 rounded-2xl transition-all duration-300 border ${
                  cls.status === 'current' 
                    ? 'bg-[#FDFBF7] dark:bg-white/5 border-[#D8B4E2]/30 shadow-sm' 
                    : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-semibold ${cls.status === 'completed' ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-800 dark:text-slate-100'}`}>
                    {cls.subject}
                  </h3>
                  <span className="text-xs font-medium text-slate-500">{cls.time}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-2">
                  <MapPin size={14} /> {cls.room}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
