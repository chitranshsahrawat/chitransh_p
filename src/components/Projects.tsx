import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Github, ExternalLink, Cpu, Zap, Globe, Code } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const projects = [
  {
    title: 'Echo-Vision',
    subtitle: 'AI Spatial Intelligence',
    description: 'Real-time spatial awareness system for visually impaired. Uses YOLOv10 + MiDaS depth estimation optimized for Edge NPUs.',
    focus: 'Accessibility + Real-Time AI',
    tech: ['YOLOv10', 'MiDaS', 'OpenVINO', 'NPU'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600',
    github: 'https://github.com/chitranshsahrawat',
    demo: '#',
    icon: Cpu,
  },
  {
    title: 'Shadow-Sim',
    subtitle: 'Digital Twin System',
    description: 'Vehicle telemetry visualization in 3D. Built with FastAPI + Three.js with sub-100ms latency data pipeline.',
    focus: 'Mobility + Simulation',
    tech: ['FastAPI', 'Three.js', 'WebSockets', 'Telemetry'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600',
    github: 'https://github.com/chitranshsahrawat',
    demo: '#',
    icon: Globe,
  },
  {
    title: 'Neuro Driver',
    subtitle: 'Driver Monitoring AI',
    description: 'Detects drowsiness and distraction using Mediapipe. Local processing for privacy + low latency.',
    focus: 'Safety + Edge AI',
    tech: ['Mediapipe', 'Python', 'OpenCV', 'Edge'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=600',
    github: 'https://github.com/chitranshsahrawat',
    demo: '#',
    icon: Zap,
  },
  {
    title: 'HR Dashboard',
    subtitle: 'Full-stack Platform',
    description: 'Comprehensive HR management system with integrated chatbot and video calling capabilities.',
    focus: 'Full Stack + Communication',
    tech: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    github: 'https://github.com/chitranshsahrawat',
    demo: '#',
    icon: Code,
  },
  {
    title: 'Phishing Detector',
    subtitle: 'ML Security System',
    description: 'Machine learning model using TF-IDF + Logistic Regression to detect malicious emails with high accuracy.',
    focus: 'Security + ML',
    tech: ['Scikit-learn', 'TF-IDF', 'Python', 'NLP'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=600',
    github: 'https://github.com/chitranshsahrawat',
    demo: '#',
    icon: Github,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group h-full"
    >
      <div className="glass h-full rounded-3xl p-6 border-white/5 hover:border-neon-blue/30 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 glass p-2 rounded-xl border-white/20">
              <project.icon size={20} className="text-neon-blue" />
            </div>
          </div>
          
          <div className="mb-2 flex items-center gap-2 text-xs font-mono text-neon-blue uppercase tracking-widest">
            <span>{project.focus}</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-1 font-display group-hover:text-neon-blue transition-colors">{project.title}</h3>
          <p className="text-sm text-white/40 mb-4 font-display font-medium uppercase tracking-wider">{project.subtitle}</p>
          
          <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 group-hover:border-neon-blue/20 group-hover:text-neon-blue transition-colors">
                {t}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold hover:bg-white/10 transition-all"
            >
              <Github size={18} /> GitHub
            </motion.a>
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-3 rounded-xl bg-neon-blue text-black flex items-center justify-center gap-2 text-sm font-bold glow-blue hover:brightness-110 transition-all"
            >
              <ExternalLink size={18} /> Details
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Featured <span className="text-gradient">Innovations</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 max-w-xl text-lg"
            >
              A selection of high-impact engineering projects focusing on real-time AI, mobility, and human-centric innovation.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-sm font-mono text-white/40"
          >
            <span className="w-12 h-px bg-white/10" />
            <span>05 PROJECTS TOTAL</span>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
