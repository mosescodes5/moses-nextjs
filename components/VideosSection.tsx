'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { videos } from '@/lib/data';
import { SectionHead } from './SectionHead';

export function VideosSection() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="videos" className="py-24 sm:py-32">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          index="03 — Watch"
          title="Music Videos"
          desc="Visuals for the songs — filmed across Lagos, Abuja, and everywhere the story called for."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              {playing === i ? (
                <div className="relative aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.yt}?autoplay=1`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  onClick={() => setPlaying(i)}
                  className="group relative aspect-video w-full overflow-hidden bg-[#111] block"
                >
                  <Image
                    src={v.thumb}
                    alt={v.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/55" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full border border-bone/60 backdrop-blur-sm flex items-center justify-center">
                      <Play size={16} fill="currentColor" className="text-bone ml-0.5" />
                    </span>
                  </div>
                </button>
              )}
              <div className="py-4">
                <div className="font-display text-[17px] mb-1">{v.title}</div>
                <div className="text-[12px] text-greydim">{v.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
