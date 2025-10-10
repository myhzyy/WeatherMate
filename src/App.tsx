import "./App.css";

import { useDaytime } from "./hooks/useDaytime";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";

export default function App() {
  const isDay = useDaytime();

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#2b3452] via-[#495678] to-[#7d87a1] flex flex-col justify-start items-center pt-12 relative overflow-hidden text-white">
      {/* Background image */}
      <div
        className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center transition-opacity duration-1000 ${
          isDay ? "opacity-70" : "opacity-15"
        }`}
      ></div>

      {/* Routes */}

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather/:city" element={<WeatherPage />} />
        </Routes>
      </div>
    </div>
  );
}
