import { Star } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: string | number;
  name: string;
  image: string;
  artisan: string;
  price: number;
  rating: number;
}

interface FeaturedStoryCollectionProps {
  products: Product[];
}

const FeaturedStoryCollection = ({ products }: FeaturedStoryCollectionProps) => (
  <section className="bg-stone-800 text-white pt-0 pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <h3 className="text-2xl font-bold mb-8">Salem&apos;s Collection</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="font-semibold mb-2">{product.name}</h4>
            <p className="text-stone-300 text-sm mb-3">by {product.artisan}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-amber-400">${product.price}</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-amber-400 fill-current" />
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedStoryCollection;
