"use client";

import ProductArtisanStory from '@/components/products/ProductArtisanStory';
import ProductClosingQuote from '@/components/products/ProductClosingQuote';
import ProductCustomerReflections from '@/components/products/ProductCustomerReflections';
import ProductDetails from '@/components/products/ProductDetails';
import ProductGallery from '@/components/products/ProductGallery';
import ProductHero from '@/components/products/ProductHero';
import ProductRelated from '@/components/products/ProductRelated';
import { useProductDetails } from '@/hooks/useProductDetails';
import { notFound, useParams } from 'next/navigation';


const ArtisanProductPage = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const { product, loading } = useProductDetails(id);
  if (!loading && !product) {
    notFound();
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50">
        <span className="text-lg text-amber-900">Loading product...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {product && (
        <>
          <ProductHero heroImage={product.heroImage} heroTitle={product.heroTitle} heroSubtitle={product.heroSubtitle} />
          <ProductArtisanStory artisan={product.artisan} />
          <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16">
                <ProductGallery gallery={product.gallery} />
                <ProductDetails
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  whyMade={product.whyMade}
                  culturalImpact={product.culturalImpact}
                  purchase={product.purchase}
                />
              </div>
            </div>
          </section>
          <ProductCustomerReflections reflections={product.customerReflections} />
          <ProductRelated relatedProducts={product.relatedProducts} />
          <ProductClosingQuote portrait={product.artisan.portrait} name={product.artisan.name} />
        </>
      )}
    </div>
  );
};

export default ArtisanProductPage;
