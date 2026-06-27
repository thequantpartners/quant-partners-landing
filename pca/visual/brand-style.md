# Brand Style

## Concepto visual
**Dark Navy + Gold Premium** — lujo sobrio inspirado en el logo real (escudo koi dorado sobre navy). Awwwards-level, asimétrico y fluido.

## Logo
- Archivo: `public/logo.png` y `src/app/icon.png` (favicon automático)
- Circular con escudo dorado, koi y "QUANT PARTNERS" en gold serif
- Fondo transparente (removebg)
- Navbar: `120×48px` con `drop-shadow gold`
- Footer: `100×40px` opacity 70% → 100% en hover

## Paleta

| Token Tailwind | Valor | Uso |
|---|---|---|
| `bg-[#080c16]` | `#080c16` | Fondo base (navy profundo) |
| `bg-[#0d1220]` | `#0d1220` | Superficies |
| `accent-gold` | `#c9a84c` | Acento principal — CTAs, iconos, pills |
| `accent-gold-bright` | `#e2c46e` | Hover, shimmer |
| `accent-gold-dim` | `#a08535` | Estados secundarios |
| `rgba(201,168,76,0.12)` | — | Bordes de cards |
| `rgba(201,168,76,0.04)` | — | Background de cards |

## Tipografía
- **Space Grotesk** — headings, display, peso 700–900
- **Inter** — body fallback
- Headlines hasta `text-7xl`, cuerpo `text-sm/base`

## Efectos visuales
- **Glassmorphism gold**: `backdrop-blur-xl + rgba(201,168,76,0.04) + border gold/15` → clase `.glass-gold`
- **Gradient mesh**: radiales gold suaves animados → clase `.mesh-animated`
- **Glow gold**: `box-shadow: 0 0 40px rgba(201,168,76,0.22)` → clase `.glow-gold`
- **Text gradient gold**: `linear-gradient(135deg, #c9a84c, #e2c46e, #a08535)` → `.text-gradient-gold`
- **Shimmer animado**: gradiente 200% con animation `shimmer 4s linear infinite` → `.text-gradient-gold-shimmer`
- **Divider gold**: `linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)` → `.divider-gold`

## Formas
- Pill shapes: `border-radius: 9999px` en CTAs y chips
- Cards: `rounded-3xl` (1.5rem)
- Sin cajas cuadradas rígidas

## Reglas anti-genérico
- NO purple gradient SaaS template
- NO verde neón / cyberpunk (era la paleta anterior, ya reemplazada)
- NO grid de cards iguales como único layout
- Asimétrico: columnas de ancho diferente, texto fuera de centro
