import Image from "next/image";

interface BrandMarqueeProps {
  imagesFolder?: string;
  images?: string[];
  cardClassName?: string;
  imageClassName?: string;
  bgClassName?: string;
}

export default function BrandMarquee({
  imagesFolder = "brands",
  images,
  cardClassName,
  imageClassName,
  bgClassName = "bg-transparent"
}: BrandMarqueeProps) {
  const defaultBrands = [
    "0.webp", "1.webp", "10-National-Geographic-Channel.webp", "10.webp", "11.webp",
    "13.webp", "14.webp", "15.webp", "16 (1).webp", "17.webp", "2.webp", "20-disney.webp",
    "21.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"
  ];

  const brandList = images || defaultBrands;
  const repeatList = brandList.length < 10 
    ? [...brandList, ...brandList, ...brandList, ...brandList] 
    : [...brandList, ...brandList];

  return (
    <div className={`w-full overflow-hidden ${bgClassName} py-6 relative flex items-center`}>
      {/* Left/Right Dark Gradient Masks for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#060810] via-[#060810]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#060810] via-[#060810]/80 to-transparent z-10 pointer-events-none" />
      
      {/* The scrolling container */}
      <div
        className={`flex gap-5 md:gap-8 px-6 items-center w-max ${brandList.length < 10 ? 'animate-marquee-fast' : 'animate-marquee'}`}
      >
        {repeatList.map((brand, i) => (
          <div 
            key={i} 
            className={cardClassName || "flex-shrink-0 w-[110px] h-[55px] md:w-[150px] md:h-[70px] relative bg-white/95 hover:bg-white border border-white/20 rounded-xl p-3 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10 flex items-center justify-center"}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image 
                src={`/${imagesFolder}/${brand}`} 
                alt="Brand Logo" 
                fill
                sizes="(max-width: 640px) 110px, (max-width: 1024px) 150px, 160px"
                className={imageClassName || "object-contain drop-shadow-sm"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
