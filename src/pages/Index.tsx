import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative px-4 pt-12 pb-8 text-center max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">
          Quant Partners
        </p>

        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Más de <span className="text-foreground underline underline-offset-4 font-semibold">$2.8M USD</span> en inventario inmobiliario convertido en liquidez para desarrolladores en Perú.
        </p>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6 text-balance"
          style={{ letterSpacing: "-0.02em" }}
        >
          Convertimos Tu Inventario Detenido en{" "}
          <span className="underline decoration-2 underline-offset-4">Ventas Reales</span>{" "}
          en 90 Días
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Sin depender de brokers, sin leads basura, sin promesas vacías.
          <br />
          Instalamos el{" "}
          <span className="text-foreground font-semibold underline underline-offset-4">
            Sistema Quant™
          </span>{" "}
          directamente en tu operación comercial.
        </p>

        {/* STEP 1 */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
            Paso 1:
          </p>
          <p className="text-lg font-bold mb-4">
            MIRA EL VÍDEO
          </p>
          <div className="w-[2rem] h-[2px] bg-accent mx-auto mb-6" />
        </div>

        {/* VIDEO PLACEHOLDER */}
        <div
          className="relative w-full max-w-3xl mx-auto aspect-video bg-card rounded-lg overflow-hidden cursor-pointer group border border-border"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/90 flex items-center justify-center transition-transform group-hover:scale-105 group-active:scale-95">
                <svg
                  className="w-7 h-7 text-accent-foreground ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-3">
                <div className="w-3 h-3 rounded-sm bg-foreground/30" />
                <div className="w-3 h-3 rounded-sm bg-foreground/30" />
                <div className="w-3 h-3 rounded-sm bg-foreground/30" />
                <div className="flex-1 h-1 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-accent rounded-full" />
                </div>
                <div className="w-3 h-3 rounded-sm bg-foreground/30" />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              <p>[ Video del Sistema Quant™ ]</p>
            </div>
          )}
        </div>
      </section>

      {/* STEP 2 — CTA / CAL.COM */}
      <section className="px-4 py-12 text-center max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
          Paso 2:
        </p>
        <p className="text-lg font-bold mb-2">
          Agenda tu llamada debajo.
        </p>
        <div className="w-[2rem] h-[2px] bg-accent mx-auto mb-8" />

        {/* FILTER WARNING */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-md px-6 py-3 max-w-2xl mx-auto mb-8">
          <p className="text-sm text-destructive font-semibold">
            Si <span className="underline">NO</span> eres desarrollador inmobiliario con +15 unidades en inventario, esto{" "}
            <span className="underline">NO</span> es para ti.
          </p>
        </div>

        <p className="text-sm text-muted-foreground mb-8">
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
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[400px]">
            {/* Left — Form side */}
            <div className="p-6 sm:p-8 text-left border-b md:border-b-0 md:border-r border-border">
              <p className="text-xs text-accent font-semibold mb-1 tracking-wide">● Llena el formulario</p>
              <h3 className="text-lg font-bold mb-1">QP | Llamada de Diagnóstico</h3>
              <p className="text-xs text-muted-foreground mb-6">
                Si no encuentra disponibilidad,{" "}
                <span className="text-accent underline cursor-pointer">haga clic aquí</span>.
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 bg-secondary rounded-md px-3 py-2.5">
                    <span className="text-xs">🇵🇪</span>
                    <span className="text-sm text-muted-foreground">+51</span>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Nombre *"
                  className="w-full bg-secondary border-none rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <input
                  type="text"
                  placeholder="Proyecto inmobiliario *"
                  className="w-full bg-secondary border-none rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <input
                  type="text"
                  placeholder="Unidades en inventario *"
                  className="w-full bg-secondary border-none rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <p className="text-[10px] text-muted-foreground mt-4 leading-relaxed">
                Al introducir tu información, das tu consentimiento para que tus datos sean guardados de acuerdo con nuestra{" "}
                <span className="underline cursor-pointer">Política de Privacidad</span>.
              </p>

              <button className="mt-4 w-full bg-foreground text-background rounded-md py-2.5 text-sm font-semibold hover:bg-foreground/90 transition-colors active:scale-[0.98]">
                Continuar →
              </button>
            </div>

            {/* Right — Calendar side */}
            <div className="p-6 sm:p-8">
              <p className="text-xs text-muted-foreground mb-4">○ Reserva tu evento</p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold">marzo 2026</p>
                <div className="flex gap-2">
                  <span className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors">&lt;</span>
                  <span className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors">&gt;</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs text-center">
                {["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"].map((d) => (
                  <span key={d} className="text-muted-foreground py-1 font-medium">{d}</span>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 0 + 1; // simplified
                  const isActive = [23, 24, 25, 26, 27].includes(day);
                  const isPast = day < 22 && day > 0;
                  return (
                    <span
                      key={i}
                      className={`py-2 rounded-md text-xs ${
                        day < 1 || day > 31
                          ? "invisible"
                          : isActive
                          ? "text-accent font-semibold cursor-pointer hover:bg-accent/10 transition-colors"
                          : isPast
                          ? "text-muted-foreground/40"
                          : "text-muted-foreground"
                      }`}
                    >
                      {day > 0 && day <= 31 ? day : ""}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 py-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-muted-foreground mb-6">
            2026 | Quant Partners |{" "}
            <span className="underline cursor-pointer">Política de Privacidad</span> |{" "}
            <span className="underline cursor-pointer">Términos y Condiciones</span>
          </p>
          <div className="text-[9px] text-muted-foreground/60 leading-relaxed space-y-3 text-left">
            <p>
              Este sitio es operado por Quant Partners. Quant Partners es una empresa de infraestructura comercial para el sector inmobiliario. No somos una agencia de marketing, no vendemos leads ni contenido.
            </p>
            <p>
              No podemos garantizar resultados específicos de ventas. Cada proyecto inmobiliario tiene variables únicas que afectan directamente los resultados. Lo que instalamos es un sistema probado de adquisición y filtrado de demanda calificada.
            </p>
            <p>
              Los resultados compartidos en este sitio representan casos reales pero no constituyen una promesa de resultados futuros. Tu éxito depende de factores como la calidad del producto, ubicación, precio y capacidad operativa.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
