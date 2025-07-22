"use client";

import ArtisanSpotlights from '@/components/artisans/ArtisanSpotlights';
import ExploreByCraft from '@/components/artisans/ExploreByCraft';
import EmailSignup from '@/components/community/EmailSignup';
import FeaturedStory from '@/components/community/FeaturedStory';
import ImpactSnapshot from '@/components/community/ImpactSnapshot';
import StoriesFeed from '@/components/community/StoriesFeed';
import BestSellers from '@/components/products/BestSellers';
import FeaturedProducts from '@/components/products/FeaturedProducts';

const ArtisanHomepage = () => {

  return (
    <div className="min-h-screen bg-warm-white">
      <ArtisanSpotlights />
      <FeaturedProducts />
      <ExploreByCraft />
      <FeaturedStory />
      <ImpactSnapshot />
      <BestSellers />
      <StoriesFeed />
      <EmailSignup />
    </div>
  );
};

export default ArtisanHomepage;
