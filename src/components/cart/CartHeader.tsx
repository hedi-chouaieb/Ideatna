import { X } from 'lucide-react';
import React from 'react';

interface CartHeaderProps {
  totalItems: number;
  uniqueArtisans: number;
  onClose: () => void;
}

const CartHeader: React.FC<CartHeaderProps> = ({ totalItems, uniqueArtisans, onClose }) => (
  <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white p-4 flex-shrink-0">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-lg font-serif">Your Souk</h1>
        <p className="text-amber-100 text-sm opacity-90">{totalItems} treasures from {uniqueArtisans} artisans</p>
      </div>
      <button
        onClick={onClose}
        className="text-amber-100 hover:text-white transition-colors p-1"
        aria-label="Close cart"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default CartHeader;
