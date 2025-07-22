import { ArtisansDetailTimelineEvent } from '@/lib/types';
import React from 'react';

export interface ArtisanTimelineProps {
  messyTimeline: ArtisansDetailTimelineEvent[];
}

const ArtisanTimeline: React.FC<ArtisanTimelineProps> = ({ messyTimeline }) => (
  <div className="mb-10">
    <h2 className="text-3xl font-light text-stone-800 mb-8 text-center">
      The messy journey
    </h2>
    <div className="space-y-2">
      {messyTimeline.map((event, index) => (
        <div key={index} className={`flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
          <div className="bg-amber-100 rounded-full px-4 py-2 text-amber-800 font-medium min-w-fit">
            {event.year}
          </div>
          <p className="text-stone-700 italic pt-1">{event.memory}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ArtisanTimeline;
