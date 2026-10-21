import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_PHONE = "255777000000";

const QuickConnect = () => {
  const { lang, t } = useLanguage();

  const handleWhatsApp = () => {
    const msg = t(
      "Hello Zan Lungo Tours! I found you online and would like to make an inquiry.",
      "Ciao Zan Lungo Tours! Vi ho trovato online e vorrei fare una richiesta."
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-2.5 items-end">
      {/* WhatsApp FAB — main CTA */}
      <button
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        title={t("Chat on WhatsApp", "Chatta su WhatsApp")}
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl transition-all duration-200 active:scale-95 text-sm font-bold"
      >
        <FaWhatsapp size={20} />
        <span className="hidden sm:inline">{t("WhatsApp", "WhatsApp")}</span>
      </button>

      {/* Call button */}
      <a
        href="tel:+255777000000"
        aria-label="Call us"
        title={t("Call Us", "Chiamaci")}
        className="flex items-center justify-center w-12 h-12 bg-[#1C2826] hover:bg-[#D4AF37] text-white rounded-full shadow-xl transition-all duration-200 active:scale-95"
      >
        <Phone size={17} />
      </a>

      {/* Email button */}
      <a
        href="mailto:info@zanlungotours.com"
        aria-label="Email us"
        title="info@zanlungotours.com"
        className="flex items-center justify-center w-12 h-12 bg-[#1C2826] hover:bg-[#D4AF37] text-white rounded-full shadow-xl transition-all duration-200 active:scale-95"
      >
        <Mail size={17} />
      </a>
    </div>
  );
};

export default QuickConnect;
