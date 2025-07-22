import React from 'react';
import CartItem from './CartItem';

interface CartItemType {
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

interface CartItemListProps {
  items: CartItemType[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onSaveForLater: (id: number) => void;
}

const CartItemList: React.FC<CartItemListProps> = ({ items, onUpdateQuantity, onRemoveItem, onSaveForLater }) => (
  <>
    {items.map(item => (
      <CartItem
        key={item.id}
        {...item}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={onRemoveItem}
        onSaveForLater={onSaveForLater}
      />
    ))}
  </>
);

export default CartItemList;
