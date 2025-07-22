import { fetchArtisanCard, fetchCulturalTagColor, fetchFilterOptions } from '@/lib/artisansService';
import { ArtisanCard, FilterOptions } from '@/lib/types';
import { useEffect, useMemo, useState } from 'react';

export type FilterCategory = 'region' | 'craft' | 'materials' | 'culturalTags' | 'gender' | 'status';
export type Filters = Record<FilterCategory, string[]>;

export function useArtisanDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    region: [],
    craft: [],
    materials: [],
    culturalTags: [],
    gender: [],
    status: []
  });
  const [sortBy, setSortBy] = useState('recently-added');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [artisanCards, setArtisanCards] = useState<ArtisanCard[]>([]);
  const [culturalTagColor, setCulturalTagColor] = useState<Record<string, string>>({});
  const [filterOptions, setFilterOptions] = useState<FilterOptions | null>(null);

  useEffect(() => {
    Promise.all([
      fetchArtisanCard(),
      fetchCulturalTagColor(),
      fetchFilterOptions()
    ])
      .then(([data, tagColor, filterOpts]) => {
        setArtisanCards(data);
        setCulturalTagColor(tagColor);
        setFilterOptions(filterOpts);
      })
      .catch(() => {
        // Optionally handle error here, e.g., show a toast or log
      });
  });

  const filteredArtisans = useMemo(() => {
    const filtered = artisanCards.filter(artisan => {
      const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedFilters.region.length === 0 || selectedFilters.region.includes(artisan.region);
      const matchesCraft = selectedFilters.craft.length === 0 || selectedFilters.craft.includes(artisan.craft);
      const matchesMaterials = selectedFilters.materials.length === 0 ||
        selectedFilters.materials.some((material: string) => artisan.materials.includes(material));
      const matchesCultural = selectedFilters.culturalTags.length === 0 ||
        selectedFilters.culturalTags.some((tag: string) => artisan.culturalTags.includes(tag));
      return matchesSearch && matchesRegion && matchesCraft && matchesMaterials && matchesCultural;
    });
    switch (sortBy) {
      case 'alphabetical':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'most-loved':
        filtered.sort((a, b) => (b.rating * b.totalOrders) - (a.rating * a.totalOrders));
        break;
      case 'by-region':
        filtered.sort((a, b) => a.location.localeCompare(b.location));
        break;
      default:
        break;
    }
    return filtered;
  }, [artisanCards, searchTerm, selectedFilters, sortBy]);

  const toggleFilter = (category: FilterCategory, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v: string) => v !== value)
        : [...prev[category], value]
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      region: [],
      craft: [],
      materials: [],
      culturalTags: [],
      gender: [],
      status: []
    });
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).flat().length;
  };

  const getCulturalTagColor = (tag: string) => {
    return culturalTagColor[tag] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedFilters,
    setSelectedFilters,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    showFilters,
    setShowFilters,
    filteredArtisans,
    toggleFilter,
    clearAllFilters,
    getActiveFilterCount,
    getCulturalTagColor,
    filterOptions,
    artisanCards
  };
}
