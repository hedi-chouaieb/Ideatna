import { ArtisansDetail } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

export interface ArtisanBannerProps {
  artisan: ArtisansDetail;
}

const ArtisanBanner: React.FC<ArtisanBannerProps> = ({ artisan }) => (
  <div className="relative h-screen overflow-hidden">
    <Image
      src={artisan.bannerImage}
      alt="Selma's workshop"
      fill
      className="object-cover scale-110"
      style={{ filter: 'sepia(20%) contrast(1.1)' }}
      priority
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="text-center max-w-3xl">
        <blockquote className="text-white text-2xl md:text-4xl font-light italic leading-relaxed mb-4 transform -rotate-1">
          &quot;{artisan.quote}&quot;
        </blockquote>
        <div className="text-amber-200 text-sm transform rotate-1 mt-8">
          {artisan.currentMood}
        </div>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce opacity-60">
      <div className="text-xs mb-2">Enter her world</div>
      <div className="w-px h-8 bg-white mx-auto"></div>
    </div>
  </div>
);

export default ArtisanBanner;
