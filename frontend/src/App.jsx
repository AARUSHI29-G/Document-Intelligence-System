import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";           // Upload page
import Summary from "./pages/Summary";     // NEW
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0d0f17] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />            {/* Upload page */}
          <Route path="/summary" element={<Summary />} />  {/* After processing */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

