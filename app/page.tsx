import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Documents from "@/components/Documents";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import { getSiteImages } from "@/lib/images";

export default function Home() {
  const { hero, about, gallery } = getSiteImages();

  return (
    <>
      <Header />
      <main id="main">
        <Hero image={hero} />
        {/* about.jpg болмаса, галереяның бірінші суреті қолданылады */}
        <About image={about ?? gallery[0] ?? null} />
        <Info />
        <Gallery images={gallery} />
        <Documents />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
