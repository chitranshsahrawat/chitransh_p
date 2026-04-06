import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="text-2xl font-bold font-display flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-black text-sm glow-blue group-hover:scale-110 transition-transform">
                <span className="font-mono">C</span>
              </div>
              <span>Chitransh <span className="text-neon-blue">Sahrawat</span></span>
            </a>
            <p className="text-sm text-white/40 max-w-xs text-center md:text-left">
              Engineering intelligent systems for the real world. AI Engineer | Edge AI | Full Stack Systems.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/chitranshsahrawat" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-blue transition-colors">
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-blue transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:chitranshsahrawat@gmail.com" className="text-white/40 hover:text-neon-blue transition-colors">
              <Mail size={24} />
            </a>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-neon-blue hover:border-neon-blue/30 transition-all"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20 font-mono uppercase tracking-widest">
          <p>© 2026 Chitransh Sahrawat. All rights reserved.</p>
          <p>Built with React + Three.js + Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
