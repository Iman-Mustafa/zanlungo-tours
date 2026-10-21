import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Item {
  id: number | string;
  img: string;
  categoryEn?: string;
  categoryIt?: string;
  durationEn?: string;
  durationIt?: string;
  titleEn?: string;
  titleIt?: string;
  descEn?: string;
  descIt?: string;
  title?: string;
  url: string;
}

interface ImageCardProps {
  arr: Item[];
}

const ImageCard: React.FC<ImageCardProps> = ({ arr }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {arr.map((item) => {
        const title = lang === "en" ? item.titleEn || item.title : item.titleIt || item.title;
        const category = lang === "en" ? item.categoryEn : item.categoryIt;
        const duration = lang === "en" ? item.durationEn : item.durationIt;
        const desc = lang === "en" ? item.descEn : item.descIt;

        return (
          <Link
            key={item.id}
            to={item.url}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              {/* Card Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Duration Floating Badge */}
                {duration && (
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {duration}
                  </span>
                )}

                {/* Category Floating Pill */}
                {category && (
                  <div className="absolute bottom-3 left-3 bg-[#1C2826]/85 backdrop-blur-md text-[#D4AF37] px-2.5 py-1 rounded-lg border border-white/10 text-[11px] font-bold uppercase tracking-wider">
                    {category}
                  </div>
                )}

                <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#1C2826] p-2 rounded-full shadow-md group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-200">
                  <ArrowUpRight size={15} />
                </span>
              </div>

              {/* Title & Description */}
              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-[#1C2826] group-hover:text-[#2A624C] transition-colors leading-snug line-clamp-2">
                  {title}
                </h3>
                {desc && (
                  <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-2">
                    {desc}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="px-5 pb-5 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:text-[#1C2826] uppercase tracking-wider transition-colors">
                {t("View Details & Book", "Dettagli e Prenotazione")} →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ImageCard;
