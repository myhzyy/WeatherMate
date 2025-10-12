import { Link } from "react-router-dom";
import CityTimes from "./CityTimes";

export default function AppHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-row items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <h1 className="text-[20px] font-semibold tracking-wide text-white">
            WeatherMate
          </h1>
          <span className="text-1xl">🌧️</span>
        </Link>

        {/* City Component */}
        <CityTimes />
      </div>
    </header>
  );
}
