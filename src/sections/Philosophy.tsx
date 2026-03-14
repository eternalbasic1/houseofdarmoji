import { motion } from 'framer-motion';
import { RefreshCw, Cpu, Heart, Globe } from 'lucide-react';

const values = [
  {
    icon: RefreshCw,
    title: 'Fail Fast, Learn Faster',
    desc: 'We embrace failure as a teacher. Each business attempt teaches us valuable lessons about markets, customers, and execution.',
    gradient: 'from-violet-500 to-indigo-600',
    delay: 0,
  },
  {
    icon: Cpu,
    title: 'Tech-Driven Solutions',
    desc: 'We leverage our technical expertise to build innovative solutions that solve real problems and create genuine value.',
    gradient: 'from-blue-500 to-cyan-600',
    delay: 0.1,
  },
  {
    icon: Heart,
    title: 'Impact Over Profit',
    desc: "While profit matters, we're driven by the desire to create something meaningful that positively impacts people's lives.",
    gradient: 'from-rose-500 to-pink-600',
    delay: 0.2,
  },
  {
    icon: Globe,
    title: 'Think Global, Start Local',
    desc: 'From our Hyderabad roots, we aim to build solutions that can scale globally while staying true to our values.',
    gradient: 'from-emerald-500 to-teal-600',
    delay: 0.3,
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-12 bg-gradient-to-r from-emerald-500 to-transparent" />
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            Our Philosophy
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              How We{' '}
              <span className="gradient-text">Approach</span>
              <br />
              Everything
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We might not have traditional business backgrounds, but we have something unique — a
              fresh perspective, technical skills, and the determination to learn through doing.
              These four principles guide every decision we make.
            </p>
          </motion.div>

          {/* Decorative quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass rounded-3xl p-8 border border-emerald-500/10 relative overflow-hidden"
          >
            <div className="text-7xl text-emerald-500/10 font-serif absolute top-4 left-6 leading-none select-none">
              "
            </div>
            <blockquote className="relative z-10 text-lg text-white font-medium leading-relaxed italic">
              We're not just coding our way to success — we're learning to think like entrepreneurs,
              one venture at a time.
            </blockquote>
            <div className="mt-4 text-sm text-gray-500">— House of Darmoji</div>
          </motion.div>
        </div>

        {/* Value cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: v.delay, duration: 0.6 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center shadow-lg`}
              >
                <v.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 leading-tight">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
