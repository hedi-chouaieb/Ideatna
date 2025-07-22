import { fetchArtisansDetail } from '@/lib/artisansService';
import { ArtisansDetail } from '@/lib/types';
import { useEffect, useState } from 'react';

export function useArtisansDetail(slug: string) {
  const [artisan, setArtisan] = useState<ArtisansDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    fetchArtisansDetail(slug)
      .then((data) => {
        if (isMounted) setArtisan(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message || 'Failed to fetch artisan details');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { artisan, loading, error };
}
