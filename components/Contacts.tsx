import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Cloud, Flower, InstagramIcon, Sparkle, Star, Wave } from "./Decorations";
import Reveal from "./Reveal";

const items = [
  {
    icon: MapPin,
    label: "Мекенжай",
    value: siteConfig.address.full,
    shape: "rounded-[2rem_0.75rem_2rem_2rem]",
    iconWrap: "blob-1 bg-grape text-white",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: siteConfig.phone.display,
    href: siteConfig.phone.href,
    shape: "rounded-[0.75rem_2rem_2rem_2rem]",
    iconWrap: "blob-2 bg-sunny text-ink",
  },
  {
    icon: Clock,
    label: "Жұмыс уақыты",
    value: siteConfig.workingHours,
    shape: "rounded-[2rem_2rem_0.75rem_2rem]",
    iconWrap: "blob-3 bg-lavender text-grape-dark",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: siteConfig.instagram.handle,
    href: siteConfig.instagram.url,
    external: true,
    shape: "rounded-[2rem_2rem_2rem_0.75rem]",
    iconWrap: "blob-1 bg-lilac text-white",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" aria-labelledby="contacts-title" className="relative isolate overflow-hidden bg-mist pb-20 sm:pb-28">
      <Wave color="#FFFFFF" variant={1} flip className="-mt-px" />
      <Cloud aria-hidden className="animate-float-slow absolute top-24 right-[8%] -z-10 w-28" />
      <Flower aria-hidden className="absolute bottom-16 left-[3%] -z-10 w-12 opacity-60" color="#DDD6FE" />

      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="section-kicker bg-white">
            <Sparkle aria-hidden className="w-3.5" color="#7C3AED" />
            Байланыс
          </span>
          <h2 id="contacts-title" className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
            Бізбен <span className="text-grape">байланысыңыз</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <address className="grid gap-4 not-italic sm:grid-cols-2 lg:grid-cols-1">
              {items.map(({ icon: Icon, label, value, href, external, shape, iconWrap }, i) => {
                const content = (
                  <>
                    <span className={`${iconWrap} grid h-12 w-12 shrink-0 place-items-center`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink-soft">{label}</span>
                      <span className="mt-0.5 block font-bold break-words text-ink">{value}</span>
                    </span>
                  </>
                );
                const cls = `${shape} flex items-center gap-4 bg-white p-4 pr-5 shadow-soft transition duration-300`;
                return (
                  <Reveal key={label} delay={i * 0.07} from="left">
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={`${cls} hover:-translate-y-1 hover:shadow-lift`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={cls}>{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </address>

            <Reveal delay={0.25} className="mt-7 flex flex-wrap gap-3">
              <a href={siteConfig.phone.href} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden />
                Қоңырау шалу
              </a>
              <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a href={siteConfig.maps.link} target="_blank" rel="noopener noreferrer" className="btn-sunny">
                <Navigation className="h-4 w-4" aria-hidden />
                Картадан көру
              </a>
            </Reveal>
          </div>

          {/* Карта */}
          <Reveal from="right" delay={0.1} className="relative">
            <div aria-hidden className="absolute -inset-3 rotate-2 rounded-[3rem_1.5rem_3rem_1.5rem] bg-lavender sm:-inset-4" />
            <Star aria-hidden className="animate-float absolute -top-6 -left-3 z-10 w-10" />
            <div className="relative overflow-hidden rounded-[3rem_1.5rem_3rem_1.5rem] border-[6px] border-white bg-white shadow-lift">
              <iframe
                title={`«${siteConfig.name}» балабақшасы картада: ${siteConfig.address.full}`}
                src={siteConfig.maps.embed}
                className="block h-[320px] w-full sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
