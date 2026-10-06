import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Circle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { useCampus } from '../../context/CampusContext';
import type { AssignmentItem } from '../../types';

export interface AssignmentsWidgetProps {
  tasks?: AssignmentItem[];
  toggleTask?: (id: number) => void;
  limit?: number;
}

export const AssignmentsWidget: React.FC<AssignmentsWidgetProps> = ({ 
  tasks: propTasks, 
  toggleTask: propToggleTask,
  limit = 3 
}) => {
  const context = useCampus();
  const tasks = propTasks ?? context.tasks;
  const toggleTask = propToggleTask ?? context.toggleTask;

  const displayTasks = tasks.slice(0, limit);
  const pendingCount = tasks.filter(t => !t.completed).length;
  
  return (
    <Card delay={0.2} className="h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold dark:text-white flex items-center gap-2">
            <BookOpen className="text-[#D8B4E2]" size={20} />
            Upcoming Assignments
          </h2>
          <Badge className="bg-[#F0EBE1] text-slate-600 dark:bg-white/10 dark:text-slate-300">
            {pendingCount} pending
          </Badge>
        </div>

        <div className="space-y-3">
          {displayTasks.map((task) => (
            <motion.div 
              layout
              key={task.id} 
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                task.completed 
                  ? 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5 opacity-60' 
                  : 'bg-white dark:bg-[#2A2A2C] border-slate-100 dark:border-white/10 shadow-sm hover:border-[#D8B4E2]/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <button 
                  onClick={() => toggleTask(task.id)} 
                  className="mt-0.5 shrink-0 text-slate-400 hover:text-[#D8B4E2] transition-colors"
                  aria-label={task.completed ? "Mark as pending" : "Mark as completed"}
                >
                  {task.completed ? <CheckCircle2 size={22} className="text-[#B2AC88]" /> : <Circle size={22} />}
                </button>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold truncate ${task.completed ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-800 dark:text-slate-100'}`}>
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <Badge className={task.color}>{task.platform}</Badge>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{task.subject}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
};
