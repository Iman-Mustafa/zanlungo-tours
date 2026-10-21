import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import ImageCard from "@/components/ImageCard";
import QuickConnect from "../components/QuickConnect";


import { itinerariesCard } from "../data";

const Index = () => {
  // Set professional document head metadata for Zan Lungo Tours
  useEffect(() => {
    document.title = "Zan Lungo Tour and Safari – Zanzibar Transfers & Tanzania Safaris";

    // Description meta tag: optimization for international tourists booking via phone
    let descriptionTag = document.querySelector("meta[name='description']");
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute(
      "content",
      "Book reliable private airport transfers and guided day tours in Zanzibar, plus unforgettable fly-in and overland wildlife safaris across mainland Tanzania."
    );

    // Canonical link tag: updated to client domain context placeholder
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", "https://zanlungotours.com");
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F1EA]/20 overflow-hidden">
      {/* Site navigation menu */}
      <Navigation />

      {/* Dynamic Hero Carousel section */}
      <Hero />

      {/* Localized Welcome introduction layout */}
      <Welcome />

      {/* Curated tours & excursion catalog grid */}
      <section className="relative py-24 bg-white bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mx-auto">
              <h3 className="text-xs font-bold text-[#1C2826] uppercase tracking-wider flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                The Curated Catalog
              </h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1C2826] uppercase tracking-tight">
              Explore Zanzibar & Mainland Tanzania Packages
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded mt-2"></div>
          </div>

          {/* Display pre-built itinerary cards using previous layout architecture */}
          <ImageCard arr={itinerariesCard} />
        </div>
      </section>

      {/* Shared Global Footer */}
      <Footer />

      {/* Floating Quick Connect Bar */}
      <QuickConnect />
    </div>
  );
};


export default Index;
