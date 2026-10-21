import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Compass, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: t("Home", "Home") },
    { to: "/about", label: t("About Us", "Chi Siamo") },
    { to: "/services", label: t("Our Services", "Servizi") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-[72px]">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Compass
                className="text-[#D4AF37] transition-transform duration-700 group-hover:rotate-180"
                size={24}
              />
              <span className="text-lg font-black tracking-wider text-[#1C2826] leading-none">
                ZAN LUNGO
                <span className="text-gray-400 font-light text-[9px] block tracking-widest uppercase mt-0.5">
                  Tours & Safaris
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive(link.to)
                      ? "text-[#D4AF37]"
                      : "text-[#1C2826] hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
                <Globe size={13} className="text-gray-400 ml-1.5" />
                <button
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    lang === "en"
                      ? "bg-[#1C2826] text-white shadow-sm"
                      : "text-gray-500 hover:text-[#1C2826]"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("it")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    lang === "it"
                      ? "bg-[#1C2826] text-white shadow-sm"
                      : "text-gray-500 hover:text-[#1C2826]"
                  }`}
                >
                  IT
                </button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-[#1C2826] hover:text-[#D4AF37] transition"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <Compass className="text-[#D4AF37]" size={20} />
            <span className="text-base font-black tracking-wider text-[#1C2826]">ZAN LUNGO</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="text-gray-500 hover:text-[#1C2826] p-1.5 bg-gray-100 rounded-full"
          >
            <X size={18} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col p-5 space-y-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`py-3 px-4 rounded-xl text-sm font-bold transition-colors ${
                isActive(link.to)
                  ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                  : "text-[#1C2826] hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Language Switcher */}
        <div className="p-5 border-t border-gray-100">
          <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-3 flex items-center gap-1.5">
            <Globe size={11} /> {t("Language", "Lingua")}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => { setLang("en"); setMenuOpen(false); }}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                lang === "en" ? "bg-[#1C2826] text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => { setLang("it"); setMenuOpen(false); }}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                lang === "it" ? "bg-[#1C2826] text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              🇮🇹 Italiano
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
