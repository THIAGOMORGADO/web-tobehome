import Header from "./components/Header"; // Ensure this path is correct
import HeroSection from "./components/HeroSection"; // Ensure this path is correct
import FeaturesSection from "./components/FeaturesSection"; // Ensure this path is correct
import BookingForm from "./components/BookingForm"; // Ensure this path is correct
import Footer from "./components/Footer"; // Ensure this path is correct
import GallerySection from "./components/GallerySection";
import Catalog from "./components/Catalog";

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
