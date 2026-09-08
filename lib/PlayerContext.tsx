'use client';

import { createContext, useContext, useRef, useState, useCallback } from 'react';
import { releases, Release } from '@/lib/data';

type PlayerContextType = {
  currentIndex: number;
  isPlaying: boolean;
  currentTrack: Release;
  audioRef: React.RefObject<HTMLAudioElement>;
  loadTrack: (i: number, autoplay?: boolean) => void;
  togglePlay: () => void;
  next: () => void;
  prev: () => void;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const loadTrack = useCallback((i: number, autoplay = true) => {
    const nextIndex = (i + releases.length) % releases.length;
    setCurrentIndex(nextIndex);
    setHasLoaded(true);
    const el = audioRef.current;
    if (!el) return;
    el.src = releases[nextIndex].src;
    if (autoplay) el.play();
  }, []);

  const togglePlay = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (!hasLoaded) {
      loadTrack(0, true);
      return;
    }
    if (el.paused) el.play();
    else el.pause();
  }, [hasLoaded, loadTrack]);

  const next = useCallback(() => loadTrack(currentIndex + 1, true), [currentIndex, loadTrack]);
  const prev = useCallback(() => loadTrack(currentIndex - 1, true), [currentIndex, loadTrack]);

  return (
    <PlayerContext.Provider
      value={{
        currentIndex,
        isPlaying,
        currentTrack: releases[currentIndex],
        audioRef,
        loadTrack,
        togglePlay,
        next,
        prev,
      }}
    >
      {children}
      <audio
        ref={(el) => {
          // @ts-ignore mutable ref assignment
          audioRef.current = el;
          if (el) el.volume = 0.8;
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={next}
        preload="none"
      />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
}
