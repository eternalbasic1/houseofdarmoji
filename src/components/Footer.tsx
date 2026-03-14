import { Github, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'Our Story', href: '#story' },
    { label: 'The Team', href: '#team' },
    { label: '25 Challenge', href: '#challenge' },
    { label: 'Philosophy', href: '#philosophy' },
  ],
  Connect: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Email', href: 'mailto:support@houseofdarmoji.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-sm font-bold shadow-lg">
                HD
              </div>
              <span className="font-semibold text-white text-sm">
                House of <span className="text-violet-400">Darmoji</span>
              </span>
            </a>
            <p className="text-gray-600 text-xs leading-relaxed mb-5">
              Building the future, one business at a time. From Hyderabad with ambition.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-white hover:border-violet-500/30 transition-all duration-200"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.href.startsWith('mailto') && (
                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © 2025 House of Darmoji. Building the future, one business at a time.
          </p>
          <a
            href="https://houseofdarmoji.com"
            className="text-xs text-gray-600 hover:text-violet-400 transition-colors flex items-center gap-1"
          >
            houseofdarmoji.com
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
