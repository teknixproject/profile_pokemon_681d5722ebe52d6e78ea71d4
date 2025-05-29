"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCategories() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const categories = [
    {
      id: 'mac',
      name: 'Mac',
      image: '/images/mac.jpg',
      href: '/mac',
    },
    {
      id: 'iphone',
      name: 'iPhone',
      image: '/images/iphone.jpg',
      href: '/iphone',
    },
    {
      id: 'ipad',
      name: 'iPad',
      image: '/images/ipad.jpg',
      href: '/ipad',
    },
    {
      id: 'apple-watch',
      name: 'Apple Watch',
      image: '/images/apple-watch.jpg',
      href: '/apple-watch',
    },
    {
      id: 'airpods',
      name: 'AirPods',
      image: '/images/airpods.jpg',
      href: '/airpods',
    },
    {
      id: 'airtag',
      name: 'AirTag',
      image: '/images/airtag.jpg',
      href: '/airtag',
    },
    {
      id: 'apple-tv',
      name: 'Apple TV 4K',
      image: '/images/apple-tv.jpg',
      href: '/apple-tv',
    },
    {
      id: 'accessories',
      name: 'Phụ Kiện',
      image: '/images/accessories.jpg',
      href: '/accessories',
    }
  ];

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-start mb-10">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold text-gray-900">Cửa Hàng.</h1>
          <p className="text-xl text-gray-500">Cách tốt nhất để mua sản phẩm bạn thích.</p>
        </div>

        <div className="relative">
          <button 
            onClick={toggleChat}
            className="flex items-center bg-white text-sm text-gray-700 px-4 py-2 rounded-full shadow-sm border border-gray-200"
          >
            <div className="mr-2 relative w-6 h-6 overflow-hidden rounded-full bg-red-500">
              <Image
                src="/images/support-avatar.jpg"
                alt="Support avatar"
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-medium">Bạn cần trợ giúp mua sắm?</p>
              <p className="text-blue-500 text-xs">Hỏi Chuyên Gia ›</p>
            </div>
          </button>
          
          {isChatOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
              <div className="p-4">
                <h3 className="font-medium text-gray-900">Hỗ trợ trực tuyến</h3>
                <p className="text-sm text-gray-500 mt-1">Chúng tôi có thể giúp gì cho bạn?</p>
                <textarea 
                  className="w-full mt-3 p-2 border border-gray-300 rounded-md text-sm" 
                  rows={3}
                  placeholder="Nhập câu hỏi của bạn..."
                />
                <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium">
                  Gửi
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-6">
        {categories.map((category) => (
          <Link 
            href={category.href}
            key={category.id}
            className="flex flex-col items-center group"
          >
            <div className="relative w-full aspect-square mb-2 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 25vw, 12.5vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-sm text-center">{category.name}</span>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-gray-100 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900">Thế hệ mới nhất. <span className="text-gray-500 font-normal">Xem ngay có gì mới.</span></h2>
      </div>
    </div>
  );
}