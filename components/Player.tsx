'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { usePlayer } from '@/lib/PlayerContext';

function fmt(t: number) {
  if (isNaN(t)) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function Player() {
  const { audioRef, currentTrack, isPlaying, togglePlay, next, prev } = usePlayer();
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => setDuration(el.duration);
    el.addEventListener('timeupdate', onTime);
    el.addEventListener('loadedmetadata', onMeta);
    return () => {
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('loadedmetadata', onMeta);
    };
  }, [audioRef]);

  const pct = duration ? (current / duration) * 100 : 0;

  return (
    <div className="fixed left-0 right-0 bottom-0 z-[250] h-[74px] bg-[#0f0d0b]/95 backdrop-blur-xl border-t border-hair">
      <div className="max-w-wrap mx-auto h-full flex items-center gap-4.5 px-5">
        <div className="relative w-[46px] h-[46px] flex-none bg-[#222]">
          {currentTrack && (
            <Image src={currentTrack.cover} alt="" fill sizes="46px" className="object-cover" />
          )}
        </div>
        <div className="min-w-0 flex-none w-[130px] sm:w-[150px]">
          <div className="text-[13.5px] whitespace-nowrap overflow-hidden text-ellipsis">
            {currentTrack?.title ?? 'Select a song'}
          </div>
          <div className="text-[11.5px] text-greydim whitespace-nowrap overflow-hidden text-ellipsis">
            Moses Iyamo
          </div>
        </div>
        <div className="flex items-center gap-4 flex-none">
          <button onClick={prev} aria-label="Previous" className="text-bone">
            <SkipBack size={16} fill="currentColor" />
          </button>
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="w-[38px] h-[38px] rounded-full bg-red hover:bg-red-bright transition-colors flex items-center justify-center text-bone"
          >
            {isPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" className="ml-0.5" />}
          </button>
          <button onClick={next} aria-label="Next" className="text-bone">
            <SkipForward size={16} fill="currentColor" />
          </button>
        </div>
        <div className="hidden sm:flex flex-1 items-center gap-2.5 min-w-0">
          <span className="text-[11px] text-greydim w-9 flex-none">{fmt(current)}</span>
          <div
            className="flex-1 h-[3px] bg-hair relative cursor-pointer rounded-sm"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const ratio = (e.clientX - rect.left) / rect.width;
              const el = audioRef.current;
              if (el && el.duration) el.currentTime = ratio * el.duration;
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 bg-red-bright rounded-sm" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-[11px] text-greydim w-9 flex-none text-right">{fmt(duration)}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 flex-none p-vol">
          <Volume2 size={15} className="text-grey" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            defaultValue={0.8}
            onChange={(e) => {
              const el = audioRef.current;
              if (el) el.volume = Number(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
