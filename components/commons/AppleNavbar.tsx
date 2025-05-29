"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiApple, FiSearch, FiShoppingBag } from 'react-icons/fi';

export default function AppleNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Cửa Hàng', href: '/store' },
    { label: 'Mac', href: '/mac' },
    { label: 'iPad', href: '/ipad' },
    { label: 'iPhone', href: '/iphone' },
    { label: 'Watch', href: '/watch' },
    { label: 'AirPods', href: '/airpods' },
    { label: 'TV & Nhà', href: '/tv-home' },
    { label: 'Giải Trí', href: '/entertainment' },
    { label: 'Phụ Kiện', href: '/accessories' },
    { label: 'Hỗ Trợ', href: '/support' },
  ];

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className={`fixed w-full z-50 ${isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-gray-100/95 backdrop-blur-sm'} transition-all duration-300`}>
      <div className="max-w-screen-xl mx-auto">
        <nav className="flex items-center justify-between px-4 h-12 text-sm">
          <div className="flex items-center space-x-8">
            <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
              <FiApple className="h-5 w-5" />
              <span className="sr-only">Apple</span>
            </Link>
            
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="hidden md:block text-gray-800 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-5">
            {searchOpen ? (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="pl-8 pr-4 py-1 rounded-lg bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                  autoFocus
                  onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                />
                <FiSearch className="absolute left-2.5 top-2 text-gray-500 h-4 w-4" />
              </div>
            ) : (
              <button 
                onClick={toggleSearch}
                className="text-gray-800 hover:text-black transition-colors"
                aria-label="Search"
              >
                <FiSearch className="h-4 w-4" />
              </button>
            )}
            
            <Link 
              href="/bag" 
              className="text-gray-800 hover:text-black transition-colors"
              aria-label="Shopping Bag"
            >
              <FiShoppingBag className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}