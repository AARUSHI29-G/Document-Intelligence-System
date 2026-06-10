import React from "react";

export default function FileCard({ title, content }) {
  return (
    <div className="bg-white shadow p-4 rounded break-words">
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <pre className="text-gray-700">{content}</pre>
    </div>
  );
}
