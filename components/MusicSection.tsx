'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { releases } from '@/lib/data';
import { usePlayer } from '@/lib/PlayerContext';
import { SectionHead } from './SectionHead';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'single', label: 'Singles' },
  { key: 'ep', label: 'EPs' },
  { key: 'album', label: 'Albums' },
] as const;

export function MusicSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]['key']>('all');
  const { loadTrack } = usePlayer();
  const visible = releases.filter((r) => filter === 'all' || r.type === filter);

  return (
    <section id="music" className="py-24 sm:py-32">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          index="01 — Discography"
          title="Music"
          desc="From the new single to the full catalogue — everything Moses has released, ready to stream."
        />

        <div className="flex gap-2.5 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`text-[13px] border rounded-full px-4.5 py-2 transition-colors ${
                filter === f.key
                  ? 'text-bone border-red'
                  : 'text-grey border-hair hover:text-bone hover:border-red'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="rail flex gap-6 overflow-x-auto pb-5 snap-x">
          {visible.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex-none w-[280px] snap-start bg-panel border border-hair"
            >
              <div className="relative aspect-square overflow-hidden bg-[#111]">
                <Image
                  src={r.cover}
                  alt={`${r.title} cover art`}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <span className="absolute top-3 left-3 text-[10.5px] tracking-[0.1em] bg-ink/70 px-2.5 py-1 text-grey">
                  {r.type.toUpperCase()}
                </span>
                <button
                  onClick={() => loadTrack(releases.indexOf(r), true)}
                  aria-label={`Play ${r.title}`}
                  className="absolute right-3 bottom-3 w-11 h-11 rounded-full bg-red flex items-center justify-center shadow-lg opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                >
                  <Play size={16} fill="currentColor" className="text-bone ml-0.5" />
                </button>
              </div>
              <div className="p-4.5 px-[18px] py-[18px]">
                <div className="font-display text-[19px] mb-1">{r.title}</div>
                <div className="text-[12.5px] text-greydim flex gap-2 flex-wrap">
                  <span>{r.date}</span>
                  <span>·</span>
                  <span>{r.genre}</span>
                  <span>·</span>
                  <span>{r.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
