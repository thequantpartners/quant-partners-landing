import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  addScore: (score: number) => void;
  disqualify: () => void;
}

export const Step1Initial = ({ data, updateData, onNext, addScore, disqualify }: Props) => {
  const handleNext = () => {
    // Basic validation
    if (!data.name || !data.email || !data.companyType || !data.inventoryUnits) return;

    if (data.inventoryUnits === "0") {
      disqualify();
    } else if (data.inventoryUnits === "1-5") {
      addScore(1);
    } else {
      addScore(3);
    }

    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Comencemos</h2>
        <p className="text-muted-foreground text-sm">
          Por favor, completa tus datos para verificar si podemos ayudarte.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Nombre Completo</Label>
          <Input 
            id="name" 
            placeholder="Ej. Juan Pérez" 
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="email">Email Corporativo</Label>
          <Input 
            id="email" 
            type="email"
            placeholder="juan@empresa.com" 
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
          />
        </div>

        <div className="space-y-3 pt-2">
          <Label>¿Cuál es tu rol principal?</Label>
          <RadioGroup 
            value={data.companyType} 
            onValueChange={(val) => updateData({ companyType: val })}
          >
            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-secondary cursor-pointer">
              <RadioGroupItem value="Desarrollador" id="r1" />
              <Label htmlFor="r1" className="cursor-pointer flex-1">Desarrollador Inmobiliario</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-secondary cursor-pointer">
              <RadioGroupItem value="Agencia" id="r2" />
              <Label htmlFor="r2" className="cursor-pointer flex-1">Agencia Inmobiliaria</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-secondary cursor-pointer">
              <RadioGroupItem value="Fondo" id="r3" />
              <Label htmlFor="r3" className="cursor-pointer flex-1">Fondo de Inversión</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3 pt-2">
          <Label>¿Cuántas unidades en inventario tienes actualmente detenidas?</Label>
          <RadioGroup 
            value={data.inventoryUnits} 
            onValueChange={(val) => updateData({ inventoryUnits: val })}
          >
            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-secondary cursor-pointer">
              <RadioGroupItem value="0" id="inv0" />
              <Label htmlFor="inv0" className="cursor-pointer flex-1">Ninguna (0)</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-secondary cursor-pointer">
              <RadioGroupItem value="1-5" id="inv1" />
              <Label htmlFor="inv1" className="cursor-pointer flex-1">Entre 1 y 5 unidades</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-secondary cursor-pointer">
              <RadioGroupItem value="6-20" id="inv2" />
              <Label htmlFor="inv2" className="cursor-pointer flex-1">Entre 6 y 20 unidades</Label>
            </div>
            <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-secondary cursor-pointer">
              <RadioGroupItem value="+20" id="inv3" />
              <Label htmlFor="inv3" className="cursor-pointer flex-1">Más de 20 unidades</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Button 
        onClick={handleNext} 
        className="w-full mt-6"
        disabled={!data.name || !data.email || !data.companyType || !data.inventoryUnits}
      >
        Siguiente Paso
      </Button>
    </div>
  );
};
