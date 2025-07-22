import { ProductCard } from '@/lib/types';
import { Heart, MapPin, ShoppingCart, Star, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface ProductListItemProps {
  product: ProductCard;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product, isFavorite, onToggleFavorite }) => (
  <div className="flex bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-amber-100 p-4">
    <Image
      src={product.image}
      alt={product.title}
      width={96}
      height={96}
      className="w-24 h-24 object-cover rounded-lg mr-4"
    />
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <User className="w-3 h-3 text-amber-600" />
        <span className="text-sm text-amber-700 font-medium">By {product.artisan}</span>
        <MapPin className="w-3 h-3 text-gray-400 ml-2" />
        <span className="text-sm text-gray-500">{product.region}</span>
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-2 italic">&quot;{product.story}&quot;</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
        <span className="text-xl font-bold text-gray-900">${product.price}</span>
      </div>
    </div>
    <div className="flex flex-col justify-between items-end ml-4">
      <button
        onClick={() => onToggleFavorite(product.id)}
        className={`p-2 rounded-full transition-all duration-200 ${isFavorite
          ? 'bg-red-500 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
          }`}
      >
        <Heart className="w-4 h-4" fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
      <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center gap-2">
        <ShoppingCart className="w-4 h-4" />
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductListItem;
