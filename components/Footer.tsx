import Image from 'next/image';

const siteLinks = [
  { href: '#music', label: 'Music' },
  { href: '#videos', label: 'Videos' },
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

const followLinks = ['Instagram', 'TikTok', 'YouTube', 'Spotify'];

export function Footer() {
  return (
    <footer className="border-t border-hair py-16 pb-10">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="flex justify-between gap-10 flex-wrap mb-14">
          <div>
            <Image src="/logo.png" alt="Testimony City Media" width={160} height={40} className="h-10 w-auto mb-3.5" />
            <p className="text-greydim text-[13px] max-w-[280px]">
              The official website of Moses Iyamo, an artist of Testimony City Media.
            </p>
          </div>
          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="text-[12px] tracking-[0.1em] text-greydim uppercase mb-4">Site</h4>
              {siteLinks.map((l) => (
                <a key={l.href} href={l.href} className="block text-grey text-sm mb-2.5 hover:text-bone transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-[12px] tracking-[0.1em] text-greydim uppercase mb-4">Follow</h4>
              {followLinks.map((l) => (
                <a key={l} href="#" className="block text-grey text-sm mb-2.5 hover:text-bone transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-4 border-t border-hair pt-6 text-[12.5px] text-greydim">
          <span>© 2026 Moses Iyamo / Testimony City Media. All rights reserved.</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
