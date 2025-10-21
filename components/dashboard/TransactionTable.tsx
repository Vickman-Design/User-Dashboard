"use client";

import React, { useState } from "react";
import { Eye, RotateCcw, X } from "lucide-react";

const transactions = [
  { id: "Order #1123678", date: "02/09/2025", product: "Shoe", amount: "₦10,500", status: "Active" },
  { id: "Order #1123679", date: "03/09/2025", product: "Iphone 14", amount: "₦10,500", status: "Suspended" },
  { id: "Order #1123680", date: "04/09/2025", product: "Samsung s21", amount: "₦2,345", status: "Active" },
  { id: "Order #1123681", date: "05/09/2025", product: "Iphone 11", amount: "₦1,568", status: "Suspended" },
  { id: "Order #1123682", date: "06/09/2025", product: "Airtime", amount: "₦105,009", status: "Pending" },
  { id: "Order #1123683", date: "07/09/2025", product: "Data", amount: "₦200,000", status: "Pending" },
  { id: "Order #1123684", date: "08/09/2025", product: "Windows Laptop", amount: "₦210,500", status: "Active" },
];

export default function TransactionTable() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-600";
      case "Suspended":
        return "text-red-500";
      case "Pending":
        return "text-yellow-500";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
      <h3 className="text-gray-700 font-medium text-sm mb-3">Recent Transactions</h3>

      {/* Table wrapper for horizontal scroll on small screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-[#003F51] text-white text-left">
              <th className="py-2 px-2 sm:px-3">Order ID</th>
              <th className="py-2 px-2 sm:px-3">Date</th>
              <th className="py-2 px-2 sm:px-3">Product</th>
              <th className="py-2 px-2 sm:px-3">Amount</th>
              <th className="py-2 px-2 sm:px-3">Status</th>
              <th className="py-2 px-2 sm:px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                <td className="py-2 px-2 sm:px-3 text-gray-700">{t.id}</td>
                <td className="py-2 px-2 sm:px-3 text-gray-600">{t.date}</td>
                <td className="py-2 px-2 sm:px-3 text-gray-600">{t.product}</td>
                <td className="py-2 px-2 sm:px-3 text-gray-800 font-medium">{t.amount}</td>
                <td className={`py-2 px-2 sm:px-3 font-semibold ${getStatusColor(t.status)}`}>
                  {t.status}
                </td>
                <td className="py-2 px-2 sm:px-3 text-gray-600">
                  <button
                    onClick={() => setOpenModal(i)}
                    className="px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
                  >
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== MODAL SECTION ===== */}
      {openModal !== null && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setOpenModal(null)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs sm:max-w-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#003F51] font-semibold">Action</h2>
                <button
                  onClick={() => setOpenModal(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-[#003F51]">
                  <Eye size={16} />
                  <span>View</span>
                </button>

                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-red-600">
                  <RotateCcw size={16} />
                  <span>Reverse</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
