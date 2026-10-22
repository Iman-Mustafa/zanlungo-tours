import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_PHONE = "255778670092";

// Real photography from ZANLUNGO converted to high-performance WebP
const HERO_SAFARI = "/images/hero-serengeti.webp"; // Real safari jeep with Capitano Lungo & pride of lions
const HERO_ZANZIBAR = "/images/hero-zanzibar.webp"; // Real dhow cruise on turquoise ocean
const HERO_FLYIN = "/images/hero-flyin.webp"; // Real Mikumi National Park Hippo Pool
const HERO_SANDBANK = "/images/hero-sandbank.webp"; // Real Nakupenda sandbank & blue waters

const slidesData = {
  en: [
    {
      image: HERO_SAFARI,
      tagline: "Karibu Zan Lungo Tours & Safaris",
      title: "Unleash the Spirit of the Wild",
      description:
        "Embark on authentic adventures with local guide Capitano Lungo—from thrilling game drives across Serengeti, Ngorongoro, and Mikumi to tailored private excursions.",
    },
    {
      image: HERO_ZANZIBAR,
      tagline: "Zanzibar Day Tours & Marine Cruises",
      title: "Escape to Pristine Paradises",
      description:
        "Sail aboard traditional wooden dhows, explore Mnemba Atoll with dolphins, and dive into authentic Safari Blue marine excursions.",
    },
    {
      image: HERO_SANDBANK,
      tagline: "Nakupenda & Sandbank Experiences",
      title: "Crystal Waters & Fresh Feasts",
      description:
        "Relax on white sandbanks disappearing into turquoise tides while enjoying fresh tropical fruits and barbecued seafood prepared on-site.",
    },
    {
      image: HERO_FLYIN,
      tagline: "Mainland Fly-In Safaris",
      title: "Every Animal Has a Story",
      description:
        "Take a seamless same-day or multi-day return flight from Zanzibar straight into Mikumi or Nyerere (Selous) for an unmatched wildlife encounter.",
    },
  ],
  it: [
    {
      image: HERO_SAFARI,
      tagline: "Benvenuti a Zan Lungo Tours & Safaris",
      title: "Sveglia lo Spirito Selvaggio",
      description:
        "Parti per avventure autentiche con la guida locale Capitano Lungo—dai safari nel Serengeti e Ngorongoro fino a Mikumi con veicoli 4x4 dedicati.",
    },
    {
      image: HERO_ZANZIBAR,
      tagline: "Tour Giornalieri & Escursioni Marine",
      title: "Fuggi in Paradisi Incontaminati",
      description:
        "Naviga a bordo di dhow tradizionali, scopri l'atollo di Mnemba con i delfini e vivi l'iconica escursione marina Safari Blue.",
    },
    {
      image: HERO_SANDBANK,
      tagline: "Esperienze Nakupenda & Lingue di Sabbia",
      title: "Acque Cristalline & Frutta Tropicale",
      description:
        "Rilassati sulle lingue di sabbia bianca circondate da acque turchesi gustando frutta fresca tropicale e pesce alla griglia.",
    },
    {
      image: HERO_FLYIN,
      tagline: "Safari in Volo dalla Tanzania Continentale",
      title: "Ogni Animale ha una Storia",
      description:
        "Vola direttamente da Zanzibar verso Mikumi o Nyerere (Selous) per un incontro indimenticabile a contatto con la grande fauna africana.",
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
