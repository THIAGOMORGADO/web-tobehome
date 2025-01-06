import { Button } from "@/components/ui/button";

import CasaPraia from "@/app/assets/desktop_casa-de-praia-a-beira-mar-aluguel-temporada-pitimbu-praia-azul.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white py-0 px-4">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${CasaPraia.src})`,
          filter: "brightness(60%)",
        }}
      ></div>
      <div className="relative z-10 max-w-3xl mx-auto p-6 bg-black bg-opacity-50 rounded-lg shadow-lg">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Bem-vindo ao To be Home
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Coloque seu imóvel de temporada e faça parte da nossa comunidade!
        </p>
        <p className="text-md mb-8">Fazer sua reserva agora</p>
        <Button
          size="lg"
          variant="secondary"
          className="text-black border border-white hover:bg-white hover:text-primary transition duration-300"
        >
          Reserve Sua Estadia
        </Button>
      </div>
    </section>
  );
}
