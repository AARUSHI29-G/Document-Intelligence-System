import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file");

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://localhost:8000/upload", formData);
    navigate("/summary", { state: res.data });
  };

  return (
    <div className="flex justify-center mt-20 px-6">
      <div className="bg-[#141721] p-10 rounded-2xl border border-gray-800 w-full max-w-xl shadow-xl">

        <h2 className="text-3xl font-semibold mb-6 text-purple-300">
          Upload Document
        </h2>

        <div className="border-2 border-dashed border-gray-700 p-8 rounded-xl text-center">
          <input
            type="file"
            className="mb-4"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <p className="text-gray-400">Supported: PDF, PNG, JPG</p>
        </div>

        <button
          onClick={handleUpload}
          className="w-full mt-6 bg-purple-600 hover:bg-purple-700 py-3 rounded-xl text-lg font-semibold transition-all"
        >
          Process Document
        </button>
      </div>
    </div>
  );
}
