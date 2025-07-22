import Image from 'next/image';
import React from 'react';

const ProductsFeaturedArtisan: React.FC = () => (
  <div className="mt-12 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200">
    <div className="flex items-center gap-6">
      <Image
        src="/fake/artisans/artisan (10).png"
        alt="Featured Artisan"
        width={80}
        height={80}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Meet Salem, Master Potter</h3>
        <p className="text-gray-700 mb-4">
          For over 30 years, Salem has been creating stunning ceramics in the UNESCO World Heritage village of Sejnane,
          using techniques passed down through generations.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-colors">
          View Salem&apos;s Collection
        </button>
      </div>
    </div>
  </div>
);

export default ProductsFeaturedArtisan;
