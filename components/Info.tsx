import type { ReactNode } from "react";
import { Baby, Clock, Languages, Users, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Cloud, Flower, Heart, Sparkle, Star, Sun, Wave } from "./Decorations";
import Reveal from "./Reveal";

type Card = {
  icon: LucideIcon;
  title: string;
  value: string;
  /** карточканың пішіні мен түсі */
  className: string;
  iconWrap: string;
  deco: ReactNode;
  /** тордағы орны */
  span: string;
  light?: boolean;
};

const cards: Card[] = [
  {
    icon: Clock,
    title: "Жұмыс уақыты",
    span: "sm:col-span-2 lg:col-span-3",
    value: siteConfig.workingHours,
    className:
      "bg-gradient-to-br from-grape to-grape-dark rounded-[3rem_1.25rem_3rem_1.25rem]",
    iconWrap: "blob-1 bg-white/15 text-white",
    deco: <Sun aria-hidden className="animate-spin-slow absolute -top-6 -right-6 w-28 opacity-90" />,
    light: true,
  },
  {
    icon: Users,
    title: "Топтар саны",
    span: "lg:col-span-3",
    value: siteConfig.groups,
    className: "bg-lavender rounded-[1.25rem_3.5rem_1.25rem_3.5rem]",
    iconWrap: "blob-2 bg-white text-grape",
    deco: <Cloud aria-hidden className="absolute -right-4 bottom-3 w-28 opacity-80" />,
  },
  {
    icon: Baby,
    title: "Балалардың жасы",
    span: "lg:col-span-2",
    value: siteConfig.ages,
    className: "bg-white rounded-[2.5rem_2.5rem_2.5rem_0.75rem] ring-2 ring-lavender",
    iconWrap: "blob-3 bg-sunny/40 text-ink",
    deco: <Star aria-hidden className="animate-float absolute top-5 right-5 w-9" />,
  },
  {
    icon: Languages,
    title: "Оқыту тілі",
    span: "lg:col-span-2",
    value: siteConfig.language,
    className: "bg-sunny/35 rounded-[50%_50%_2rem_2rem/30%_30%_2rem_2rem]",
    iconWrap: "blob-1 bg-white text-grape",
    deco: <Sparkle aria-hidden className="absolute top-6 right-6 w-7" color="#7C3AED" />,
  },
  {
    icon: UtensilsCrossed,
    title: "Тамақтану",
    span: "lg:col-span-2",
    value: siteConfig.meals,
    className: "bg-lilac/30 rounded-[0.75rem_2.5rem_2.5rem_2.5rem]",
    iconWrap: "blob-2 bg-grape text-white",
    deco: <Flower aria-hidden className="animate-float-slow absolute top-4 right-4 w-12" color="#FFFFFF" />,
  },
];

export default function Info() {
  return (
    <section id="info" aria-labelledby="info-title" className="relative isolate overflow-hidden bg-haze py-16 sm:py-24">
      <Heart aria-hidden className="animate-float absolute top-16 left-[8%] -z-10 w-8 opacity-60" />
      <Star aria-hidden className="absolute right-[10%] bottom-28 -z-10 w-8 opacity-70" color="#DDD6FE" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-kicker bg-white">
            <Sparkle aria-hidden className="w-3.5" color="#7C3AED" />
            Ақпарат
          </span>
          <h2 id="info-title" className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
            Балабақша туралы <span className="text-grape">ақпарат</span>
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {cards.map(({ icon: Icon, title, value, className, iconWrap, deco, light, span }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08} from={i % 2 ? "right" : "up"} className={span}>
              <div
                className={`${className} group relative flex h-full min-h-[11rem] flex-col justify-between gap-6 overflow-hidden p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-8`}
              >
                {deco}
                <span
                  className={`${iconWrap} grid h-14 w-14 place-items-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <div>
                  <h3 className={`text-base font-bold ${light ? "text-white/85" : "text-ink-soft"}`}>{title}</h3>
                  <p className={`mt-1 font-display text-2xl font-bold sm:text-3xl ${light ? "text-white" : "text-ink"}`}>
                    {value}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <Wave color="#FFFFFF" variant={3} className="-mb-px" />
      </div>
    </section>
  );
}
