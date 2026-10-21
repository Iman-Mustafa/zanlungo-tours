import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slide1 from "../assets/images/slide-1.webp";
import Slide2 from "../assets/images/slide-2.webp";
import Slide3 from "../assets/images/slide-3.webp";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_PHONE = "255777000000";

const slidesData = {
  en: [
    {
      image: Slide1,
      tagline: "Karibu Zan Lungo Tours & Safaris",
      title: "Unleash the Spirit of the Wild",
      description:
        "Embark on unforgettable adventures—from thrilling overland game drives across Serengeti and Ngorongoro to private transfers crafted just for you.",
    },
    {
      image: Slide2,
      tagline: "Zanzibar Day Tours & Transfers",
      title: "Escape to Pristine Paradises",
      description:
        "Explore historical Stone Town, relax on the Nakupenda sandbanks, and dive into the iconic Safari Blue marine excursions with local experts.",
    },
    {
      image: Slide3,
      tagline: "Mainland Fly-In Safaris",
      title: "Every Animal Has a Story",
      description:
        "Take a same-day return flight from Zanzibar straight into Nyerere National Park (Selous) or Mikumi for an unmatched wildlife viewing experience.",
    },
  ],
  it: [
    {
      image: Slide1,
      tagline: "Benvenuti a Zan Lungo Tours & Safaris",
      title: "Sveglia lo Spirito Selvaggio",
      description:
        "Parti per avventure indimenticabili—dai brividi dei game drive nel Serengeti e Ngorongoro ai trasferimenti privati su misura per te.",
    },
    {
      image: Slide2,
      tagline: "Tour Giornalieri & Trasferimenti Zanzibar",
      title: "Fuggi in Paradisi Incontaminati",
      description:
        "Esplora la storica Stone Town, rilassati sulle lingue di sabbia di Nakupenda e tuffati nelle iconiche escursioni marine Safari Blue.",
    },
    {
      image: Slide3,
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
    }, 5000);
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
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          aria-hidden={currentSlide !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/55 z-10" />
          </div>

          <div className="relative h-full flex items-center justify-center text-center text-white p-4 z-20">
            <div className="max-w-4xl space-y-5">
              <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                {slide.tagline}
              </span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                {slide.title}
              </h1>
              <p className="text-sm md:text-base max-w-2xl mx-auto font-light text-gray-200 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <Link to="/services" className="w-full sm:w-auto z-30">
                  <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white font-bold px-8 py-6 rounded-xl text-xs uppercase tracking-wider shadow-lg transition">
                    {t("Explore Our Packages", "Esplora i Pacchetti")}
                  </Button>
                </Link>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider z-30 shadow-lg transition"
                >
                  <FaWhatsapp size={15} />
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
              currentSlide === i ? "w-6 h-2 bg-[#D4AF37]" : "w-2 h-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Prev/Next */}
      <button onClick={prevSlide} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/10 hover:bg-white/25 rounded-full transition z-30 border border-white/10">
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      <button onClick={nextSlide} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/10 hover:bg-white/25 rounded-full transition z-30 border border-white/10">
        <ChevronRight className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

export default Hero;
