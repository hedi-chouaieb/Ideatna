// Product Category Types
// Region Types
export type Region =
  | "Kairouan"
  | "Sfax"
  | "Sejnane"
  | "Tunis"
  | "Mahdia"
  | "Sidi Bou Said";

export interface RegionOption {
  id: string;
  label: string;
  description?: string;
  image?: string;
  count?: number;
}
export interface Category {
  name: string;
  description: string;
  image: string;
  count: number;
}

// Product Card Types (for product discovery grid/list)
export interface ProductCard {
  id: number;
  title: string;
  artisan: string;
  region: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  materials: string[];
  tags: string[];
  isFavorite?: boolean;
  story?: string;
  stock?: number;
}


export type ImpactTag =
  | "Women-led"
  | "Eco-friendly"
  | "Traditional method"
  | "UNESCO Heritage"
  | "Limited Edition"
  | "Luxury craft";

// Material Types
export type Material =
  | "Wool"
  | "Clay"
  | "Olive wood"
  | "Silk"
  | "Sterling silver"
  | "Palm leaves"
  | "Natural dyes";

export type CulturalTagColor = Record<string, string>;
// Artisan Details (for artisan profile page)
// Artisan Card (for discovery grid/list)
export interface ArtisanCard {
  id: number;
  name: string;
  location: string;
  region: string;
  craft: string;
  materials: string[];
  culturalTags: string[];
  quote: string;
  rating: number;
  totalOrders: number;
  yearsActive: number;
  specialty: string;
  heritage: string;
  accepts: string;
  flag: string;
  avatar: string;
  workshop: string;
  products: string[];
}
export interface ArtisansDetail {
  name: string;
  age: number;
  region: string;
  craft: string;
  quote: string;
  currentMood: string;
  portrait: string;
  bannerImage: string;
  storyIntro: string;
  fragments: ArtisansDetailFragment[];
  studioMoments: ArtisansDetailStudioMoment[];
  products: ArtisansDetailProduct[];
  realTalk: ArtisansDetailTestimonial[];
  messyTimeline: ArtisansDetailTimelineEvent[];
  currentStruggles: string;
  endNote: string;
}

export interface ArtisansDetailFragment {
  type: string;
  text: string;
  audioNote?: string;
}

export interface ArtisansDetailStudioMoment {
  image: string;
  caption?: string;
  sound?: string;
}

export interface ArtisansDetailProduct {
  id: number;
  name: string;
  price: string;
  status: string;
  image: string;
  confession: string;
  availability: string;
}

export interface ArtisansDetailTestimonial {
  text: string;
  buyer: string;
  rating?: string;
  name?: string;
  location?: string;
}

export interface ArtisansDetailTimelineEvent {
  year: string;
  memory: string;
}

export interface Artisan {
  id: number;
  name: string;
  craft: string;
  location: string;
  image: string;
  products: number;
  productsImages: string[];
}

export interface Product {
  id: number;
  name: string;
  artisan: string;
  location: string;
  price: number;
  image: string;
  story: string;
}

export interface Story {
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
}

export interface BestSeller {
  id: number;
  name: string;
  artisan: string;
  price: number;
  image: string;
  rating: number;
}

export interface CraftCategory {
  name: string;
  image: string;
  count: number;
}

export interface FeaturedCategory {
  name: string;
  image: string;
  count: number;
}

export interface FeaturedProduct {
  id: number;
  name: string;
  artisan: string;
  location: string;
  price: number;
  image: string;
  story: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  project: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: string; // Could be React component type, keep as any for now
}

// Product Details (for product detail page)
export interface ProductsDetail {
  name: string;
  price: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  gallery: string[];
  description: string[];
  whyMade: string;
  culturalImpact: ProductsDetailCulturalImpact;
  purchase: ProductsDetailPurchase;
  artisan: ProductsDetailArtisan;
  customerReflections: ProductsDetailCustomerReflection[];
  relatedProducts: ProductsDetailRelatedProduct[];
}

// Featured Story Types
export interface FeaturedStoryProduct {
  id: number;
  name: string;
  artisan: string;
  price: number;
  image: string;
  rating: number;
}

export interface FeaturedStory {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  watchLabel: string;
  visitLabel: string;
  products: FeaturedStoryProduct[];
}

export interface ProductsDetailCulturalImpact {
  title: string;
  text: string;
}

export interface ProductsDetailPurchase {
  note: string;
  shipping: string;
  cta: string;
  explore: string;
}

export interface ProductsDetailArtisan {
  name: string;
  location: string;
  portrait: string;
  story: ProductsDetailArtisanStory;
  voiceLabel: string;
  voiceImage: string;
}

export interface ProductsDetailArtisanStory {
  short: string;
  full: string[];
  quote: string;
  bio: string;
}

export interface ProductsDetailCustomerReflection {
  text: string;
  author: string;
  image: string;
}

export interface ProductsDetailRelatedProduct {
  name: string;
  price: string;
  image: string;
}

// FilterOptions types for artisan discovery filters
export interface FilterOptionItem {
  id: string;
  label: string;
  count: number;
}

export interface FilterOptions {
  region: FilterOptionItem[];
  craft: FilterOptionItem[];
  materials: FilterOptionItem[];
  culturalTags: FilterOptionItem[];
}
