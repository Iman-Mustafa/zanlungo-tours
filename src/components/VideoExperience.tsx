import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_PHONE = "255778670092";

interface VideoItem {
  id: string;
  tabEn: string;
  tabIt: string;
  titleEn: string;
  titleIt: string;
  locationEn: string;
  locationIt: string;
  descriptionEn: string;
  descriptionIt: string;
  videoSrc: string;
  posterSrc: string;
}

const videos: VideoItem[] = [
  {
    id: "zanzibar-sandbank",
    tabEn: "Sandbank & Dhow",
    tabIt: "Sandbank & Dhow",
    titleEn: "Zanzibar Sandbank & Dhow Adventure",
    titleIt: "Lingua di Sabbia & Avventura in Dhow",
    locationEn: "Nakupenda & Mnemba Atoll",
    locationIt: "Nakupenda & Atollo di Mnemba",
    descriptionEn: "Crystal-clear turquoise tides, sailing aboard authentic wooden dhows, and tropical fruit feasts prepared fresh on the sandbank.",
    descriptionIt: "Acque turchesi cristalline, navigazione su dhow in legno tradizionali e frutta fresca tropicale preparata sulla sabbia.",
    videoSrc: "/videos/zanzibar-experience.mp4",
    posterSrc: "/images/card-safari-blue.webp",
  },
  {
    id: "safari-rhinos",
    tabEn: "Ngorongoro Rhinos",
    tabIt: "Rinoceronti",
    titleEn: "Wild Rhinos in Ngorongoro Crater",
    titleIt: "Rinoceronti Selvaggi nel Cratere di Ngorongoro",
    locationEn: "Ngorongoro Crater Floor",
    locationIt: "Fondo del Cratere di Ngorongoro",
    descriptionEn: "Rare, close-up encounter with endangered black rhinos roaming freely in the UNESCO World Heritage volcanic caldera.",
    descriptionIt: "Raro incontro ravvicinato con rinoceronti neri che camminano liberi nella caldera vulcanica patrimonio UNESCO.",
    videoSrc: "/videos/safari-rhinos.mp4",
    posterSrc: "/images/card-serengeti.webp",
  },
  {
    id: "safari-lions",
    tabEn: "Safari Lions",
    tabIt: "Leoni in Safari",
    titleEn: "Savannah Lions Right Next to the 4x4",
    titleIt: "Leoni della Savana Accanto alla 4x4",
    locationEn: "Serengeti & Mikumi Game Reserves",
    locationIt: "Riserve Naturali Serengeti & Mikumi",
    descriptionEn: "Experience the thrill of a pride of wild lions resting just feet from your open-sided safari vehicle in the African sunset.",
    descriptionIt: "Vivi l'emozione di un branco di leoni che riposa a pochi metri dal fuoristrada aperto durante il tramonto africano.",
    videoSrc: "/videos/safari-lions.mp4",
    posterSrc: "/images/welcome-safari.webp",
  },
  {
    id: "dhow-seafood",
    tabEn: "Seafood Onboard",
    tabIt: "Pesce a Bordo",
    titleEn: "Fresh Seafood Feast Onboard",
    titleIt: "Pranzo di Pesce Fresco a Bordo",
    locationEn: "Safari Blue Marine Excursion",
    locationIt: "Escursione Marina Safari Blue",
    descriptionEn: "Gourmet grilled seafood, coconut rice, and savory local delicacies served while floating on the tranquil Indian Ocean.",
    descriptionIt: "Pesce fresco grigliato, riso al cocco e delizie locali servite direttamente sulla barca nelle acque dell'Oceano Indiano.",
    videoSrc: "/videos/dhow-seafood.mp4",
    posterSrc: "/images/hero-sandbank.webp",
  },
  {
    id: "capitano-mikumi",
    tabEn: "Mikumi Hippo Pool",
    tabIt: "Hippo Pool Mikumi",
    titleEn: "Mikumi Hippo Pool with Capitano Lungo",
    titleIt: "Hippo Pool a Mikumi con Capitano Lungo",
    locationEn: "Mikumi National Park",
    locationIt: "Parco Nazionale di Mikumi",
    descriptionEn: "Personal welcome from your host Capitano Lungo during a thrilling fly-in safari to the famous Hippo Pool in Mikumi.",
    descriptionIt: "Il benvenuto personale della guida Capitano Lungo durante il safari in volo verso il celebre Hippo Pool di Mikumi.",
    videoSrc: "/videos/capitano-mikumi.mp4",
    posterSrc: "/images/card-flyin.webp",
  },
];

