import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const catalogItems = {
  temporada: [
    {
      name: "Pacote Verão",
      description:
        "Aproveite o sol e a praia com nosso pacote de verão all-inclusive.",
      price: "R$ 2.500",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Escapada de Inverno",
      description:
        "Aconchego e conforto em nosso resort de montanha durante o inverno.",
      price: "R$ 3.000",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  periodoEspecifico: [
    {
      name: "Fim de Semana Romântico",
      description: "Pacote especial para casais, válido de sexta a domingo.",
      price: "R$ 1.200",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Semana de Férias em Família",
      description:
        "7 dias de diversão para toda a família com atividades inclusas.",
      price: "R$ 5.000",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  aluguelCompra: [
    {
      name: "Apartamento de Luxo",
      description:
        "Apartamento de 3 quartos com vista para o mar, disponível para aluguel de longa temporada ou compra.",
      price: "R$ 1.000.000",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Villa com Piscina",
      description:
        "Villa espaçosa com piscina privativa, perfeita para investimento ou moradia.",
      price: "R$ 2.500.000",
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
};

export default function Catalog() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Nossos Catálogos
        </h2>
        <Tabs defaultValue="temporada" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="temporada">Temporada</TabsTrigger>
            <TabsTrigger value="periodoEspecifico">
              Período Específico
            </TabsTrigger>
            <TabsTrigger value="aluguelCompra">Aluguel e Compra</TabsTrigger>
          </TabsList>
          {Object.entries(catalogItems).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-primary">
                          {category === "aluguelCompra"
                            ? item.price
                            : `A partir de ${item.price}`}
                        </span>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          Saiba Mais
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
