import React from 'react';

const CartBadges: React.FC = () => (
  <div className="flex items-center justify-center gap-4 mt-3 text-xs text-amber-600">
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      Fair Trade
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
      Secure Payment
    </span>
    <span className="flex items-center gap-1">
      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
      Direct to Artisan
    </span>
  </div>
);

export default CartBadges;
