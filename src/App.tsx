"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Studio from "./components/Studio";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import MenuModal from "./components/MenuModal";

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler for anchor navigation target offsets
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = document.getElementById("nav-bar")?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Directly triggers selection and calendar scrolling
  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsMenuOpen(false);
    
    // Smoothly redirect focus down to the appointment scheduler
    setTimeout(() => {
      scrollToSection("booking");
    }, 150);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Intricate thin framing border on desktop to look like a high-end luxury frame */}
      <div className="hidden lg:block fixed inset-4 border border-secondary/10 pointer-events-none z-50 transition-colors duration-1000" />

      {/* Main Luxury Header */}
      <Header
        onOpenMenuCatalog={() => setIsMenuOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Hero Cover */}
      <Hero
        onOpenMenu={() => setIsMenuOpen(true)}
        onScrollToBooking={() => scrollToSection("booking")}
      />

      {/* Curated Techniques offset grid */}
      <Services onSelectService={handleSelectService} />

      {/* The Gallery Portfolios with custom Lightbox */}
      <Gallery />

      {/* The Salon Studio curated overview block */}
      <Studio />

      {/* Exclusive Booking scheduler with dynamic October calendar */}
      <Booking
        selectedServiceId={selectedServiceId}
        onSetSelectedServiceId={setSelectedServiceId}
      />

      {/* Clean high-contrast footer */}
      <Footer />

      {/* Full-screen magazine pricing collection */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectService={handleSelectService}
      />
    </div>
  );
}
