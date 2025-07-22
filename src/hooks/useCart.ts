import { useState } from 'react';

export interface CartItem {
  id: number;
  name: string;
  artisan: string;
  location: string;
  story: string;
  price: number;
  quantity: number;
  image: string;
  artisanImage: string;
  shipping: string;
  craft: string;
}

export function useCart(initialItems: CartItem[] = []) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const saveForLater = (id: number) => {
    // Implement save for later logic
    console.log('Save for later:', id);
  };

  const checkout = () => {
    // Implement checkout logic
    console.log('Proceeding to checkout');
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems,
    setCartItems,
    updateQuantity,
    removeItem,
    saveForLater,
    checkout,
    cartItemCount,
  };
}
