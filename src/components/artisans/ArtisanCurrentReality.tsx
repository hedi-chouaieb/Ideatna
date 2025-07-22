import React from 'react';

export interface ArtisanCurrentRealityProps {
  currentStruggles: string;
}

const ArtisanCurrentReality: React.FC<ArtisanCurrentRealityProps> = ({ currentStruggles }) => (
  <div className="bg-stone-100 rounded-3xl p-8 mb-6 transform ">
    <h3 className="text-xl font-light text-stone-800 mb-4">Right now, honestly:</h3>
    <p className="text-stone-700 leading-relaxed italic">
      {currentStruggles}
    </p>
  </div>
);

export default ArtisanCurrentReality;
