import { motion } from 'framer-motion';
import { Zap, TrendingUp, Target } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Tech Excellence',
    desc: 'Deep technical expertise in full-stack development and modern technologies.',
    color: 'from-violet-500 to-indigo-600',
    glow: 'shadow-violet-900/40',
  },
  {
    icon: TrendingUp,
    title: 'Innovation Mindset',
    desc: 'Always looking for creative solutions and new ways to solve real problems.',
    color: 'from-emerald-500 to-teal-600',
    glow: 'shadow-emerald-900/40',
  },
  {
    icon: Target,
    title: '25 Business Challenge',
    desc: 'Our ambitious goal to explore diverse business models and learn entrepreneurship through execution.',
    color: 'from-amber-500 to-orange-600',
    glow: 'shadow-amber-900/40',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Story() {
  return (
    <section id="story" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">
            Our Story
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6"
            >
              From Tech to{' '}
              <span className="gradient-text">Business</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-gray-400 leading-relaxed"
            >
              <p>
                We're not your typical Marwadi or Gujarati business family. We're{' '}
                <span className="text-white font-medium">pakka Hyderabadi small-town boys</span>{' '}
                trying to make it big in the business ecosystem through pure determination and our
                tech expertise.
              </p>
              <p>
                Starting with zero business experience, we've decided to take on an ambitious
                challenge: explore{' '}
                <span className="text-violet-300 font-medium">25 different business models</span>,
                fail fast, learn faster, and eventually build something that creates real value and
                impact.
              </p>
              <p>
                Every failure teaches us something new about markets, customers, and the art of
                building sustainable businesses. We're not just coding our way to success — we're
                learning to think like entrepreneurs.
              </p>
            </motion.div>
          </div>

          {/* Right: pillar cards */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass glass-hover rounded-2xl p-5 flex gap-4 items-start"
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg ${p.glow}`}
                >
                  <p.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
