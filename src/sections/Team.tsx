import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code2, GraduationCap, Briefcase } from 'lucide-react';

const team = [
  {
    name: 'Vineeth Reddy',
    surname: 'Kancharakuntla',
    role: 'Co-Founder & Full Stack Engineer',
    avatar: 'VR',
    gradient: 'from-violet-500 via-indigo-500 to-blue-600',
    ring: 'ring-violet-500/30',
    glow: 'shadow-violet-900/50',
    bio: 'Seasoned full-stack engineer with 3 years of industry experience. Passionate about building scalable solutions and now channeling technical expertise into business innovation.',
    tags: [
      { icon: Briefcase, label: '3+ Years Experience' },
      { icon: Code2, label: 'Full Stack' },
      { icon: Briefcase, label: 'Tech Lead' },
    ],
    tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  },
  {
    name: 'Aadarsh Reddy',
    surname: 'Depa',
    role: 'Co-Founder & Tech Enthusiast',
    avatar: 'AD',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    ring: 'ring-emerald-500/30',
    glow: 'shadow-emerald-900/50',
    bio: 'Final year Computer Science student with a fresh perspective on technology and business. Brings academic knowledge, youthful energy, and innovative thinking to our entrepreneurial journey.',
    tags: [
      { icon: GraduationCap, label: 'CSE (AI & ML)' },
      { icon: Code2, label: 'Tech Savvy' },
      { icon: Briefcase, label: 'Future Ready' },
    ],
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none -translate-y-1/2" />

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
            The Team
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Meet the <span className="gradient-text">Dreamers</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-xl mb-16"
        >
          Two cousins united by technology, driven by ambition, and ready to conquer the business
          world one venture at a time.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
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
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${member.gradient} opacity-[0.03] rounded-3xl`} />

              <div className="relative">
                {/* Avatar + info */}
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl font-bold text-white ring-4 ${member.ring} shadow-2xl ${member.glow} flex-shrink-0`}
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
                  {[Github, Linkedin, Twitter].map((Icon, j) => (
                    <button
                      key={j}
                      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-white hover:border-violet-500/40 transition-all duration-200 hover:scale-110"
                    >
                      <Icon size={15} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Synergy callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-8 text-center border border-violet-500/10"
        >
          <div className="text-2xl font-bold text-white mb-2">Perfect Synergy</div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Together, we combine industry experience with fresh academic insights, creating a unique
            blend of practical knowledge and innovative thinking that drives our entrepreneurial
            adventures.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
