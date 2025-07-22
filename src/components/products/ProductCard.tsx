import { ProductCard as ProductCardType } from '@/lib/types';
import { Heart, MapPin, ShoppingCart, Star, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  product: ProductCardType;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isFavorite, onToggleFavorite }) => (
  <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100">
    <div className="relative overflow-hidden">
      <Image
        src={product.image}
        alt={product.title}
        width={640}
        height={384}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        priority
      />
      <div className="absolute top-3 right-3 flex gap-2">
        <button
          onClick={() => onToggleFavorite(product.id)}
          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${isFavorite
            ? 'bg-red-500 text-white'
            : 'bg-white/80 text-gray-600 hover:bg-red-50 hover:text-red-500'
            }`}
        >
          <Heart className="w-4 h-4" fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      {product.stock && product.stock <= 3 && (
        <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          Only {product.stock} left
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <User className="w-3 h-3 text-amber-600" />
        <span className="text-sm text-amber-700 font-medium">By {product.artisan}</span>
        <MapPin className="w-3 h-3 text-gray-400 ml-1" />
        <span className="text-sm text-gray-500">{product.region}</span>
      </div>
      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
        {product.title}
      </h3>
      <p className="text-sm text-gray-600 mb-3 italic">
        &quot;{product.story}&quot;
      </p>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
        </div>
        <span className="text-sm text-gray-500">({product.reviews})</span>
      </div>
      <div className="flex flex-wrap gap-1 mb-4">
        {product.tags.slice(0, 2).map((tag: string) => (
          <span key={tag} className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
