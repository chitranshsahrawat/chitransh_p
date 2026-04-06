import { motion } from 'motion/react';
import { Cpu, Code, Database, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI/ML & Edge',
    icon: Cpu,
    color: 'text-neon-blue',
    skills: [
      { name: 'YOLOv10', level: 95 },
      { name: 'OpenVINO', level: 90 },
      { name: 'NPU Optimization', level: 85 },
      { name: 'Mediapipe', level: 92 },
      { name: 'Scikit-learn', level: 88 },
    ],
  },
  {
    title: 'Full Stack',
    icon: Code,
    color: 'text-neon-purple',
    skills: [
      { name: 'Python', level: 96 },
      { name: 'Java', level: 90 },
      { name: 'React.js', level: 94 },
      { name: 'Node.js', level: 88 },
      { name: 'FastAPI', level: 92 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    title: 'Systems & Data',
    icon: Database,
    color: 'text-white',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'Data Pipelines', level: 90 },
    ],
  },
  {
    title: 'Tools',
    icon: Settings,
    color: 'text-white/60',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'GitHub', level: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            A comprehensive stack built for performance, scalability, and real-time intelligence.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-neon-blue/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/30 transition-colors">
                  <category.icon size={24} className={category.color} />
                </div>
                <h3 className="text-xl font-bold font-display">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 + j * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 242, 255, 0.1)', borderColor: 'rgba(0, 242, 255, 0.3)' }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-white/60 transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
