"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                <path d="M10 2c1 .5 2 2 2 5"></path>
              </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-2.5 top-2 text-gray-500 h-4 w-4">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            ) : (
              <button 
                onClick={toggleSearch}
                className="text-gray-800 hover:text-black transition-colors"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
            )}
            
            <Link 
              href="/bag" 
              className="text-gray-800 hover:text-black transition-colors"
              aria-label="Shopping Bag"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}