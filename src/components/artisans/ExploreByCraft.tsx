import { fetchFeaturedCategories } from '@/lib/productsService';
import { FeaturedCategory } from '@/lib/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ExploreByCraft = () => {
  const [categories, setCategories] = useState<FeaturedCategory[]>([]);

  useEffect(() => {
    fetchFeaturedCategories().then(setCategories);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Shop by Craft</h2>
          <p className="text-stone-600 text-lg">Explore traditional techniques passed down through generations</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3 aspect-square">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByCraft;
