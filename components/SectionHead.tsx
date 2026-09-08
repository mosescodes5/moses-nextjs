'use client';

import { motion } from 'framer-motion';

export function SectionHead({
  index,
  title,
  desc,
}: {
  index: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-end gap-6 mb-14 flex-wrap"
    >
      <div>
        <div className="text-[13px] text-greydim tracking-[0.1em] mb-2">{index}</div>
        <h2 className="font-display text-[clamp(34px,5vw,56px)]">{title}</h2>
      </div>
      <p className="text-grey max-w-[420px] text-[15px]">{desc}</p>
    </motion.div>
  );
}
