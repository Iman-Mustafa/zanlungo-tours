import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import QuickConnect from "../components/QuickConnect";
import { useLanguage } from "../context/LanguageContext";
import { ShieldCheck, Check, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_PHONE = "255777000000";

const content = {
  en: {
    heading: "Who We Are",
    sub: "Local Tanzanian experts specializing in seamless tourist ground logistics and breathtaking safari coordination.",
    desc1:
      "Zan Lungo Tour and Safari is a premier fully licensed agency operating out of Zanzibar. We cater specifically to international travelers who expect precision, security, and exceptional storytelling during their holidays.",
    desc2:
      "Our modern fleets are completely air-conditioned, and our expert team stands ready 24/7 to coordinate instant hotel pickups and national park entries without delays.",
    badgeTitle: "Our Direct Commitments",
    points: [
      "Certified Multi-lingual Guides (English & Italiano)",
      "Instant WhatsApp Communication Support",
      "Transparent Fixed Pricing – No Hidden Fees",
      "Air-conditioned modern safari and port vehicles",
      "24/7 coordination for pickups and schedule changes",
      "All Zanzibar hotel zones covered",
    ],
    statsLabel: ["Years Experience", "Happy Clients", "Destinations", "Languages"],
    statsVal: ["8+", "2000+", "15+", "2"],
  },
  it: {
    heading: "Chi Siamo",
    sub: "Esperti locali tanzaniani specializzati nella logistica turistica e nel coordinamento di safari mozzafiato.",
    desc1:
      "Zan Lungo Tour and Safari è un'agenzia leader con licenza completa che opera a Zanzibar. Ci rivolgiamo in particolare ai viaggiatori internazionali che si aspettano precisione, sicurezza e narrazione eccezionale.",
    desc2:
      "Le nostre flotte moderne sono completamente climatizzate e il nostro team di esperti è pronto 24 ore su 24, 7 giorni su 7 per coordinare i ritiri istantanei in hotel e gli ingressi ai parchi nazionali.",
    badgeTitle: "I Nostri Impegni Diretti",
    points: [
      "Guide certificate multilingue (Inglese e Italiano)",
      "Supporto istantaneo su WhatsApp",
      "Prezzi fissi trasparenti – Nessun costo nascosto",
      "Veicoli moderni climatizzati per safari e porto",
      "Coordinamento 24/7 per pickup e variazioni di orario",
      "Tutte le zone hotel di Zanzibar coperte",
    ],
    statsLabel: ["Anni di Esperienza", "Clienti Soddisfatti", "Destinazioni", "Lingue"],
    statsVal: ["8+", "2000+", "15+", "2"],
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
      <section className="bg-[#1C2826] pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
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
              href="tel:+255777000000"
              className="flex items-center justify-center gap-2 bg-[#1C2826] hover:bg-[#1C2826]/80 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm"
            >
              <Phone size={13} />
              +255 777 000 000
            </a>
            <a
              href="mailto:info@zanlungotours.com"
              className="flex items-center justify-center gap-2 border border-gray-200 hover:border-[#D4AF37] text-gray-600 hover:text-[#D4AF37] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition"
            >
              <Mail size={13} />
              {t("Email Us", "Scrivici")}
            </a>
          </div>
        </div>

        {/* Commitments Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-5">
          <h3 className="text-lg font-bold text-[#1C2826] flex items-center gap-2">
            <ShieldCheck className="text-emerald-600" size={20} />
            {c.badgeTitle}
          </h3>
          <div className="space-y-3">
            {c.points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="bg-emerald-100 text-emerald-700 p-0.5 rounded-full mt-0.5 flex-shrink-0">
                  <Check size={13} />
                </div>
                <span className="text-gray-700 text-sm font-medium">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <QuickConnect />
    </div>
  );
}
