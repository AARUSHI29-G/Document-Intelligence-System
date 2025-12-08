import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#11131c] border-b border-gray-800">
      <h1 className="text-2xl font-bold text-purple-400">DocIntelligence</h1>

      <div className="space-x-8 text-lg">
        <Link
          to="/"
          className="hover:text-purple-300 transition-all duration-200"
        >
          Upload
        </Link>

        <Link
          to="/dashboard"
          className="hover:text-purple-300 transition-all duration-200"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
