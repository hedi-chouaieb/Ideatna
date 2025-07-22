import React from 'react';

export interface ArtisanEndingProps {
  endNote: string;
}

const ArtisanEnding: React.FC<ArtisanEndingProps> = ({ endNote }) => (
  <div className="text-center py-16 border-t border-stone-200">
    <div className="max-w-2xl mx-auto">
      <p className="text-lg text-stone-700 leading-relaxed mb-8 italic">
        {endNote}
      </p>
      <div className="text-2xl text-stone-600 mb-4">
        ✋
      </div>
      <p className="text-stone-500">— Selma</p>
      <p className="text-xs text-stone-400 mt-4">
        (This page was written on a Tuesday when the clay was being particularly stubborn)
      </p>
    </div>
  </div>
);

export default ArtisanEnding;
