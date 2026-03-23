import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Lock, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export const IClosedWizard = () => {
  const TOTAL_STEPS = 14;
  const [currentStep, setCurrentStep] = useState(1);
  const [score, setScore] = useState(0);
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [isQualified, setIsQualified] = useState(false);
  const [shake, setShake] = useState(false);
  
  const [data, setData] = useState({
    name: "",
    phoneCode: "+51",
    phone: "",
    email: "",
    q1_role: "",
    q2_inventory: "",
    q3_time: "",
    q4_channels: [] as string[],
    q5_past_fail: "",
    q6_investment: "",
    q7_budget: "",
    q8_system: "",
    q9_recent_sale: "",
    q10_mentor: "",
    q11_reaction: "",
    q12_team: "",
    q13_response: "",
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, []);

  const updateData = (fields: Partial<typeof data>) => {
    setData((prev) => ({ ...prev, ...fields }));
    if (shake) setShake(false);
  };

  const validateStep = () => {
    switch(currentStep) {
      case 1: return data.name.trim().length > 0 && data.phone.trim().length >= 6;
      case 2: return data.email.includes("@") && data.q1_role;
      case 4: return !!data.q2_inventory;
      case 5: return !!data.q3_time;
      case 6: return data.q4_channels.length > 0;
      case 7: return data.q5_past_fail.trim().length >= 5;
      case 8: return !!data.q6_investment;
      case 9: return !!data.q7_budget;
      case 10: return data.q8_system.trim().length >= 5;
      case 11: return data.q9_recent_sale.trim().length >= 5;
      case 12: return data.q10_mentor.trim().length >= 2;
      case 13: return !!data.q11_reaction;
      case 14: return !!data.q12_team;
      case 14: return !!data.q13_response;
      default: return false;
    }
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleNext = () => {
    if (isDisqualified) return;

    if (!validateStep()) {
      triggerShake();
      return;
    }

    let pointsToAdd = 0;
    let fail = false;

    // Evaluate current step before moving next
    switch(currentStep) {
      case 1:
        break;
      case 2:
        if (data.q1_role === "Dev") pointsToAdd = 15;
        if (data.q1_role === "Inmobiliaria") pointsToAdd = 10;
        if (data.q1_role === "Inversionista") pointsToAdd = 5;
        if (data.q1_role === "Otro") fail = true;
        break;
      case 4:
        if (data.q2_inventory === "0" || data.q2_inventory === "1-5") fail = true;
        if (data.q2_inventory === "6-20") pointsToAdd = 10;
        if (data.q2_inventory === "+20") pointsToAdd = 15;
        break;
      case 4:
        if (data.q3_time === "<1") pointsToAdd = 5;
        if (data.q3_time === "1-3") pointsToAdd = 10;
        if (data.q3_time === "3-6") pointsToAdd = 15;
        if (data.q3_time === ">6") pointsToAdd = 20;
        break;
      case 5:
        if (data.q4_channels.includes("Nada actualmente")) pointsToAdd = 0;
        else pointsToAdd = 5; 
        break;
      case 6:
        if (data.q5_past_fail.length > 50) pointsToAdd = 15;
        else if (data.q5_past_fail.length > 15) pointsToAdd = 5;
        else pointsToAdd = 0;
        break;
      case 7:
        if (data.q6_investment === "0" || data.q6_investment === "500-2k") fail = true;
        if (data.q6_investment === "2k-10k") pointsToAdd = 10;
        if (data.q6_investment === ">10k") pointsToAdd = 15;
        break;
      case 8:
        if (data.q7_budget === "No") fail = true;
        if (data.q7_budget === "Sí") pointsToAdd = 15;
        break;
      case 9: 
        if (data.q8_system.length > 30) pointsToAdd = 10;
        break;
      case 10: 
        if (data.q9_recent_sale.length > 30) pointsToAdd = 10;
        break;
      case 11: 
        if (data.q10_mentor.trim().length > 3) pointsToAdd = 5;
        break;
      case 12:
        if (data.q11_reaction === "datos" || data.q11_reaction === "estrategia") pointsToAdd = 10;
        if (data.q11_reaction === "mercado" || data.q11_reaction === "espero") pointsToAdd = 0;
        break;
      case 13:
        if (data.q12_team === "Sí") pointsToAdd = 10;
        if (data.q12_team === "No") fail = true;
        break;
      case 14:
        if (data.q13_response === "<5m") pointsToAdd = 15;
        if (data.q13_response === "5-30m") pointsToAdd = 10;
        if (data.q13_response === ">1h") fail = true;
        break;
    }

    if (fail) {
      setIsDisqualified(true);
      return;
    }

    setScore((prev) => prev + pointsToAdd);

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Final validation
      if (score + pointsToAdd >= 90) {
        setIsQualified(true);
        // Disparamos las respuestas al Webhook para guardarlo en Google Sheets
        fetch("https://hook.us2.make.com/swo7wp98ha9mmlkjla0zjz7csfi6mvw7", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, phone: data.phoneCode + " " + data.phone, finalScore: score + pointsToAdd }),
        }).catch((err) => console.error("Error webhook:", err));
      } else {
        setIsDisqualified(true);
      }
    }
  };

  const currentProgress = (currentStep / TOTAL_STEPS) * 100;

  const CustomRadio = ({ id, label, value, selectedValue, onChange }: any) => (
    <div 
      className={`flex items-center space-x-3 border p-4 rounded-xl cursor-pointer transition-all duration-300 ${selectedValue === value ? "border-accent bg-accent/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] scale-[1.02]" : "border-border hover:border-accent/40 hover:bg-secondary/60 hover:-translate-y-0.5"}`}
      onClick={() => onChange(value)}
    >
      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedValue === value ? "border-accent" : "border-muted-foreground"}`}>
        {selectedValue === value && <div className="w-2 h-2 rounded-full bg-accent animate-in zoom-in-50 duration-200" />}
      </div>
      <span className="text-sm font-medium flex-1">{label}</span>
      {selectedValue === value && <CheckCircle2 className="w-4 h-4 text-accent animate-in slide-in-from-left-2 duration-300" />}
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">QP | Llamada de Auditoria [VSL-QP]</h2>
              <p className="text-muted-foreground text-sm">
                Datos básicos para contacto.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="flex h-12 rounded-md overflow-hidden bg-secondary/50 border border-border/50 transition-all duration-300 hover:border-accent/50 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent">
                   <select 
                     value={data.phoneCode}
                     onChange={(e) => updateData({ phoneCode: e.target.value })}
                     className="bg-transparent border-r border-border/50 px-3 outline-none text-muted-foreground text-sm cursor-pointer"
                   >
                     <option value="+51">🇵🇪 +51</option>
                     <option value="+52">🇲🇽 +52</option>
                     <option value="+54">🇦🇷 +54</option>
                     <option value="+56">🇨🇱 +56</option>
                     <option value="+57">🇨🇴 +57</option>
                     <option value="+34">🇪🇸 +34</option>
                     <option value="+1">🇺🇸 +1</option>
                   </select>
                   <Input 
                     type="tel"
                     placeholder="Número de teléfono *" 
                     value={data.phone}
                     onChange={(e) => updateData({ phone: e.target.value })}
                     className={`flex-1 bg-transparent border-0 h-full px-4 rounded-none focus-visible:ring-0 shadow-none ${!data.phone ? "animate-[pulse_1.5s_ease-in-out_infinite] bg-accent/10 border-2 border-accent border-dashed" : ""}`}
                   />
                </div>
              </div>
              <div className="grid gap-2">
                <Input 
                  placeholder="Nombre Completo *" 
                  value={data.name}
                  onChange={(e) => updateData({ name: e.target.value })}
                  className="bg-secondary/50 border-border/50 h-12 px-4 transition-all duration-300 hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground/80 mt-6 leading-tight max-w-sm">
              Al introducir su información, usted da su consentimiento para que sus datos sean guardados de acuerdo con nuestra <span className="underline cursor-pointer hover:text-white transition-colors">Términos & política de privacidad</span>.
            </p>
            <Button onClick={handleNext} className="w-full mt-8 h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Continuar <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Perfil Profesional</h2>
              <p className="text-muted-foreground text-sm">
                Correo corporativo y rol principal.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Input 
                  type="email"
                  placeholder="Email Corporativo" 
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                  className="bg-secondary/50 border-border/50 h-12 px-4 transition-all duration-300 hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="grid gap-2 pt-2">
                <Label className="mb-2 text-muted-foreground">¿Cuál es tu rol principal?</Label>
                <CustomRadio id="r1" label="Desarrollador inmobiliario" value="Dev" selectedValue={data.q1_role} onChange={(v: string) => updateData({ q1_role: v })} />
                <CustomRadio id="r2" label="Inmobiliaria" value="Inmobiliaria" selectedValue={data.q1_role} onChange={(v: string) => updateData({ q1_role: v })} />
                <CustomRadio id="r3" label="Inversionista" value="Inversionista" selectedValue={data.q1_role} onChange={(v: string) => updateData({ q1_role: v })} />
                <CustomRadio id="r4" label="Otro" value="Otro" selectedValue={data.q1_role} onChange={(v: string) => updateData({ q1_role: v })} />
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground/80 mt-6 leading-tight max-w-sm">
              Al introducir su información, usted da su consentimiento para que sus datos sean guardados de acuerdo con nuestra <span className="underline cursor-pointer hover:text-white transition-colors">Términos & política de privacidad</span>.
            </p>
            <Button onClick={handleNext} className="w-full mt-8 h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Continuar <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 1: Filtro Estructural</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                ¿Cuántas unidades tienes actualmente sin vender?
              </h2>
            </div>
            <div className="space-y-3">
              <CustomRadio label="Ninguna (0 unidades)" value="0" selectedValue={data.q2_inventory} onChange={(v: string) => updateData({ q2_inventory: v })} />
              <CustomRadio label="1 – 5 unidades" value="1-5" selectedValue={data.q2_inventory} onChange={(v: string) => updateData({ q2_inventory: v })} />
              <CustomRadio label="6 – 20 unidades" value="6-20" selectedValue={data.q2_inventory} onChange={(v: string) => updateData({ q2_inventory: v })} />
              <CustomRadio label="Más de 20 unidades" value="+20" selectedValue={data.q2_inventory} onChange={(v: string) => updateData({ q2_inventory: v })} />
            </div>
            <Button onClick={handleNext} className="w-full mt-8 h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 1: Filtro Estructural</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                ¿Hace cuánto tiempo tienes ese inventario sin rotar?
              </h2>
            </div>
            <div className="space-y-3">
              <CustomRadio label="Menos de 1 mes" value="<1" selectedValue={data.q3_time} onChange={(v: string) => updateData({ q3_time: v })} />
              <CustomRadio label="1 – 3 meses" value="1-3" selectedValue={data.q3_time} onChange={(v: string) => updateData({ q3_time: v })} />
              <CustomRadio label="3 – 6 meses" value="3-6" selectedValue={data.q3_time} onChange={(v: string) => updateData({ q3_time: v })} />
              <CustomRadio label="Más de 6 meses" value=">6" selectedValue={data.q3_time} onChange={(v: string) => updateData({ q3_time: v })} />
            </div>
            <Button onClick={handleNext} className="w-full mt-8 h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 5:
        const toggleChannel = (val: string) => {
          updateData({
             q4_channels: data.q4_channels.includes(val) 
                ? data.q4_channels.filter(c => c !== val) 
                : [...data.q4_channels, val]
          });
        };
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 2: Problema</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                ¿Qué estás haciendo actualmente para vender esas unidades?
              </h2>
              <p className="text-sm text-muted-foreground">Puedes seleccionar varias.</p>
            </div>
            <div className="space-y-3">
              {['Ads (Facebook/Instagram/Google)', 'Brokers Inmobiliarios', 'Referidos', 'Nada actualmente'].map(opt => (
                <div key={opt} className={`flex items-center space-x-3 border p-4 rounded-xl cursor-pointer transition-all duration-300 ${data.q4_channels.includes(opt) ? "border-accent bg-accent/10" : "border-border hover:border-accent/40 hover:bg-secondary/60 hover:-translate-y-0.5"}`} onClick={() => toggleChannel(opt)}>
                  <Checkbox checked={data.q4_channels.includes(opt)} onCheckedChange={() => toggleChannel(opt)} className={data.q4_channels.includes(opt) ? "border-accent bg-accent text-accent-foreground" : ""} />
                  <Label className="flex-1 cursor-pointer">{opt}</Label>
                </div>
              ))}
            </div>
            <Button onClick={handleNext} className="w-full mt-8 h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 2: Problema</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                Cuéntame la última vez que intentaste vender este inventario y no funcionó. ¿Qué hiciste exactamente?
              </h2>
            </div>
            <Textarea 
              className="min-h-[140px] text-base bg-secondary/50 p-4 resize-none transition-all duration-300 hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="Sé específico, detalla la campaña o estrategia fallida..."
              value={data.q5_past_fail}
              onChange={(e) => updateData({ q5_past_fail: e.target.value })}
            />
            <Button onClick={handleNext} className="w-full h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 3: Capacidad</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                ¿Cuánto has invertido en marketing en los últimos 6 meses?
              </h2>
            </div>
            <div className="space-y-3">
              <CustomRadio label="$0 USD" value="0" selectedValue={data.q6_investment} onChange={(v: string) => updateData({ q6_investment: v })} />
              <CustomRadio label="$500 – $2,000 USD" value="500-2k" selectedValue={data.q6_investment} onChange={(v: string) => updateData({ q6_investment: v })} />
              <CustomRadio label="$2,000 – $10,000 USD" value="2k-10k" selectedValue={data.q6_investment} onChange={(v: string) => updateData({ q6_investment: v })} />
              <CustomRadio label="Más de $10,000 USD" value=">10k" selectedValue={data.q6_investment} onChange={(v: string) => updateData({ q6_investment: v })} />
            </div>
            <Button onClick={handleNext} className="w-full mt-8 h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 3: Capacidad</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                ¿Estás en capacidad de invertir un mínimo de $1,500 USD mensuales en adquisición de clientes?
              </h2>
            </div>
            <div className="space-y-3">
              <CustomRadio label="Sí, tengo el presupuesto" value="Sí" selectedValue={data.q7_budget} onChange={(v: string) => updateData({ q7_budget: v })} />
              <CustomRadio label="No en este momento" value="No" selectedValue={data.q7_budget} onChange={(v: string) => updateData({ q7_budget: v })} />
            </div>
            <Button onClick={handleNext} className="w-full mt-8 h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 10:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 4: Realidad</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                ¿Qué sistema utilizas actualmente para gestionar leads y en qué punto exacto se pierde la venta?
              </h2>
            </div>
            <Textarea 
              className="min-h-[140px] text-base bg-secondary/50 p-4 resize-none transition-all duration-300 hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="Dónde se cae el lead? En el contacto? Visita? Cierre?"
              value={data.q8_system}
              onChange={(e) => updateData({ q8_system: e.target.value })}
            />
            <Button onClick={handleNext} className="w-full h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 11:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 4: Realidad</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                Cuéntame una venta reciente. ¿Cómo entró ese cliente y cómo se cerró la venta?
              </h2>
            </div>
            <Textarea 
              className="min-h-[140px] text-base bg-secondary/50 p-4 resize-none transition-all duration-300 hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="Detalla el ciclo real de tu venta ganadora..."
              value={data.q9_recent_sale}
              onChange={(e) => updateData({ q9_recent_sale: e.target.value })}
            />
            <Button onClick={handleNext} className="w-full h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 12:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 5: Filosofía</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                ¿Quién ha influenciado más tu forma de tomar decisiones en negocios?
              </h2>
            </div>
            <Input 
              className="h-12 px-4 bg-secondary/50 text-base transition-all duration-300 hover:border-accent/50 focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="Mentores, autores, referentes..."
              value={data.q10_mentor}
              onChange={(e) => updateData({ q10_mentor: e.target.value })}
            />
            <Button onClick={handleNext} className="w-full h-12 text-base font-bold mt-4 group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 13:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">Fase 5: Filosofía</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                Cuando algo no funciona en tu empresa, ¿qué haces primero?
              </h2>
            </div>
            <div className="space-y-3">
              <CustomRadio label="Analizar los datos duros" value="datos" selectedValue={data.q11_reaction} onChange={(v: string) => updateData({ q11_reaction: v })} />
              <CustomRadio label="Ajustar la estrategia y equipo" value="estrategia" selectedValue={data.q11_reaction} onChange={(v: string) => updateData({ q11_reaction: v })} />
              <CustomRadio label="Culpar la situación del mercado" value="mercado" selectedValue={data.q11_reaction} onChange={(v: string) => updateData({ q11_reaction: v })} />
              <CustomRadio label="Esperar pacientemente a que mejore" value="espero" selectedValue={data.q11_reaction} onChange={(v: string) => updateData({ q11_reaction: v })} />
            </div>
            <Button onClick={handleNext} className="w-full mt-8 h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 14:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-accent uppercase mb-2">Fase 6: Operación</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                ¿Tienes equipo comercial o de ventas actualmente?
              </h2>
            </div>
            <div className="space-y-3">
              <CustomRadio label="Sí" value="Sí" selectedValue={data.q12_team} onChange={(v: string) => updateData({ q12_team: v })} />
              <CustomRadio label="No" value="No" selectedValue={data.q12_team} onChange={(v: string) => updateData({ q12_team: v })} />
            </div>
            <Button onClick={handleNext} className="w-full mt-8 h-12 text-base font-bold group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              Siguiente <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        );
      case 14:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-wider text-accent uppercase mb-2">Fase 6: Operación</p>
              <h2 className="text-2xl font-bold tracking-tight mb-2 leading-tight">
                Cuando reciben un lead nuevo, ¿en cuánto tiempo lo contactan?
              </h2>
            </div>
            <div className="space-y-3">
              <CustomRadio label="Menos de 5 minutos" value="<5m" selectedValue={data.q13_response} onChange={(v: string) => updateData({ q13_response: v })} />
              <CustomRadio label="Entre 5 y 30 minutos" value="5-30m" selectedValue={data.q13_response} onChange={(v: string) => updateData({ q13_response: v })} />
              <CustomRadio label="Nos toma más de 1 hora" value=">1h" selectedValue={data.q13_response} onChange={(v: string) => updateData({ q13_response: v })} />
            </div>
            <Button onClick={handleNext} className="w-full mt-10 h-12 text-base font-bold bg-foreground text-background hover:bg-foreground/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              Finalizar y Evaluar
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-card border border-border/50 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[650px] md:h-[720px]">
      
      {/* LEFT COLUMN: 13-Step Wizard */}
      <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-border/40 flex flex-col relative bg-card z-10 flex-shrink-0 md:h-full">
        
        {/* Progress Bar Header */}
        <div className="p-6 md:px-10 md:pt-8 md:pb-6 flex-none border-b border-border/20">
          <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
            <span>PASO {currentStep} DE {TOTAL_STEPS}</span>
            <span>{Math.round(currentProgress)}% COMPLETADO</span>
          </div>
          <Progress value={currentProgress} className="h-1.5 bg-secondary" />
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:px-10 md:py-10 overflow-y-auto">
          {!isQualified && !isDisqualified ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full flex flex-col justify-start max-w-sm mx-auto w-full pt-2 md:pt-6"
              >
                <motion.div
                   animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                   transition={{ duration: 0.4 }}
                >
                   {renderStep()}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          ) : isDisqualified ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="h-full flex flex-col items-center justify-center text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-6">
                <XCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Agenda Restringida</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Actualmente no cumples con los criterios para trabajar con Quant Partners. Este sistema está diseñado exclusivamente para operaciones con capacidad de inversión y ejecución inmediata.
              </p>
            </motion.div>
          ) : (
             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="h-full flex flex-col items-center justify-center text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">¡Perfil Aprobado!</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Tu perfil califica para una llamada estratégica para implementar el Sistema Quant™. Por favor selecciona un horario a tu derecha.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Calendar Embed */}
      <div className="w-full md:w-7/12 relative bg-[#0a0a0a] flex items-center justify-center overflow-hidden md:h-full">
        
        {/* Calendar Widget (Always rendered, opacity changes based on state) */}
        <div className={`w-full h-full min-h-[600px] transition-all duration-700 ease-in-out ${isQualified ? "opacity-100 blur-none pointer-events-auto" : "opacity-20 blur-sm pointer-events-none"}`}>
          <div className="h-full overflow-y-auto custom-scrollbar p-4">
             <Cal 
                calLink="the-quant-partners/demo-vsl"
                style={{ width:"100%", height:"100%", minHeight:"500px" }}
                config={{ 
                  layout: 'month_view',
                  name: data.name,
                  email: data.email
                }}
             />
          </div>
        </div>

        {/* Lock Overlay */}
        <AnimatePresence>
          {!isQualified && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/50 backdrop-blur-[6px] p-8 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-2xl flex items-center justify-center mb-6 ring-1 ring-white/5">
                <Lock className="w-8 h-8 text-muted-foreground" />
              </div>
              
              {isDisqualified ? (
                <>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Agenda Restringida</h3>
                  <p className="text-muted-foreground max-w-md text-base leading-relaxed">
                    El proceso de admisión ha terminado. No aceptamos nuevos proyectos que no reúnan nuestros parámetros operativos y de inventario.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Agenda Bloqueada</h3>
                  <p className="text-muted-foreground max-w-md text-base leading-relaxed">
                    Por favor complete el formulario antes de elegir su franja horaria.
                  </p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
