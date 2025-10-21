"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function WalletCards() {
  const cards = [
    {
      title: "Total Balance",
      value: "₦105,000",
      note: "Analytics for last month  (+5%)",
      color: "text-green-600",
    },
    {
      title: "Last Top-up",
      value: "₦10,500",
      note: "Analytics for last month  (+5%)",
      color: "text-green-600",
    },
    {
      title: "Last Debit",
      value: "₦1,000",
      note: "Analytics for last month  (+5%)",
      color: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between h-full transition-all hover:shadow-md"
        >
          <div>
            <h3 className="text-sm text-gray-500 font-medium mb-1">
              {card.title}
            </h3>
            <h2 className="text-2xl font-bold text-[#003F51] mb-1">
              {card.value}
            </h2>
          </div>

          {/* Note with arrow */}
          <div className="flex items-center gap-1 text-xs mt-1">
            <p className={`${card.color}`}>{card.note}</p>
            <div className="bg-green-100 p-0.5 rounded-sm">
              <ArrowUpRight size={12} className="text-green-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
