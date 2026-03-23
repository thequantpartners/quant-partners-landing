import { useState } from "react";
import { IClosedWizard } from "@/components/wizard/IClosedWizard";
import { VideoPlayer } from "@/components/VideoPlayer";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* HERO WRAPPER WITH BACKGROUND */}
      <div className="relative w-full">
        {/* BACKGROUND IMAGE - FADES OUT AT BOTTOM */}
        <div className="absolute inset-0 w-full h-full bg-[url('/hero-bg.png')] bg-cover bg-top mix-blend-screen opacity-[0.14] pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] z-0"></div>

        {/* HERO */}
        <section className="relative z-10 px-4 pt-16 pb-[6rem] text-center max-w-4xl mx-auto">
          <p className="text-base tracking-[0.2em] uppercase text-white/90 mb-4 font-medium">
          Quant Partners
        </p>

        <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
          <span className="text-white underline underline-offset-4 font-medium">+$2.8 000 000 USD</span> en inventario inmobiliario capitalizado para <span className="text-white underline underline-offset-4 font-medium">Desarrolladores en Perú</span>.
        </p>

        <h1
          className="text-3xl sm:text-5xl md:text-[3.4rem] font-bold leading-[1.15] mb-6 text-balance text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          Aumentaremos entre{" "}
          <span className="underline decoration-2 underline-offset-8">$500.000 a $2 000 000 USD</span>{" "}
          a tu Facturación{" "}
          <span className="underline decoration-2 underline-offset-8">Capitalizando</span>{" "}
          Tu Inventario Detenido en solo{" "}
          <span className="underline decoration-2 underline-offset-8">90 Días</span>.
        </h1>

        <p className="text-base sm:text-xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed md:leading-snug">
          <span className="underline underline-offset-4 text-white font-medium">Construiremos todo por ti</span> y te mentorizamos 1 a 1 en como gestionar el sistema con procesos, inteligencia artificial para que no dependas de nosotros.
        </p>

        {/* STEP 1 */}
        <div className="mb-8">
          <p className="text-sm tracking-[0.15em] uppercase text-white/80 mb-1">
            Paso 1:
          </p>
          <p className="text-xl font-bold mb-4 text-white">
            MIRA EL VÍDEO
          </p>
          <div className="w-[2rem] h-[2px] bg-accent mx-auto mb-6" />
        </div>

        {/* CUSTOM VIDEO PLAYER */}
        <div className="mt-8">
          <VideoPlayer />
        </div>
      </section>
      </div>

      {/* STEP 2 — CTA / CAL.COM */}
      <section className="relative z-10 px-4 py-12 text-center max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.15em] uppercase text-white/80 mb-1">
          Paso 2:
        </p>
        <p className="text-xl font-bold mb-2 text-white">
          Agenda tu llamada debajo.
        </p>
        <div className="w-[2rem] h-[2px] bg-accent mx-auto mb-8" />

        {/* FILTER WARNING */}
        <div className="bg-destructive/10 border-2 border-dashed border-destructive/80 rounded-lg px-6 py-5 max-w-3xl mx-auto mb-8 text-center">
          <p className="text-lg md:text-xl text-destructive font-bold">
            Si <span className="underline">NO</span> eres desarrollador inmobiliario con +15 unidades en inventario, esto{" "}
            <span className="underline">NO</span> es para ti.
          </p>
        </div>

        <p className="text-base md:text-lg text-white/90 mb-8">
          Si no encuentras disponibilidad, escríbenos a{" "}
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
          >
            WhatsApp
          </a>
        </p>

        {/* Cal.com embed placeholder */}
        <div className="mt-8">
          <IClosedWizard />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16 border-t border-border/40 mt-12 bg-background/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-8 font-medium">
            2026 | Quant OPS LLC |{" "}
            <span className="underline cursor-pointer hover:text-white transition-colors">Política de Privacidad</span> |{" "}
            <span className="underline cursor-pointer hover:text-white transition-colors">Términos y Condiciones</span>
          </p>
          <div className="text-xs text-muted-foreground/70 leading-relaxed space-y-4 text-justify md:text-center">
            <p>Este sitio web es operado y mantenido por Quant OPS LLC. El uso de este sitio web se rige por sus Términos de Servicio y Política de Privacidad.</p>
            <p>Quant OPS LLC es una empresa especializada en la implementación de sistemas de adquisición y optimización comercial para proyectos inmobiliarios. No vendemos oportunidades de negocio, programas para "hacerse rico rápidamente" ni esquemas de generación de ingresos garantizados.</p>
            <p>Todos los servicios, contenidos, materiales, herramientas, metodologías y estrategias proporcionadas tienen un carácter estrictamente informativo, estratégico y operativo dentro del contexto de implementación de sistemas comerciales.</p>
            <p>No garantizamos resultados específicos, número de ventas, ingresos ni retornos sobre la inversión. El desempeño del sistema depende de múltiples factores, incluyendo —pero no limitándose a— la calidad del proyecto inmobiliario, condiciones del mercado, estrategia de precios, inversión publicitaria y ejecución del equipo comercial del cliente.</p>
            <p>Cualquier referencia a resultados, escenarios, indicadores o proyecciones tiene carácter ilustrativo y no constituye una promesa, garantía ni expectativa de desempeño futuro.</p>
            <p>Quant OPS LLC no proporciona asesoramiento legal, financiero, contable ni de inversión. Se recomienda que el usuario consulte con sus asesores profesionales antes de tomar decisiones estratégicas o comerciales.</p>
            <p>El éxito de cada cliente varía de manera significativa. Los resultados dependen de la correcta implementación del sistema, la disciplina operativa y la ejecución comercial interna del cliente. No todos los clientes obtendrán los mismos resultados.</p>
            <p>Los testimonios, ejemplos o referencias de desempeño, en caso de existir, representan experiencias individuales y no constituyen resultados promedio ni garantizados.</p>
            <p>Al utilizar este sitio web y/o contratar nuestros servicios, el usuario reconoce que es el único responsable de sus decisiones, acciones y resultados comerciales, y acepta no responsabilizar a Quant Partners por los mismos.</p>
            <p>Todo el contenido, metodologías, estructuras y sistemas son propiedad intelectual de Quant OPS LLC y están protegidos por derechos de autor. Queda estrictamente prohibida su reproducción, distribución o uso no autorizada.</p>
            <p>Este sitio puede contener enlaces a recursos de terceros. Quant OPS LLC no se responsabiliza por el contenido, precisión o funcionamiento de dichos recursos externos.</p>
            <p>Utilizamos cookies para mejorar la experiencia del usuario. Al continuar utilizando este sitio, usted acepta nuestras políticas de privacidad y uso.</p>
            <p>Este sitio no forma parte del sitio web de Facebook ni de Facebook, Inc., ni está respaldado por esta entidad. FACEBOOK es una marca registrada de Meta Platforms, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
