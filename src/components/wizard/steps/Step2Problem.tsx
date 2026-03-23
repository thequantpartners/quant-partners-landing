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

export const Step2Problem = ({ data, updateData, onNext, onBack, addScore }: Props) => {
  const handleNext = () => {
    // length-based scoring
    if (data.unsoldTime.length > 30) addScore(2);
    if (data.currentChannels.length > 20) addScore(2);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Entendiendo el Problema</h2>
        <p className="text-muted-foreground text-sm">
          Seamos honestos sobre la situación actual.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-3">
          <Label htmlFor="unsoldTime" className="text-base font-semibold">
            ¿Desde hace cuánto tiempo están tus unidades sin venderse y qué impacto está generando esto?
          </Label>
          <Textarea 
            id="unsoldTime" 
            placeholder="Sé específico" 
            className="min-h-[100px]"
            value={data.unsoldTime}
            onChange={(e) => updateData({ unsoldTime: e.target.value })}
          />
        </div>
        
        <div className="grid gap-3">
          <Label htmlFor="currentChannels" className="text-base font-semibold">
            ¿Qué sistema estás usando actualmente para captar leads y en qué punto sientes que falla?
          </Label>
          <Textarea 
            id="currentChannels" 
            placeholder="Ej. Agencias tradicionales, portales web, referidos..." 
            className="min-h-[100px]"
            value={data.currentChannels}
            onChange={(e) => updateData({ currentChannels: e.target.value })}
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
          disabled={!data.unsoldTime || !data.currentChannels}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};
