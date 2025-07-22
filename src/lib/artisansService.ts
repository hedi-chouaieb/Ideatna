
import axios from 'axios';
import { fakeArtisanCards } from './fakeData/fakeArtisans';
import { fakeCulturalTagColor } from './fakeData/fakeCulturalTagColor';
import { fakeFeaturedArtisans } from './fakeData/fakeFeaturedArtisans';
import { Artisan, ArtisanCard, ArtisansDetail, CulturalTagColor, FilterOptions } from './types';


const isFake = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_FAKE_DATA === 'true';
const API_BASE_URL = process.env.NEXT_PUBLIC_BACK_URL || '';

export const fetchCulturalTagColor = async (): Promise<CulturalTagColor> => {
  if (isFake) {
    return fakeCulturalTagColor;
  }
  const { data } = await axios.get<CulturalTagColor>(`${API_BASE_URL}/api/artisans/cultural-tag-color`);
  return data;
};

export const fetchFeaturedArtisans = async (): Promise<Artisan[]> => {
  if (isFake) {
    return fakeFeaturedArtisans;
  }
  const { data } = await axios.get<Artisan[]>(`${API_BASE_URL}/api/artisans/featured`);
  return data;
};

export const fetchArtisansDetail = async (slug: string): Promise<ArtisansDetail | null> => {
  if (isFake) {
    const { fakeArtisansDetails } = await import('./fakeData/fakeArtisansDetails');
    const numSlug = typeof slug === 'string' ? slug : String(slug);
    return (fakeArtisansDetails as Record<string, ArtisansDetail>)[numSlug] || null;
  }
  const { data } = await axios.get<ArtisansDetail>(`${API_BASE_URL}/api/artisans/${slug}`);
  return data;
};

export const fetchArtisanCard = async (): Promise<ArtisanCard[]> => {
  if (isFake) {
    return fakeArtisanCards;
  }
  const res = await fetch(`${API_BASE_URL}/api/artisans/cards`);
  if (!res.ok) throw new Error('Failed to fetch artisan cards');
  return await res.json();
};

export const fetchFilterOptions = async (): Promise<FilterOptions> => {
  if (isFake) {
    const { fakeFilterOptions } = await import('./fakeData/fakeFilterOptions');
    return fakeFilterOptions;
  }
  const { data } = await axios.get<FilterOptions>(`${API_BASE_URL}/api/artisans/filter-options`);
  return data;
};
