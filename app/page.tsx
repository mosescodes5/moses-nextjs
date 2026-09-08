import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { MusicSection } from '@/components/MusicSection';
import { AboutSection } from '@/components/AboutSection';
import { VideosSection } from '@/components/VideosSection';
import { EventsSection } from '@/components/EventsSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <MusicSection />
      <AboutSection />
      <VideosSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
}
