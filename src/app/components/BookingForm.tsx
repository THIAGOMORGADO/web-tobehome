import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Select from "@/components/ui/select";

export default function BookingForm() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Faça sua Reserva
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="check-in">Check-in</Label>
                <Input type="date" id="check-in" />
              </div>
              <div>
                <Label htmlFor="check-out">Check-out</Label>
                <Input type="date" id="check-out" />
              </div>
            </div>
            <div>
              <Label htmlFor="guests">Número de Hóspedes</Label>
              <Select aria-labelledby="guests">
                <option value="1">1 Hóspede</option>
                <option value="2">2 Hóspedes</option>
                <option value="3">3 Hóspedes</option>
                <option value="4">4 Hóspedes</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="room-type">Tipo de Quarto</Label>
              <Select id="room-type">
                <option value="standard">Standard</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Verificar Disponibilidade
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
