"use client";

import { FiImage, FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

export default function BlogCard() {
  return (
    <div className="max-w-xs mx-auto">
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        <Link href="/blog/optimizing-business-decisions-with-advanced-data-analytics" className="block">
          <div className="relative">
            {/* Placeholder image area */}
            <div className="bg-gray-100 aspect-video flex items-center justify-center p-8">
              <div className="w-16 h-16 rounded border border-gray-300 flex items-center justify-center">
                <FiImage className="text-gray-400 w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="p-5">
            {/* Author and read time */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
              <span>William Ashford</span>
              <span className="font-bold text-gray-300">•</span>
              <span>5 min read</span>
            </div>
            
            {/* Title */}
            <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-600 flex justify-between items-start">
              <span>Optimizing Business decisions with Advanced data Analytics</span>
              <FiArrowUpRight className="text-gray-400 ml-2 mt-1 flex-shrink-0" />
            </h3>
            
            {/* Description */}
            <p className="text-gray-500 text-sm mb-4">
              Discover how web solutions are reshaping the business landscape.
            </p>
            
            {/* Footer with tags and date */}
            <div className="flex items-center justify-between text-xs">
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                Data Science
              </span>
              <span className="text-gray-400">Mar 09, 2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}