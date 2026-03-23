import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
  addScore: (score: number) => void;
}

export const Step3Experience = ({ data, updateData, onNext, onBack, addScore }: Props) => {
  const handleNext = () => {
    if (data.failureExperience.length > 30) addScore(3);
    else addScore(1);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Comportamiento Real</h2>
        <p className="text-muted-foreground text-sm">
          Basado en acciones concretas del pasado.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-3">
          <Label htmlFor="failureExperience" className="text-base font-semibold">
            Cuéntame la última vez que intentaste vender un proyecto y no lograste el resultado esperado. ¿Qué hiciste exactamente para corregirlo?
          </Label>
          <Textarea 
            id="failureExperience" 
            placeholder="Describe la situación real y tu plan de contingencia." 
            className="min-h-[120px]"
            value={data.failureExperience}
            onChange={(e) => updateData({ failureExperience: e.target.value })}
          />
        </div>
        
        <div className="grid gap-3">
          <Label htmlFor="marketingInvestment" className="text-base font-semibold">
            ¿Cuál ha sido la mayor inversión (en USD) que has hecho en adquisición de clientes en los últimos 12 meses?
          </Label>
          <Textarea 
            id="marketingInvestment" 
            placeholder="Sé específico con los montos y canales." 
            className="min-h-[100px]"
            value={data.marketingInvestment}
            onChange={(e) => updateData({ marketingInvestment: e.target.value })}
          />
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <Button variant="outline" onClick={onBack} className="w-1/3">
          Atrás
        </Button>
        <Button 
          onClick={handleNext} 
          className="w-2/3"
          disabled={!data.failureExperience || !data.marketingInvestment}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};
