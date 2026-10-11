import type { Metadata, Viewport } from "next";
import { Comfortaa, Nunito } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

/* Екі қаріп те қазақ әріптерін толық қолдайды (Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ, І) */
const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-nunito",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const title = `${siteConfig.name} — Алматыдағы балабақша`;
const description = `«${siteConfig.name}» балабақшасы: ${siteConfig.ages} балаларға арналған жайлы орта. ${siteConfig.groups}, оқыту тілі — қазақ тілі, күніне 5 рет тамақтану. ${siteConfig.address.full}.`;

export const metadata: Metadata = {
  title,
  description,
  applicationName: siteConfig.name,
  keywords: ["балабақша", "Алматы", "Қалқаман-2", "Зейінді бала", "балалар", "мектепке дейінгі білім"],
  openGraph: {
    title,
    description,
    siteName: siteConfig.name,
    locale: "kk_KZ",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  telephone: siteConfig.phone.display,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.district}, ${siteConfig.address.street}`,
    addressLocality: siteConfig.address.city,
    addressCountry: "KZ",
  },
  sameAs: [siteConfig.instagram.url],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={`${nunito.variable} ${comfortaa.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[200] rounded-full bg-grape px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Негізгі мазмұнға өту
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
