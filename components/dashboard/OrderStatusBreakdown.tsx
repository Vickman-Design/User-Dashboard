"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function OrderStatusBreakdown() {
  const data = [
    { name: "Completed", value: 60, color: "#22C55E" },
    { name: "Pending", value: 20, color: "#FACC15" },
    { name: "Failed", value: 10, color: "#EF4444" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center md:justify-between hover:shadow-lg transition-all h-full">
      {/* Left: Chart */}
      <div className="w-28 h-28 md:w-32 md:h-32 mb-4 md:mb-0 flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={50}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Right: Labels */}
      <div className="flex flex-col gap-3 text-sm w-full md:w-1/2 h-full justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-100 pb-1"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-[#003F51] font-medium">{item.name}</span>
            </div>
            <span className="font-semibold text-[#003F51]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
