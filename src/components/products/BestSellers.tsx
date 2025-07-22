import { Product } from '@/lib/product';
import { fetchBestSellers } from '@/lib/productsService';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const BestSellers = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchBestSellers().then(setProducts);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Most Loved by Our Community</h2>
            <p className="text-stone-600 text-lg">Customer favorites that capture the essence of Tunisian craftsmanship</p>
          </div>
          <button className="text-amber-800 hover:text-amber-900 font-medium">View All →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={product.images[0] || ''}
                  alt={product.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-stone-600 hover:text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-stone-800 mb-1">{product.name}</h3>
                <p className="text-stone-600 text-sm mb-3">by {product.artisan}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-800">${product.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
