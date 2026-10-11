/**
 * Балабақшаның негізгі деректері.
 * Сайттағы барлық мәтіндік ақпаратты осы жерден өзгертуге болады.
 */

/**
 * Құжаттар салынған Google Drive папкасының сілтемесі.
 * Сілтеме дайын болғанда осы жерге қойыңыз, мысалы:
 * export const DOCUMENTS_URL = "https://drive.google.com/drive/folders/...";
 * Бос болса, «Құжаттарды қарау» батырмасы белсенді емес болады.
 */
export const DOCUMENTS_URL: string = "";

const address = {
  city: "Алматы",
  district: "Қалқаман-2 ықшамауданы",
  street: "Сейтметов көшесі, 129",
  full: "Алматы қаласы, Қалқаман-2 ықшамауданы, Сейтметов көшесі, 129",
  /** Google Maps іздеу сұрауы — координаттар емес, нақты мекенжай */
  mapQuery: "Алматы, Қалқаман-2, Сейтметов көшесі, 129",
};

const phone = {
  display: "+7 778 977 77 29",
  href: "tel:+77789777729",
};

const instagram = {
  handle: "@zeindi_bala_bakshasy",
  url: "https://www.instagram.com/zeindi_bala_bakshasy/",
};

export const siteConfig = {
  legalName: "ТОО «Зейінді бала»",
  name: "Зейінді бала",
  slogan: "Бақытты балалық шаққа алғашқы қадам!",
  description:
    "Біздің балабақшада әр балаға мейірім мен қамқорлық көрсетіліп, оның дамуына қолайлы орта қалыптастырылады.",
  address,
  phone,
  instagram,
  workingHours: "08:00–18:00",
  groups: "3 топ",
  ages: "2–5 жас",
  language: "Қазақ тілі",
  meals: "Күніне 5 рет",
  maps: {
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.mapQuery)}`,
    embed: `https://maps.google.com/maps?q=${encodeURIComponent(address.mapQuery)}&z=16&hl=kk&output=embed`,
  },
  copyrightYear: 2026,
} as const;

export const navItems = [
  { id: "home", label: "Басты бет" },
  { id: "about", label: "Біз туралы" },
  { id: "info", label: "Ақпарат" },
  { id: "gallery", label: "Галерея" },
  { id: "documents", label: "Құжаттар" },
  { id: "contacts", label: "Байланыс" },
] as const;
