import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Handshake, Code2, Building, Send } from 'lucide-react';
import { useState } from 'react';

const opportunities = [
  { icon: Handshake, label: 'Partnership Opportunities' },
  { icon: Code2, label: 'Technical Consulting' },
  { icon: Building, label: 'Business Collaboration' },
  { icon: MessageCircle, label: 'Just Say Hello!' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app you'd call an API here
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-violet-600/8 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">
            Get In Touch
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Let's <span className="gradient-text">Connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-lg mb-16"
        >
          Ready to join our journey or have an exciting opportunity? We'd love to hear from you!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email Us', value: 'support@houseofdarmoji.com', href: 'mailto:support@houseofdarmoji.com' },
                { icon: MessageCircle, label: "Let's Chat", value: 'Always open for collaboration', href: '#' },
                { icon: MapPin, label: 'Based In', value: 'Hyderabad, India', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 glass glass-hover rounded-xl p-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                    <item.icon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                    <div className="text-sm text-white">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* What we're open to */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">Ready to Build Together?</h3>
              <div className="grid grid-cols-2 gap-2">
                {opportunities.map((opp) => (
                  <div
                    key={opp.label}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl glass text-xs text-gray-400"
                  >
                    <opp.icon size={13} className="text-violet-400 flex-shrink-0" />
                    {opp.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div className="glass rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Send size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your idea or opportunity..."
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-violet-900/40 hover:shadow-violet-700/50 hover:-translate-y-0.5"
                >
                  Start a Conversation
                  <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
