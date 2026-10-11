import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

/** Басты экранға арналған файл: main-page.jpg / .jpeg / .png / .webp */
const HERO_NAMES = ["main-page"];
/** «Біз туралы» бөліміне арналған файл: main-page2 (немесе about) */
const ABOUT_NAMES = ["main-page2", "about"];

export type SiteImages = {
  hero: string | null;
  about: string | null;
  gallery: string[];
};

function baseName(file: string) {
  return file.replace(IMAGE_EXT, "").toLowerCase();
}

function listImages(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => !f.startsWith(".") && IMAGE_EXT.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch {
    return [];
  }
}

/**
 * Суреттерді build кезінде оқиды.
 * main-page және main-page2 public/images немесе public папкасында болуы мүмкін;
 * галерея тек public/images ішіндегі қалған суреттерден құралады.
 */
export function getSiteImages(): SiteImages {
  const imageFiles = listImages(IMAGES_DIR);
  const rootFiles = listImages(PUBLIC_DIR);

  const find = (names: string[]) => {
    for (const name of names) {
      const inImages = imageFiles.find((f) => baseName(f) === name);
      if (inImages) return { file: inImages, src: `/images/${encodeURIComponent(inImages)}` };
      const inRoot = rootFiles.find((f) => baseName(f) === name);
      if (inRoot) return { file: null, src: `/${encodeURIComponent(inRoot)}` };
    }
    return null;
  };

  const hero = find(HERO_NAMES);
  const about = find(ABOUT_NAMES);
  const reserved = new Set([...HERO_NAMES, ...ABOUT_NAMES]);
  const gallery = imageFiles.filter((f) => !reserved.has(baseName(f)));

  return {
    hero: hero?.src ?? null,
    about: about?.src ?? null,
    gallery: gallery.map((f) => `/images/${encodeURIComponent(f)}`),
  };
}
