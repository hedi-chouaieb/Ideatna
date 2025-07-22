import { fetchFeaturedProducts } from '@/lib/productsService';
import { FeaturedProduct } from '@/lib/types';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<FeaturedProduct[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    fetchFeaturedProducts().then(setProducts);
  }, []);

  return (
    <section className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">New & Featured</h2>
          <p className="text-stone-600 text-lg">Each piece carries the soul of its artisan</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <p className="text-white text-center px-4 text-sm leading-relaxed">{product.story}</p>
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-stone-600 hover:text-red-500" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{product.name}</h3>
                <p className="text-stone-600 text-sm mb-3">Made by {product.artisan} in {product.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-800">${product.price}</span>
                  <button className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition-colors duration-200 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
