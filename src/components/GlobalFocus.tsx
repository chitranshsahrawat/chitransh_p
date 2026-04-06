import { motion } from 'motion/react';
import { Globe, Users, Heart, Lightbulb } from 'lucide-react';

const focusAreas = [
  {
    icon: Users,
    title: 'International Collaboration',
    description: 'Eager to work with diverse, global teams to solve complex engineering challenges.',
  },
  {
    icon: Globe,
    title: 'AI + Mobility',
    description: 'Passionate about the future of intelligent transportation and autonomous systems.',
  },
  {
    icon: Heart,
    title: 'Human-Centric Innovation',
    description: 'Building technology that prioritizes accessibility, safety, and human well-being.',
  },
  {
    icon: Lightbulb,
    title: 'Future-Ready Systems',
    description: 'Focusing on scalable, low-latency architectures for the next generation of AI.',
  },
];

export default function GlobalFocus() {
  return (
    <section id="global-focus" className="py-32 px-6 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Building for a <span className="text-gradient">Global Future</span> 🌏
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-12">
              <p>
                My engineering philosophy is rooted in the belief that technology should be borderless and human-centric. I am actively seeking opportunities to contribute to <span className="text-white font-medium">international research labs</span> and mobility companies that are pushing the boundaries of what's possible.
              </p>
              <p>
                Whether it's in Japan, Europe, or beyond, I am ready to bring my expertise in <span className="text-neon-blue font-mono">Edge AI</span> and <span className="text-neon-purple font-mono">Full Stack Systems</span> to teams that value innovation, safety, and global impact.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl border-white/5 hover:border-neon-blue/20 transition-all group"
                >
                  <area.icon size={24} className="mb-4 text-neon-blue group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2 font-display">{area.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-[100px] rounded-full" />
            <div className="relative glass rounded-3xl p-8 border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 aspect-square flex items-center justify-center">
                {/* Abstract Global Visualization */}
                <div className="w-full h-full relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full border border-white/10 rounded-full flex items-center justify-center"
                  >
                    <div className="w-4/5 h-4/5 border border-neon-blue/20 rounded-full flex items-center justify-center">
                      <div className="w-3/5 h-3/5 border border-neon-purple/20 rounded-full flex items-center justify-center">
                        <Globe size={80} className="text-white/20 animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Floating Points */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-neon-blue glow-blue"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      style={{
                        top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                        left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
