"use client";

import { Flag, Pencil, AlertCircle } from "lucide-react";

export default function UserHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 md:gap-0">
      {/* ===== Left Section: Back Arrow and Name ===== */}
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
          <span className="text-[#003F51] text-2xl font-bold leading-none">‹</span>
        </button>
        <h2 className="text-lg sm:text-xl font-semibold text-[#003F51]">Vicotech</h2>
      </div>

      {/* ===== Right Section: Action Buttons ===== */}
      <div className="flex flex-wrap gap-2">
        {/* Disable Button */}
        <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-gray-200 text-gray-700 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium hover:bg-gray-300 transition">
          <span className="w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
            <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-700" />
          </span>
          Disable
        </button>

        {/* Flag Button */}
        <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-[#FFF3E0] text-[#FF9800] flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium hover:bg-[#FFE0B2] transition">
          <Flag className="w-3 h-3 sm:w-4 sm:h-4" /> Flag
        </button>

        {/* Edit User Button */}
        <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-[#003F51] text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium hover:bg-[#00596D] transition">
          <Pencil className="w-3 h-3 sm:w-4 sm:h-4" /> Edit User
        </button>
      </div>
    </div>
  );
}
