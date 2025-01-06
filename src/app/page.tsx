import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Catalog from "./components/Catalog";
import GallerySection from "./components/GallerySection";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function HotelLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <Catalog />
        <GallerySection />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
