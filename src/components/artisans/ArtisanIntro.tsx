import { ArtisansDetail } from '@/lib/types';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export interface ArtisanIntroProps {
  artisan: ArtisansDetail;
}

const ArtisanIntro: React.FC<ArtisanIntroProps> = ({ artisan }) => (
  <div className="grid md:grid-cols-3 gap-12 mb-10">
    <div className="md:col-span-1">
      <div className="relative">
        <Image
          src={artisan.portrait}
          alt={artisan.name}
          width={600}
          height={800}
          className="w-full rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
          style={{ filter: 'contrast(1.1) saturate(1.2)' }}
          priority
        />
        <div className="absolute -bottom-4 -right-4 bg-amber-100 rounded-full p-3 shadow-lg transform rotate-12">
          <span className="text-xs text-amber-800">Clay-stained fingers</span>
        </div>
      </div>
    </div>
    <div className="md:col-span-2 space-y-6">
      <div>
        <h1 className="text-5xl font-light text-stone-800 mb-2 relative">
          {artisan.name}
          <span className="absolute -top-2 -right-8 text-xs text-stone-500 transform rotate-12">
            (call me Selma)
          </span>
        </h1>
        <div className="flex items-center gap-2 text-stone-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{artisan.region}</span>
          <span className="text-xs text-stone-400 ml-4">Age: who&apos;s counting?</span>
        </div>
      </div>
      <div className="bg-stone-50 rounded-2xl p-6 transform rotate-1">
        <p className="text-lg text-stone-700 italic leading-relaxed">
          {artisan.storyIntro}
        </p>
      </div>
    </div>
  </div>
);

export default ArtisanIntro;
