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

export const Step4Commitment = ({ data, updateData, onNext, onBack, addScore }: Props) => {
  const handleNext = () => {
    if (data.executionSpeed.length > 20) addScore(3);
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Compromiso Final</h2>
        <p className="text-muted-foreground text-sm">
          Buscamos partners listos para ejecutar.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-3">
          <Label htmlFor="decisionMakerInfo" className="text-base font-semibold">
            ¿Quién ha influenciado más tu forma de tomar decisiones en negocios (mentores, libros, autores)?
          </Label>
          <Textarea 
            id="decisionMakerInfo" 
            placeholder="" 
            className="min-h-[80px]"
            value={data.decisionMakerInfo}
            onChange={(e) => updateData({ decisionMakerInfo: e.target.value })}
          />
        </div>
        
        <div className="grid gap-3">
          <Label htmlFor="executionSpeed" className="text-base font-semibold">
            Si te demostramos exactamente cómo destrabar tu inventario en una llamada, ¿qué tan rápido estás dispuesto a integrar un nuevo sistema?
          </Label>
          <Textarea 
            id="executionSpeed" 
            placeholder="Tu equipo y tú están..." 
            className="min-h-[100px]"
            value={data.executionSpeed}
            onChange={(e) => updateData({ executionSpeed: e.target.value })}
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
          disabled={!data.decisionMakerInfo || !data.executionSpeed}
        >
          Finalizar y Evaluar Perfil
        </Button>
      </div>
    </div>
  );
};
