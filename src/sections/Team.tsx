import { motion } from 'framer-motion';
import { Code2, GraduationCap, Briefcase, Link2, MessageCircle } from 'lucide-react';

// Inline SVGs for brand icons (lucide-react brand icons are deprecated)
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const team = [
  {
    name: 'Vineeth Reddy',
    surname: 'Kancharakuntla',
    role: 'Co-Founder · Full Stack Engineer',
    avatar: 'VR',
    gradient: 'from-violet-500 via-indigo-500 to-blue-600',
    ring: 'ring-violet-500/30',
    glow: 'shadow-violet-900/50',
    bio: 'Full-stack engineer with professional industry experience building scalable systems and production-grade applications. Now directing that technical depth toward rapid product development and venture creation.',
    tags: [
      { icon: Briefcase, label: '3+ Years Experience' },
      { icon: Code2, label: 'Full Stack' },
      { icon: Link2, label: 'Tech Lead' },
    ],
    tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    socials: [
      { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/eternalbasic1' },
      { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kancharakuntlavineethreddy/' },
      { Icon: XIcon, label: 'X', href: 'https://x.com/KancharakuntlaV' },
    ],
  },
  {
    name: 'Aadarsh Reddy',
    surname: 'Depa',
    role: 'Co-Founder · AI/ML Engineer',
    avatar: 'AD',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    ring: 'ring-emerald-500/30',
    glow: 'shadow-emerald-900/50',
    bio: 'Computer Science (AI & ML) specialist focused on emerging technologies and applied artificial intelligence. Brings analytical thinking, research depth, and a sharp instinct for identifying technology-driven opportunities.',
    tags: [
      { icon: GraduationCap, label: 'CSE (AI & ML)' },
      { icon: Code2, label: 'Tech Savvy' },
      { icon: MessageCircle, label: 'Future Ready' },
    ],
    socials: [
      { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/aadarshreddydepa' },
      { Icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aadarsh-reddy-depa-19b88722b/' },
    ],
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 right-0 w-125 h-125 rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none -translate-y-1/2" />

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
            The Team
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Meet the <span className="gradient-text">Founders</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-xl mb-16"
        >
          Two cousins united by technology, fuelled by ambition, and determined to make their mark
          on the business world — one venture at a time.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-white/12 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 bg-linear-to-br ${member.gradient} rounded-3xl`} />

              <div className="relative">
                {/* Avatar + info */}
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${member.gradient} flex items-center justify-center text-xl font-bold text-white ring-4 ${member.ring} shadow-2xl ${member.glow} shrink-0`}
                  >
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {member.name}
                      <br />
                      <span className="text-gray-300">{member.surname}</span>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${member.tagColor}`}
                    >
                      <tag.icon size={12} />
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex gap-3">
                  {member.socials.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-white hover:border-violet-500/40 transition-all duration-200 hover:scale-110"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder — future team member */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl p-8 border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center gap-4 min-h-80 hover:border-violet-500/30 transition-colors duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-white/10 group-hover:border-violet-500/30 flex items-center justify-center transition-colors duration-300">
              <span className="text-2xl text-white/20 group-hover:text-violet-400/50 transition-colors duration-300 font-bold">+</span>
            </div>
            <div>
              <p className="text-white/40 font-semibold text-sm group-hover:text-white/60 transition-colors duration-300">
                Growing the Team
              </p>
              <p className="text-white/20 text-xs mt-1 group-hover:text-white/40 transition-colors duration-300">
                More great people joining soon
              </p>
            </div>
          </motion.div>
        </div>

        {/* Synergy callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-8 text-center border border-violet-500/10"
        >
          <div className="text-2xl font-bold text-white mb-2">Better Together</div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Industry experience meets academic curiosity. Practical execution meets fresh perspective.
            Together, we cover more ground — and learn faster.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
