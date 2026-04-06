import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
<<<<<<< HEAD
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2ff', '#bc13fe', '#ffffff']
    });
=======
    try {
      const response = await fetch('https://formspree.io/f/xpwzjyqv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f2ff', '#bc13fe', '#ffffff']
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
>>>>>>> e306a14e6715e283f0fa4cc82dda236b34b0a9b6
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Build <span className="text-gradient">Impactful</span> Technology Together 🚀
            </h2>
            
            <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed">
              Whether you're looking for an AI Engineer for an international internship or just want to discuss the future of Edge AI, I'm always open to new opportunities and collaborations.
            </p>
            
            <div className="space-y-6">
              <a
<<<<<<< HEAD
                href="mailto:chitranshsahrawat@gmail.com"
=======
                href="mailto:chitranshsahrawat2930@gmail.com"
>>>>>>> e306a14e6715e283f0fa4cc82dda236b34b0a9b6
                className="flex items-center gap-4 group p-4 rounded-2xl glass border-white/5 hover:border-neon-blue/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-mono">Email Me</div>
<<<<<<< HEAD
                  <div className="text-lg font-bold font-display">chitranshsahrawat@gmail.com</div>
=======
                  <div className="text-lg font-bold font-display">chitranshsahrawat2930@gmail.com</div>
>>>>>>> e306a14e6715e283f0fa4cc82dda236b34b0a9b6
                </div>
              </a>
              
              <a
                href="https://github.com/chitranshsahrawat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 rounded-2xl glass border-white/5 hover:border-neon-purple/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple group-hover:text-black transition-all">
                  <Github size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-mono">GitHub Profile</div>
                  <div className="text-lg font-bold font-display">github.com/chitranshsahrawat</div>
                </div>
              </a>
              
              <a
<<<<<<< HEAD
                href="#"
=======
                href="https://www.linkedin.com/in/chitranshsahrawat28930"
>>>>>>> e306a14e6715e283f0fa4cc82dda236b34b0a9b6
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 rounded-2xl glass border-white/5 hover:border-neon-blue/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-mono">LinkedIn</div>
<<<<<<< HEAD
                  <div className="text-lg font-bold font-display">Connect with me</div>
=======
                  <div className="text-lg font-bold font-display">linkedin.com/in/chitranshsahrawat28930</div>
>>>>>>> e306a14e6715e283f0fa4cc82dda236b34b0a9b6
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-blue/10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-purple/10 blur-[80px] rounded-full" />
            
            <div className="relative glass p-8 md:p-12 rounded-3xl border-white/10 overflow-hidden">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-neon-blue/20 flex items-center justify-center mx-auto mb-6 border border-neon-blue/30">
                    <Send size={32} className="text-neon-blue" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 font-display">Message Sent!</h3>
                  <p className="text-white/60 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-neon-blue font-bold flex items-center gap-2 mx-auto hover:underline"
                  >
                    Send another message <ArrowRight size={18} />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-mono text-white/40">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neon-blue/50 transition-colors text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-mono text-white/40">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neon-purple/50 transition-colors text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-mono text-white/40">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neon-blue/50 transition-colors text-white resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-black font-bold flex items-center justify-center gap-2 glow-blue transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
