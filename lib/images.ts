import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

/** Басты экранға арналған файл: main-page.jpg / .jpeg / .png / .webp */
const HERO_NAME = "main-page";
/** «Біз туралы» бөліміне арналған қосымша файл (міндетті емес): about.jpg т.б. */
const ABOUT_NAME = "about";

export type SiteImages = {
  hero: string | null;
  about: string | null;
  gallery: string[];
};

function baseName(file: string) {
  return file.replace(IMAGE_EXT, "").toLowerCase();
}

/**
 * public/images папкасындағы суреттерді build кезінде оқиды.
 * main-page және about суреттері галереяға қосылмайды.
 */
export function getSiteImages(): SiteImages {
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(IMAGES_DIR)
      .filter((f) => !f.startsWith(".") && IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch {
    return { hero: null, about: null, gallery: [] };
  }

  const toSrc = (f: string) => `/images/${encodeURIComponent(f)}`;
  const hero = files.find((f) => baseName(f) === HERO_NAME);
  const about = files.find((f) => baseName(f) === ABOUT_NAME);
  const gallery = files.filter((f) => f !== hero && f !== about);

  return {
    hero: hero ? toSrc(hero) : null,
    about: about ? toSrc(about) : null,
    gallery: gallery.map(toSrc),
  };
}
