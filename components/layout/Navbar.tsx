"use client";
import { Bell, Menu } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  onMenuClick?: () => void; 
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Search input */}
        <div className="relative">
          <input
            className="pl-10 pr-4 py-2 rounded-lg border w-40 sm:w-64 md:w-80 bg-gray-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-2.5 w-4 h-4 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification icon */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-green-600 hover:bg-green-700 cursor-pointer transition">
            <Bell className="w-4 h-4 text-white" fill="white" />
          </div>
        </div>

        {/* Profile image */}
        <div className="w-9 h-9 rounded-full border border-gray-200 overflow-hidden cursor-pointer relative">
          <Image
            src="/profile.jpg"
            alt="User Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
