import React from 'react';

interface CartOrderSummaryProps {
  totalItems: number;
  totalPrice: number;
  onCheckout: () => void;
}

const CartOrderSummary: React.FC<CartOrderSummaryProps> = ({ totalItems, totalPrice, onCheckout }) => (
  <div className="space-y-2 mb-4">
    <div className="flex justify-between text-amber-800 text-sm">
      <span>Subtotal ({totalItems} items)</span>
      <span>${totalPrice}</span>
    </div>
    <div className="flex justify-between text-amber-700 text-xs">
      <span>Shipping</span>
      <span>Calculated at checkout</span>
    </div>
    <div className="border-t border-amber-200 pt-2">
      <div className="flex justify-between text-base font-serif text-amber-900">
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>
    </div>
    <button
      onClick={onCheckout}
      className="w-full bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-serif text-base py-3 px-6 rounded-lg transition-all duration-200 shadow-lg"
    >
      Continue to Checkout
    </button>
  </div>
);

export default CartOrderSummary;
