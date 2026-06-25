# Brand Style

## Concepto visual
**Cyberpunk Command Center** — dark mode premium, tecnología avanzada, asimétrico y fluido. Awwwards-level.

## Paleta
| Token | Valor | Uso |
|---|---|---|
| `bg-base` | `#050505` | Fondo principal |
| `bg-surface` | `#0d0d0d` | Superficies dark |
| `accent-green` | `#00ff88` | Acento primario, CTAs, gradientes |
| `accent-blue` | `#00d4ff` | Acento secundario, elementos IA |
| `border-subtle` | `rgba(255,255,255,0.06)` | Bordes de cards |

## Tipografía
- **Space Grotesk** — headings, display, peso 700–900
- **Inter** — body fallback
- Escala: headlines hasta 7xl, cuerpo sm/base

## Efectos visuales
- **Glassmorphism**: `backdrop-blur-xl + bg-white/[0.03] + border border-white/[0.08]` → clase `.glass`
- **Gradient mesh animado**: radiales superpuestos en verde/azul → clase `.mesh-animated`
- **Glow verde**: `box-shadow: 0 0 40px rgba(0,255,136,0.25)` → clase `.glow-green`
- **Text gradient**: `linear-gradient(135deg, #00ff88, #00d4ff)` → clase `.text-gradient-green`

## Formas
- Pill shapes: `border-radius: 9999px` en CTAs y chips
- Cards: `rounded-3xl` (1.5rem)
- Nunca cajas cuadradas rígidas

## Reglas anti-genérico
- NO purple gradient SaaS template
- NO grid de cards iguales como único layout
- NO blobs decorativos sin rol compositivo
- Diseño asimétrico: columnas de ancho diferente, texto fuera de centro, overlapping elements
