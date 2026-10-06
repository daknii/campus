import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitCommit } from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { MOCK_COMMITS } from '../../data/mockData';
import type { GitHubCommit } from '../../types';

export interface GitHubWidgetProps {
  commits?: GitHubCommit[];
}

export const GitHubWidget: React.FC<GitHubWidgetProps> = ({ 
  commits = MOCK_COMMITS 
}) => {
  // Generate consistent contribution grid
  const weeks = useMemo(() => {
    return Array.from({ length: 20 }).map((_, weekIdx) => 
      Array.from({ length: 7 }).map((_, dayIdx) => {
        // Deterministic pseudo-random pattern based on indices
        const seed = (weekIdx * 7 + dayIdx * 13) % 17;
        return seed > 6 ? (seed % 4) : 0;
      })
    );
  }, []);

  return (
    <Card delay={0.5} className="md:col-span-2 lg:col-span-3">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold dark:text-white flex items-center gap-2">
              <GithubIcon className="text-slate-800 dark:text-white" size={20} />
              GitHub Activity
            </h2>
            <Badge className="bg-[#F0EBE1] text-slate-600 dark:bg-white/10 dark:text-slate-300">
              142 contributions
            </Badge>
          </div>
          
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-1 min-w-max">
              {weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {week.map((day, j) => (
                    <motion.div 
                      key={j} 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + (i * 0.015) + (j * 0.01) }}
                      className={`w-3 h-3 rounded-sm ${day === 0 ? 'bg-slate-100 dark:bg-white/5' : ''}`}
                      style={{ backgroundColor: day > 0 ? `rgba(178, 172, 136, ${day * 0.3})` : undefined }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-72 flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Recent Commits</h3>
          <div className="space-y-4">
            {commits.map(commit => (
              <div key={commit.id} className="flex items-start gap-3">
                <div className="mt-1">
                  <GitCommit size={16} className="text-slate-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-1">{commit.message}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-[#AEC6CF]">{commit.repo}</span>
                    <span className="text-[10px] text-slate-400">• {commit.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
