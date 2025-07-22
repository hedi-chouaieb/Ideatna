import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1 mb-8 lg:mb-0">
            <h3 className="text-xl font-serif font-bold mb-4">Artisan&apos;s Connect</h3>
            <p className="text-sm max-w-xs">A platform celebrating craftsmanship and fostering meaningful connections between artisans and buyers.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 tracking-wider uppercase text-sm">For Buyers</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">How It Works</Link></li>
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">Buyer Protection</Link></li>
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">FAQs</Link></li>
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">Discover</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 tracking-wider uppercase text-sm">For Artisans</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">How to Sell</Link></li>
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">Artisan Support</Link></li>
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">Verification</Link></li>
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">Our Standards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 tracking-wider uppercase text-sm">Our Story</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">Journal</Link></li>
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">Community</Link></li>
              <li><Link href="#" className="hover:text-[#A38C7A] transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 tracking-wider uppercase text-sm">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#A38C7A] transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-[#A38C7A] transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-[#A38C7A] transition-colors"><Facebook size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#A38C7A]/30 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Artisan&apos;s Connect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
