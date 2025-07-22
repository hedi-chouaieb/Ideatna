'use client';

import React, { useEffect } from 'react';
import CartBadges from './CartBadges';
import CartHeader from './CartHeader';
import CartImpactNote from './CartImpactNote';
import CartItemList from './CartItemList';
import CartOrderSummary from './CartOrderSummary';

interface CartItem {
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
}

interface ArtisanCartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  items?: CartItem[];
  onUpdateQuantity?: (id: number, quantity: number) => void;
  onRemoveItem?: (id: number) => void;
  onSaveForLater?: (id: number) => void;
  onCheckout?: () => void;
}

const ArtisanCartPopup: React.FC<ArtisanCartPopupProps> = ({
  isOpen,
  onClose,
  items = [],
  onUpdateQuantity,
  onRemoveItem,
  onSaveForLater,
  onCheckout
}) => {

  const cartItems = items;

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const uniqueArtisans = [...new Set(cartItems.map(item => item.artisan))].length;

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      {/* Cart Panel */}
      <div className="relative ml-auto w-full max-w-md bg-gradient-to-b from-amber-25 via-orange-25 to-red-25 shadow-2xl flex flex-col border-l border-amber-200/50">
        {/* Header */}
        <CartHeader totalItems={totalItems} uniqueArtisans={uniqueArtisans} onClose={onClose} />
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <CartItemList
            items={cartItems}
            onUpdateQuantity={onUpdateQuantity || (() => { })}
            onRemoveItem={onRemoveItem || (() => { })}
            onSaveForLater={onSaveForLater || (() => { })}
          />
          <CartImpactNote uniqueArtisans={uniqueArtisans} />
        </div>
        {/* Fixed Order Summary */}
        <div className="bg-white/90 backdrop-blur-sm border-t border-amber-200 p-4 flex-shrink-0">
          <CartOrderSummary totalItems={totalItems} totalPrice={totalPrice} onCheckout={handleCheckout} />
          <CartBadges />
        </div>
      </div>
    </div>
  );
};

export default ArtisanCartPopup;
