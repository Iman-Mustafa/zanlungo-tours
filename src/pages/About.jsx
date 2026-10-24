import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import QuickConnect from "../components/QuickConnect";
import { useLanguage } from "../context/LanguageContext";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_PHONE = "255778670092";

const content = {
  en: {
    heading: "Who We Are",
    sub: "Local Tanzanian experts led by Capitano Lungo, specializing in authentic Zanzibar excursions and mainland safari expeditions.",
    desc1:
      "Zanlungo Tour and Safaris is a premier, fully licensed local agency born and operating in Zanzibar. Guided by Capitano Lungo, with over 10 years of personal experience guiding international travelers, we take pride in offering genuine hospitality and unforgettable memories.",
    desc2:
      "From tranquil Dhow cruises across Mnemba Island and Nakupenda Sandbank to thrilling game drives in Serengeti, Ngorongoro, and Mikumi, our team coordinates every detail 24/7 with reliable, air-conditioned transport and fluent bilingual guidance.",
    badgeTitle: "Our Direct Commitments",
    points: [
      "Led by local guide Capitano Lungo (10+ years experience)",
      "Fluent bilingual guidance (English & Italiano)",
      "Instant WhatsApp Communication (+255 778 670 092)",
      "Transparent Fixed Pricing – No Hidden Fees",
      "Air-conditioned modern vehicles & private safari 4x4s",
      "24/7 coordination for pickups and schedule tracking",
    ],
    statsLabel: ["Years Experience", "Happy Clients", "Destinations", "Languages"],
    statsVal: ["10+", "2500+", "15+", "2"],
  },
  it: {
    heading: "Chi Siamo",
    sub: "Esperti locali tanzaniani guidati da Capitano Lungo, specializzati in escursioni autentiche a Zanzibar e safari mozzafiato in Tanzania.",
    desc1:
      "Zanlungo Tour and Safaris è un'agenzia locale autorizzata con sede a Zanzibar. Guidata da Capitano Lungo, nato sull'isola con oltre 10 anni di esperienza nell'accompagnare viaggiatori internazionali, offriamo un'accoglienza calorosa e ricordi indimenticabili.",
    desc2:
      "Dalle navigazioni su dhow verso Mnemba e la lingua di sabbia di Nakupenda fino ai safari nel Serengeti, Ngorongoro e Mikumi, coordiniamo ogni dettaglio 24/7 con veicoli climatizzati e assistenza continua.",
    badgeTitle: "I Nostri Impegni Diretti",
    points: [
      "Guidati da Capitano Lungo (oltre 10 anni di esperienza)",
      "Guide bilingue fluenti (Italiano e Inglese)",
      "Supporto istantaneo su WhatsApp (+255 778 670 092)",
      "Prezzi fissi e trasparenti – Nessuna sorpresa",
      "Veicoli moderni climatizzati e fuoristrada 4x4",
      "Coordinamento 24/7 con monitoraggio voli e ritiri",
    ],
    statsLabel: ["Anni di Esperienza", "Clienti Soddisfatti", "Destinazioni", "Lingue"],
    statsVal: ["10+", "2500+", "15+", "2"],
  },
};

export default function About() {
  const { lang, t } = useLanguage();
  const c = content[lang];

  useEffect(() => {
    document.title = t(
      "About Us – Zan Lungo Tours & Safaris",
      "Chi Siamo – Zan Lungo Tours & Safaris"
    );
  }, [lang]);

  const handleWhatsApp = () => {
    const msg = t(
      "Hello Zan Lungo Tours! I am interested in your services and would like to learn more.",
      "Ciao Zan Lungo Tours! Sono interessato ai vostri servizi e vorrei saperne di più."
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA]/20">
      <Navigation />

      {/* Hero Banner */}
      <section className="bg-[#1C2826] pt-36 md:pt-40 pb-16 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center bg-[#1C2826] border border-[#D4AF37]/40 rounded-xl px-5 py-2.5 shadow-lg mb-4">
            <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider">
              {t("About Zan Lungo", "Chi Siamo")}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            {c.heading}
          </h1>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {c.statsVal.map((val, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black text-[#D4AF37]">{val}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mt-1">{c.statsLabel[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Text */}
        <div className="space-y-6">
          <p className="text-lg font-semibold text-[#E07A5F] leading-relaxed">{c.sub}</p>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed font-light">
            <p>{c.desc1}</p>
            <p>{c.desc2}</p>
          </div>

          {/* Contact Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm"
            >
              <FaWhatsapp size={15} />
              {t("Chat on WhatsApp", "Chatta su WhatsApp")}
            </button>
            <a
              href="tel:+255778670092"
              className="flex items-center justify-center gap-2 bg-[#1C2826] hover:bg-[#1C2826]/80 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm"
            >
              <Phone size={13} />
              +255 778 670 092
            </a>
          </div>
        </div>

        {/* Commitments Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-5">
          <h3 className="text-lg font-bold text-[#1C2826]">
            {c.badgeTitle}
          </h3>
          <div className="space-y-3">
            {c.points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-[#D4AF37] font-bold text-base leading-none mt-0.5 select-none">•</span>
                <span className="text-gray-700 text-sm font-medium">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Moments Gallery */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase text-[#D4AF37] tracking-widest block mb-2">
            {t("Moments That Last Forever", "Momenti Che Restano Nel Cuore")}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1C2826] uppercase">
            {t("Authentic Moments with Capitano Lungo", "Momenti Autentici con Capitano Lungo")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-100">
            <img
              src="/images/capitano-lungo-beach.webp"
              alt="Capitano Lungo on the beach with guests"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <p className="text-white text-xs font-bold">{t("Sunset at Kendwa Beach", "Tramonto sulla Spiaggia di Kendwa")}</p>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-100">
            <img
              src="/images/welcome-safari.webp"
              alt="Safari game drive observing pride of lions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <p className="text-white text-xs font-bold">{t("Lion Encounter on Safari Drive", "Incontro con i Leoni in Safari")}</p>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-100">
            <img
              src="/images/card-safari-blue.webp"
              alt="Dhow sailing cruise on turquoise ocean"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <p className="text-white text-xs font-bold">{t("Private Dhow Marine Cruise", "Crociera Privata in Barca Dhow")}</p>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-100">
            <img
              src="/images/card-flyin.webp"
              alt="Mikumi National Park Hippo Pool"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <p className="text-white text-xs font-bold">{t("Mikumi Hippo Pool Expedition", "Spedizione Hippo Pool a Mikumi")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuickConnect />
    </div>
  );
}
