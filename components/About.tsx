import Image from "next/image";
import { Brain, MessagesSquare, Palette, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Cloud, Dots, Flower, Sparkle, Star, Wave } from "./Decorations";
import { KindergartenIllustration } from "./Hero";
import Reveal from "./Reveal";

const focusAreas = [
  { icon: Palette, label: "Шығармашылық қабілет", tone: "bg-sunny/30 text-ink", shape: "leaf" },
  { icon: Brain, label: "Ойлау жүйесі", tone: "bg-lavender text-grape-dark", shape: "leaf-alt" },
  { icon: MessagesSquare, label: "Қарым-қатынас дағдылары", tone: "bg-mist text-grape-dark", shape: "leaf" },
] as const;

export default function About({ image }: { image: string | null }) {
  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
      <Dots aria-hidden className="absolute top-10 right-6 -z-10 w-20 opacity-30" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Сурет композициясы */}
        <Reveal from="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-[88%] sm:w-[80%]">
            <div aria-hidden className="absolute inset-0 translate-x-5 translate-y-5 rounded-[48%_52%_40%_60%/38%_42%_58%_62%] bg-lavender" />
            <div className="relative h-full overflow-hidden rounded-[48%_52%_40%_60%/38%_42%_58%_62%] border-[6px] border-white shadow-lift">
              {image ? (
                <Image
                  src={image}
                  alt="Балабақшадағы балалар"
                  fill
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="object-cover"
                />
              ) : (
                <KindergartenIllustration id="about" className="h-full w-full" />
              )}
            </div>
          </div>

          {/* қалқымалы карточка */}
          <div className="leaf absolute right-0 bottom-6 flex max-w-[13rem] items-center gap-3 bg-white p-4 shadow-lift sm:right-2">
            <span className="blob-1 grid h-12 w-12 shrink-0 place-items-center bg-grape text-white">
              <Sparkles className="h-6 w-6" aria-hidden />
            </span>
            <p className="text-sm leading-snug font-bold text-ink">
              {siteConfig.groups}, {siteConfig.ages}
            </p>
          </div>

          <Star aria-hidden className="animate-float absolute -top-4 right-[18%] w-12" />
          <Flower aria-hidden className="animate-float-slow absolute top-[40%] -left-3 w-12" color="#DDD6FE" />
          <Sparkle aria-hidden className="absolute top-[18%] right-[6%] w-6" color="#7C3AED" />
        </Reveal>

        {/* Мәтін */}
        <div>
          <Reveal>
            <span className="section-kicker">
              <Sparkle aria-hidden className="w-3.5" color="#7C3AED" />
              Біз туралы
            </span>
            <h2 id="about-title" className="mt-4 text-3xl leading-tight font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
              Біздің балабақша <span className="text-grape">туралы</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              <strong className="font-bold text-ink">«{siteConfig.name}»</strong> балабақшасы — балалардың жан-жақты
              дамуына, білім алуына және қызықты уақыт өткізуіне бағытталған орта.
            </p>
            <p>
              Біз әр баланың жеке ерекшеліктерін ескеріп, оның шығармашылық қабілетін, ойлау жүйесін және
              қарым-қатынас дағдыларын дамытуға мән береміз.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map(({ icon: Icon, label, tone, shape }, i) => (
              <Reveal as="li" key={label} delay={0.15 + i * 0.08}>
                <span
                  className={`${shape} ${tone} inline-flex items-center gap-2.5 px-5 py-3 text-sm font-bold transition-transform duration-300 hover:-translate-y-1 hover:rotate-[-1deg]`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                  {label}
                </span>
              </Reveal>
            ))}
          </ul>

          <Cloud aria-hidden className="mt-10 hidden w-28 lg:block" color="#F3EDFF" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <Wave color="#F3EDFF" variant={2} className="-mb-px" />
      </div>
    </section>
  );
}
