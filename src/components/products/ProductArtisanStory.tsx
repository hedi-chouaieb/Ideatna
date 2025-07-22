import { MapPin, Play, Volume2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductArtisanStoryProps {
  artisan: {
    name: string;
    location: string;
    voiceLabel: string;
    voiceImage: string;
    story: {
      short: string;
      full: string[];
      quote: string;
      bio: string;
    };
  };
}

const ProductArtisanStory = ({ artisan }: ProductArtisanStoryProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src={artisan.voiceImage}
              alt="Selma working with clay"
              width={800}
              height={800}
              className="w-full rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-100 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-amber-800 text-white p-3 rounded-full hover:bg-amber-700 transition-colors"
                >
                  {isPlaying ? <Volume2 className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <span className="text-amber-800 text-sm font-medium">
                  {artisan.voiceLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-light text-gray-800 mb-4">{artisan.story.bio}</h2>
              <div className="flex items-center space-x-2 text-amber-700 mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{artisan.location}</span>
              </div>
            </div>

            <blockquote className="text-xl leading-relaxed text-gray-700 italic border-l-4 border-amber-200 pl-6">
              {artisan.story.quote}
            </blockquote>

            <div className="bg-amber-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                {artisan.story.short}
              </p>
              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="text-amber-800 font-medium mt-4 hover:text-amber-600 transition-colors"
              >
                {showFullStory ? 'Read less' : `Read ${artisan.name}'s full story →`}
              </button>
            </div>

            {showFullStory && (
              <div className="bg-gray-50 p-6 rounded-xl space-y-4 animate-fade-in">
                {artisan.story.full.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductArtisanStory;
