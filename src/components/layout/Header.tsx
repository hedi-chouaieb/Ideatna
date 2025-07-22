// components/layout/Header.tsx
'use client';

import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import ArtisanCartPopup from '../cart/ArtisanCartPopup';

const NAV_LINKS = [
  { href: '/products', label: 'Shop' },
  { href: '/artisans', label: 'Artisans' },
  { href: '#journal', label: 'Stories' },
  { href: '#about', label: 'About' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    cartItems,
    updateQuantity,
    removeItem,
    saveForLater,
    checkout,
    cartItemCount,
  } = useCart([]);

  // Cart handlers
  const handleCheckout = () => {
    checkout();
    setIsCartOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F9F9F7]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-serif font-bold text-[#3C3633]">
                Ideatna
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-600 hover:text-[#A38C7A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icons and Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-600 hover:text-[#A38C7A] transition-colors">
                <Search size={22} />
              </button>
              <button className="text-gray-600 hover:text-[#A38C7A] transition-colors">
                <User size={22} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-gray-600 hover:text-[#A38C7A] transition-colors relative"
              >
                <ShoppingCart size={22} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#A38C7A]"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#A38C7A] hover:bg-[#E5E0D8]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-gray-200 px-4 py-4 flex items-center space-x-6">
              <button className="text-gray-600 hover:text-[#A38C7A] transition-colors">
                <Search size={22} />
              </button>
              <button className="text-gray-600 hover:text-[#A38C7A] transition-colors">
                <User size={22} />
              </button>
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-[#A38C7A] transition-colors relative"
              >
                <ShoppingCart size={22} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Cart Popup */}
      <ArtisanCartPopup
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onSaveForLater={saveForLater}
        onCheckout={handleCheckout}
      />
    </>
  );
};

export default Header;
