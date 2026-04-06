import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const typingTexts = [
  'Full Stack Developer',
  'Java Developer',
  'AI Specialist',
  'Digital Twin Systems'
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-6">
            <img 
              src="/2.jpeg" 
              alt="Chitransh Sahrawat" 
              className="w-6 h-6 rounded-full border border-neon-blue/30 object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            Available for International Internships
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-neon-blue font-mono tracking-[0.3em] uppercase text-sm">Chitransh Sahrawat</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Engineering <span className="text-gradient">Intelligent Systems</span> for the Real World <span className="inline-block animate-bounce">🚀</span>
          </h1>
          
          <p className="text-xl text-white/60 mb-8 max-w-lg">
            AI Engineer | Edge AI | Full Stack Systems. Building the future of mobility and intelligent infrastructure.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div className="text-lg font-mono text-neon-purple flex items-center gap-2">
              <span className="text-white/40">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {typingTexts[textIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="w-2 h-5 bg-neon-purple animate-pulse" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-neon-blue text-black font-bold flex items-center gap-2 glow-blue transition-all hover:brightness-110"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight size={20} />
            </motion.button>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-neon-purple text-neon-purple hover:bg-neon-purple/10 transition-all flex items-center gap-2 font-bold"
            >
              Download CV <ArrowRight size={20} className="rotate-90" />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 blur-[120px] rounded-full animate-pulse" />
          
          <div className="relative glass rounded-[40px] p-3 border-white/10 overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 aspect-[3/4] flex items-center justify-center overflow-hidden rounded-[32px]">
              <img 
                src="/2.jpeg" 
                alt="Chitransh Sahrawat" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Futuristic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-40" />
              
              {/* Status Badge */}
              <div className="absolute top-6 left-6">
                <div className="glass px-4 py-2 rounded-full border-white/20 backdrop-blur-md flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-blue animate-ping" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/90">AI Specialist</span>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-neon-blue/40 rounded-tr-[32px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-neon-purple/40 rounded-bl-[32px] pointer-events-none" />
            </div>
          </div>
          
          {/* Floating Data Points */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-1/4 glass p-4 rounded-2xl border-white/10 backdrop-blur-xl z-20"
          >
            <div className="text-neon-blue font-bold text-lg">Full Stack</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">Developer</div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-8 bottom-1/4 glass p-4 rounded-2xl border-white/10 backdrop-blur-xl z-20"
          >
            <div className="text-neon-purple font-bold text-lg">Java</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">Developer</div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-neon-blue to-transparent"
        />
      </motion.div>
    </section>
  );
}
