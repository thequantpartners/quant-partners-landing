# Stack

## Framework
- **Next.js 16** — App Router, TypeScript, sin Turbopack en dev
- **React 19**

## Estilos
- **Tailwind CSS v3** — tokens customizados en `tailwind.config.ts`

## Animaciones
- **Framer Motion v11** — obligatorio para scroll animations, magnetic buttons, floating elements

## Iconografía
- **Lucide React**

## Tipografía
- **Space Grotesk** (display/headings) — `--font-space-grotesk`
- **Inter** (body fallback) — `--font-inter`
- Cargadas vía `next/font/google`

## Utilidades
- **clsx + tailwind-merge** → `cn()` en `src/lib/utils.ts`

## Deploy target
- **Vercel** — zero config, detecta Next.js automáticamente

## Comandos
```bash
npm run dev    # localhost:3000
npm run build  # build producción
npm run lint   # ESLint
```
