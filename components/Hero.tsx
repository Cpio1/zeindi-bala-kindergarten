import Image from "next/image";
import { ArrowRight, Heart as HeartIcon, MessageCircleHeart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Cloud, Dots, Flower, Heart, Sparkle, Squiggle, Star, Sun, Wave } from "./Decorations";
import Reveal from "./Reveal";

/** Сурет әлі жоқ кезде көрсетілетін әдемі иллюстрация */
export function KindergartenIllustration({ className = "", id = "hero" }: { className?: string; id?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Балабақша иллюстрациясы">
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EDE4FF" />
          <stop offset="1" stopColor="#DDD6FE" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#sky-${id})`} />
      {/* кемпірқосақ */}
      <g fill="none" strokeWidth="16" strokeLinecap="round" opacity=".9">
        <path d="M60 250a140 140 0 0 1 280 0" stroke="#A78BFA" />
        <path d="M80 250a120 120 0 0 1 240 0" stroke="#F9C74F" />
        <path d="M100 250a100 100 0 0 1 200 0" stroke="#FFFFFF" />
      </g>
      {/* күн */}
      <circle cx="320" cy="78" r="26" fill="#F9C74F" />
      {/* бұлттар */}
      <path fill="#fff" d="M58 108h52c8 0 14-6 14-13s-6-13-14-13h-2c-2-9-10-15-19-15-10 0-18 7-19 16-8 0-15 6-15 13s1 12 3 12Z" />
      {/* төбешік */}
      <path fill="#C4B5FD" d="M0 300c80-30 160-30 220-10s130 20 180 0v110H0Z" />
      <path fill="#A78BFA" d="M0 330c90-20 170-10 240 5s120 10 160-5v70H0Z" />
      {/* ғимарат */}
      <rect x="130" y="200" width="140" height="110" rx="14" fill="#FFFFFF" />
      <path d="M118 208 200 140l82 68Z" fill="#7C3AED" strokeLinejoin="round" />
      <rect x="182" y="250" width="36" height="60" rx="18" fill="#F9C74F" />
      <circle cx="160" cy="240" r="13" fill="#DDD6FE" />
      <circle cx="240" cy="240" r="13" fill="#DDD6FE" />
      <circle cx="200" cy="184" r="10" fill="#F9C74F" />
      {/* гүлдер */}
      <g>
        <circle cx="96" cy="320" r="9" fill="#F9C74F" />
        <circle cx="96" cy="320" r="4" fill="#7C3AED" />
        <circle cx="312" cy="326" r="9" fill="#fff" />
        <circle cx="312" cy="326" r="4" fill="#F9C74F" />
        <circle cx="60" cy="350" r="7" fill="#fff" />
        <circle cx="345" cy="356" r="7" fill="#F9C74F" />
      </g>
    </svg>
  );
}

export default function Hero({ image }: { image: string | null }) {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-mist pt-28 sm:pt-32">
      {/* фондағы жұмсақ дақтар */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-1 absolute -top-24 -left-24 h-80 w-80 bg-lavender/60 blur-2xl" />
        <div className="blob-2 absolute top-40 right-[-6rem] h-[28rem] w-[28rem] bg-lilac/25 blur-3xl" />
        <Cloud className="animate-float-slow absolute top-28 left-[42%] hidden w-24 opacity-90 md:block" />
        <Sparkle className="animate-float absolute top-36 left-6 w-5 sm:left-12" />
        <Dots className="absolute bottom-24 left-4 w-16 opacity-40 sm:left-10" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        {/* Сол жақ — мәтін */}
        <Reveal from="left" className="relative text-center lg:text-left">
          <span className="section-kicker bg-white/80 shadow-sm">
            <HeartIcon className="h-4 w-4 fill-sunny text-sunny" aria-hidden />
            Балаларға арналған жайлы орта
          </span>

          <h1 className="mt-5 text-[2.6rem] leading-[1.05] font-bold text-ink sm:text-6xl lg:text-[4.2rem]">
            <span className="relative inline-block text-grape">
              {siteConfig.name}
              <Squiggle
                preserveAspectRatio="none"
                className="absolute -bottom-4 left-1/2 h-3 w-1/2 -translate-x-1/2 sm:h-4 lg:left-1 lg:translate-x-0"
                color="#F9C74F"
              />
            </span>
          </h1>

          <p className="mt-8 font-display text-xl font-bold text-ink sm:text-2xl">{siteConfig.slogan}</p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#about" className="btn-primary group">
              Біз туралы
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a href="#contacts" className="btn-ghost">
              <MessageCircleHeart className="h-4 w-4" aria-hidden />
              Байланысу
            </a>
          </div>
        </Reveal>

        {/* Оң жақ — сурет */}
        <Reveal from="scale" delay={0.15} className="relative mx-auto w-full max-w-[30rem]">
          <div className="relative aspect-square">
            {/* артқы фигуралар */}
            <div aria-hidden className="blob-2 absolute inset-[-4%] rotate-6 bg-lavender" />
            <div aria-hidden className="blob-3 absolute -right-2 -bottom-4 h-1/3 w-1/3 bg-sunny/80" />

            <div className="animate-morph absolute inset-[3%] overflow-hidden border-[6px] border-white bg-lavender shadow-lift">
              {image ? (
                <Image
                  src={image}
                  alt="«Зейінді бала» балабақшасы"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              ) : (
                <KindergartenIllustration className="h-full w-full" />
              )}
            </div>

            {/* балалық элементтер */}
            <Sun className="animate-spin-slow absolute -top-6 -right-2 w-20 sm:w-24" />
            <Star className="animate-float absolute top-[12%] -left-4 w-10 sm:w-12" />
            <Flower className="animate-float-slow absolute -bottom-2 left-[6%] w-14 sm:w-16" />
            <Heart className="animate-float absolute right-[8%] bottom-[18%] w-7" color="#FFFFFF" />
            <Sparkle className="absolute top-[45%] -right-5 w-6" color="#7C3AED" />
            <div
              aria-hidden
              className="absolute -left-6 bottom-[30%] h-6 w-6 rounded-full border-4 border-lilac"
            />
          </div>
        </Reveal>
      </div>

      <Wave color="#FFFFFF" variant={1} className="-mb-px" />
    </section>
  );
}
