import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const Qualified = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100/10 text-green-500 mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Tu perfil ha sido aprobado.</h2>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          Cumples con los criterios de asociación. Selecciona una fecha debajo para agendar tu llamada estratégica.
        </p>
      </div>

      <div className="w-full bg-card rounded-xl border border-border overflow-hidden min-h-[400px]">
        <Cal 
          calLink="rick/30min"
          style={{ width:"100%", height:"100%", overflow:"scroll" }}
          config={{ layout: 'month_view' }}
        />
      </div>
    </div>
  );
};
