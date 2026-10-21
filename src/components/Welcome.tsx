import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Award, Compass } from "lucide-react";

// Cheetah in Serengeti NP — photo by Giles Laurent, CC BY-SA 4.0 (Wikimedia Commons)
const REAL_WELCOME_IMAGE = "/images/welcome-cheetah.jpg";

const Welcome = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="bg-[#F4F1EA]/40 py-24 px-4 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#1C2826] rounded-xl px-6 py-3 shadow-lg">
            <span className="text-xs font-extrabold text-white uppercase tracking-wider">
              {t("Welcome to Zan Lungo", "Benvenuti a Zan Lungo")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#1C2826] uppercase tracking-tight leading-tight">
            {lang === "en" ? (
              <>Where Nature and Adventure <span className="text-[#D4AF37]">Begin Together</span></>
            ) : (
              <>Dove Natura e Avventura <span className="text-[#D4AF37]">Iniziano Insieme</span></>
            )}
          </h2>

          <div className="text-gray-600 leading-relaxed text-sm font-light space-y-4">
            <p>
              {t(
                "Based locally in Zanzibar, we serve as your professional gateway between deep oceanic island escapes and roaring savanna tracks. From seamless, air-conditioned private airport transfers directly to your hotel, to complex fly-in safari expeditions across mainland Tanzania - our mission ensures absolute comfort, safety, and strict schedule fidelity.",
                "Con sede a Zanzibar, siamo il vostro gateway professionale tra le fughe nell'oceano e i ruggiti della savana. Dai trasferimenti privati climatizzati direttamente al vostro hotel, alle spedizioni safari fly-in in tutta la Tanzania continentale - la nostra missione garantisce comfort assoluto, sicurezza e puntualità."
              )}
            </p>
            <p className="font-semibold text-[#1C2826] text-sm">
              {t(
                "Whether you are exploring Stone Town or tracking the Great Migration in the Serengeti, our operators are available 24/7.",
                "Che stiate esplorando Stone Town o seguendo la Grande Migrazione nel Serengeti, i nostri operatori sono disponibili 24/7."
              )}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
              <div className="p-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl">
                <Compass size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1C2826]">{t("Bilingual Guides", "Guide Bilingue")}</p>
                <p className="text-[11px] text-gray-500">{t("English & Italian", "Inglese e Italiano")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1C2826]">{t("100% Reliable", "100% Affidabile")}</p>
                <p className="text-[11px] text-gray-500">{t("Flight delay tracking", "Monitoraggio voli")}</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link to="/about" aria-label={t("Learn more about Zan Lungo", "Scopri di più su Zan Lungo")}>
              <button className="bg-[#1C2826] hover:bg-[#D4AF37] text-white hover:text-[#1C2826] px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-md">
                {t("More About Us", "Chi Siamo")}
              </button>
            </Link>
          </div>
        </div>

        {/* Right image with real photography */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] md:aspect-[3/4] max-h-[500px]">
            <img
              src={REAL_WELCOME_IMAGE}
              alt={t("Serengeti cheetah wildlife encounter in Tanzania", "Incontro con ghepardo nel Serengeti in Tanzania")}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="bg-[#D4AF37] text-[#1C2826] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-1">
                {t("Authentic Experience", "Esperienza Autentica")}
              </span>
              <p className="text-sm font-semibold drop-shadow-sm">
                {t("From Island Beaches to Wildlife Savannas", "Dalle Spiagge dell'Isola alle Savane della Fauna Selvatica")}
              </p>
            </div>
          </div>

          <div className="bg-[#D4AF37]/20 absolute -bottom-6 -right-6 w-48 h-48 rounded-full z-0 blur-xl pointer-events-none" />
          <div className="bg-[#1C2826]/10 absolute -top-6 -left-6 w-32 h-32 rounded-full z-0 blur-lg pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
