import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && city.trim()) {
      navigate(`/weather/${city.trim()}`);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-white">
      <h1 className="text-3xl mb-6 font-light tracking-wide">
        Search your city 🌍
      </h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleSearch}
        className="rounded-[10px] w-[250px] h-[40px] text-center bg-white/10 border border-white/20 text-white placeholder-white outline-none"
      />
    </div>
  );
}
