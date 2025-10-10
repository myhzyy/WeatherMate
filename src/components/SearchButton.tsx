import { useState, useEffect } from "react";
import { useWeather } from "../hooks/useWeather";

export default function SearchButton() {
  const { fetchWeather, error } = useWeather();
  const [city, setCity] = useState("");
  const [showToast, setShowToast] = useState(false);

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      fetchWeather(city.trim());
      setCity("");
    }
  }

  useEffect(() => {
    if (error) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Input */}
      <div className="rounded-[10px] w-[200px] h-[30px] flex items-center justify-center bg-white/10 border border-white/20 mb-[10px]">
        <input
          type="text"
          placeholder="Search another city..."
          className="bg-transparent text-white text-center w-full h-full outline-none placeholder:text-sm placeholder-white"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>

      {/* Error toast */}
      {showToast && error && (
        <div className="absolute top-[45px] bg-red-600/90 text-white text-sm px-4 py-2 rounded-md shadow-lg animate-fadeIn mr-6">
          ❌ {error}
        </div>
      )}
    </div>
  );
}
