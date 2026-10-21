import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_PHONE = "255777000000";

export default function ServiceCard({ service, lang }) {
  const [travelDate, setTravelDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [hotel, setHotel] = useState("");
  const [imgError, setImgError] = useState(false);

  const handleBook = () => {
    const guestSummary =
      lang === "en"
        ? `Adults: ${adults}${children > 0 ? `, Children: ${children}` : ""}`
        : `Adulti: ${adults}${children > 0 ? `, Bambini: ${children}` : ""}`;

    const message =
      lang === "en"
        ? `Hello Zan Lungo Tours! 👋\n\nI'd like to book:\n*${service.name}*\n\n📅 Date: ${travelDate || "TBD"}\n👥 ${guestSummary}\n🏨 Hotel/Location: ${hotel || "TBD"}\n\nPlease confirm availability. Thank you!`
        : `Ciao Zan Lungo Tours! 👋\n\nVorrei prenotare:\n*${service.name}*\n\n📅 Data: ${travelDate || "Da definire"}\n👥 ${guestSummary}\n🏨 Hotel/Luogo: ${hotel || "Da definire"}\n\nConfermate la disponibilità. Grazie!`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300 group">
      <div>
        {/* Card Cover Image */}
        {service.image && !imgError ? (
          <div className="relative h-48 w-full overflow-hidden bg-gray-100">
            <img
              src={service.image}
              alt={service.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            {/* Duration Tag - Top Right */}
            <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {service.duration}
            </span>

            {/* Pill - Bottom Left */}
            <div className="absolute bottom-3 left-3 bg-[#1C2826]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs font-medium">
              <span className="text-[11px] text-[#D4AF37] font-bold uppercase tracking-wider">{lang === "en" ? "Zan Lungo Tour" : "Tour Zan Lungo"}</span>
            </div>
          </div>
        ) : null}

        {/* Card Header & Body */}
        <div className="p-5 space-y-4">
          <div className="flex justify-between items-start gap-3">
            <div className="flex items-start gap-2.5">
              <h3 className="font-bold text-base leading-tight text-[#1C2826] group-hover:text-[#2A624C] transition-colors">
                {service.name}
              </h3>
            </div>
            {(!service.image || imgError) && (
              <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#1C2826] text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wider flex-shrink-0">
                {service.duration}
              </span>
            )}
          </div>

          {/* Highlights */}
          <div className="space-y-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {lang === "en" ? "Highlights" : "Punti Salienti"}
            </h4>
            <ul className="text-xs text-gray-600 space-y-1 font-light">
              {service.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#D4AF37] mt-0.5 font-bold">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Included / Excluded */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100 text-[11px]">
            <div>
              <span className="font-bold text-emerald-600 block mb-1 text-[11px] uppercase tracking-wider">
                {lang === "en" ? "Included" : "Incluso"}
              </span>
              {service.included.map((inc, i) => (
                <p key={i} className="text-gray-500 font-light leading-snug mb-1">• {inc}</p>
              ))}
            </div>
            <div>
              <span className="font-bold text-rose-500 block mb-1 text-[11px] uppercase tracking-wider">
                {lang === "en" ? "Excluded" : "Escluso"}
              </span>
              {service.excluded.map((exc, i) => (
                <p key={i} className="text-gray-500 font-light leading-snug mb-1">• {exc}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Panel */}
      <div className="p-4 bg-gray-50/80 border-t border-gray-100 space-y-3">
        {/* Hotel / Pickup Location */}
        <div>
          <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            {lang === "en" ? "Hotel / Pickup Location" : "Hotel / Luogo di Partenza"}
          </label>
          <input
            type="text"
            value={hotel}
            onChange={(e) => setHotel(e.target.value)}
            placeholder={lang === "en" ? "e.g. Hotel Riu Palace, Nungwi" : "es. Hotel Riu Palace, Nungwi"}
            className="w-full text-xs p-2 rounded-xl border border-gray-200 bg-white focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-700 placeholder:text-gray-300"
          />
        </div>

        {/* Date + Guests */}
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              {lang === "en" ? "Date" : "Data"}
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full text-xs p-2 rounded-xl border border-gray-200 bg-white focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-700"
            />
          </div>
          <div>
            <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              {lang === "en" ? "Adults" : "Adulti"}
            </label>
            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
              className="w-full text-xs p-2 rounded-xl border border-gray-200 bg-white focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-700"
            />
          </div>
          <div>
            <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              {lang === "en" ? "Children" : "Bambini"}
            </label>
            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
              className="w-full text-xs p-2 rounded-xl border border-gray-200 bg-white focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-700"
            />
          </div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleBook}
          className="w-full bg-[#1C2826] hover:bg-emerald-700 active:scale-[0.98] text-white text-xs font-bold uppercase py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
        >
          <FaWhatsapp size={15} className="text-emerald-400" />
          {lang === "en" ? "Book on WhatsApp" : "Prenota su WhatsApp"}
        </button>
      </div>
    </div>
  );
}
