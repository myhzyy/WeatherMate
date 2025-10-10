import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import SearchButton from "./SearchButton";

export default function Header() {
  const { weather, loading } = useWeather();
  const [showModal, setShowModal] = useState(false);

  if (loading) {
    return <p className="text-white/70 mt-4">Loading weather data...</p>;
  }

  if (!weather) {
    return <p>No weather data yet...</p>;
  }

  return (
    <>
      {/* Search Button */}

      <SearchButton />

      <div className="text-center w-[80%] text-white ">
        <h2 className="uppercase tracking-widest text-cyan-300 mb-2">Home</h2>

        <h1 className="text-2xl font-semibold mb-1">{weather.location.name}</h1>

        <h2 className="text-6xl font-light mb-2">{weather.current.temp_c}°</h2>

        <p className="text-lg text-white/80 mb-1">
          {weather.current.condition.text}
        </p>

        <p className="text-m text-white">
          Feels like {weather.current.feelslike_c}°
        </p>

        <button
          className="text-white/80 text-2xl"
          onClick={() => setShowModal(!showModal)}
        >
          14 days tracking 📌
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-900/20 backdrop-blur-sm">
          {/* Modal container */}
          <div className="w-[480px] h-[320px] rounded-[20px] bg-slate-800/40 backdrop-blur-xl border border-white/20 shadow-lg flex flex-col items-center p-6 relative text-white">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-5 text-white/70 hover:text-cyan-300 text-lg transition-colors"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold text-cyan-300 mb-5 tracking-wide">
              7-Day Forecast
            </h2>

            {/* Scroll container */}
            <div className="w-full flex flex-row items-center gap-4 overflow-x-auto scroll-smooth px-2">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[110px] h-[140px] rounded-[16px] border border-white/20 bg-white/10 shadow-md backdrop-blur-lg flex flex-col items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-200 ease-in-out flex-shrink-0"
                >
                  <p className="text-sm text-white/80 mb-1">{`Oct ${
                    10 + i
                  }`}</p>
                  <p className="text-3xl mb-1">
                    {["☀️", "🌦️", "⛅", "🌧️", "🌤️", "🌩️", "☁️"][i % 7]}
                  </p>
                  <p className="text-white/90 text-sm">{`${18 - i}° / ${
                    10 + (i % 3)
                  }°`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
