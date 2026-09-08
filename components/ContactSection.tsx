'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const socials = [
  { label: 'Instagram', handle: '@mosesiyamo' },
  { label: 'TikTok', handle: '@mosesiyamo' },
  { label: 'YouTube', handle: 'Moses Iyamo' },
  { label: 'Spotify', handle: 'Moses Iyamo' },
  { label: 'Twitter / X', handle: '@mosesiyamo' },
];

export function ContactSection() {
  const [note, setNote] = useState('We usually respond within 2–3 business days.');

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid md:grid-cols-[1fr_1.3fr] gap-11 md:gap-[70px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[13px] text-greydim tracking-[0.1em]">06 — Booking</div>
          <h2 className="font-display text-[clamp(30px,4vw,46px)] mt-2.5">Book Moses Iyamo</h2>
          <p className="text-grey mt-4 max-w-[38ch]">
            For shows, sessions, features, and partnerships — reach the team directly through Testimony City Media.
          </p>
          <ul className="mt-7">
            {socials.map((s) => (
              <li key={s.label} className="border-b border-hair">
                <a
                  href="#"
                  className="flex justify-between py-4 text-[15px] text-grey hover:text-bone hover:pl-2 transition-all"
                >
                  {s.label} <span>{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setNote('Thanks — your request has been noted. (Connect this form to email/CRM in production.)');
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          <Field label="Name"><input type="text" required className={inputClass} /></Field>
          <Field label="Email"><input type="email" required className={inputClass} /></Field>
          <Field label="Phone"><input type="tel" className={inputClass} /></Field>
          <Field label="Company / Organization"><input type="text" className={inputClass} /></Field>
          <Field label="Event Type">
            <select className={inputClass}>
              <option>Concert</option>
              <option>Private Event</option>
              <option>Church / Ministry Program</option>
              <option>Festival</option>
              <option>Corporate Event</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Event Date"><input type="date" className={inputClass} /></Field>
          <Field label="Location" full><input type="text" className={inputClass} /></Field>
          <Field label="Message" full><textarea rows={4} className={inputClass + ' resize-y'} /></Field>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full justify-center inline-flex items-center bg-red border border-red text-bone px-7 py-4 text-sm rounded-sm hover:bg-red-bright transition-colors"
            >
              Send Booking Request
            </button>
            <p className="text-[12.5px] text-greydim mt-3.5">{note}</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

const inputClass =
  'bg-transparent border-0 border-b border-hair text-bone font-body text-[15px] py-2.5 focus:outline-none focus:border-red w-full';

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-2 ${full ? 'sm:col-span-2' : ''}`}>
      <label className="text-[12px] tracking-[0.06em] text-greydim">{label}</label>
      {children}
    </div>
  );
}
