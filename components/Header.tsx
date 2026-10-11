"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site-config";
import { LogoMark } from "./Decorations";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Қазір қай бөлім көрініп тұрғанын белгілеу
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[1.75rem] border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? "border-white/70 bg-white/75 shadow-soft"
            : "border-white/40 bg-white/45"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoMark className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-display text-lg font-bold text-ink">{siteConfig.name}</span>
        </a>

        <nav aria-label="Негізгі мәзір" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[0.92rem] font-semibold transition-colors ${
                    active === item.id
                      ? "bg-lavender/80 text-grape-dark"
                      : "text-ink-soft hover:bg-lavender/50 hover:text-grape-dark"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contacts" className="btn-primary hidden px-5! py-2.5! sm:inline-flex">
            <Phone className="h-4 w-4" aria-hidden />
            Хабарласу
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-lavender/70 text-grape-dark transition hover:bg-lavender lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Мобильді мәзір */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-6xl rounded-[1.75rem] border border-white/70 bg-white/90 p-3 shadow-lift backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Мобильді мәзір">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 font-semibold transition-colors ${
                    active === item.id ? "bg-lavender/80 text-grape-dark" : "text-ink hover:bg-mist"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full sm:hidden"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Хабарласу
          </a>
        </nav>
      </div>
    </header>
  );
}
