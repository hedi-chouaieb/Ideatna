"use client";

import ArtisanBanner from '@/components/artisans/ArtisanBanner';
import ArtisanConnection from '@/components/artisans/ArtisanConnection';
import ArtisanCurrentReality from '@/components/artisans/ArtisanCurrentReality';
import ArtisanEnding from '@/components/artisans/ArtisanEnding';
import ArtisanIntro from '@/components/artisans/ArtisanIntro';
import ArtisanParticles from '@/components/artisans/ArtisanParticles';
import ArtisanProductCollection from '@/components/artisans/ArtisanProductCollection';
import ArtisanStoryFragments from '@/components/artisans/ArtisanStoryFragments';
import ArtisanStudioMoments from '@/components/artisans/ArtisanStudioMoments';
import ArtisanTestimonials from '@/components/artisans/ArtisanTestimonials';
import ArtisanTimeline from '@/components/artisans/ArtisanTimeline';

import { useArtisansDetail } from '@/hooks/useArtisansDetail';
import { notFound, useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';


const ArtisanProfile = () => {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const { artisan, loading, error } = useArtisansDetail(slug ?? '');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredProduct, setHoveredProductState] = useState<string | null>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Memoize image navigation handlers for performance and to avoid unnecessary re-renders
  const nextImage = useCallback(() => {
    if (artisan) {
      setCurrentImageIndex((prev) => (prev + 1) % artisan.studioMoments.length);
    }
  }, [artisan]);

  const prevImage = useCallback(() => {
    if (artisan) {
      setCurrentImageIndex((prev) => (prev - 1 + artisan.studioMoments.length) % artisan.studioMoments.length);
    }
  }, [artisan]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!artisan) return;
    const timer = setInterval(nextImage, 7000);
    return () => clearInterval(timer);
  }, [nextImage, artisan]);

  // Wrap setHoveredProduct to ensure correct type
  const setHoveredProduct = (id: string | null) => setHoveredProductState(id);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-stone-500">Loading artisan profile...</div>;
  }
  if (error || !artisan) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100 relative overflow-hidden">
      <ArtisanBanner artisan={artisan} />
      <ArtisanParticles scrollY={scrollY} />
      <div className="max-w-4xl mx-auto px-6 py-16 relative">
        <ArtisanIntro artisan={artisan} />
        <ArtisanStoryFragments fragments={artisan.fragments} audioPlaying={audioPlaying} setAudioPlaying={setAudioPlaying} />
        <ArtisanStudioMoments
          studioMoments={artisan.studioMoments}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          nextImage={nextImage}
          prevImage={prevImage}
        />
        <ArtisanProductCollection products={artisan.products} hoveredProduct={hoveredProduct} setHoveredProduct={setHoveredProduct} />
        <ArtisanTestimonials realTalk={artisan.realTalk} />
        <ArtisanTimeline messyTimeline={artisan.messyTimeline} />
        <ArtisanCurrentReality currentStruggles={artisan.currentStruggles} />
        <ArtisanConnection />
        <ArtisanEnding endNote={artisan.endNote} />
      </div>
    </div>
  );
};

export default ArtisanProfile;
