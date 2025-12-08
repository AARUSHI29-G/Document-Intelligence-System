import React from "react";

const ResultViewer = ({ data }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 mt-6">
      <h2 className="text-2xl font-semibold mb-3">Result</h2>

      <pre className="bg-black p-4 rounded-lg text-sm overflow-auto max-h-[500px]">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default ResultViewer;
