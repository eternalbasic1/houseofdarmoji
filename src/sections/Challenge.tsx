import { motion } from 'framer-motion';
import { Package, ShoppingCart, Globe, Users, BarChart2, Cpu, Lock, ExternalLink } from 'lucide-react';

const categories = [
  { icon: Package, label: 'SaaS Products', color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { icon: ShoppingCart, label: 'E-commerce', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: Globe, label: 'Digital Services', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: Users, label: 'Tech Consulting', color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { icon: BarChart2, label: 'Marketplaces', color: 'text-pink-400', bg: 'bg-pink-500/10' },
  { icon: Cpu, label: 'AI Products', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: Lock, label: 'Fintech', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { icon: ExternalLink, label: 'And 18 More...', color: 'text-gray-500', bg: 'bg-gray-500/5' },
];

const steps = [
  { num: '01', title: 'Ideate', desc: 'Research the market and identify a real problem worth solving.' },
  { num: '02', title: 'Build', desc: 'Rapidly prototype using our tech skills to create an MVP.' },
  { num: '03', title: 'Launch', desc: 'Put it in front of real customers and gather feedback.' },
  { num: '04', title: 'Learn', desc: 'Analyze results, extract lessons, and decide pivot or kill.' },
];

export default function Challenge() {
  return (
    <section id="challenge" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-12 bg-gradient-to-r from-amber-500 to-transparent" />
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
            The Challenge
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="text-8xl font-black gradient-text-warm mb-2 leading-none">25</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Business Models
                <br />
                <span className="text-gray-400 font-normal text-3xl">to Explore</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-10"
            >
              Our ambitious goal is to explore 25 different business models over the coming years.
              Not all will succeed, but each will teach us something valuable about entrepreneurship,
              markets, and building sustainable businesses.
            </motion.p>

            {/* Process steps */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="text-2xl font-black text-white/10 w-10 flex-shrink-0 leading-none mt-1">
                    {step.num}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{step.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: category grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center flex-shrink-0`}>
                  <cat.icon size={18} className={cat.color} />
                </div>
                <span className="text-sm text-gray-300 font-medium">{cat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-white font-semibold mb-1">Journey Progress</div>
              <div className="text-gray-500 text-sm">Just getting started — the best is yet to come</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold gradient-text-warm">0 / 25</div>
              <div className="text-gray-600 text-xs">Ventures explored</div>
            </div>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '4%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
            />
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Start</span>
            <span>25 Businesses</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
