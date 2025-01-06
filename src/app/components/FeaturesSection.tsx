import { Wifi, Coffee, Utensils, Car } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Wi-Fi Gratuito",
    description: "Conexão de alta velocidade em todas as áreas",
  },
  {
    icon: Coffee,
    title: "Café da Manhã",
    description: "Buffet completo com opções variadas",
  },
  {
    icon: Utensils,
    title: "Restaurante",
    description: "Culinária local e internacional",
  },
  {
    icon: Car,
    title: "Estacionamento",
    description: "Estacionamento gratuito para hóspedes",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
