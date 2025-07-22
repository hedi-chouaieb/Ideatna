import axios from 'axios';
import { fakeFeaturedStory } from './fakeData/fakeFeaturedStory';
import { fakeStories } from './fakeData/fakeStories';
import { FeaturedStory, Story } from './types';

const isFake = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_FAKE_DATA === 'true';
const API_BASE_URL = process.env.NEXT_PUBLIC_BACK_URL || '';

export const fetchStories = async (): Promise<Story[]> => {
  if (isFake) {
    return fakeStories;
  }
  const { data } = await axios.get<Story[]>(`${API_BASE_URL}/api/stories`);
  return data;
};

export const fetchFeaturedStory = async (): Promise<FeaturedStory> => {
  if (isFake) {
    return fakeFeaturedStory;
  }
  const { data } = await axios.get<FeaturedStory>(`${API_BASE_URL}/api/featured-story`);
  return data;
};
