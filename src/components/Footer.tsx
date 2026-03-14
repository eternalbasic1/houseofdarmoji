import { ArrowUpRight } from 'lucide-react';

// Inline SVGs — lucide-react brand icons are deprecated
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

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
  { Icon: GithubIcon, href: '#', label: 'GitHub' },
  { Icon: XIcon, href: '#', label: 'X / Twitter' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden ring-1 ring-white/10 group-hover:ring-violet-500/30 transition-all">
                <img src="/logo.png" alt="House of Darmoji" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-semibold text-white text-sm">
                House of <span className="text-violet-400">Darmoji</span>
              </span>
            </a>
            <p className="text-gray-600 text-xs leading-relaxed mb-5">
              Building and validating technology-driven ventures. From Hyderabad to the world.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-white hover:border-violet-500/30 transition-all duration-200"
                >
                  <s.Icon />
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
            © {new Date().getFullYear()} House of Darmoji. Building and validating technology-driven ventures.
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
