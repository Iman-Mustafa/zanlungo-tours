import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import ImageCard from "@/components/ImageCard";
import QuickConnect from "../components/QuickConnect";
import { useLanguage } from "../context/LanguageContext";
import { itinerariesCard } from "../data";

const Index = () => {
  const { lang, t } = useLanguage();

  // Set professional document head metadata for Zan Lungo Tours
  useEffect(() => {
    document.title = t(
      "Zan Lungo Tour and Safari – Zanzibar Transfers & Tanzania Safaris",
      "Zan Lungo Tour & Safari – Trasferimenti Zanzibar e Safari Tanzania"
    );

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

    // Canonical link tag
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", "https://zanlungotours.com");
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#F4F1EA]/20 overflow-hidden">
      {/* Site navigation menu */}
      <Navigation />

      {/* Dynamic Hero Carousel section with real photography */}
      <Hero />

      {/* Localized Welcome introduction layout with real wildlife photography */}
      <Welcome />

      {/* Curated tours & excursion catalog grid */}
      <section className="relative py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#1C2826] rounded-xl px-6 py-3 shadow-lg mx-auto">
              <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
                {t("Featured Experiences", "Esperienze in Evidenza")}
              </h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1C2826] uppercase tracking-tight">
              {t(
                "Explore Zanzibar & Mainland Tanzania Packages",
                "Esplora i Pacchetti Zanzibar e Tanzania Continentale"
              )}
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded mt-2"></div>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto font-light pt-1">
              {t(
                "From seamless airport transfers to exotic sandbank dhow cruises and iconic Serengeti migrations.",
                "Dai trasferimenti aeroportuali alle crociere in dhow sui banchi di sabbia e le grandi migrazioni del Serengeti."
              )}
            </p>
          </div>

          {/* Display featured cards with real photography & bilingual details */}
          <ImageCard arr={itinerariesCard} />

          {/* CTA to view full catalog */}
          <div className="text-center mt-12">
            <Link to="/services">
              <button className="bg-[#1C2826] hover:bg-[#D4AF37] text-white hover:text-[#1C2826] px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-lg">
                {t("Browse All 22 Tours, Transfers & Safaris →", "Scopri Tutti i 22 Tour, Trasferimenti e Safari →")}
              </button>
            </Link>
          </div>
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
