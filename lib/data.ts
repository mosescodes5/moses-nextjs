// Mock data layer.
// Swap these functions for Supabase queries later without touching any component:
// e.g. `export async function getReleases() { return supabase.from('releases').select('*') }`

export type Release = {
  id: number;
  type: 'single' | 'ep' | 'album';
  title: string;
  date: string;
  genre: string;
  duration: string;
  cover: string;
  src: string;
};

export const releases: Release[] = [
  {
    id: 1,
    type: 'single',
    title: 'Covenant',
    date: 'Aug 2026',
    genre: 'Afro-Soul',
    duration: '3:24',
    cover:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 2,
    type: 'single',
    title: 'Homecoming',
    date: 'May 2026',
    genre: 'Afrobeats',
    duration: '3:51',
    cover:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 3,
    type: 'ep',
    title: 'Testimony Road',
    date: 'Feb 2026',
    genre: 'Gospel / Soul',
    duration: 'EP · 5 tracks',
    cover:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 4,
    type: 'single',
    title: 'Ferried',
    date: 'Nov 2025',
    genre: 'Afro-Soul',
    duration: '4:02',
    cover:
      'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=600&auto=format&fit=crop',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 5,
    type: 'album',
    title: 'City of Testimony',
    date: 'Sep 2025',
    genre: 'Afro-Gospel',
    duration: 'Album · 11 tracks',
    cover:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=601&auto=format&fit=crop',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
  {
    id: 6,
    type: 'single',
    title: 'Still Here',
    date: 'Jun 2025',
    genre: 'Soul',
    duration: '3:12',
    cover:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=601&auto=format&fit=crop',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  },
];

export type Video = {
  title: string;
  date: string;
  yt: string;
  thumb: string;
};

export const videos: Video[] = [
  {
    title: 'Covenant (Official Video)',
    date: 'Aug 2026',
    yt: 'dQw4w9WgXcQ',
    thumb:
      'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Homecoming (Visualizer)',
    date: 'May 2026',
    yt: 'dQw4w9WgXcQ',
    thumb:
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Testimony Road (Studio Session)',
    date: 'Mar 2026',
    yt: 'dQw4w9WgXcQ',
    thumb:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
  },
];

export type EventItem = {
  day: string;
  mon: string;
  name: string;
  venue: string;
  loc: string;
};

export const eventsUpcoming: EventItem[] = [
  { day: '14', mon: 'Oct', name: 'Lagos Live Sessions', venue: 'Muri Okunola Park', loc: 'Lagos, Nigeria' },
  { day: '02', mon: 'Nov', name: 'Testimony Night', venue: 'Dominion City Auditorium', loc: 'Abuja, Nigeria' },
  { day: '21', mon: 'Dec', name: 'Homecoming Concert', venue: 'Eko Convention Centre', loc: 'Lagos, Nigeria' },
];

export const eventsPast: EventItem[] = [
  { day: '19', mon: 'Jul', name: 'Afro Soul Fest', venue: 'Freedom Park', loc: 'Lagos, Nigeria' },
  { day: '04', mon: 'Apr', name: 'Rooftop Sessions Vol. 2', venue: 'The Terrace', loc: 'Abuja, Nigeria' },
];

export type GalleryImage = {
  cat: 'performance' | 'studio' | 'bts';
  src: string;
};

export const galleryImages: GalleryImage[] = [
  { cat: 'performance', src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=700&auto=format&fit=crop' },
  { cat: 'studio', src: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=700&auto=format&fit=crop' },
  { cat: 'bts', src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=700&auto=format&fit=crop' },
  { cat: 'performance', src: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=700&auto=format&fit=crop' },
  { cat: 'studio', src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=700&auto=format&fit=crop' },
  { cat: 'bts', src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=700&auto=format&fit=crop' },
  { cat: 'performance', src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=700&auto=format&fit=crop' },
  { cat: 'studio', src: 'https://images.unsplash.com/photo-1618609377964-467353dfa93a?q=80&w=700&auto=format&fit=crop' },
];
