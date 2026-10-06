import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { IconButton } from '../components/ui/IconButton';
import { MOCK_CALENDAR_EVENTS } from '../data/mockData';
import type { CalendarEvent } from '../types';

export const CalendarPage: React.FC = () => {
  const [selectedMonth] = useState('September 2026');
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const startOffset = 2; // Simulating month starting on Tuesday
  const daysArray = (Array(startOffset).fill(null) as (number | null)[]).concat(daysInMonth);
  
  const getEventsForDate = (date: number): CalendarEvent[] => 
    MOCK_CALENDAR_EVENTS.filter(e => e.date === date);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-6"
    >
      <Card>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
            {selectedMonth}
          </h2>
          <div className="flex items-center gap-2">
            <IconButton icon={ChevronLeft} aria-label="Previous month" />
            <span className="text-sm font-medium px-2 text-slate-700 dark:text-slate-300">Today</span>
            <IconButton icon={ChevronRight} aria-label="Next month" />
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-4 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2 md:gap-4">
          {daysArray.map((date, i) => {
            const events = date ? getEventsForDate(date) : [];
            const isToday = date === 25; // Matching mocked today
            
            return (
              <div 
                key={i} 
                className={`min-h-[80px] p-2 rounded-2xl border transition-all ${
                  !date ? 'bg-transparent border-transparent' : 
                  isToday ? 'bg-[#FDFBF7] dark:bg-white/5 border-[#D8B4E2]/50 shadow-sm' : 
                  'bg-white dark:bg-[#2A2A2C] border-slate-100 dark:border-white/10 hover:border-slate-200 dark:hover:border-white/20'
                }`}
              >
                {date && (
                  <>
                    <span className={`text-sm font-medium ${isToday ? 'text-[#D8B4E2] font-bold' : 'text-slate-600 dark:text-slate-300'}`}>
                      {date}
                    </span>
                    <div className="mt-1 space-y-1">
                      {events.map((e, idx) => (
                        <div 
                          key={idx} 
                          className={`text-[10px] truncate px-1.5 py-0.5 rounded-md font-medium transition-colors
                            ${e.type === 'exam' 
                              ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' 
                              : e.type === 'assignment' 
                              ? 'bg-[#F0EBE1] text-slate-700 dark:bg-white/10 dark:text-slate-300' 
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}
                          title={e.title}
                        >
                          {e.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
};
