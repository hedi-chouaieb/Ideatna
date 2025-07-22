import { fetchFeaturedStory } from '@/lib/storiesService';
import { FeaturedStory } from '@/lib/types';
import { useEffect, useState } from 'react';

export const useFeaturedStory = () => {
  const [featuredStory, setFeaturedStory] = useState<FeaturedStory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchFeaturedStory()
      .then((story) => {
        if (isMounted) {
          setFeaturedStory(story);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Failed to load featured story');
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return { featuredStory, loading, error };
};
