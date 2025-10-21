"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  MessageSquare,
  Package,
  ClipboardList,
  Gift,
  DollarSign,
  Headphones,
  LogOut,
  ChevronDown,
  ChevronUp,
  Shield,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>("User Management");

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "System Admin", icon: Shield },
    {
      name: "User Management",
      icon: Users,
      dropdown: ["Merchant", "Vendor", "Dispatcher", "Review", "KYC"],
    },
    {
      name: "Communication",
      icon: MessageSquare,
      dropdown: ["Email", "SMS", "In-App Message"],
    },
    {
      name: "Utilities",
      icon: Settings,
      dropdown: ["Settings", "Tools", "API Access"],
    },
    { name: "Order & Deliveries", icon: ClipboardList },
    { name: "Product Mgt", icon: Package },
    { name: "Product Care", icon: Settings },
    {
      name: "Promotion & Ads",
      icon: Gift,
      dropdown: ["Create Ad", "Campaigns", "Analytics"],
    },
    {
      name: "Finance",
      icon: DollarSign,
      dropdown: ["Transactions", "Invoices", "Reports"],
    },
    {
      name: "Support",
      icon: Headphones,
      dropdown: ["FAQs", "Contact Admin", "Live Chat"],
    },
  ];

  return (
    <aside
      className={`flex flex-col justify-between bg-white border-r border-gray-200 h-screen w-64 ${className}`}
    >
      {/* Scrollable content */}
      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-[#003F51] font-bold text-lg mb-6">Vicotech-Hub</h2>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.name === "User Management";
            const isOpen = openDropdown === item.name;

            return (
              <div key={item.name}>
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#003F51] text-white"
                      : "text-[#003F51] hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>

                  {item.dropdown &&
                    (isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                </button>

                {/* Dropdown Items */}
                {item.dropdown && isOpen && (
                  <ul className="ml-8 mt-2 space-y-1 text-sm text-[#003F51]">
                    {item.dropdown.map((sub, i) => (
                      <li
                        key={i}
                        className="list-disc list-inside hover:text-[#005e73] cursor-pointer"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-2 text-[#003F51] hover:text-red-600 transition-colors w-full">
          <LogOut size={18} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
