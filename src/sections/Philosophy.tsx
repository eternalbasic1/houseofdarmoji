import { motion } from 'framer-motion';
import { RefreshCw, Cpu, TrendingUp, Globe } from 'lucide-react';

const values = [
  {
    icon: RefreshCw,
    title: 'Rapid Experimentation',
    desc: 'We validate ideas quickly through real products and real users. Every experiment — successful or not — generates insight that sharpens our next move.',
    gradient: 'from-violet-500 to-indigo-600',
    delay: 0,
  },
  {
    icon: Cpu,
    title: 'Technology as Leverage',
    desc: 'Our engineering background lets us build and iterate faster than most. Technology is not just what we sell — it is how we compete.',
    gradient: 'from-blue-500 to-cyan-600',
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    title: 'Impact & Sustainable Growth',
    desc: 'We build with purpose. Long-term sustainability and genuine user value are the benchmarks we care about most — profit follows from delivering both.',
    gradient: 'from-rose-500 to-pink-600',
    delay: 0.2,
  },
  {
    icon: Globe,
    title: 'Global Thinking, Local Roots',
    desc: 'Starting from Hyderabad, we build with a global mindset — solving problems that matter beyond borders while staying grounded in our roots.',
    gradient: 'from-emerald-500 to-teal-600',
    delay: 0.3,
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/4 right-0 w-125 h-125 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-12 bg-linear-to-r from-emerald-500 to-transparent" />
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
              Principles That{' '}
              <span className="gradient-text">Guide Our Work</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our technical background shapes how we approach every decision. These four principles
              underpin every venture we build — from the first prototype to the final decision
              to scale or move on.
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
              Entrepreneurship, approached with the rigour of engineering, becomes a repeatable
              process. That is exactly what we are building here.
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
                className={`w-12 h-12 rounded-2xl bg-linear-to-br ${v.gradient} flex items-center justify-center shadow-lg`}
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
