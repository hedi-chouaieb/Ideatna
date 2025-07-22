import { fetchProductsDetails } from '@/lib/productsService';
import type { ProductsDetail } from '@/lib/types';
import { useEffect, useState } from 'react';

export function useProductDetails(id: string | number | undefined) {
  const [product, setProduct] = useState<ProductsDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setProduct(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchProductsDetails(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  return { product, loading };
}
