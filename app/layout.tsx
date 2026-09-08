import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import { Player } from '@/components/Player';
import { PlayerProvider } from '@/lib/PlayerContext';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Moses Iyamo — Official Website',
  description:
    'The official website of Moses Iyamo. Music, videos, events, and news from Testimony City Media.',
  openGraph: {
    title: 'Moses Iyamo — Official Website',
    description: 'Music, videos, events, and news from Testimony City Media.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body pb-[74px]">
        <PlayerProvider>
          {children}
          <Player />
        </PlayerProvider>
      </body>
    </html>
  );
}
