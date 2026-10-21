import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Item {
  id: number | string;
  img: string;
  title: string;
  url: string;
}

interface ImageCardProps {
  arr: Item[];
}

const ImageCard: React.FC<ImageCardProps> = ({ arr }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {arr.map((item) => (
        <Link
          key={item.id}
          to={item.url}
          className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300"
        >
          {/* Card Image */}
          <div className="relative h-52 w-full overflow-hidden bg-gray-100">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#1C2826] p-2 rounded-full shadow-md group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-200">
              <ArrowUpRight size={16} />
            </span>
          </div>

          {/* Title & Action */}
          <div className="p-5 flex-1 flex flex-col justify-between">
            <h3 className="text-base font-bold text-[#1C2826] group-hover:text-[#2A624C] transition-colors line-clamp-2 leading-snug">
              {item.title}
            </h3>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37] mt-3 uppercase tracking-wider">
              View Details & Book
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageCard;
