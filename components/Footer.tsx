import { MapPin, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site-config";
import { InstagramIcon, LogoMark, Sparkle, Star, Wave } from "./Decorations";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-mist text-white">
      <Wave color="#3B1677" variant={3} className="-mb-px" />
      <div className="relative bg-grape-deep">
        <div aria-hidden className="blob-1 absolute -top-10 right-[-4rem] h-64 w-64 bg-grape/40" />
        <div aria-hidden className="blob-2 absolute bottom-[-5rem] left-[-3rem] h-56 w-56 bg-grape/30" />
        <Star aria-hidden className="absolute bottom-20 left-[30%] w-6 opacity-80" />
        <Sparkle aria-hidden className="absolute right-[12%] bottom-16 w-5" color="#A78BFA" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <LogoMark className="h-12 w-12" />
              <span className="font-display text-2xl font-bold">{siteConfig.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-white/75">{siteConfig.slogan}</p>
            <p className="mt-2 text-sm text-white/60">{siteConfig.legalName}</p>
          </div>

          <nav aria-label="Төменгі мәзір">
            <h2 className="font-display text-lg font-bold text-lavender">Бөлімдер</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-white/80 transition hover:text-sunny">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg font-bold text-lavender">Байланыс</h2>
            <address className="mt-4 grid gap-3.5 not-italic">
              <a href={siteConfig.maps.link} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-white/80 transition hover:text-sunny">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-lilac" aria-hidden />
                {siteConfig.address.full}
              </a>
              <a href={siteConfig.phone.href} className="flex items-center gap-3 text-white/80 transition hover:text-sunny">
                <Phone className="h-5 w-5 shrink-0 text-lilac" aria-hidden />
                {siteConfig.phone.display}
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 transition hover:text-sunny"
              >
                <InstagramIcon className="h-5 w-5 shrink-0 text-lilac" />
                {siteConfig.instagram.handle}
              </a>
            </address>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <p className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-white/60 sm:px-6">
            © {siteConfig.copyrightYear} {siteConfig.name}. Барлық құқықтар қорғалған.
          </p>
        </div>
      </div>
    </footer>
  );
}
