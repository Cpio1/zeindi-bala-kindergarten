"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Camera, ChevronDown, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Cloud, Flower, Sparkle, Star } from "./Decorations";
import Reveal from "./Reveal";

const INITIAL_COUNT = 6;

/** Әр суретке әртүрлі пішін */
const shapes = [
  "rounded-[2.5rem_0.75rem_2.5rem_0.75rem]",
  "rounded-[50%_50%_1.5rem_1.5rem/35%_35%_1.5rem_1.5rem]",
  "rounded-[0.75rem_2.5rem_0.75rem_2.5rem]",
  "rounded-[1.5rem_1.5rem_50%_50%/1.5rem_1.5rem_30%_30%]",
  "rounded-[2rem]",
  "rounded-[48%_52%_40%_60%/38%_42%_58%_62%]",
];

/** Тордағы ырғақ: кейбір суреттер биік */
const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[4/5]", "aspect-square", "aspect-[4/5]", "aspect-square"];

const altFor = (i: number) => `«Зейінді бала» балабақшасының жарқын сәті — ${i + 1}-сурет`;

export default function Gallery({ images }: { images: string[] }) {
  const [showAll, setShowAll] = useState(false);
  const [current, setCurrent] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);

  const visible = showAll ? images : images.slice(0, INITIAL_COUNT);
  const hasMore = images.length > INITIAL_COUNT;

  const close = useCallback(() => {
    setCurrent(null);
    lastTrigger.current?.focus();
  }, []);
  const next = useCallback(() => setCurrent((c) => (c === null ? c : (c + 1) % images.length)), [images.length]);
  const prev = useCallback(
    () => setCurrent((c) => (c === null ? c : (c - 1 + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (current === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      // Фокусты терезе ішінде ұстау
      if (e.key === "Tab" && dialog.current) {
        const items = dialog.current.querySelectorAll<HTMLElement>("button");
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [current, close, next, prev]);

  const isOpen = current !== null;
  useEffect(() => {
    if (isOpen) closeBtn.current?.focus();
  }, [isOpen]);

  // Сенсорлы экранда саусақпен ауыстыру
  const touchX = useRef<number | null>(null);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
      <Cloud aria-hidden className="animate-float-slow absolute top-14 -left-6 -z-10 w-32" color="#F3EDFF" />
      <Flower aria-hidden className="absolute right-[6%] bottom-10 -z-10 w-14 opacity-50" color="#DDD6FE" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center text-center">
          <span className="section-kicker">
            <Camera className="h-4 w-4" aria-hidden />
            Галерея
          </span>
          <h2 id="gallery-title" className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
            Біздің <span className="text-grape">галерея</span>
          </h2>
          <p className="mt-3 text-base text-ink-soft sm:text-lg">Балабақшамыздың жарқын сәттері</p>
        </Reveal>

        {images.length === 0 ? (
          <Reveal from="scale" className="mx-auto mt-12 max-w-xl">
            <div className="relative overflow-hidden rounded-[3rem_1.5rem_3rem_1.5rem] border-2 border-dashed border-lilac bg-mist px-6 py-14 text-center">
              <Star aria-hidden className="animate-float absolute top-6 left-8 w-8" />
              <Sparkle aria-hidden className="absolute right-10 bottom-8 w-6" color="#A78BFA" />
              <span className="blob-1 mx-auto grid h-20 w-20 place-items-center bg-lavender text-grape">
                <Camera className="h-9 w-9" aria-hidden />
              </span>
              <p className="mt-5 font-display text-xl font-bold text-ink">Суреттер жақында қосылады</p>
              <p className="mt-2 text-ink-soft">Балабақшамыздың қызықты сәттерін көп ұзамай осы жерден көре аласыз.</p>
            </div>
          </Reveal>
        ) : (
          <>
            <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
              {visible.map((src, i) => (
                <Reveal
                  as="li"
                  key={src}
                  from="scale"
                  delay={(i % INITIAL_COUNT) * 0.06}
                  className={`${i % 3 === 1 ? "md:mt-10" : ""}`}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      lastTrigger.current = e.currentTarget;
                      setCurrent(i);
                    }}
                    className={`group relative block w-full overflow-hidden bg-lavender shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift ${shapes[i % shapes.length]} ${ratios[i % ratios.length]}`}
                    aria-label={`Суретті үлкейту: ${i + 1}-сурет`}
                  >
                    <Image
                      src={src}
                      alt={altFor(i)}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-grape/0 transition-colors duration-300 group-hover:bg-grape/25">
                      <span className="grid h-12 w-12 scale-75 place-items-center rounded-full bg-white/90 text-grape opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <Expand className="h-5 w-5" aria-hidden />
                      </span>
                    </span>
                  </button>
                </Reveal>
              ))}
            </ul>

            {hasMore && !showAll && (
              <div className="mt-10 flex justify-center">
                <button type="button" onClick={() => setShowAll(true)} className="btn-primary group">
                  Барлығын көру
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{images.length}</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Толық экранды қарау (lightbox) */}
      <AnimatePresence>
        {current !== null && (
          <motion.div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label="Суретті толық экранда қарау"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
              touchX.current = null;
            }}
          >
            <motion.div
              key={current}
              className="relative h-full w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={images[current]}
                alt={altFor(current)}
                fill
                sizes="100vw"
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
              {current + 1} / {images.length}
            </p>

            <button
              ref={closeBtn}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Жабу"
              className="absolute top-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-white text-grape-dark shadow-lift transition hover:scale-105"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Алдыңғы сурет"
                  className="absolute top-1/2 left-3 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-grape-dark shadow-lift transition hover:bg-white sm:left-6"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Келесі сурет"
                  className="absolute top-1/2 right-3 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-grape-dark shadow-lift transition hover:bg-white sm:right-6"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
