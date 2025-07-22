import { ArtisanCard as ArtisanCardType } from '@/lib/types';
import { Award, Heart, MapPin, Star } from 'lucide-react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

interface ArtisanCardProps {
  artisan: ArtisanCardType;
}

const ArtisanCard: FC<ArtisanCardProps> = ({ artisan }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  // Helper to slugify the artisan's full name
  const getSlug = (name: string) =>
    name.toLowerCase().replace(/\s+/g, '-');

  const handleMeetClick = () => {
    router.push(`/artisans/${getSlug(artisan.name)}`);
  };

  return (
    <div
      className="group relative rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleMeetClick}
      style={{
        backgroundImage: `url('${encodeURI(artisan.workshop)}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      tabIndex={0}
      role="button"
      aria-label={`View profile of ${artisan.name}`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleMeetClick();
        }
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-500 group-hover:from-black/70"></div>
      <div className="relative h-18 overflow-visible">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute top-4 left-4 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform duration-500 group-hover:scale-110 z-10">
          <Image src={artisan.avatar} alt={artisan.name} width={400} height={400} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="text-2xl">{artisan.flag}</span>
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{artisan.rating}</span>
          </div>
        </div>
      </div>
      <div className="relative p-6 pt-8 ">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{artisan.name}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-200 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{artisan.location}</span>
              </div>
            </div>
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-gray-300 hover:text-red-400" />
            </button>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-white/90 backdrop-blur-sm text-amber-800 px-3 py-1 rounded-full text-sm font-medium border border-white/20">
              <Award className="w-3 h-3 inline mr-1" />
              {artisan.specialty}
            </div>
          </div>
        </div>
        <div className="mb-4 relative">
          <div className="absolute -left-2 -top-1 text-4xl text-amber-300 font-serif">&quot;</div>
          <p className="text-gray-100 italic pl-4 text-sm leading-relaxed">
            {artisan.quote}
          </p>
          <div className="absolute -right-1 -bottom-2 text-4xl text-amber-300 font-serif rotate-180">&quot;</div>
        </div>
        <div className="mb-4">
          <div className="flex items-center gap-2">
            {artisan.products.map((product: string, idx: number) => (
              <div key={idx} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white shadow-sm">
                <Image src={product} alt="Product" width={400} height={400} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="text-xs text-gray-300 ml-2">Recent works</div>
          </div>
        </div>
        <div className={`transition-all duration-500 ${isHovered ? 'opacity-100 max-h-42 mb-4' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
            <div className="mb-4 text-xs text-gray-300 space-y-1">
              <div>{artisan.heritage} • {artisan.yearsActive} years active</div>
              <div>{artisan.totalOrders} happy customers</div>
            </div>
            <div className="text-xs font-medium text-amber-200 mb-2">Works with:</div>
            <div className="flex flex-wrap gap-1">
              {artisan.materials.map((material: string) => (
                <span key={material} className="bg-white/30 backdrop-blur-sm text-gray-100 px-2 py-1 rounded-full text-xs border border-white/40">
                  {material.replace('-', ' ')}
                </span>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {artisan.culturalTags.map((tag: string) => (
                <span key={tag} className="bg-white/20 backdrop-blur-sm text-gray-200 px-2 py-1 rounded-full text-xs border border-white/30">
                  {tag.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          onClick={e => { e.stopPropagation(); handleMeetClick(); }}
          aria-label={`Meet ${artisan.name}`}
        >
          Meet {artisan.name.split(' ')[0]}
        </button>
      </div>
    </div>
  );
};

export default ArtisanCard;
