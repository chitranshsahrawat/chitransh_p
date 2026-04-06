import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-dark-bg flex flex-col items-center justify-center p-6"
        >
          <div className="relative w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold font-display"
              >
                Chitransh <span className="text-neon-blue">Sahrawat</span>
              </motion.h2>
              <div className="text-neon-blue font-mono text-sm">{Math.round(progress)}%</div>
            </div>
            
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                System Status: <span className="text-neon-blue">Initializing</span>
              </div>
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest text-right">
                Core: <span className="text-neon-purple">AI Engine</span>
              </div>
            </div>
            
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-12 text-center text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]"
            >
              Engineering Intelligent Systems
            </motion.div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.1),transparent_70%)]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
