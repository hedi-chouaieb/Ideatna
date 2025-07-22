import axios from 'axios';
import { fakeBestSellers } from './fakeData/fakeBestSellers';
import { fakeCategories } from './fakeData/fakeCategories';
import { fakeFeaturedCategories } from './fakeData/fakeFeaturedCategories';
import { fakeFeaturedProducts } from './fakeData/fakeFeaturedProducts';
import { fakeImpactTags } from './fakeData/fakeImpactTags';
import { fakeMaterials } from './fakeData/fakeMaterials';
import { fakeProductCards } from './fakeData/fakeProductCards';
import { fakeProductsDetails } from './fakeData/fakeProductsDetails';
import { fakeRegions } from './fakeData/fakeRegions';
import { Product } from './product';
import { Category, FeaturedCategory, FeaturedProduct, ImpactTag, Material, ProductCard, ProductsDetail, Region } from './types';

const isFake = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_FAKE_DATA === 'true';
const API_BASE_URL = process.env.NEXT_PUBLIC_BACK_URL || '';

export const fetchProductCards = async (): Promise<ProductCard[]> => {
  if (isFake) {
    return fakeProductCards;
  }
  const { data } = await axios.get<ProductCard[]>(`${API_BASE_URL}/api/products/cards`);
  return data;
};

export const fetchRegions = async (): Promise<Region[]> => {
  if (isFake) {
    return fakeRegions as Region[];
  }
  const { data } = await axios.get<Region[]>(`${API_BASE_URL}/api/products/regions`);
  return data;
};

export const fetchImpactTags = async (): Promise<ImpactTag[]> => {
  if (isFake) {
    return fakeImpactTags;
  }
  const { data } = await axios.get<ImpactTag[]>(`${API_BASE_URL}/api/products/impact-tags`);
  return data;
};

export const fetchBestSellers = async (): Promise<Product[]> => {
  if (isFake) {
    return fakeBestSellers.map(item => ({
      id: String(item.id),
      name: item.name,
      images: [item.image],
      price: item.price,
      artisan: item.artisan,
      rating: item.rating,
      category: '',
      description: '',
      specs: {},
      shortDescription: '',
      formattedPrice: `$${item.price}`
    })) as Product[];
  }
  const { data } = await axios.get<Product[]>(`${API_BASE_URL}/api/products/best-sellers`);
  return data;
};

export const fetchProductsDetails = async (id: string | number): Promise<ProductsDetail | null> => {
  if (isFake) {
    const numId = typeof id === 'string' ? Number(id) : id;
    return (fakeProductsDetails as Record<number, ProductsDetail>)[numId] || null;
  }
  try {
    const { data } = await axios.get<ProductsDetail>(`${API_BASE_URL}/api/products/${id}`);
    return data;
  } catch (error) {
    console.error(`Failed to fetch product details for ID ${id}:`, error);

    return null;
  }
};

export const fetchFeaturedCategories = async (): Promise<FeaturedCategory[]> => {
  if (isFake) {
    return fakeFeaturedCategories;
  }
  const { data } = await axios.get<FeaturedCategory[]>(`${API_BASE_URL}/api/products/featured-categories`);
  return data;
};

export const fetchCategories = async (): Promise<Category[]> => {
  if (isFake) {
    return fakeCategories.map((name) => ({
      name,
      description: '',
      image: '',
      count: 0
    }));
  }
  const { data } = await axios.get<Category[]>(`${API_BASE_URL}/api/products/categories`);
  return data;
};

export const fetchFeaturedProducts = async (): Promise<FeaturedProduct[]> => {
  if (isFake) {
    return fakeFeaturedProducts;
  }
  const { data } = await axios.get<FeaturedProduct[]>(`${API_BASE_URL}/api/products/featured`);
  return data;
};

export const fetchMaterials = async (): Promise<Material[]> => {
  if (isFake) {
    return fakeMaterials as Material[];
  }
  const { data } = await axios.get<Material[]>(`${API_BASE_URL}/api/products/materials`);
  return data;
};
