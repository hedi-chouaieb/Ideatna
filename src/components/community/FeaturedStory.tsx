"use client";
import { useFeaturedStory } from '@/hooks/useFeaturedStory';
import { Play } from 'lucide-react';
import Image from 'next/image';
import FeaturedStoryCollection from '../products/FeaturedStoryCollection';



const FeaturedStory = () => {
  const { featuredStory, loading, error } = useFeaturedStory();

  if (loading) {
    return (
      <section className="bg-stone-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-lg text-stone-300">Loading featured story...</span>
        </div>
      </section>
    );
  }
  if (error || !featuredStory) {
    return (
      <section className="bg-stone-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-lg text-red-400">{error || 'No featured story found.'}</span>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-stone-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">{`Meet ${featuredStory.name}, ${featuredStory.title}`}</h2>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              {featuredStory.description}
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <button className="flex items-center space-x-2 bg-amber-800 hover:bg-amber-900 px-6 py-3 rounded-md transition-colors">
                <Play className="w-5 h-5" />
                <span>{featuredStory.watchLabel}</span>
              </button>
              <button className="border border-white/30 hover:border-white px-6 py-3 rounded-md transition-colors">
                {featuredStory.visitLabel}
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={featuredStory.imageUrl}
              alt={featuredStory.imageAlt}
              width={800}
              height={600}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
      <FeaturedStoryCollection products={featuredStory.products} />
    </section>
  );
};

export default FeaturedStory;
