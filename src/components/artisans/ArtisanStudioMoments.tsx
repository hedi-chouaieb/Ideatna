import { ArtisansDetailStudioMoment } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

export interface ArtisanStudioMomentsProps {
  studioMoments: ArtisansDetailStudioMoment[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  nextImage: () => void;
  prevImage: () => void;
}

const ArtisanStudioMoments: React.FC<ArtisanStudioMomentsProps> = ({ studioMoments, currentImageIndex, setCurrentImageIndex, nextImage, prevImage }) => (
  <div className="mb-10">
    <h2 className="text-3xl font-light text-stone-800 mb-8 text-center">
      Moments from the workshop
    </h2>
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <Image
          src={studioMoments[currentImageIndex]?.image || ''}
          alt="Workshop moment"
          width={800}
          height={384}
          className="w-full h-96 object-cover transition-all duration-1000"
          style={{ filter: 'sepia(10%) contrast(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white text-lg italic mb-2">
            {studioMoments[currentImageIndex]?.caption}
          </p>
          <p className="text-amber-200 text-sm">
            🎵 {studioMoments[currentImageIndex]?.sound}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-3">
        {studioMoments.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-amber-500 scale-125' : 'bg-stone-300 hover:bg-stone-400'}`}
          />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevImage} className="px-4 py-2 bg-stone-200 rounded-full">Prev</button>
        <button onClick={nextImage} className="px-4 py-2 bg-stone-200 rounded-full">Next</button>
      </div>
    </div>
  </div>
);

export default ArtisanStudioMoments;
