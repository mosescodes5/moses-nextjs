'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { usePlayer } from '@/lib/PlayerContext';

export function Hero() {
  const { loadTrack, isPlaying, currentTrack } = usePlayer();

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden bg-[#0e0c0a]">
      <motion.div
        initial={{ scale: 1.14, opacity: 0 }}
        animate={{ scale: 1.08, opacity: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-[center_18%] grayscale-[28%] contrast-[1.08]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(11,10,9,.15) 0%, rgba(11,10,9,.35) 55%, rgba(11,10,9,.97) 100%), url('https://images.unsplash.com/photo-1618609377964-467353dfa93a?q=80&w=1600&auto=format&fit=crop')`,
        }}
      />

      {/* skyline motif, echoing the logo */}
      <svg
        className="absolute left-0 right-0 bottom-0 h-28 opacity-50 pointer-events-none"
        style={{ maskImage: 'linear-gradient(to top, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)' }}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 36 }).map((_, i) => {
          const x = i * 33;
          const h = 40 + ((i * 37) % 70);
          const w = 16 + ((i * 13) % 20);
          return <rect key={i} x={x} y={120 - h} width={w} height={h} fill="#000" />;
        })}
      </svg>

      <div className="relative z-[2] w-full max-w-wrap mx-auto px-8 sm:px-5 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center gap-2.5 mb-4 text-grey text-[13px]"
        >
          <span className="w-[34px] h-px bg-red-bright" />
          <span>TESTIMONY CITY MEDIA PRESENTS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-display font-semibold uppercase leading-[0.92] text-bone text-[clamp(52px,10.5vw,142px)]"
        >
          Moses
          <br />
          Iyamo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-display italic text-grey mt-4 max-w-[520px] text-[clamp(16px,2.4vw,22px)]"
        >
          &ldquo;Every song is a testimony.&rdquo; — Afro-soul, gospel-rooted, built for the city and the sanctuary alike.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.8 }}
          className="flex gap-4 mt-9 flex-wrap"
        >
          <button
            onClick={() => loadTrack(0, true)}
            className="inline-flex items-center gap-2.5 bg-red border border-red text-bone px-7 py-4 text-sm rounded-sm hover:bg-red-bright transition-colors hover:-translate-y-px"
          >
            <Play size={14} fill="currentColor" />
            Listen Now
          </button>
          <a
            href="#music"
            className="border border-bone/35 text-bone px-7 py-4 text-sm rounded-sm hover:border-bone hover:bg-bone/5 transition-colors"
          >
            Explore Music
          </a>
        </motion.div>
      </div>

      <div className="hidden sm:flex absolute left-8 bottom-9 z-[2] items-center gap-3 text-[12px] text-grey">
        <div className="flex items-end gap-[2px] h-3.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-[2px] bg-red-bright rounded-sm"
              style={{
                height: ['40%', '100%', '65%', '85%', '50%'][i],
                animation: isPlaying ? `wave 1.1s ease-in-out infinite` : 'none',
                animationDelay: `${i * 0.15}s`,
                opacity: isPlaying ? 1 : 0.35,
              }}
            />
          ))}
        </div>
        <span>{isPlaying ? `Now streaming — "${currentTrack.title}"` : 'Press play to start streaming'}</span>
      </div>

      <div className="absolute right-8 bottom-8 z-[2] flex flex-col items-center gap-2.5 text-grey text-[11px] tracking-[0.16em]">
        <span>SCROLL</span>
        <div className="w-px h-11 bg-gradient-to-b from-red-bright to-transparent animate-scrollDrop" />
      </div>
    </section>
  );
}
