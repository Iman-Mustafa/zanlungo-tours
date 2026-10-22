import { useEffect, useState, useRef } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import QuickConnect from "../components/QuickConnect";
import { servicesData } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";


const TAB_CONFIG = [
  {
    id: "transfers",
    labelEn: "Airport & Port Transfers",
    labelIt: "Trasferimenti",
    descEn: "Private air-conditioned vehicles. All hotels, all hours.",
    descIt: "Veicoli privati climatizzati. Tutti gli hotel, sempre.",
  },
  {
    id: "zanzibarTours",
    labelEn: "Zanzibar Day Tours",
    labelIt: "Tour Giornalieri Zanzibar",
    descEn: "16 unique excursions across the island.",
    descIt: "16 escursioni uniche sull'isola.",
  },
  {
    id: "flyInSafaris",
    labelEn: "Tanzania Fly-In Safaris",
    labelIt: "Safari in Volo Tanzania",
    descEn: "Same-day return flights into Selous or Mikumi.",
    descIt: "Voli giornalieri di andata e ritorno verso Selous o Mikumi.",
  },
  {
    id: "multiDaySafaris",
    labelEn: "Multi-Day Safari Packages",
    labelIt: "Safari di Più Giorni",
    descEn: "Serengeti, Ngorongoro, Tarangire, Lake Manyara and more.",
    descIt: "Serengeti, Ngorongoro, Tarangire, Lago Manyara e altro.",
  },
];

export default function Services() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("zanzibarTours");
  const tabContainerRef = useRef(null);
  const tabRefs = useRef({});

  const scrollToTab = (tabId) => {
    const container = tabContainerRef.current;
    const button = tabRefs.current[tabId];
    if (container && button) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      const offset = buttonRect.left - containerRect.left;
      container.scrollTo({
        left: container.scrollLeft + offset - 16,
        behavior: "smooth",
      });
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    scrollToTab(tabId);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToTab(activeTab);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = t(
      "Our Services – Zan Lungo Tours & Safaris",
      "I Nostri Servizi – Zan Lungo Tours & Safaris"
    );
  }, [lang]);

  const services = servicesData[lang][activeTab] || [];
  const activeConfig = TAB_CONFIG.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-[#F4F1EA]/20">
      <Navigation />

      {/* Page Hero */}
      <section className="bg-[#1C2826] pt-36 md:pt-40 pb-16 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center bg-[#1C2826] border border-[#D4AF37]/40 rounded-xl px-5 py-2.5 shadow-lg mb-4">
            <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider">
              {t("Service Catalog", "Catalogo Servizi")}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-3">
            {t("Explore Our Packages", "Esplora i Nostri Pacchetti")}
          </h1>
          <p className="text-gray-400 text-sm max-w-xl font-light">
            {t(
              "Book private airport transfers and premium safari itineraries. All services include hotel pickup across Zanzibar.",
              "Prenota trasferimenti privati e itinerari safari premium. Tutti i servizi includono pick-up in hotel in tutta Zanzibar."
            )}
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={tabContainerRef}
            className="flex gap-2 overflow-x-auto py-3 scrollbar-none scroll-smooth"
          >
            {TAB_CONFIG.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => (tabRefs.current[tab.id] = el)}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-[#1C2826] text-white shadow-md"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {lang === "en" ? tab.labelEn : tab.labelIt}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active tab description */}
      {activeConfig && (
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-2">
          <p className="text-xs text-gray-500 font-light">
            {lang === "en" ? activeConfig.descEn : activeConfig.descIt}
          </p>
        </div>
      )}

      {/* Service Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8 pb-24">
        {services.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-4">🌍</p>
            <p className="font-medium">{t("No services available in this category.", "Nessun servizio disponibile in questa categoria.")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} lang={lang} />
            ))}
          </div>
        )}

        {/* Official Excursion Brochures from Capitano Lungo */}
        <div className="mt-20 bg-gradient-to-br from-[#1C2826] to-[#141E1C] rounded-3xl p-8 md:p-12 text-white border border-[#D4AF37]/30 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-black uppercase text-[#D4AF37] tracking-widest block">
              {t("Official Field Program", "Programma Ufficiale delle Escursioni")}
            </span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
              {t("Zanlungo Tour & Safaris Official Brochures", "Brochure Ufficiali Zanlungo Tour & Safaris")}
            </h2>
            <p className="text-gray-300 text-xs md:text-sm font-light">
              {t(
                "Created directly by Capitano Lungo. View the complete itinerary details for Zanzibar island excursions and Mnemba marine trips.",
                "Create direttamente da Capitano Lungo. Consulta i dettagli completi degli itinerari per le escursioni a Zanzibar e a Mnemba."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* Brochure 1: Excursions list */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 group hover:border-[#D4AF37]/60 transition-all duration-300">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-black/40 mb-4 shadow-lg">
                <img
                  src="/images/brochure-excursions.webp"
                  alt="Zanlungo Zanzibar Tour and Safaris Excursions List"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {t("9 Classic Zanzibar Excursions", "9 Escursioni Classiche a Zanzibar")}
              </h3>
              <p className="text-xs text-gray-400 mb-4 font-light">
                {t(
                  "Stone Town, Nakupenda, Mnemba, Safari Blue, Jozani Forest, Kendwa Sunset, Quad & Safari.",
                  "Stone Town, Nakupenda, Mnemba, Safari Blu, Foresta Jozani, Tramonto a Kendwa, Quad e Safari."
                )}
              </p>
              <a
                href="https://wa.me/255778670092?text=Hello%20Capitano%20Lungo!%20I%20would%20like%20to%20book%20one%20of%20your%209%20Zanzibar%20excursions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#D4AF37] hover:bg-[#c49f2f] text-[#1C2826] font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition"
              >
                {t("Inquire on WhatsApp (+255 778 670 092)", "Richiedi su WhatsApp (+255 778 670 092)")}
              </a>
            </div>

            {/* Brochure 2: Mnemba Island Tour */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 group hover:border-[#D4AF37]/60 transition-all duration-300">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-black/40 mb-4 shadow-lg">
                <img
                  src="/images/brochure-mnemba.webp"
                  alt="Mnemba Island Snorkeling & Dolphins Tour Brochure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {t("Mnemba Island & Dolphin Tour", "Tour Isola di Mnemba & Delfini")}
              </h3>
              <p className="text-xs text-gray-400 mb-4 font-light">
                {t(
                  "Kiwengwa to Muyuni Beach, boat excursion to Mnemba, coral snorkeling & tropical fruit feast.",
                  "Da Kiwengwa a Muyuni Beach, escursione in barca a Mnemba, snorkeling nella barriera e frutta tropicale."
                )}
              </p>
              <a
                href="https://wa.me/255778670092?text=Hello%20Capitano%20Lungo!%20I%20would%20like%20to%20book%20the%20Mnemba%20Island%20Tour."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition"
              >
                {t("Book Mnemba Tour on WhatsApp", "Prenota Tour Mnemba su WhatsApp")}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <QuickConnect />
    </div>
  );
}
