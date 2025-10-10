import { useState } from "react";
import { useWeather } from "../hooks/useWeather";

export default function SearchButton() {
  const { fetchWeather } = useWeather();
  const [city, setCity] = useState("");

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      fetchWeather(city.trim());
      setCity("");
    }
  }

  return (
    <div className="rounded-[10px] w-[200px] h-[30px] flex items-center justify-center bg-white/10 border border-white/20 mb-[10px]">
      <input
        type="text"
        placeholder="Search your city..."
        className="bg-transparent text-white text-center w-full h-full outline-none placeholder-white"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
