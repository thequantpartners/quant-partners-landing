# Architecture

## Estructura de directorios
```
src/
  app/
    layout.tsx        # Root layout, carga fuentes Google, metadata SEO
    page.tsx          # Página principal — orquesta todas las secciones
    globals.css       # Tailwind base + utilidades custom (.glass, .text-gradient-green, .mesh-animated)
  components/
    sections/         # Secciones de la landing (orden en page.tsx)
      Navbar.tsx          # Fija, glass al scroll (useScroll opacity transform)
      HeroSection.tsx     # Orbe 3D + nodos orbitantes + CTA magnético + métricas
      ProblemSection.tsx  # Grid problema vs solución + stat 96%
      SystemSection.tsx   # Flujo 360° animado con líneas SVG
      AdvantageSection.tsx # 4 cards de ventaja injusta
      ContactSection.tsx  # Formulario + Calendly + estado éxito animado
      Footer.tsx
    ui/               # Primitivos de diseño reutilizables
      Pill.tsx        # Chip pill-shape (variantes: green, blue, neutral)
      PrimaryCTA.tsx  # Botón magnético con spring physics (Framer Motion)
      Surface.tsx     # Contenedor glass/dark/elevated
  lib/
    utils.ts          # cn() = clsx + twMerge
```

## Decisiones técnicas clave
- **App Router** sobre Pages Router — layouts anidados, Server Components por defecto
- **"use client"** solo donde se necesitan hooks (todas las secciones usan animaciones)
- **useScroll() sin target** en HeroSection — evita bug donde scrollYProgress ≈ 0.5 al cargar y deja contenido invisible
- **Framer Motion spring physics** en PrimaryCTA para efecto magnético (useMotionValue + useSpring)
- Sin CSS Modules, sin styled-components — solo Tailwind + clases utilitarias custom en globals.css
