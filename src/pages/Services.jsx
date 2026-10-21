import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import QuickConnect from "../components/QuickConnect";
import { servicesData } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";
import { Car, Palmtree, Plane, Mountain } from "lucide-react";


const TAB_CONFIG = [
  {
    id: "transfers",
    icon: Car,
    labelEn: "Airport & Port Transfers",
    labelIt: "Trasferimenti",
    descEn: "Private air-conditioned vehicles. All hotels, all hours.",
    descIt: "Veicoli privati climatizzati. Tutti gli hotel, sempre.",
  },
  {
    id: "zanzibarTours",
    icon: Palmtree,
    labelEn: "Zanzibar Day Tours",
    labelIt: "Tour Giornalieri Zanzibar",
    descEn: "16 unique excursions across the island.",
    descIt: "16 escursioni uniche sull'isola.",
  },
  {
    id: "flyInSafaris",
    icon: Plane,
    labelEn: "Tanzania Fly-In Safaris",
    labelIt: "Safari in Volo Tanzania",
    descEn: "Same-day return flights into Selous or Mikumi.",
    descIt: "Voli giornalieri di andata e ritorno verso Selous o Mikumi.",
  },
  {
    id: "multiDaySafaris",
    icon: Mountain,

    labelEn: "Multi-Day Safari Packages",
    labelIt: "Safari di Più Giorni",
    descEn: "Serengeti, Ngorongoro, Tarangire, Lake Manyara and more.",
    descIt: "Serengeti, Ngorongoro, Tarangire, Lago Manyara e altro.",
  },
];

export default function Services() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("zanzibarTours");

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
      <section className="bg-[#1C2826] pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
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
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {TAB_CONFIG.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-[#1C2826] text-white shadow-md"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Icon size={13} />
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
      </main>

      <Footer />
      <QuickConnect />
    </div>
  );
}
