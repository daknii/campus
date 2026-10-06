import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cat } from 'lucide-react';
import { Card } from '../ui/Card';

const MEOW_MESSAGES = [
  "Meow! Keep it up! ✨",
  "Don't forget to hydrate! 💧",
  "You're doing great, Dani! 🐾",
  "One step at a time! 🚀",
  "Purr-fect day for coding! 💻"
];

export const CatCompanionWidget: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const handlePet = () => {
    setMessageIndex((prev) => (prev + 1) % MEOW_MESSAGES.length);
  };

  return (
    <Card 
      delay={0.4} 
      className="bg-gradient-to-br from-[#FDFBF7] to-[#F0EBE1] dark:from-[#242426] dark:to-[#1C1C1E] relative overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer select-none h-full"
      onClick={handlePet}
      title="Click to interact with your campus companion!"
    >
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/40 dark:bg-white/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#B2AC88]/10 to-transparent" />
      
      <motion.div 
        animate={{ y: [0, -5, 0] }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="w-20 h-20 bg-white dark:bg-[#323234] rounded-full shadow-sm flex items-center justify-center mb-4 border-4 border-[#FDFBF7] dark:border-[#1C1C1E] mx-auto hover:scale-110 transition-transform">
          <Cat size={32} className="text-[#748CAB] dark:text-[#AEC6CF]" />
        </div>
        <div className="absolute -top-2 -right-4 bg-white dark:bg-[#323234] px-3 py-1.5 rounded-2xl rounded-bl-none shadow-sm text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-white/5 whitespace-nowrap">
          {MEOW_MESSAGES[messageIndex]}
        </div>
      </motion.div>
    </Card>
  );
};
