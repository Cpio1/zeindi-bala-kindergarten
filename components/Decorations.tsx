import type { SVGProps } from "react";

type DecoProps = SVGProps<SVGSVGElement> & { color?: string };

/** Барлық декоративті SVG-лер экран оқу құралдарынан жасырылады */
const deco = { "aria-hidden": true, focusable: false } as const;

const r = (n: number) => Math.round(n * 100) / 100;

export function Star({ color = "#F9C74F", ...props }: DecoProps) {
  return (
    <svg viewBox="0 0 48 48" {...deco} {...props}>
      <path
        fill={color}
        d="M24 3.5c1.3 0 2.4.8 2.9 2l4.3 9.4 10.3 1.2c1.3.2 2.4 1.1 2.7 2.3.4 1.3 0 2.6-1 3.5l-7.6 7 2.1 10.1c.3 1.3-.2 2.6-1.3 3.3-1 .8-2.4.9-3.5.2L24 37.4l-8.9 5.1c-1.1.7-2.5.6-3.5-.2-1.1-.7-1.6-2-1.3-3.3l2.1-10.1-7.6-7c-1-.9-1.4-2.2-1-3.5.3-1.2 1.4-2.1 2.7-2.3l10.3-1.2 4.3-9.4c.5-1.2 1.6-2 2.9-2Z"
      />
    </svg>
  );
}

export function Sparkle({ color = "#A78BFA", ...props }: DecoProps) {
  return (
    <svg viewBox="0 0 32 32" {...deco} {...props}>
      <path fill={color} d="M16 0c1 8.5 7.5 15 16 16-8.5 1-15 7.5-16 16-1-8.5-7.5-15-16-16C8.5 15 15 8.5 16 0Z" />
    </svg>
  );
}

export function Cloud({ color = "#FFFFFF", ...props }: DecoProps) {
  return (
    <svg viewBox="0 0 120 64" {...deco} {...props}>
      <path
        fill={color}
        d="M30 62h66c12.7 0 23-9.4 23-21s-10.3-21-23-21c-1.3 0-2.6.1-3.9.3C88.3 8.5 77.3 1 64.5 1 50.2 1 38.4 10.4 36 22.8c-2-.5-4-.8-6-.8C16.2 22 5 31 5 42s11.2 20 25 20Z"
      />
    </svg>
  );
}

export function Flower({ color = "#A78BFA", center = "#F9C74F", ...props }: DecoProps & { center?: string }) {
  return (
    <svg viewBox="0 0 64 64" {...deco} {...props}>
      <g fill={color}>
        <circle cx="32" cy="14" r="12" />
        <circle cx="49" cy="27" r="12" />
        <circle cx="42" cy="47" r="12" />
        <circle cx="22" cy="47" r="12" />
        <circle cx="15" cy="27" r="12" />
      </g>
      <circle cx="32" cy="32" r="10" fill={center} />
    </svg>
  );
}

export function Sun({ color = "#F9C74F", ...props }: DecoProps) {
  return (
    <svg viewBox="0 0 80 80" {...deco} {...props}>
      <g stroke={color} strokeWidth="5" strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return (
            <line
              key={i}
              x1={r(40 + Math.cos(a) * 27)}
              y1={r(40 + Math.sin(a) * 27)}
              x2={r(40 + Math.cos(a) * 36)}
              y2={r(40 + Math.sin(a) * 36)}
            />
          );
        })}
      </g>
      <circle cx="40" cy="40" r="19" fill={color} />
    </svg>
  );
}

export function Heart({ color = "#A78BFA", ...props }: DecoProps) {
  return (
    <svg viewBox="0 0 32 30" {...deco} {...props}>
      <path
        fill={color}
        d="M16 29s-14-8.4-14-18A7.9 7.9 0 0 1 16 5.7 7.9 7.9 0 0 1 30 11c0 9.6-14 18-14 18Z"
      />
    </svg>
  );
}

export function Squiggle({ color = "#A78BFA", ...props }: DecoProps) {
  return (
    <svg viewBox="0 0 120 24" fill="none" {...deco} {...props}>
      <path
        d="M3 12c9-12 18-12 27 0s18 12 27 0 18-12 27 0 18 12 27 0"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Dots({ color = "#A78BFA", ...props }: DecoProps) {
  return (
    <svg viewBox="0 0 80 80" {...deco} {...props}>
      <g fill={color}>
        {Array.from({ length: 25 }).map((_, i) => (
          <circle key={i} cx={8 + (i % 5) * 16} cy={8 + Math.floor(i / 5) * 16} r="3" />
        ))}
      </g>
    </svg>
  );
}

/** Бөлімдер арасындағы толқынды шекара */
export function Wave({
  color,
  variant = 1,
  flip = false,
  className = "",
}: {
  color: string;
  variant?: 1 | 2 | 3;
  flip?: boolean;
  className?: string;
}) {
  const paths = {
    1: "M0 48c120-30 240-42 360-30s240 54 360 54 240-38 360-50 240 2 360 18v60H0Z",
    2: "M0 70c160 10 280-50 440-50s260 60 440 54 300-60 560-44v70H0Z",
    3: "M0 30c100 0 180 48 320 48S560 6 720 6s260 60 400 60 220-36 320-36v70H0Z",
  } as const;
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 lg:h-20 ${flip ? "rotate-180" : ""} ${className}`}
      {...deco}
    >
      <path fill={color} d={paths[variant]} />
    </svg>
  );
}

/** Логотипке арналған шағын балалық белгі */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...deco}>
      <path
        fill="#7C3AED"
        d="M24 2c9 0 14 4 18 9s5 11 4 17-5 12-11 15-15 4-21 0S3 33 2 26s1-14 6-19 9-5 16-5Z"
      />
      <circle cx="24" cy="21" r="9" fill="#F9C74F" />
      <circle cx="21" cy="20" r="1.4" fill="#2E1065" />
      <circle cx="27" cy="20" r="1.4" fill="#2E1065" />
      <path d="M20.5 24c2 2 5 2 7 0" stroke="#2E1065" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path
        fill="#DDD6FE"
        d="m35 30 1.4 3 3.2.4-2.4 2.2.7 3.2-2.9-1.7-2.9 1.7.7-3.2-2.4-2.2 3.2-.4Z"
      />
      <path
        fill="#FFFFFF"
        d="M12 36c2-4 6-5 9-3 1-3 5-4 7-1 3-1 5 1 5 4H12Z"
        opacity=".9"
      />
    </svg>
  );
}

/** Instagram белгісі (lucide-react жаңа нұсқаларында брендтік иконкалар жоқ) */
export function InstagramIcon({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...deco}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" />
    </svg>
  );
}
