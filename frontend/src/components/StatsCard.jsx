import React from "react";
export default function StatsCard({ title, value }){
  return (
    <div className="glass p-4 rounded-lg text-center">
      <div className="text-sm text-gray-300">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}
