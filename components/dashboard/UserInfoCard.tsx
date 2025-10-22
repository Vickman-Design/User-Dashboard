"use client";

import Image from "next/image";

export default function UserInfoCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col items-center w-full">
      {/* ==== Profile Section ==== */}
      <div className="flex flex-col items-center md:items-start w-full">
        {/* Profile Picture */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-5 relative">
          <Image
            src="/profile.jpg"
            alt="User"
            fill
            className="object-cover"
          />
        </div>

        {/* ==== User Details ==== */}
        <div className="space-y-4 text-center md:text-left">
          <div>
            <p className="text-xs text-gray-500">Name</p>
            <p className="text-[#003F51] font-semibold">Vicotech</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-[#003F51] font-semibold">user@gmail.com</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Phone Number</p>
            <p className="text-[#003F51] font-semibold">08100465758</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Last Order</p>
            <p className="text-[#003F51] font-semibold">02/10/2025</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Status</p>
            <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
