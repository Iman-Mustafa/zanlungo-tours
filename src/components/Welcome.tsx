import { Link } from "react-router-dom";
import CloseCheetah from "../assets/images/cheetah-close.webp";
import { useLanguage } from "../context/LanguageContext";

const Welcome = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="bg-[#F4F1EA]/30 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div className="space-y-6">
          <h3 className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
            <span className="text-xs font-bold text-[#1C2826] uppercase tracking-wider">
              {t("Welcome to Zan Lungo", "Benvenuti a Zan Lungo")}
            </span>
          </h3>

          <h2 className="text-4xl md:text-5xl font-black text-[#1C2826] uppercase tracking-tight leading-tight">
            {lang === "en" ? (
              <>Where Nature and Adventure <span className="text-[#D4AF37]">Begin Together</span></>
            ) : (
              <>Dove Natura e Avventura <span className="text-[#D4AF37]">Iniziano Insieme</span></>
            )}
          </h2>

          <div className="text-gray-600 leading-relaxed text-sm font-light space-y-3">
            <p>
              {t(
                "Based locally in Zanzibar, we serve as your professional gateway between deep oceanic island escapes and roaring savanna tracks. From seamless, air-conditioned private airport transfers directly to your hotel, to complex fly-in safari expeditions across mainland Tanzania—our mission ensures absolute comfort, safety, and strict schedule fidelity.",
                "Con sede a Zanzibar, siamo il vostro gateway professionale tra le fughe nell'oceano e i ruggiti della savana. Dai trasferimenti privati climatizzati direttamente al vostro hotel, alle spedizioni safari fly-in in tutta la Tanzania continentale—la nostra missione garantisce comfort assoluto, sicurezza e puntualità."
              )}
            </p>
            <p className="font-semibold text-[#1C2826] text-sm">
              {t(
                "Whether you are exploring Stone Town or tracking the Great Migration in the Serengeti, our operators are available 24/7.",
                "Che stiate esplorando Stone Town o seguendo la Grande Migrazione nel Serengeti, i nostri operatori sono disponibili 24/7."
              )}
            </p>
          </div>

          <div className="pt-2">
            <Link to="/about" aria-label={t("Learn more about Zan Lungo", "Scopri di più su Zan Lungo")}>
              <button className="bg-[#1C2826] hover:bg-[#D4AF37] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-md">
                {t("More About Us", "Chi Siamo")}
              </button>
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="relative p-2">
          <img
            src={CloseCheetah}
            alt={t("Close-up of a cheetah in the African savanna", "Ghepardo da vicino nella savana africana")}
            className="w-full h-[450px] rounded-3xl relative z-10 object-cover shadow-xl border border-white/50"
          />
          <div className="bg-[#D4AF37]/10 absolute -bottom-6 -right-6 w-48 h-48 rounded-full z-0 blur-sm" />
          <div className="bg-[#1C2826]/5 absolute -top-6 -left-6 w-32 h-32 rounded-full z-0 blur-sm" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
