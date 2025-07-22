import { fetchCategories, fetchImpactTags, fetchMaterials, fetchProductCards, fetchRegions } from '@/lib/productsService';
import { Category, ProductCard } from '@/lib/types';
import { useEffect, useMemo, useState } from 'react';

export type FilterType = 'categories' | 'regions' | 'materials' | 'impactTags';

export interface SelectedFilters {
  categories: string[];
  regions: string[];
  materials: string[];
  priceRange: [number, number];
  impactTags: string[];
}


export function useProductDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    categories: [],
    regions: [],
    materials: [],
    priceRange: [0, 500],
    impactTags: []
  });
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Categories, ImpactTags, and Materials state
  const [categories, setCategories] = useState<Category[]>([]);
  const [impactTags, setImpactTags] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [productCards, setProductCards] = useState<ProductCard[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
    fetchImpactTags().then(setImpactTags);
    fetchMaterials().then(setMaterials);
    fetchRegions().then(setRegions);
    fetchProductCards().then(setProductCards);
  }, []);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const toggleFilter = (filterType: FilterType, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item: string) => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      categories: [],
      regions: [],
      materials: [],
      priceRange: [0, 500],
      impactTags: []
    });
  };

  const getActiveFiltersCount = () => {
    return selectedFilters.categories.length +
      selectedFilters.regions.length +
      selectedFilters.materials.length +
      selectedFilters.impactTags.length;
  };

  const filteredProducts = useMemo(() => productCards.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.region.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedFilters.categories.length === 0 ||
      selectedFilters.categories.includes(product.category);

    const matchesRegion = selectedFilters.regions.length === 0 ||
      selectedFilters.regions.includes(product.region);

    const matchesMaterial = selectedFilters.materials.length === 0 ||
      product.materials.some((material: string) => selectedFilters.materials.includes(material));

    const matchesPrice = product.price >= selectedFilters.priceRange[0] &&
      product.price <= selectedFilters.priceRange[1];

    const matchesTags = selectedFilters.impactTags.length === 0 ||
      product.tags.some((tag: string) => selectedFilters.impactTags.includes(tag));

    return matchesSearch && matchesCategory && matchesRegion && matchesMaterial && matchesPrice && matchesTags;
  }), [searchTerm, selectedFilters, productCards]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'popular':
          return b.reviews - a.reviews;
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.id - a.id; // newest first
      }
    });
  }, [filteredProducts, sortBy]);

  const activeFilters = [
    ...selectedFilters.categories,
    ...selectedFilters.regions,
    ...selectedFilters.materials,
    ...selectedFilters.impactTags,
  ];

  return {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    showFilters,
    setShowFilters,
    selectedFilters,
    setSelectedFilters,
    favorites,
    toggleFavorite,
    toggleFilter,
    clearAllFilters,
    getActiveFiltersCount,
    filteredProducts,
    sortedProducts,
    activeFilters,
    categories,
    regions,
    materials,
    impactTags,
    productCards
  };
}
