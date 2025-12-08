import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [docs, setDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("docs")) || [];
    setDocs(saved);
  }, []);

  const deleteDoc = (id) => {
    const updated = docs.filter((d) => d.id !== id);
    setDocs(updated);
    localStorage.setItem("docs", JSON.stringify(updated));
  };

  const viewDoc = (doc) => {
    navigate("/summary", { state: doc });
  };

  return (
    <div className="min-h-screen bg-[#030309] text-white px-10 py-12">
      <h1 className="text-4xl font-bold text-purple-400 mb-10">
        Your Documents
      </h1>

      {docs.length === 0 ? (
        <p className="text-gray-500">No processed documents yet.</p>
      ) : (
        <div className="space-y-6">
          {docs.map((d) => (
            <div
              key={d.id}
              className="bg-[#0b0f24] p-6 rounded-2xl border border-[#1e2550] shadow-xl flex flex-col gap-4"
            >
              <div>
                <p className="text-purple-300 text-sm">
                  File: {d.smart_name || "Unknown"}
                </p>
                <p className="text-gray-300 text-sm">
                  Type: {d.document_type}
                </p>
              </div>

              <p className="text-gray-400 text-sm line-clamp-2">
                {d.summary}
              </p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => viewDoc(d)}
                  className="px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                >
                  View
                </button>

                <button
                  onClick={() => deleteDoc(d.id)}
                  className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}