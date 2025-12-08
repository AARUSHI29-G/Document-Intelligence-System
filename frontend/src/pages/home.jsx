import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const navigate = useNavigate();

  const processFile = async () => {
    if (!file) return alert("Please upload a file");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/upload", formData);

      
      const existing = JSON.parse(localStorage.getItem("docs")) || [];
      const newDoc = {
        id: Date.now(),
        filename: res.data.smart_name || file.name,
        ...res.data,
      };
      localStorage.setItem("docs", JSON.stringify([newDoc, ...existing]));

      
      navigate("/summary", { state: res.data });

    } catch (err) {
      console.error(err);
      alert("Processing failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex items-center justify-center px-6 bg-[#030309]">

      {/* Premium Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-700 opacity-30 blur-[220px] animate-pulse" />
        <div className="absolute bottom-[-250px] right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-indigo-700 opacity-25 blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      {!showUpload ? (
        <div className="relative text-center max-w-4xl w-full z-10 backdrop-blur-lg">

          <h1 className="text-6xl font-bold tracking-tight text-purple-400 mb-6 drop-shadow-lg">
            Doc Intelligence
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            An AI-powered engine that understands documents and extracts real intelligence within seconds.
          </p>

          <button
            onClick={() => setShowUpload(true)}
            className="px-16 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-xl font-semibold shadow-[0_0_45px_rgba(168,85,247,0.5)]"
          >
            Start Scanning ✦
          </button>
        </div>
      ) : (
        <div className="relative bg-[#0b0f24]/80 w-full max-w-2xl p-14 rounded-3xl border border-[#1e2550] shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 backdrop-blur-xl">

          <h2 className="text-4xl font-bold text-purple-400 text-center mb-4">
            Upload Document
          </h2>

          <p className="text-gray-500 text-center mb-10">
            Drag & analyze PDFs, Images, Word, Excel securely
          </p>

          <div className="bg-[#030309] border border-[#1b2246] rounded-2xl p-10 text-center mb-4">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full text-gray-300"
            />
          </div>

          {/* Show selected filename */}
          {file && (
            <p className="text-sm text-purple-300 text-center mb-6">
              Selected: {file.name}
            </p>
          )}

          <button
            onClick={processFile}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold text-lg shadow-[0_0_45px_rgba(168,85,247,0.4)] disabled:bg-gray-600"
          >
            {loading ? "Analyzing..." : "Analyze Document"}
          </button>

          <button
            onClick={() => setShowUpload(false)}
            className="mt-8 w-full text-gray-500 hover:text-gray-300 transition text-sm"
          >
            ← Go Back
          </button>

        </div>
      )}

    </div>
  );
}
