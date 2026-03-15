import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ShoppingCart, Globe, Users, BarChart2, Cpu, Lock, ExternalLink, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const ventures = [
  {
    number: '01',
    name: 'Syndicator',
    tagline: 'Smart Financial Syndication Platform',
    description:
      'A fintech platform built with my co-founder to track informal loan syndications — where one person lends and another funds, splitting interest automatically. Used by our inner circle of 6–7 people.',
    category: 'Fintech',
    categoryColor: 'text-orange-400',
    categoryBg: 'bg-orange-500/10',
    status: 'Shipped',
    statusColor: 'text-emerald-400',
    statusBg: 'bg-emerald-500/10',
    url: 'https://syndicator.houseofdarmoji.com',
    highlights: ['Built & deployed end-to-end', 'Real users, real money tracked', 'Key learnings on GTM & infra'],
    comingSoon: false,
  },
  {
    number: '??',
    name: 'Next Venture',
    tagline: 'Currently in ideation',
    description:
      'The next business model is being researched and validated. Each venture builds on learnings from the last — stay tuned.',
    category: 'TBD',
    categoryColor: 'text-gray-500',
    categoryBg: 'bg-gray-500/10',
    status: 'Coming Soon',
    statusColor: 'text-gray-500',
    statusBg: 'bg-gray-500/10',
    url: '',
    highlights: [],
    comingSoon: true,
  },
];

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
  { num: '01', title: 'Problem Discovery', desc: 'Research the market and identify a genuine problem with real demand.' },
  { num: '02', title: 'Rapid Build', desc: 'Prototype quickly using our engineering skills to produce a working MVP.' },
  { num: '03', title: 'Market Launch', desc: 'Deploy to real users and gather structured feedback from day one.' },
  { num: '04', title: 'Evaluate & Decide', desc: 'Analyse results with data. Scale what works, shut down what does not.' },
];

export default function Challenge() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    if (index === 0) return;
    setDirection(-1);
    setIndex((i) => i - 1);
  };

  const next = () => {
    if (index === ventures.length - 1) return;
    setDirection(1);
    setIndex((i) => i + 1);
  };

  const v = ventures[index];

  return (
    <section id="challenge" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-12 bg-linear-to-r from-amber-500 to-transparent" />
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
                <span className="text-gray-400 font-normal text-3xl">to Build & Validate</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-3"
            >
              Our goal is to systematically explore 25 different business models across industries.
              Not every venture will succeed — but each will generate insight that improves the next.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-500 text-sm leading-relaxed mb-10 italic"
            >
              Each venture follows a structured validation framework — designed to test ideas quickly
              while minimising risk and maximising learning.
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
                  <div className="text-2xl font-black text-white/10 w-10 shrink-0 leading-none mt-1">
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
                <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center shrink-0`}>
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
              <div className="text-white font-semibold mb-1">Venture Progress</div>
              <div className="text-gray-500 text-sm">Actively in progress — each venture builds on the last</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold gradient-text-warm">1 / 25</div>
              <div className="text-gray-600 text-xs">Ventures completed</div>
            </div>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '4%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-linear-to-r from-amber-500 to-orange-500 rounded-full"
            />
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Start</span>
            <span>25 Ventures</span>
          </div>
        </motion.div>

        {/* Ventures Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-12"
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-linear-to-r from-amber-500 to-transparent" />
              <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">Ventures Launched</span>
            </div>

            {/* Nav controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-600 tabular-nums">{index + 1} / {ventures.length}</span>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  disabled={index === 0}
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  disabled={index === ventures.length - 1}
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Slide */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {v.comingSoon ? (
                  /* Coming soon placeholder */
                  <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-65 border border-dashed border-white/10">
                    <div className="w-12 h-12 rounded-2xl bg-gray-500/10 flex items-center justify-center mb-4">
                      <Clock size={22} className="text-gray-600" />
                    </div>
                    <div className="text-white font-semibold text-lg mb-2">More Ventures Coming Soon</div>
                    <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                      The next idea is being researched and validated. Each venture builds on the learnings of the last.
                    </p>
                    <div className="mt-5 flex gap-2">
                      {/* dots */}
                      {[0, 1, 2].map((d) => (
                        <motion.div
                          key={d}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.4, delay: d * 0.2, repeat: Infinity }}
                          className="w-1.5 h-1.5 rounded-full bg-amber-500/50"
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Real venture card */
                  <div className="glass rounded-2xl p-6 group relative overflow-hidden">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-black text-white/10 leading-none">{v.number}</span>
                        <div>
                          <div className="font-bold text-white text-lg leading-tight">{v.name}</div>
                          <div className="text-gray-500 text-xs mt-0.5">{v.tagline}</div>
                        </div>
                      </div>
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-full glass-hover border border-white/5 hover:border-amber-500/20 shrink-0"
                      >
                        Visit site
                        <ArrowUpRight size={12} />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{v.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1 mb-5">
                      {v.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Footer badges */}
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${v.categoryBg} ${v.categoryColor}`}>
                        {v.category}
                      </span>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${v.statusBg} ${v.statusColor}`}>
                        {v.status}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {ventures.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-amber-500' : 'w-1.5 bg-white/15 hover:bg-white/30'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
