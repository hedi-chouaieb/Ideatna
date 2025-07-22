"use client";

import ProductCard from '@/components/products/ProductCard';
import ProductListItem from '@/components/products/ProductListItem';
import ProductsActiveFilters from '@/components/products/ProductsActiveFilters';
import ProductsEmptyState from '@/components/products/ProductsEmptyState';
import ProductsFeaturedArtisan from '@/components/products/ProductsFeaturedArtisan';
import ProductsFiltersSidebar from '@/components/products/ProductsFiltersSidebar';
import ProductsHeader from '@/components/products/ProductsHeader';
import ProductsResultsHeader from '@/components/products/ProductsResultsHeader';
import { useProductDiscovery } from '@/hooks/useProductDiscovery';

const ProductsPage = () => {
  const {
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
    sortedProducts,
    activeFilters,
    categories,
    regions,
    materials,
    impactTags,
    productCards
  } = useProductDiscovery();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <ProductsHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        getActiveFiltersCount={getActiveFiltersCount}
      />

      {/* Filters Sidebar as Popup/Overlay */}
      <ProductsFiltersSidebar
        show={showFilters}
        categories={categories.map(cat => cat.name)}
        regions={regions}
        materials={materials}
        impactTags={impactTags}
        selectedFilters={selectedFilters}
        toggleFilter={toggleFilter}
        clearAllFilters={clearAllFilters}
        setPriceRange={(range) => setSelectedFilters(prev => ({ ...prev, priceRange: range }))}
        getActiveFiltersCount={getActiveFiltersCount}
        onClose={() => setShowFilters(false)}
        onApply={() => setShowFilters(false)}
      />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main content area - no longer needs flex with sidebar */}
        <div className="w-full">
          <ProductsResultsHeader
            productsCount={sortedProducts.length}
            totalProducts={productCards.length}
          />
          {getActiveFiltersCount() > 0 && (
            <ProductsActiveFilters
              activeFilters={activeFilters}
              onRemove={(filter) => {
                if (selectedFilters.categories.includes(filter)) toggleFilter('categories', filter);
                if (selectedFilters.regions.includes(filter)) toggleFilter('regions', filter);
                if (selectedFilters.materials.includes(filter)) toggleFilter('materials', filter);
                if (selectedFilters.impactTags.includes(filter)) toggleFilter('impactTags', filter);
              }}
            />
          )}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={favorites.has(product.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedProducts.map(product => (
                <ProductListItem
                  key={product.id}
                  product={product}
                  isFavorite={favorites.has(product.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          )}
          {sortedProducts.length === 0 && (
            <ProductsEmptyState
              onClear={() => {
                setSearchTerm('');
                clearAllFilters();
              }}
            />
          )}
          {sortedProducts.length > 6 && <ProductsFeaturedArtisan />}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
