import { MapPin, ShoppingCart, Star, Users } from 'lucide-react';

import Image from 'next/image';

interface ArtisanHeroProps {
  name: string;
  location: string;
  craft: string;
  quote: string;
  rating: number;
  followers: number;
  totalSales: number;
  image: string;
}

const ArtisanHero = ({ name, location, craft, quote, rating, followers, totalSales, image }: ArtisanHeroProps) => (
  <div className="relative h-96 bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
    <div className="absolute inset-0 bg-black/20"></div>
    <Image
      src={image}
      alt={`Hero image of ${name}`}
      width={1600}
      height={600}
      className="w-full h-full object-cover"
      priority
    />
    <div className="absolute inset-0 flex items-end">
      <div className="container mx-auto px-6 pb-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={image}
              alt={name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <p className="text-amber-700 font-medium">{craft}</p>
            </div>
          </div>
          <blockquote className="text-lg italic text-gray-700 border-l-4 border-amber-500 pl-4">
            &quot;{quote}&quot;
          </blockquote>
          <div className="flex items-center gap-6 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{rating} rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{followers} followers</span>
            </div>
            <div className="flex items-center gap-1">
              <ShoppingCart className="w-4 h-4" />
              <span>{totalSales} sales</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ArtisanHero;
