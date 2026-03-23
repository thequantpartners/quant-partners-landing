import { useState } from "react";
import { IClosedWizard } from "@/components/wizard/IClosedWizard";
import { VideoPlayer } from "@/components/VideoPlayer";
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-accent/30 selection:text-white pb-20">
      {/* HERO WRAPPER WITH BACKGROUND */}
      <div className="relative w-full">
        {/* BACKGROUND IMAGE - FADES OUT AT BOTTOM */}
        <div className="absolute inset-0 w-full h-full bg-[url('/hero-bg.png')] bg-cover bg-top mix-blend-screen opacity-[0.15] pointer-events-none [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] z-0"></div>

        {/* HERO */}
        <section className="relative z-10 px-4 pt-20 pb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-accent">Quant Partners</span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 mb-8 backdrop-blur-sm max-w-3xl">
            <p className="text-sm sm:text-base text-white/90 leading-relaxed text-balance">
              <span className="font-bold text-white">Esto no es una auditoría básica.</span><br/>
              Es el mismo tipo de análisis que se utiliza para entender por qué proyectos con demanda no logran convertir al ritmo esperado.
            </p>
          </div>

          <h1
            className="text-3xl sm:text-5xl md:text-[3.2rem] font-bold leading-[1.15] mb-8 text-balance text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Identificamos por qué tu inventario inmobiliario{" "}
            <span className="text-white">no se está convirtiendo en ingresos…</span><br />
            y dónde estás <span className="underline decoration-accent decoration-2 underline-offset-8">perdiendo dinero</span> sin darte cuenta.
          </h1>

          <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Recibe un diagnóstico estructurado de tu sistema de adquisición y ventas, diseñado para detectar cuellos de botella, fugas de capital y oportunidades de recuperación en tu operación.
          </p>

          <div className="flex flex-col items-center gap-3 mb-16">
            <a 
              href="#diagnostico" 
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-accent rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
              <span className="relative flex items-center gap-2 text-lg">
                Invierte $27 en tu diagnóstico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <p className="text-sm text-white/60 flex items-center gap-1.5 mt-2">
              <ShieldCheck className="w-4 h-4" /> Se acredita si decides implementar el sistema.
            </p>
          </div>

          {/* CUSTOM VIDEO PLAYER */}
          <div className="w-full relative group rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
            <VideoPlayer />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-24 mt-12">
        {/* SECCIÓN PROBLEMA */}
        <section className="relative">
          <div className="absolute -inset-x-6 sm:-inset-x-12 inset-y-0 bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] -z-10" />
          <div className="py-12 sm:py-16 px-4 sm:px-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 sm:p-3 rounded-lg bg-orange-500/10 text-orange-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">El Verdadero Problema</h2>
            </div>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10">
              La mayoría de desarrolladores asume que el problema es la falta de leads.<br/>
              Pero en la práctica, lo que ocurre es distinto:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Leads que no califican", 
                "Respuestas tardías", 
                "Seguimiento inconsistente", 
                "Dependencia del vendedor", 
                "Falta de control sobre métricas clave"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 sm:p-8 relative overflow-hidden">
              <p className="text-destructive/90 font-bold uppercase tracking-wider text-sm mb-4">El resultado:</p>
              <div className="space-y-4">
                {[
                  "Inventario detenido", 
                  "Flujo de caja bloqueado", 
                  "Decisiones basadas en suposiciones"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-destructive" />
                    <span className="text-lg text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: QUÉ INCLUYE EL DIAGNÓSTICO */}
        <section className="px-4 sm:px-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 tracking-tight">Qué Incluye El Diagnóstico</h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10">
            Este diagnóstico está diseñado para analizar tu operación como un sistema, no como partes aisladas.<br/>
            Recibirás un informe donde se identifica:
          </p>

          <div className="space-y-4 mb-10">
             {[
                "Dónde se está perdiendo dinero actualmente", 
                "Qué parte del sistema está limitando las ventas", 
                "Qué procesos no están funcionando (aunque parezcan correctos)", 
                "Qué oportunidades inmediatas existen para recuperar flujo de caja"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-white/90 text-lg">{item}</span>
                </div>
              ))}
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent p-6 sm:p-8 rounded-r-2xl mb-10">
            <h3 className="font-bold text-white text-lg mb-2">Además:</h3>
            <p className="text-white/80 leading-relaxed">Se identifican patrones que normalmente no son visibles desde dentro de la operación.</p>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <p className="text-white font-medium leading-relaxed">Esto permite tomar decisiones basadas en estructura, no en intuición.</p>
            </div>
          </div>

          <div className="flex justify-start">
            <a href="#diagnostico" className="inline-flex items-center justify-center px-8 py-4 font-bold text-background bg-white rounded-full transition-transform hover:scale-105">
              Solicitar diagnóstico por $27 <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>

        {/* SECCIÓN: POR QUÉ NO ES GRATIS */}
        <section className="px-4 sm:px-12 py-12 border-y border-white/10">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Por qué no es gratis</h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>Este diagnóstico requiere analizar múltiples variables de tu operación.</p>
              <p className="font-medium text-white/90">No es un reporte automático ni genérico.</p>
              <p>El objetivo no es darte información superficial, sino claridad real sobre lo que está ocurriendo.</p>
              
              <div className="py-4">
                <p className="text-xl text-white font-bold mb-6">Por eso tiene un costo simbólico de $27.</p>
                <div className="grid gap-3">
                  {[
                    "Este pago filtra operaciones no serias",
                    "Asegura calidad en el análisis",
                    "Y permite dedicar tiempo a cada caso"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/90">
                      <Zap className="w-5 h-5 text-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 inline-block">
                <p className="text-sm text-white/70 uppercase tracking-widest mb-1 font-semibold">Además:</p>
                <p className="text-white font-medium">Si decides implementar el sistema posteriormente, este monto se descuenta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN FILTRO */}
        <section className="px-4 sm:px-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-8 tracking-tight text-center">Este diagnóstico no es para todos.</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 sm:p-10">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Está diseñado exclusivamente para:
              </h3>
              <ul className="space-y-4">
                {[
                  "Desarrolladores inmobiliarios",
                  "Con inventario activo sin vender",
                  "Que buscan mejorar conversión y flujo de caja"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-white/80">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-destructive/5 border border-destructive/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-destructive/20 pb-4 relative z-10">
                No es para:
              </h3>
              <ul className="space-y-4 relative z-10">
                 {[
                  "Proyectos en etapa idea",
                  "Personas sin operación activa",
                  "Negocios sin datos mínimos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-white/80">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-destructive shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECCIÓN: LO QUE REALMENTE ESTÁ FALLANDO */}
        <section className="px-4 sm:px-12 relative py-8">
          <div className="absolute top-1/2 left-0 w-full h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 tracking-tight text-center">Lo que realmente está fallando</h2>
          
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-xl text-white/80 leading-relaxed">
              En la mayoría de casos, el problema no es visible.<br/>
              <span className="font-medium">No está en la superficie.</span>
            </p>
            
            <div className="py-8">
              <p className="text-white/60 uppercase tracking-widest text-sm font-bold mb-6">Está en:</p>
              <div className="flex flex-col gap-4 text-left mx-auto w-fit">
                {[
                  "Cómo se procesan los leads",
                  "Cómo se les da seguimiento",
                  "Cómo se mide (o no se mide) el sistema"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xl text-white">
                    <div className="w-8 h-[2px] bg-accent/50" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              <p className="text-white/70 mb-2">Esto genera una falsa percepción de:</p>
              <p className="text-2xl font-medium text-white opacity-50 line-through decoration-destructive mb-8">“el mercado no está comprando”</p>
              
              <p className="text-white/70 mb-2">Cuando en realidad:</p>
              <p className="text-2xl font-bold text-accent">👉 el sistema no está convirtiendo</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: QUÉ RECIBES EXACTAMENTE */}
        <section className="px-4 sm:px-12">
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-10 relative z-10 tracking-tight">Qué recibes exactamente</h2>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
              <div className="space-y-4">
                <p className="text-white/70 text-sm uppercase tracking-widest font-bold mb-6">Un documento estructurado que incluye:</p>
                {[
                  "Diagnóstico del sistema actual",
                  "Identificación de cuellos de botella",
                  "Puntos de fuga de dinero",
                  "Fallas en adquisición y conversión",
                  "Riesgos operativos",
                  "Recomendaciones en 3 fases"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 rounded-full border border-accent bg-accent/20" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="sm:pl-8 sm:border-l border-white/10 flex flex-col justify-center mt-8 sm:mt-0">
                <p className="text-white/60 uppercase tracking-widest text-sm font-bold mb-4">Y lo más importante:</p>
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <p className="text-xl sm:text-2xl text-white font-bold leading-tight flex items-start gap-3">
                    <ArrowRight className="text-accent shrink-0 mt-1" />
                    Una explicación clara de por qué está ocurriendo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN TRANSICIÓN (ESTILO RAZZETTI) / CTA FINAL */}
        <section id="diagnostico" className="px-4 sm:px-12 pt-16 pb-12 text-center max-w-3xl mx-auto scroll-m-20">
          <div className="mb-16 space-y-6 text-lg sm:text-xl text-white/80 leading-relaxed text-balance">
            <p>En muchos casos, este tipo de diagnóstico revela problemas que no se resuelven con ajustes aislados.</p>
            <p>Sino con:</p>
            <p className="text-2xl sm:text-4xl text-white font-bold my-8">👉 rediseño del sistema completo</p>
            <p>Este diagnóstico es el primer paso para entender si eso aplica en tu caso.</p>
          </div>

          <div className="w-[3rem] h-[2px] bg-accent/50 mx-auto mb-16" />

          <div className="flex flex-col items-center gap-3 mb-10">
            <a 
              href="#diagnostico" 
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-accent rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
              <span className="relative flex items-center gap-2 text-lg">
                Accede a tu diagnóstico por $27
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <p className="text-sm text-white/50 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 mt-2">
              Se acredita si decides implementar el sistema.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center">
            
            {/* COMPONENTE WIZARD / AGENDADOR DIRECTO */}
            <div className="w-full">
              <IClosedWizard />
            </div>
            
            <div className="mt-8 max-w-xl text-left bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 blur-[40px] rounded-full" />
              <div className="flex gap-4 relative z-10">
                <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold mb-1">Este diagnóstico no sustituye una implementación.</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Es una herramienta para entender con claridad qué está pasando antes de tomar decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="px-6 py-16 border-t border-border/40 mt-12 bg-background/50 relative z-10">
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
