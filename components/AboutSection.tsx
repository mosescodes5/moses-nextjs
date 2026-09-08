'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { value: '3', label: 'PROJECTS RELEASED' },
  { value: '40+', label: 'SHOWS PLAYED' },
  { value: '5', label: 'CITIES TOURED' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid md:grid-cols-[0.85fr_1.15fr] gap-16 md:gap-[70px] items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=900&auto=format&fit=crop"
              alt="Moses Iyamo portrait"
              fill
              sizes="(max-width: 900px) 100vw, 500px"
              className="object-cover grayscale-[35%] contrast-[1.05]"
            />
          </div>
          <div className="absolute inset-[18px_-18px_-18px_18px] border border-red -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="text-[13px] text-greydim tracking-[0.1em]">02 — The Story</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] mt-2.5">About Moses</h2>
          <p className="font-display italic font-medium text-[clamp(22px,2.6vw,30px)] leading-snug my-7 pl-6 border-l-2 border-red">
            &ldquo;I don&apos;t write songs to be heard. I write them because something happened to me, and I need somewhere to put it.&rdquo;
          </p>
          <div className="text-grey space-y-4.5 max-w-[62ch]">
            <p>
              Moses Iyamo grew up between the choir stand and the street corner — two rooms that taught him the same
              lesson in different languages. What started as harmonies learned in a Lagos church basement grew into a
              sound that borrows from Afrobeats&apos; rhythm, soul&apos;s ache, and gospel&apos;s certainty, without asking
              permission from any one of them.
            </p>
            <p>
              Under Testimony City Media, Moses has spent the last few years turning ordinary events — a broken engine,
              a late rent payment, a mother&apos;s prayer answered — into records that feel bigger than the rooms they
              were written in. His music doesn&apos;t separate the sacred from the everyday; it insists they were always
              the same thing.
            </p>
            <p>He is currently based between Lagos and Abuja, writing his first full-length album.</p>
          </div>
          <div className="flex gap-12 mt-11 flex-wrap">
            {stats.map((s) => (
              <div key={s.label}>
                <b className="font-display block text-[34px] text-bone">{s.value}</b>
                <span className="text-[12.5px] text-greydim tracking-[0.06em]">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
