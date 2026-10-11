import { ExternalLink, FileText, FolderOpen, Hourglass } from "lucide-react";
import { DOCUMENTS_URL } from "@/lib/site-config";
import { Dots, Sparkle, Star } from "./Decorations";
import Reveal from "./Reveal";

export default function Documents() {
  const hasLink = DOCUMENTS_URL.trim().length > 0;

  return (
    <section id="documents" aria-labelledby="documents-title" className="relative bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal from="scale">
          <div className="relative isolate overflow-hidden rounded-[3.5rem_1.5rem_3.5rem_1.5rem] bg-gradient-to-br from-grape via-[#6d28d9] to-grape-dark px-6 py-12 text-center text-white shadow-lift sm:px-12 sm:py-14 md:text-left">
            {/* декоративті фигуралар */}
            <div aria-hidden className="blob-1 absolute -top-16 -right-12 -z-10 h-56 w-56 bg-lilac/40" />
            <div aria-hidden className="blob-2 absolute -bottom-20 -left-10 -z-10 h-48 w-48 bg-white/10" />
            <Dots aria-hidden className="absolute right-[38%] bottom-6 -z-10 hidden w-16 opacity-30 md:block" color="#FFFFFF" />
            <Star aria-hidden className="animate-float absolute top-8 right-10 w-8 sm:w-10" />
            <Sparkle aria-hidden className="absolute bottom-10 left-[46%] hidden w-5 md:block" color="#DDD6FE" />

            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
              {/* құжат иконкасы */}
              <div className="relative shrink-0" aria-hidden>
                <div className="blob-3 grid h-28 w-28 rotate-[-6deg] place-items-center bg-white shadow-lift sm:h-32 sm:w-32">
                  <FileText className="h-12 w-12 text-grape sm:h-14 sm:w-14" />
                </div>
                <div className="absolute -right-3 -bottom-2 grid h-11 w-11 place-items-center rounded-full bg-sunny text-ink shadow-soft">
                  <FolderOpen className="h-5 w-5" />
                </div>
              </div>

              <div className="flex-1">
                <h2 id="documents-title" className="text-3xl font-bold sm:text-4xl">
                  Құжаттар
                </h2>
                <p className="mt-3 text-base text-white/85 sm:text-lg">
                  Балабақшамыздың ресми құжаттарымен танысыңыз.
                </p>

                <div className="mt-7">
                  {hasLink ? (
                    <a href={DOCUMENTS_URL} target="_blank" rel="noopener noreferrer" className="btn-sunny group">
                      Құжаттарды қарау
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      <span className="sr-only">(жаңа бетте ашылады)</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="btn cursor-not-allowed border-2 border-dashed border-white/50 bg-white/10 text-white"
                    >
                      <Hourglass className="h-4 w-4" aria-hidden />
                      Құжаттар жақында қосылады
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
