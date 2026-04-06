import { motion } from 'motion/react';
import { Globe, Cpu, Zap, Code } from 'lucide-react';

const stats = [
  { icon: Cpu, label: 'Edge AI Focus', value: 'Real-time' },
  { icon: Globe, label: 'Global Mindset', value: 'International' },
  { icon: Zap, label: 'Latency', value: '<100ms' },
  { icon: Code, label: 'Full Stack', value: 'Systems' },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-blue/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-purple/20 blur-[80px] rounded-full" />
            
            <div className="relative glass rounded-3xl p-1 border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/2.jpeg"
                alt="Chitransh Sahrawat"
                className="w-full aspect-square object-cover rounded-[22px] grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl border-white/20 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg">Chitransh Sahrawat</h3>
                    <p className="text-sm text-white/60">AI Engineer | Edge AI Specialist</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center border border-neon-blue/30">
                    <Globe size={18} className="text-neon-blue" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Engineering the <span className="text-gradient">Next Generation</span> of Intelligent Systems
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                I am a third-year AI student with a deep obsession for <span className="text-white font-medium">Edge AI</span> and real-time systems. My focus isn't just on building models, but on deploying them where they matter most—at the edge, where latency and privacy are paramount.
              </p>
              <p>
                From spatial intelligence for the visually impaired to digital twins for vehicle telemetry, I build systems that solve <span className="text-white font-medium">real-world problems</span>. I thrive at the intersection of mobility, safety, and accessibility.
              </p>
              <p>
                With a strong interest in global engineering ecosystems, I am looking to bring my expertise in <span className="text-neon-blue font-mono">YOLOv10</span>, <span className="text-neon-purple font-mono">OpenVINO</span>, and full-stack development to international research labs and mobility companies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-4 rounded-2xl border-white/5 text-center hover:border-neon-blue/30 transition-colors group"
                >
                  <stat.icon size={24} className="mx-auto mb-3 text-white/40 group-hover:text-neon-blue transition-colors" />
                  <div className="text-xl font-bold font-display">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
