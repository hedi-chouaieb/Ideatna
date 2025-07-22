import { fetchStories } from '@/lib/storiesService';
import { Story } from '@/lib/types';
import Image from "next/image";
import { useEffect, useState } from 'react';

const StoriesFeed = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetchStories().then(setStories);
  }, []);
  const safe = <T,>(val: T | undefined, fallback: T) => val === undefined ? fallback : val;

  return (
    <section className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Stories from the Workshop</h2>
          <p className="text-stone-600 text-lg">Discover the traditions, techniques, and people behind every piece</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group">
              <Image src={safe(story.image, '')} alt={story.title} width={400} height={224} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{story.title}</h3>
                <p className="text-stone-600 text-base mb-4">{story.excerpt}</p>
                <span className="text-amber-800 font-medium">Read More →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesFeed;
