"use client";

import ArtisanEmptyState from '@/components/artisans/ArtisanEmptyState';
import ArtisanFiltersSidebar from '@/components/artisans/ArtisanFiltersSidebar';
import ArtisanGrid from '@/components/artisans/ArtisanGrid';
import ArtisanResultsCount from '@/components/artisans/ArtisanResultsCount';
import ProductsHeader from '@/components/products/ProductsHeader';
import { useArtisanDiscovery } from '@/hooks/useArtisanDiscovery';

const ArtisanDiscoveryPage = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedFilters,
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
    filterOptions,
    artisanCards
  } = useArtisanDiscovery();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <ProductsHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        getActiveFiltersCount={getActiveFilterCount}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-80 flex-shrink-0`}>
            <ArtisanFiltersSidebar
              selectedFilters={selectedFilters}
              clearAllFilters={clearAllFilters}
              getActiveFilterCount={getActiveFilterCount}
              toggleFilter={toggleFilter}
              filterOptions={filterOptions}
              show={showFilters}
              onClose={() => setShowFilters(false)}
              onApply={() => setShowFilters(false)}
            />
          </div>
          {/* Main Content */}
          <div className="flex-1">
            <ArtisanResultsCount
              filteredCount={filteredArtisans.length}
              totalCount={artisanCards.length}
            />
            <ArtisanGrid artisans={filteredArtisans} viewMode={viewMode} />
            {filteredArtisans.length === 0 && (
              <ArtisanEmptyState clearAllFilters={clearAllFilters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDiscoveryPage;
