import { Clock, Heart, MapPin, Minus, Plus, X } from 'lucide-react';
import React from 'react';

interface CartItemProps {
  id: number;
  name: string;
  artisan: string;
  location: string;
  story: string;
  price: number;
  quantity: number;
  image: string;
  artisanImage: string;
  shipping: string;
  craft: string;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onSaveForLater: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id, name, artisan, location, story, price, quantity, shipping,
  onUpdateQuantity, onRemoveItem, onSaveForLater
}) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-amber-100/50 hover:shadow-md transition-shadow">
    <div className="flex gap-3">
      {/* Product Image */}
      <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-orange-200 rounded-md flex-shrink-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-gradient-to-br from-amber-300 to-orange-300 rounded"></div>
      </div>
      {/* Item Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-1">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-base text-amber-900 truncate">{name}</h3>
            <div className="flex items-center gap-1 text-amber-700 text-xs">
              <span>{artisan}</span>
              <span className="text-amber-400">•</span>
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          </div>
          <button
            onClick={() => onRemoveItem(id)}
            className="text-amber-400 hover:text-amber-600 transition-colors p-1"
            aria-label="Remove item"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-amber-700 text-xs italic mb-2 line-clamp-2">&quot;{story}&quot;</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
              className="w-6 h-6 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3 text-amber-700" />
            </button>
            <span className="w-6 text-center text-amber-900 text-sm font-medium">{quantity}</span>
            <button
              onClick={() => onUpdateQuantity(id, quantity + 1)}
              className="w-6 h-6 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3 text-amber-700" />
            </button>
          </div>
          <div className="text-right">
            <p className="text-lg font-serif text-amber-900">${price * quantity}</p>
            {quantity > 1 && (
              <p className="text-xs text-amber-600">${price} each</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-amber-600 text-xs">
            <Clock className="w-3 h-3" />
            <span>{shipping}</span>
          </div>
          <button
            onClick={() => onSaveForLater(id)}
            className="flex items-center gap-1 text-amber-600 hover:text-amber-800 text-xs transition-colors"
            aria-label="Save for later"
          >
            <Heart className="w-3 h-3" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CartItem;
