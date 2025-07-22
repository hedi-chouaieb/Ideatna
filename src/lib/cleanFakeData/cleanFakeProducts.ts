// Cleaned and combined product-related fake data for the artisan marketplace
// All product objects have unique IDs and merged fields from best sellers, featured, and story products

export const cleanFakeProducts = [
  {
    id: 1,
    name: "Ceramic Tile Set",
    artisan: "Salem",
    location: "Sejnane",
    price: 95,
    image: "/fake/products/product (25).png",
    rating: 4.9,
    story: undefined,
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Blown Glass Vase",
    artisan: "Amina",
    location: undefined,
    price: 75,
    image: "/fake/products/product (6).png",
    rating: 4.8,
    story: undefined,
    featured: false,
    bestSeller: true
  },
  {
    id: 3,
    name: "Engraved Silver Chest",
    artisan: "Leila",
    location: undefined,
    price: 42,
    image: "/fake/products/product (3).png",
    rating: 5.0,
    story: undefined,
    featured: false,
    bestSeller: true
  },
  {
    id: 4,
    name: "Wicker Basket",
    artisan: "Naamena",
    location: undefined,
    price: 38,
    image: "/fake/products/product (13).png",
    rating: 4.7,
    story: undefined,
    featured: false,
    bestSeller: true
  },
  {
    id: 5,
    name: "Hand-carved Olive Spoon",
    artisan: "Nizar",
    location: "Sfax",
    price: 45,
    image: "/fake/products/product (9).png",
    rating: undefined,
    story: "Carved from centuries-old olive trees using traditional tools",
    featured: true,
    bestSeller: false
  },
  {
    id: 6,
    name: "Berber Kilim Rug",
    artisan: "Amina",
    location: "Kef",
    price: 120,
    image: "/fake/products/product (20).png",
    rating: undefined,
    story: "Woven with patterns passed down through 5 generations",
    featured: true,
    bestSeller: false
  },
  {
    id: 7,
    name: "Sejnane Clay Vase",
    artisan: "Salem",
    location: "Sejnane",
    price: 65,
    image: "/fake/products/product (14).png",
    rating: undefined,
    story: "Shaped by hand and fired in traditional kilns",
    featured: true,
    bestSeller: false
  },
  {
    id: 8,
    name: "Embroidered Silk Scarf",
    artisan: "Khouloud",
    location: "Kairouan",
    price: 85,
    image: "/fake/products/product (10).png",
    rating: undefined,
    story: "Each thread tells a story of ancient Tunisian heritage",
    featured: true,
    bestSeller: false
  },
  {
    id: 9,
    name: "Geometric Tile Coaster Set",
    artisan: "Youssef",
    location: "Nabeul",
    price: 32,
    image: "/fake/products/product (4).png",
    rating: undefined,
    story: "Inspired by Islamic geometric patterns from the 12th century",
    featured: true,
    bestSeller: false
  },
  {
    id: 10,
    name: "Chechia",
    artisan: "Fatma",
    location: "Tunis",
    price: 55,
    image: "/fake/products/product (2).png",
    rating: undefined,
    story: "Hand-tooled Chechia using traditional Tunisian techniques",
    featured: true,
    bestSeller: false
  },
  // Products from featured story (with new unique IDs)
  {
    id: 11,
    name: "Ceramic Tile Set",
    artisan: "Salem",
    location: "Sejnane",
    price: 95,
    image: "/fake/products/product (43).png",
    rating: 4.9,
    story: undefined,
    featured: false,
    bestSeller: false
  },
  {
    id: 12,
    name: "Blown Glass Vase",
    artisan: "Amina",
    location: undefined,
    price: 75,
    image: "/fake/products/product (33).png",
    rating: 4.8,
    story: undefined,
    featured: false,
    bestSeller: false
  },
  {
    id: 13,
    name: "Engraved Silver Chest",
    artisan: "Leila",
    location: undefined,
    price: 42,
    image: "/fake/products/product (70).png",
    rating: 5.0,
    story: undefined,
    featured: false,
    bestSeller: false
  },
  {
    id: 14,
    name: "Wicker Basket",
    artisan: "Naamena",
    location: undefined,
    price: 38,
    image: "/fake/products/product (53).png",
    rating: 4.7,
    story: undefined,
    featured: false,
    bestSeller: false
  }
];
