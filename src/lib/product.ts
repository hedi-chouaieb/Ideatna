export interface ProductProps {
  id: string;
  name: string;
  images: string[];
  image?: string; // for grid card fallback
  price: number;
  artisan: string;
  rating: number;
  category: string;
  description?: string | undefined;
  specs?: Record<string, string> | undefined;
}

/**
 * Product domain model for the artisan marketplace.
 * Use for type safety and business logic related to products.
 */
export class Product {
  id: string;
  name: string;
  images: string[];
  price: number;
  artisan: string;
  rating: number;
  category: string;
  description?: string | undefined;
  specs?: Record<string, string> | undefined;

  constructor(props: ProductProps) {
    this.id = props.id;
    this.name = props.name;
    this.images = props.images;
    this.price = props.price;
    this.artisan = props.artisan;
    this.rating = props.rating ?? 0;
    this.category = props.category;
    this.description = props.description ?? undefined;
    this.specs = props.specs ?? undefined;
  }

  /**
   * Returns the main image for the product (first image or fallback).
   */
  get mainImage(): string {
    console.log("mainImage", this.images);
    return this.images[0] || '/fake/broken-image.png';
  }

  /**
   * Returns a short description for grid/listing views.
   */
  get shortDescription(): string {
    return this.description ? this.description.slice(0, 100) + (this.description.length > 100 ? "..." : "") : "";
  }

  /**
   * Returns formatted price string.
   */
  get formattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }
}
