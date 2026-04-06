import { motion } from 'motion/react';
import { Award, Star, TrendingUp, CheckCircle } from 'lucide-react';

const achievements = [
  {
    icon: Star,
    title: 'High Academic Performance',
    value: '9.24 SGPA',
    description: 'Consistently maintaining high academic standards throughout my AI engineering journey.',
  },
  {
    icon: Award,
    title: 'Advanced AI Projects',
    value: 'Multiple Systems',
    description: 'Successfully built and deployed multiple real-time AI systems for diverse applications.',
  },
  {
    icon: TrendingUp,
    title: 'Hands-on Engineering',
    value: 'Strong Experience',
    description: 'Extensive practical experience in full-stack development and system optimization.',
  },
  {
    icon: CheckCircle,
    title: 'Project Impact',
    value: 'Real-world Solutions',
    description: 'Focused on building technology that solves tangible problems in mobility and safety.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Engineering <span className="text-gradient">Excellence</span> 🏆
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            A track record of high-performance engineering and academic dedication.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-neon-purple/20 transition-all duration-500 group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-purple/30 transition-colors mx-auto mb-6">
                <achievement.icon size={32} className="text-neon-purple group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="text-3xl font-bold font-display mb-2 text-gradient">{achievement.value}</div>
              <h3 className="text-xl font-bold mb-4 font-display">{achievement.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
