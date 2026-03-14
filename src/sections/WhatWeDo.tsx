import { motion } from 'framer-motion';
import { Search, Hammer, BarChart2, GitBranch } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Problem Discovery',
    desc: 'Identify real problems with meaningful market potential. No solution starts without a validated problem worth solving.',
    color: 'from-violet-500 to-indigo-600',
    glow: 'shadow-violet-900/40',
  },
  {
    num: '02',
    icon: Hammer,
    title: 'Rapid Product Development',
    desc: 'Build a working MVP using modern technology. Our engineering background means we ship fast without sacrificing quality.',
    color: 'from-blue-500 to-cyan-600',
    glow: 'shadow-blue-900/40',
  },
  {
    num: '03',
    icon: BarChart2,
    title: 'Market Validation',
    desc: 'Launch early and collect real customer feedback. Assumptions are tested in the market, not in a boardroom.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-900/40',
  },
  {
    num: '04',
    icon: GitBranch,
    title: 'Decision Point',
    desc: 'Scale the venture or move on to the next opportunity. Every outcome — success or shutdown — generates insight for the next build.',
    color: 'from-amber-500 to-orange-600',
    glow: 'shadow-amber-900/40',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-violet-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-12 bg-linear-to-r from-violet-500 to-transparent" />
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">
            What We Do
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Venture Building{' '}
              <span className="gradient-text">Through Execution</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              House of Darmoji operates as a small, technology-first venture studio. We design,
              build, and validate business models using rapid product development, real customer
              feedback, and data-driven decision making.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Each venture follows a structured validation framework — designed to test ideas quickly,
              minimise wasted effort, and maximise learning from every experiment.
            </p>
          </motion.div>

          {/* Right: studio positioning card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass rounded-3xl p-8 border border-violet-500/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-violet-600/5 to-transparent rounded-3xl" />
            <div className="relative z-10">
              <div className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
                Our Objective
              </div>
              <p className="text-white text-lg font-medium leading-relaxed mb-6">
                Identify scalable opportunities and build ventures that create lasting value — through
                disciplined experimentation, not guesswork.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Real Market Testing',
                  'Rapid MVP Cycles',
                  'Data-Driven Decisions',
                  'Tech as Leverage',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group"
            >
              {/* Step number watermark */}
              <div className="absolute top-4 right-4 text-5xl font-black text-white/4 leading-none select-none group-hover:text-white/6 transition-colors">
                {step.num}
              </div>

              <div
                className={`w-12 h-12 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center shadow-lg ${step.glow} shrink-0`}
              >
                <step.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
