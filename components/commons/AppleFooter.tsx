"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function AppleFooter() {
  const [country, setCountry] = useState('Việt Nam');

  const footerSections = [
    {
      title: 'Mua Sắm và Tìm Hiểu',
      links: [
        { name: 'Cửa Hàng', href: '/store' },
        { name: 'Mac', href: '/mac' },
        { name: 'iPad', href: '/ipad' },
        { name: 'iPhone', href: '/iphone' },
        { name: 'Watch', href: '/watch' },
        { name: 'AirPods', href: '/airpods' },
        { name: 'TV & Nhà', href: '/tv-home' },
        { name: 'AirTag', href: '/airtag' },
        { name: 'Phụ Kiện', href: '/accessories' },
        { name: 'Thẻ Quà Tặng', href: '/gift-cards' },
      ]
    },
    {
      title: 'Tài Khoản',
      links: [
        { name: 'Quản Lý Tài Khoản Apple Của Bạn', href: '/account' },
        { name: 'Tài Khoản Apple Store', href: '/apple-store-account' },
        { name: 'iCloud.com', href: 'https://www.icloud.com' },
      ]
    },
    {
      title: 'Giải Trí',
      links: [
        { name: 'Apple One', href: '/apple-one' },
        { name: 'Apple TV+', href: '/apple-tv-plus' },
        { name: 'Apple Music', href: '/apple-music' },
        { name: 'Apple Arcade', href: '/apple-arcade' },
        { name: 'Apple Podcasts', href: '/apple-podcasts' },
        { name: 'Apple Books', href: '/apple-books' },
      ]
    },
    {
      title: 'Apple Store',
      links: [
        { name: 'Ứng Dụng Apple Store', href: '/apple-store-app' },
        { name: 'Tài Chính', href: '/financing' },
        { name: 'Apple Trade In', href: '/trade-in' },
        { name: 'Tìm đơn hàng của bạn - Apple', href: '/order-status' },
        { name: 'Hỗ Trợ Mua Hàng', href: '/shop-help' },
      ]
    },
    {
      title: 'Dành Cho Doanh Nghiệp',
      links: [
        { name: 'Apple và Doanh Nghiệp', href: '/business' },
        { name: 'Mua Sắm Cho Doanh Nghiệp', href: '/business-shop' },
      ]
    },
    {
      title: 'Cho Giáo Dục',
      links: [
        { name: 'Apple và Giáo Dục', href: '/education' },
        { name: 'Mua Hàng Cho Bậc Đại Học', href: '/education-store' },
      ]
    },
    {
      title: 'Dành Cho Chăm Sóc Sức Khoẻ',
      links: [
        { name: 'Apple trong Chăm Sóc Sức Khoẻ', href: '/healthcare' },
        { name: 'Sức khoẻ trên Apple Watch', href: '/healthcare-watch' },
      ]
    },
    {
      title: 'Giá Trị Cốt Lõi Của Apple',
      links: [
        { name: 'Trợ Năng', href: '/accessibility' },
        { name: 'Môi Trường', href: '/environment' },
        { name: 'Quyền Riêng Tư', href: '/privacy' },
        { name: 'Chuỗi Cung Ứng', href: '/supplier-responsibility' },
      ]
    },
    {
      title: 'Về Apple',
      links: [
        { name: 'Newsroom', href: '/newsroom' },
        { name: 'Lãnh Đạo Của Apple', href: '/leadership' },
        { name: 'Nhà Đầu Tư', href: '/investor' },
        { name: 'Đạo Đức & Quy Tắc', href: '/ethics' },
        { name: 'Sự Kiện', href: '/events' },
        { name: 'Liên Hệ Apple', href: '/contact' },
      ]
    },
    {
      title: 'Vì Apple',
      links: [
        { name: 'Việc làm tại Apple', href: '/careers' },
      ]
    },
  ];

  return (
    <footer className="bg-gray-100 pt-4 text-xs text-gray-600">
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb navigation */}
        <nav className="border-b border-gray-300 pb-2">
          <div className="flex items-center space-x-1">
            <Link href="/" className="text-gray-600 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                <path d="M10 2c1 .5 2 2 2 5"></path>
              </svg>
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 text-gray-400">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
            <span>Cửa Hàng Trực Tuyến của Apple</span>
          </div>
        </nav>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 py-6">
          {footerSections.map((section) => (
            <div key={section.title} className="mb-6">
              <h3 className="font-semibold text-xs text-gray-900 mb-2">{section.title}</h3>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Find a store and contact info */}
        <div className="border-t border-gray-300 py-3 text-xs">
          <p className="mb-1">
            Xem thêm cách để mua hàng:{' '}
            <Link href="/find-store" className="text-blue-600 hover:underline">
              Tìm cửa hàng bán lẻ
            </Link>{' '}
            gần bạn. Hoặc gọi 1800-1192.
          </p>
        </div>

        {/* Copyright and legal links */}
        <div className="border-t border-gray-300 py-3 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-2 md:mb-0">
            <p>Bản quyền © 2025 Apple Inc. Bảo lưu mọi quyền.</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-3">
            <Link href="/privacy-policy" className="text-gray-600 hover:underline">
              Chính Sách Quyền Riêng Tư
            </Link>
            <span className="hidden md:inline text-gray-300">|</span>
            <Link href="/terms-of-use" className="text-gray-600 hover:underline">
              Điều Khoản Sử Dụng
            </Link>
            <span className="hidden md:inline text-gray-300">|</span>
            <Link href="/sales-policy" className="text-gray-600 hover:underline">
              Bán Hàng và Hoàn Tiền
            </Link>
            <span className="hidden md:inline text-gray-300">|</span>
            <Link href="/legal" className="text-gray-600 hover:underline">
              Pháp Lý
            </Link>
            <span className="hidden md:inline text-gray-300">|</span>
            <Link href="/sitemap" className="text-gray-600 hover:underline">
              Sơ Đồ Trang Web
            </Link>
          </div>
          
          <div className="mt-2 md:mt-0">
            <button 
              onClick={() => setCountry('Việt Nam')}
              className="text-gray-600 hover:underline"
            >
              {country}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}