import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, CheckCircle2, Circle, Clock } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useCampus } from '../context/CampusContext';
import type { AssignmentFilter } from '../types';

export const AssignmentsPage: React.FC = () => {
  const { tasks, toggleTask } = useCampus();
  const [filter, setFilter] = useState<AssignmentFilter>('All');
  const [platformFilter, setPlatformFilter] = useState<string>('All');

  const platforms = ['All', 'Moodle', 'SIGAA'];

  const filteredTasks = tasks.filter(t => {
    if (filter === 'Pending' && t.completed) return false;
    if (filter === 'Completed' && !t.completed) return false;
    if (platformFilter !== 'All' && t.platform !== platformFilter) return false;
    return true;
  });

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <Card>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2 bg-[#FDFBF7] dark:bg-[#1C1C1E] p-1 rounded-xl border border-[#F0EBE1] dark:border-white/5 w-full md:w-auto">
            {(['All', 'Pending', 'Completed'] as AssignmentFilter[]).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all flex-1 md:flex-none ${
                  filter === f 
                    ? 'bg-white dark:bg-[#2A2A2C] shadow-sm text-slate-800 dark:text-white' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-white dark:bg-[#2A2A2C] border border-[#F0EBE1] dark:border-white/5 rounded-xl text-slate-600 dark:text-slate-300">
              <Filter size={16} />
              <span className="text-xs text-slate-400 mr-1">Platform:</span>
              <select
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value)}
                className="bg-transparent text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none cursor-pointer"
              >
                {platforms.map(p => (
                  <option key={p} value={p} className="bg-white dark:bg-[#2A2A2C] text-slate-800 dark:text-white">
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              No assignments found for the selected filter.
            </div>
          ) : (
            filteredTasks.map((task) => (
              <motion.div 
                layout
                key={task.id} 
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  task.completed 
                    ? 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5 opacity-60' 
                    : 'bg-white dark:bg-[#2A2A2C] border-slate-100 dark:border-white/10 shadow-sm hover:border-[#D8B4E2]/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => toggleTask(task.id)} 
                    className="shrink-0 text-slate-400 hover:text-[#D8B4E2] transition-colors"
                    aria-label={task.completed ? "Mark pending" : "Mark completed"}
                  >
                    {task.completed ? <CheckCircle2 size={28} className="text-[#B2AC88]" /> : <Circle size={28} />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-semibold truncate ${task.completed ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-800 dark:text-slate-100'}`}>
                      {task.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{task.subject}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <Badge className={task.color}>{task.platform}</Badge>
                      <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                        <Clock size={14} /> Deadline: {task.deadline}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </Card>
    </motion.div>
  );
};
