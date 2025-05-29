"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AppleSupport() {
  const [searchQuery, setSearchQuery] = useState('');

  const productCategories = [
    { name: 'iPhone', image: '/images/iphone-icon.png' },
    { name: 'Mac', image: '/images/mac-icon.png' },
    { name: 'iPad', image: '/images/ipad-icon.png' },
    { name: 'Watch', image: '/images/watch-icon.png' },
    { name: 'AirPods', image: '/images/airpods-icon.png' },
    { name: 'Nhạc', image: '/images/music-icon.png' },
    { name: 'TV', image: '/images/tv-icon.png' },
  ];

  const supportCategories = [
    { 
      title: 'Quản mý thiết bị Tài khoản Apple',
      icon: '/images/account-icon.png',
      href: '/support/account'
    },
    { 
      title: 'Dịch vụ sửa chữa của Apple',
      icon: '/images/repair-icon.png',
      href: '/support/repair'
    },
    { 
      title: 'Thanh toán và đăng ký',
      icon: '/images/billing-icon.png',
      href: '/support/billing'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Image Grid */}
      <div className="grid grid-cols-2 gap-2 mb-12">
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/support-hero-1.jpg"
            alt="Person with Apple device"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="grid grid-rows-2 gap-2">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/support-hero-2.jpg"
              alt="Watch on wrist"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/support-hero-3.jpg"
              alt="Person using iPad"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/support-hero-4.jpg"
            alt="Person on FaceTime"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/support-hero-5.jpg"
            alt="Person with game controller"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-center mb-12">Hỗ trợ của Apple</h1>
      
      {/* Product Categories */}
      <div className="flex justify-center space-x-8 mb-12">
        {productCategories.map((category) => (
          <Link 
            href={`/support/${category.name.toLowerCase()}`} 
            key={category.name}
            className="flex flex-col items-center group"
          >
            <div className="w-12 h-12 mb-2">
              <Image 
                src={category.image} 
                alt={category.name}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm group-hover:underline">{category.name}</span>
          </Link>
        ))}
      </div>
      
      {/* Support Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {supportCategories.map((category) => (
          <Link 
            href={category.href}
            key={category.title}
            className="bg-gray-100 rounded-xl p-6 flex items-center space-x-4 hover:bg-gray-200 transition-colors"
          >
            <div className="w-8 h-8">
              <Image
                src={category.icon}
                alt=""
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-blue-500">{category.title}</span>
          </Link>
        ))}
      </div>
      
      {/* More Help */}
      <div className="bg-gray-100 rounded-xl p-4 text-center mb-12">
        <p className="text-gray-700">
          Cách tìm và nhận tin nhắn khẩn trong muốn. <Link href="/support/urgent-messages" className="text-blue-500">Tìm hiểu thêm</Link>
        </p>
      </div>
      
      {/* Search */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tìm kiếm các chủ đề khác</h2>
        <div className="max-w-lg mx-auto">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-3 text-gray-400">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm hỗ trợ"
              className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      
      {/* Get Help */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Nhận hỗ trợ</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          Hãy cùng chúng tôi với thông tin có sẵn để chúng tôi đưa ra giải pháp tốt nhất cho bạn, kết nối qua điện thoại, trò chuyện trực tuyến, email và các phương thức khác.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
          Bắt đầu ngay
        </button>
      </div>
      
      {/* Memoji Support Illustration */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-3xl h-48">
          <Image
            src="/images/memoji-support.png"
            alt="Support illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Personalized Support */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-2xl font-semibold text-center mb-2">Nội dung hỗ trợ dành cho tôi</h2>
        <p className="text-center text-gray-700 mb-3">
          Nhận thông tin về bảo hành, kiểm tra tình trạng bảo hành hoặc tìm các trường hợp sửa chữa hiện có.
        </p>
        <div className="text-center">
          <Link href="/signin" className="text-blue-500 hover:underline">Đăng nhập bằng Tài khoản Apple của bạn &gt;</Link>
        </div>
      </div>
      
      {/* AppleCare+ */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">AppleCare+</h2>
        <p className="text-gray-700 mb-4">
          Nhiều dịch vụ sửa chữa khẩn cấp hoặc thay thế sản phẩm và hỗ trợ kỹ thuật bất cứ khi nào bạn cần và quyền ưu tiên khi liên lạc với các chuyên gia của Apple và hưởng nhiều lợi ích khác.
        </p>
        <div className="text-right">
          <Link href="/applecare" className="text-blue-500 hover:underline">Tìm hiểu thêm &gt;</Link>
        </div>
        <div className="mt-4">
          <Image
            src="/images/applecare-devices.png"
            alt="AppleCare+ supported devices"
            width={500}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
      
      {/* Beware of Scams */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold mb-2">Thận trọng với lừa đảo giả</h2>
        <p className="text-gray-700 text-sm mb-3">
          Một số bè lữ chuyên đói điện và gọi giả của đến thu sẽ thể không dùng thiết kế chính và có nguy cơ lừa đảo có lể vơ vẽm. Kể đềm bảo nhóm được gọi chính hàng của Apple trong quả trình thực hiện, bạn nên tìm đến Thủ công xác định sự nguồn gốc của Apple. Nếu cảm thể chuyển đói này thể lể suy thắc sị dụng dịch vụ của Apple.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Apple sẽ không bao giờ yêu cầu bạn cung cấp mật pháp cá nhân qua tin nhắn văn bản hoặc điện thoại. Không thông lệ dịnh vụ phía này hoặc Apple chúng nhiên sẽ có các chuyên gia đảng tin cậy thực hiện, tụi đựng liên hệ chính hàng của Apple.
        </p>
      </div>
      
      {/* Service Programs */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Apple Service Programs</h2>
        <ul className="text-blue-500 space-y-2 text-sm">
          <li>
            <Link href="/service-program/iphone-14" className="hover:underline">
              Chương trình sửa dụng iPhone 14 Plus gặp sự cố camera sau
            </Link>
          </li>
          <li>
            <Link href="/service-program/iphone-12" className="hover:underline">
              iPhone 12 and iPhone 12 Pro Service Program for No Sound Issues
            </Link>
          </li>
          <li>
            <Link href="/service-program/macbook-pro-battery" className="hover:underline">
              15-inch MacBook Pro Battery Recall Program
            </Link>
          </li>
          <li>
            <Link href="/service-programs" className="hover:underline">
              See all programs &gt;
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}