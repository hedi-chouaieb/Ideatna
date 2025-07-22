import React from 'react';

export interface ArtisanParticlesProps {
  scrollY: number;
}

const ArtisanParticles: React.FC<ArtisanParticlesProps> = ({ scrollY }) => (
  <div className="fixed inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-20 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          transform: `translateY(${scrollY * 0.1 * (i % 3)}px)`
        }}
      />
    ))}
  </div>
);

export default ArtisanParticles;
