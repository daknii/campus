import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  AlertCircle, 
  Link as LinkIcon, 
  Check 
} from 'lucide-react';
import { GithubIcon } from '../components/ui/GithubIcon';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useCampus } from '../context/CampusContext';
import type { IntegrationItem } from '../types';

export const SettingsPage: React.FC = () => {
  const { user } = useCampus();

  const [services, setServices] = useState<IntegrationItem[]>([
    { name: "SIGAA", desc: "Academic grades, materials, and absences", icon: GraduationCap, connected: false },
    { name: "Moodle", desc: "Assignments and course files", icon: BookOpen, connected: true },
    { name: "Integra Garopaba", desc: "Campus events and news", icon: AlertCircle, connected: false },
    { name: "GitHub", desc: "Coding activity and repositories", icon: GithubIcon, connected: true },
  ]);

  const toggleConnection = (index: number) => {
    setServices(prev => prev.map((s, idx) => 
      idx === index ? { ...s, connected: !s.connected } : s
    ));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-4xl">
      <Card>
        <h2 className="text-lg font-bold dark:text-white mb-2">Profile Settings</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Manage your account details and preferences.</p>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white dark:border-[#242426] shadow-md shrink-0">
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="mb-2">
              <h3 className="font-bold text-slate-800 dark:text-white text-lg">{user.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{user.course}</p>
            </div>
            <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-sm font-medium rounded-xl transition-colors mb-2 text-slate-700 dark:text-slate-200">
              Change Avatar
            </button>
            <p className="text-xs text-slate-400">Supported formats: JPG, PNG, SVG</p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-bold dark:text-white mb-2">Connected Services</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Connect external platforms to sync data to your Campus dashboard.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl border border-[#F0EBE1] dark:border-white/5 bg-[#FDFBF7] dark:bg-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white dark:bg-[#2A2A2C] rounded-xl shadow-sm border border-slate-100 dark:border-white/5">
                      <service.icon size={20} className="text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-slate-100">{service.name}</h3>
                    </div>
                  </div>
                  <Badge className={
                    service.connected 
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" 
                      : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  }>
                    {service.connected ? "Connected" : "Not Connected"}
                  </Badge>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{service.desc}</p>
              </div>

              <button 
                onClick={() => toggleConnection(idx)}
                className={`w-full flex justify-center items-center gap-2 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                  service.connected
                    ? "border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/20"
                    : "border-dashed border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/5 hover:border-slate-400"
                }`}
              >
                {service.connected ? (
                  <>
                    <Check size={16} /> Disconnect Account
                  </>
                ) : (
                  <>
                    <LinkIcon size={16} /> Connect Account
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
