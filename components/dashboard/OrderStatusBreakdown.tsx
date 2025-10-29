"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function OrderStatusBreakdown() {
  const data = [
    { name: "Completed", value: 60, color: "#4CAF50" },
    { name: "Pending", value: 20, color: "#FFC107" },
    { name: "Failed", value: 10, color: "#F44336" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-lg transition-all h-[260px] overflow-hidden">
      {/* 🔹 Title */}
      <h3 className="text-[#003F51] font-semibold text-base mb-4">
        Order Status Breakdown
      </h3>

      {/* 🔹 Chart + Labels */}
      <div className="flex flex-col lg:flex-row items-center justify-between flex-grow w-full">
        {/* Chart Section */}
        <div className="w-28 h-28 lg:w-32 lg:h-32 mb-4 lg:mb-0 flex-shrink-0">
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

        {/* Labels Section */}
        <div className="flex flex-col gap-3 text-sm w-full lg:w-1/2 justify-center">
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
    </div>
  );
}
