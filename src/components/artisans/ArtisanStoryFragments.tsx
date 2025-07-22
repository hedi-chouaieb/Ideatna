import { ArtisansDetailFragment } from '@/lib/types';
import { Play, Volume2 } from 'lucide-react';
import React from 'react';

export interface ArtisanStoryFragmentsProps {
  fragments: ArtisansDetailFragment[];
  audioPlaying: boolean;
  setAudioPlaying: (playing: boolean) => void;
}

const ArtisanStoryFragments: React.FC<ArtisanStoryFragmentsProps> = ({ fragments, audioPlaying, setAudioPlaying }) => (
  <div className="space-y-1 mb-10">
    {fragments.map((fragment, index) => (
      <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
        <div className={`max-w-2xl p-8 bg-white rounded-3xl shadow-lg transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-500`}>
          {fragment.type === 'voice' && (
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => setAudioPlaying(!audioPlaying)}
                className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors"
              >
                {audioPlaying ? <Volume2 className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="text-xs">{fragment.audioNote}</span>
              </button>
            </div>
          )}
          <p className="text-stone-700 leading-relaxed text-lg italic">
            &quot;{fragment.text}&quot;
          </p>
          <div className="w-8 h-px bg-amber-400 mt-4"></div>
        </div>
      </div>
    ))}
  </div>
);

export default ArtisanStoryFragments;
