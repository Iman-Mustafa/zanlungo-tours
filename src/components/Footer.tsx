import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_PHONE = "255777000000";
const WHATSAPP_MSG = "Hello Zan Lungo Tours! I am checking your website and I would like to inquire about your packages.";

const Footer = () => {
  const { lang, t } = useLanguage();
  const location = useLocation();

  return (
    <footer className="bg-[#1C2826] text-white relative overflow-hidden border-t border-[#D4AF37]/10 pb-8 sm:pb-4">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="absolute bottom-0 left-0 h-64 w-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#D4AF37" d="M39.9,-51.2C50.1,-39.4,56.2,-25.7,59.6,-10.9C63,3.9,63.7,19.8,57.1,31.5C50.5,43.2,36.5,50.7,21.7,56.6C6.9,62.5,-8.6,66.8,-23.3,63.6C-38,60.4,-51.8,49.8,-59.8,36C-67.8,22.2,-69.9,5.2,-66.1,-10.1C-62.3,-25.4,-52.6,-39,-40.2,-50.8C-27.8,-62.5,-13.9,-72.5,0.4,-73.1C14.8,-73.6,29.6,-64.9,39.9,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-black tracking-wider text-[#D4AF37]">
              ZAN LUNGO <span className="text-white font-light text-xs block tracking-widest">TOURS & SAFARIS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              {t(
                "Your trusted local partner for premium airport transfers, Zanzibar island excursions, and iconic mainland Tanzania wildlife safaris.",
                "Il vostro partner locale di fiducia per trasferimenti premium, escursioni a Zanzibar e indimenticabili safari in Tanzania."
              )}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <FaFacebook size={22} />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="https://maps.google.com/?q=Stone+Town+Zanzibar" aria-label="Google Maps" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <SiGooglemaps size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-b border-gray-800 pb-2">
              {t("Quick Links", "Link Rapidi")}
            </h3>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">{t("Home", "Home")}</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">{t("About Us", "Chi Siamo")}</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">{t("Our Services", "Servizi")}</Link></li>
              <li>
                <a href="https://maps.google.com/?q=Stone+Town+Zanzibar" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <SiGooglemaps size={12} /> {t("Find Us on Maps", "Trovaci su Maps")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-b border-gray-800 pb-2">
              {t("Our Services", "I Nostri Servizi")}
            </h3>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">{t("Airport & Port Transfers", "Trasferimenti Aeroporto & Porto")}</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">{t("Zanzibar Day Tours", "Tour Giornalieri Zanzibar")}</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">{t("Tanzania Fly-In Safaris", "Safari in Volo Tanzania")}</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">{t("Multi-Day Safari Packages", "Pacchetti Safari Multi-Giorno")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-b border-gray-800 pb-2">
              {t("Contact Us", "Contattaci")}
            </h3>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Stone Town, Zanzibar,<br />Tanzania, East Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+255777000000" className="hover:text-[#D4AF37] transition-colors">+255 777 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:info@zanlungotours.com" className="hover:text-[#D4AF37] transition-colors break-all">info@zanlungotours.com</a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition w-full mt-1 shadow-sm"
                >
                  <FaWhatsapp size={15} />
                  {t("WhatsApp Chat", "Chat WhatsApp")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar — sm:pr-28 gives 112px clearance from the floating QuickConnect buttons */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4 relative z-20 sm:pr-28">
          <p>&copy; {new Date().getFullYear()} Zan Lungo Tour and Safari. {t("All rights reserved.", "Tutti i diritti riservati.")}</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#D4AF37] transition-colors font-medium"
            >
              {t("Privacy Policy", "Privacy Policy")}
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#D4AF37] transition-colors font-medium"
            >
              {t("Terms of Service", "Termini di Servizio")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
