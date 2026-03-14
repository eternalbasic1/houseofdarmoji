import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Team', href: '#team' },
  { label: 'Challenge', href: '#challenge' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#080B14]/90 backdrop-blur-md border-b border-white/5' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-105 transition-transform">
            HD
          </div>
          <span className="font-semibold text-white tracking-tight">
            House of <span className="text-violet-400">Darmoji</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-violet-400 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 text-sm rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 font-medium shadow-lg shadow-violet-900/30 hover:shadow-violet-700/40 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-xl glass border border-white/8 py-4 px-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-gray-400 hover:text-white py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/8">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-4 py-2 text-sm rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
