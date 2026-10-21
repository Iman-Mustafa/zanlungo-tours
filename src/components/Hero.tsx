import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_PHONE = "255777000000";

// Local images (public/images) — avoids broken remote hotlinks
const HERO_SAFARI = "/images/hero-serengeti.jpg";
const HERO_ZANZIBAR = "/images/hero-zanzibar.jpg";
const HERO_FLYIN = "/images/hero-flyin.jpg";

const slidesData = {
  en: [
    {
      image: HERO_SAFARI,
      tagline: "Karibu Zan Lungo Tours & Safaris",
      title: "Unleash the Spirit of the Wild",
      description:
        "Embark on unforgettable adventures—from thrilling overland game drives across Serengeti and Ngorongoro to private transfers crafted just for you.",
    },
    {
      image: HERO_ZANZIBAR,
      tagline: "Zanzibar Day Tours & Transfers",
      title: "Escape to Pristine Paradises",
      description:
        "Explore historical Stone Town, relax on the Nakupenda sandbanks, and dive into the iconic Safari Blue marine excursions with local experts.",
    },
    {
      image: HERO_FLYIN,
      tagline: "Mainland Fly-In Safaris",
      title: "Every Animal Has a Story",
      description:
        "Take a same-day return flight from Zanzibar straight into Nyerere National Park (Selous) or Mikumi for an unmatched wildlife viewing experience.",
    },
  ],
  it: [
    {
      image: HERO_SAFARI,
      tagline: "Benvenuti a Zan Lungo Tours & Safaris",
      title: "Sveglia lo Spirito Selvaggio",
      description:
        "Parti per avventure indimenticabili—dai brividi dei game drive nel Serengeti e Ngorongoro ai trasferimenti privati su misura per te.",
    },
    {
      image: HERO_ZANZIBAR,
      tagline: "Tour Giornalieri & Trasferimenti Zanzibar",
      title: "Fuggi in Paradisi Incontaminati",
      description:
        "Esplora la storica Stone Town, rilassati sulle lingue di sabbia di Nakupenda e tuffati nelle iconiche escursioni marine Safari Blue.",
    },
    {
      image: HERO_FLYIN,
      tagline: "Safari in Volo dalla Tanzania Continentale",
      title: "Ogni Animale ha una Storia",
      description:
        "Prendi un volo di andata e ritorno in giornata da Zanzibar direttamente nel Parco Nazionale Nyerere (Selous) o Mikumi per un'esperienza wildlife unica.",
    },
  ],
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { lang, t } = useLanguage();
  const slides = slidesData[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleWhatsApp = () => {
    const msg = t(
      "Hello Zan Lungo Tours! I am checking your website and I would like to inquire about your safari and transfer packages.",
      "Ciao Zan Lungo Tours! Sto visitando il vostro sito e vorrei informazioni sui pacchetti safari e trasferimenti."
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1C2826]">
      {slides.map((slide, index) => (
        <div
          key={index}
          aria-hidden={currentSlide !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark gradient for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35 z-10" />
          </div>

          <div className="relative h-full flex items-center justify-center text-center text-white p-4 z-20">
            <div className="max-w-4xl space-y-5">
              <span className="inline-block bg-[#1C2826]/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                {slide.tagline}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-sm md:text-base max-w-2xl mx-auto font-light text-gray-100 leading-relaxed drop-shadow">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-3">
                <Link to="/services" className="w-full sm:w-auto z-30">
                  <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#c49f2f] text-[#1C2826] font-extrabold px-8 py-6 rounded-xl text-xs uppercase tracking-wider shadow-xl transition-all duration-300">
                    {t("Explore Our Packages", "Esplora i Pacchetti")}
                  </Button>
                </Link>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider z-30 shadow-xl transition-all duration-300"
                >
                  <FaWhatsapp size={16} />
                  {t("Chat on WhatsApp", "Chatta su WhatsApp")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              currentSlide === i ? "w-8 h-2 bg-[#D4AF37]" : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Prev/Next */}
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full transition z-30 border border-white/20 text-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full transition z-30 border border-white/20 text-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Hero;
