'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { eventsUpcoming, eventsPast, EventItem } from '@/lib/data';
import { SectionHead } from './SectionHead';

function EventRow({ e, isPast }: { e: EventItem; isPast?: boolean }) {
  return (
    <div
      className={`grid grid-cols-[70px_1fr] sm:grid-cols-[110px_1fr_auto] gap-5 sm:gap-6 items-center py-6 border-b border-hair ${
        isPast ? 'opacity-55' : ''
      }`}
    >
      <div className="font-display">
        <div className="text-[34px] leading-none text-bone">{e.day}</div>
        <div className="text-[12px] tracking-[0.1em] text-greydim uppercase">{e.mon}</div>
      </div>
      <div>
        <div className="font-display text-[19px] mb-1.5">{e.name}</div>
        <div className="text-[13.5px] text-grey">
          {e.venue} — {e.loc}
        </div>
      </div>
      {!isPast && (
        <a
          href="#contact"
          className="col-span-2 sm:col-span-1 justify-self-start sm:justify-self-auto mt-2 sm:mt-0 border border-bone/35 text-bone px-6 py-3 text-sm rounded-sm hover:border-bone hover:bg-bone/5 transition-colors"
        >
          Get Tickets
        </a>
      )}
    </div>
  );
}

export function EventsSection() {
  const [showPast, setShowPast] = useState(false);

  return (
    <section id="events" className="py-24 sm:py-32">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          index="04 — Live"
          title="Events"
          desc="Where to catch Moses next — and where he's already been."
        />
        <div>
          {eventsUpcoming.map((e) => (
            <EventRow key={e.name} e={e} />
          ))}
        </div>
        <button
          onClick={() => setShowPast((s) => !s)}
          className="mt-9 text-[13px] text-grey border-b border-hair pb-0.5"
        >
          {showPast ? 'Hide past events ↑' : 'Show past events ↓'}
        </button>
        <AnimatePresence>
          {showPast && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden mt-2.5"
            >
              {eventsPast.map((e) => (
                <EventRow key={e.name} e={e} isPast />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