const VideoExperience = () => {
  const { lang, t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeVideo = videos[activeIdx];

  // On mobile the tab row scrolls horizontally: bring the tapped tab to the start
  const scrollTabIntoView = (idx: number) => {
    const container = tabsRef.current;
    const button = tabRefs.current[idx];
    if (!container || !button || container.scrollWidth <= container.clientWidth) return;
    const offset = button.getBoundingClientRect().left - container.getBoundingClientRect().left;
    container.scrollTo({ left: container.scrollLeft + offset, behavior: "smooth" });
  };

  const handleSelectVideo = (idx: number) => {
    setActiveIdx(idx);
    setIsPlaying(false);
    scrollTabIntoView(idx);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleWhatsAppInquiry = () => {
    const title = lang === "en" ? activeVideo.titleEn : activeVideo.titleIt;
    const msg = t(
      `Hello Capitano Lungo! I watched the video for "${title}" on your website and would like to check prices and availability.`,
      `Ciao Capitano Lungo! Ho visto il video di "${title}" sul vostro sito e vorrei conoscere disponibilità e prezzi.`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-[#1C2826] text-white relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-4">
          <div className="inline-flex items-center bg-[#1C2826] border border-[#D4AF37]/40 rounded-xl px-5 py-2.5 shadow-lg">
            <span className="text-xs font-extrabold text-[#D4AF37] uppercase tracking-wider">
              {t("Real Footage from the Field", "Filmati Reali dal Campo")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {lang === "en" ? (
              <>Watch Real Moments <span className="text-[#D4AF37]">with Capitano Lungo</span></>
            ) : (
              <>Vivi Momenti Reali <span className="text-[#D4AF37]">con Capitano Lungo</span></>
            )}
          </h2>
        </div>

        {/* Video selector tabs: horizontal scroll on mobile, centered wrap on tablet/desktop */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label={t("Choose a video", "Scegli un video")}
          className="-mx-4 px-4 mb-8 flex gap-2 overflow-x-auto snap-x snap-mandatory scroll-px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:flex-wrap md:justify-center md:overflow-visible"
        >
          {videos.map((vid, idx) => {
            const isCurrent = idx === activeIdx;
            return (
              <button
                key={vid.id}
                ref={(el) => { tabRefs.current[idx] = el; }}
                role="tab"
                aria-selected={isCurrent}
                onClick={() => handleSelectVideo(idx)}
                className={`snap-start flex-shrink-0 whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-colors duration-200 ${
                  isCurrent
                    ? "bg-[#D4AF37] text-[#1C2826] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {lang === "en" ? vid.tabEn : vid.tabIt}
              </button>
            );
          })}
        </div>

        {/* Video Showcase Card */}
        <div className="bg-[#141E1C] rounded-3xl overflow-hidden border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Video Player Column */}
          <div className="lg:col-span-7 relative bg-black flex items-center justify-center aspect-[9/16] max-h-[560px] sm:aspect-video lg:aspect-auto lg:h-[520px] overflow-hidden">
            <video
              ref={videoRef}
              key={activeVideo.videoSrc}
              src={activeVideo.videoSrc}
              poster={activeVideo.posterSrc}
              playsInline
              muted={isMuted}
              loop
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-contain"
            />

            {/* Custom overlay controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-4 sm:p-6 pointer-events-none">
              <div className="flex justify-between items-center pointer-events-auto">
                <span className="bg-[#1C2826]/80 backdrop-blur-sm border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  {lang === "en" ? activeVideo.locationEn : activeVideo.locationIt}
                </span>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-sm transition"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>

              {/* Play/Pause Large Center / Bottom Trigger */}
              <div className="pointer-events-auto flex items-center">
                <button
                  onClick={togglePlay}
                  className="bg-[#D4AF37] hover:bg-[#c49f2f] text-[#1C2826] p-4 rounded-full shadow-2xl transition transform hover:scale-110 active:scale-95 flex items-center justify-center"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-0.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Video Information & Direct WhatsApp CTA Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/images/logo.webp"
                  alt="Zanlungo Tour and Safaris Logo"
                  className="h-10 w-10 object-contain rounded-full shadow-md"
                />
                <div>
                  <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    {t("Zanlungo Tour and Safaris", "Zanlungo Tour and Safaris")}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    {t("Capitano Lungo • Zanzibar Guide", "Capitano Lungo • Guida di Zanzibar")}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                {lang === "en" ? activeVideo.titleEn : activeVideo.titleIt}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed font-light">
                {lang === "en" ? activeVideo.descriptionEn : activeVideo.descriptionIt}
              </p>

              {/* Real highlights bullet list */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                  {t("Included in this Experience:", "Cosa è Incluso in Questa Esperienza:")}
                </p>
                <ul className="text-xs text-gray-300 space-y-1.5 font-light">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{t("Private air-conditioned hotel pickup & dropoff", "Pickup e rientro privato con aria condizionata")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{t("Personal guide Capitano Lungo (English / Italiano)", "Guida personale Capitano Lungo (Italiano / Inglese)")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{t("All park entrance fees & boat permits included", "Tutti i permessi barca o ingressi parchi inclusi")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-xs transition shadow-lg active:scale-95"
              >
                <FaWhatsapp size={18} />
                <span>{t("Book via WhatsApp", "Prenota su WhatsApp")}</span>
              </button>
              <p className="text-center text-[11px] text-gray-400">
                {t("Instant reply within minutes • Direct from Zanzibar", "Risposta immediata in pochi minuti • Diretto da Zanzibar")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExperience;
