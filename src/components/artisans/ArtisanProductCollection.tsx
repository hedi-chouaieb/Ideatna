import { ArtisansDetailProduct } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

export interface ArtisanProductCollectionProps {
  products: ArtisansDetailProduct[];
  hoveredProduct: string | null;
  setHoveredProduct: (id: string | null) => void;
}

const ArtisanProductCollection: React.FC<ArtisanProductCollectionProps> = ({ products, setHoveredProduct }) => (
  <div className="mb-10">
    <h2 className="text-3xl font-light text-stone-800 mb-4 text-center">
      What&apos;s ready to leave home
    </h2>
    <p className="text-center text-stone-600 mb-12 italic">
      (Every piece has a story. Some are messier than others.)
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`group cursor-pointer transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-500`}
          onMouseEnter={() => setHoveredProduct(product.id.toString())}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-amber-100 rounded-full px-3 py-1 text-xs text-amber-800">
                {product.availability}
              </div>
            </div>
            <div className="p-6 space-y-1">
              <div>
                <h3 className="text-xl font-medium text-stone-800">{product.name}</h3>
                <p className="text-amber-600 font-bold">{product.price}</p>
                <p className="text-stone-500 text-sm">{product.status}</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-4">
                <p className="text-stone-700 italic text-sm leading-relaxed">
                  &quot;{product.confession}&quot;
                </p>
              </div>
              <button className="w-full bg-stone-800 text-white py-3 rounded-full hover:bg-stone-700 transition-colors">
                This one speaks to me
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ArtisanProductCollection;
