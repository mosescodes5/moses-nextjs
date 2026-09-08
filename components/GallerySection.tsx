'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages, GalleryImage } from '@/lib/data';
import { SectionHead } from './SectionHead';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'performance', label: 'Performances' },
  { key: 'studio', label: 'Studio' },
  { key: 'bts', label: 'Behind the Scenes' },
] as const;

export function GallerySection() {
  const [filter, setFilter] = useState<(typeof filters)[number]['key']>('all');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const visible = galleryImages.filter((g) => filter === 'all' || g.cat === filter);

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          index="05 — Gallery"
          title="Gallery"
          desc="On stage, in the studio, and behind the scenes."
        />
        <div className="flex gap-2.5 mb-8 flex-wrap">
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
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {visible.map((g, i) => (
            <button
              key={i}
              onClick={() => setLightbox(g)}
              className="group relative block w-full mb-4 overflow-hidden break-inside-avoid cursor-zoom-in"
            >
              <Image
                src={g.src}
                alt={`Moses Iyamo — ${g.cat}`}
                width={700}
                height={900}
                className="w-full h-auto grayscale-[20%] transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-[#060504]/95 z-[300] flex items-center justify-center p-10"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-7 right-8 text-bone"
              aria-label="Close"
            >
              <X size={26} />
            </button>
            <Image
              src={lightbox.src}
              alt=""
              width={1200}
              height={1200}
              className="max-h-[88vh] max-w-[88vw] w-auto h-auto object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
