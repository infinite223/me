"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Shot = { src: StaticImageData; alt: string };

const ScreenshotGallery = ({ shots }: { shots: Shot[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const step = (dir: 1 | -1) =>
    setOpen((i) => (i === null ? i : (i + dir + shots.length) % shots.length));

  return (
    <div className="relative group/gallery">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-1 px-1 scroll-smooth"
      >
        {shots.map((s, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            aria-label={`Powiększ: ${s.alt}`}
            className="snap-start shrink-0 w-[58%] sm:w-[34%] lg:w-[24%] rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-zoom-in"
          >
            <Image
              src={s.src}
              alt={s.alt}
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="w-full h-auto"
            />
          </button>
        ))}
      </div>
      {(["l", "r"] as const).map((side) => (
        <button
          key={side}
          onClick={() => scrollBy(side === "l" ? -1 : 1)}
          aria-label={side === "l" ? "Poprzednie" : "Następne"}
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${side === "l" ? "left-2" : "right-2"} h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md ring-1 ring-black/5 opacity-0 transition group-hover/gallery:opacity-100 hover:bg-white`}
        >
          {side === "l" ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      ))}

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setOpen(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(null);
            if (e.key === "ArrowLeft") step(-1);
            if (e.key === "ArrowRight") step(1);
          }}
          tabIndex={-1}
          ref={(el) => el?.focus()}
        >
          <button
            aria-label="Zamknij"
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            aria-label="Poprzednie"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-3 md:left-8 h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <Image
            src={shots[open].src}
            alt={shots[open].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-auto h-auto rounded-2xl shadow-2xl"
          />
          <button
            aria-label="Następne"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-3 md:right-8 h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;
