'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#music', label: 'Music' },
  { href: '#videos', label: 'Videos' },
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-400 border-b ${
          scrolled
            ? 'bg-ink/90 backdrop-blur-xl border-hair py-3'
            : 'border-transparent py-5'
        }`}
      >
        <div className="max-w-wrap mx-auto px-8 sm:px-5 flex items-center justify-between gap-5">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Testimony City Media" width={140} height={34} className="h-8 w-auto" priority />
          </a>
          <nav className="hidden md:flex gap-8 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="relative text-grey hover:text-bone transition-colors group py-1">
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-red-bright transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-block border border-red text-bone text-sm px-5 py-2.5 rounded-sm hover:bg-red transition-colors"
          >
            Book Moses
          </a>
          <button
            className="md:hidden text-bone"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink z-[199] flex flex-col justify-center gap-7 px-8"
          >
            <button
              className="absolute top-6 right-7 text-bone"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={26} />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-display text-4xl text-bone"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
