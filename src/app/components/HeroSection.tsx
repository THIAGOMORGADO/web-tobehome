import { Button } from "@/components/ui/button";
import Image from "next/image";

import Ca1 from "@/app/assets/Casa-de-Fazenda-10-modelos-que-dão-o-que-falar-01.jpg";
import ca2 from "@/app/assets/desktop_casa-de-praia-a-beira-mar-aluguel-temporada-pitimbu-praia-azul.jpg";
import ca3 from "@/app/assets/recife_apartamentos_gallery_d6536224119e24baad3b.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white py-0 px-3">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="carousel slide" id="heroCarousel" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src={Ca1}
                className="d-block w-full h-full object-cover"
                alt="First slide"
                layout="fill"
                objectFit="cover"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={ca2}
                className="d-block w-full h-full object-cover"
                alt="Second slide"
                layout="fill"
                objectFit="cover"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={ca3}
                className="d-block w-full h-full object-cover"
                alt="Third slide"
                layout="fill"
                objectFit="cover"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
            <script>
              {`
              const carousel = document.querySelector('#heroCarousel');
              let currentIndex = 0;
              const items = carousel.querySelectorAll('.carousel-item');
              const totalItems = items.length;

              function showNextSlide() {
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % totalItems;
                items[currentIndex].classList.add('active');
              }

              setInterval(showNextSlide, 5000); // Change slide every 5 seconds
            `}
            </script>
          </div>
          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Bem-vindo ao Hotel Paraíso
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experimente o luxo e o conforto em nossa localização privilegiada
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Reserve Sua Estadia
        </Button>
      </div>
    </section>
  );
}
