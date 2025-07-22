import React from 'react';

interface CartImpactNoteProps {
  uniqueArtisans: number;
}

const CartImpactNote: React.FC<CartImpactNoteProps> = ({ uniqueArtisans }) => (
  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200/50">
    <p className="text-green-800 text-sm text-center">
      <span className="font-medium">🌿 Supporting {uniqueArtisans} artisans</span> • Preserving traditional crafts
    </p>
  </div>
);

export default CartImpactNote;
