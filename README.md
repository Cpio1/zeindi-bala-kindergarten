# Зейінді бала — балабақша сайты

Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Motion, Lucide React.

## Іске қосу

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # TypeScript тексеру
```

## Деректерді өзгерту

Барлық негізгі ақпарат: `lib/site-config.ts`

- `DOCUMENTS_URL` — Google Drive папкасының сілтемесі. Бос болса, батырма «Құжаттар жақында қосылады» күйінде тұрады.

## Суреттер (`public/images/`)

Қолдау: `.jpg`, `.jpeg`, `.png`, `.webp`.

| Файл | Қайда шығады |
| --- | --- |
| `main-page.jpg` (немесе .png/.jpeg/.webp) | Басты экран (Hero) |
| `about.jpg` (міндетті емес) | «Біз туралы» бөлімі. Болмаса — галереяның бірінші суреті |
| Қалған барлық суреттер | Галерея (әліпби бойынша, алғашқы 6-уы, қалғаны «Барлығын көру» арқылы) |

Суреттер build кезінде оқылады — жаңа сурет қосқаннан кейін қайта deploy жасаңыз (Vercel мұны push кезінде автоматты жасайды).

## Deploy

1. GitHub-қа `zeindi-bala-kindergarten` репозиторийін жүктеңіз.
2. Vercel-де Import Project → Framework: Next.js (баптаулар әдепкі күйінде).
