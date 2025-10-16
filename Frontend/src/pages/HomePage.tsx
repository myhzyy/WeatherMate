import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [city, setCity] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  // 🧠 Fetch daily quote from ZenQuotes
  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch(
          "https://api.allorigins.win/get?url=https://zenquotes.io/api/random"
        );

        if (!res.ok) throw new Error("Failed to fetch quote");

        const resData = await res.json();
        const parsedData = JSON.parse(resData.contents);

        setQuote(parsedData[0].q);
        setAuthor(parsedData[0].a);
      } catch (err) {
        console.error("Error fetching quote:", err);
        setQuote("Keep your face always toward the sunshine 🌞");
        setAuthor("— Walt Whitman");
      }
    }

    fetchQuote();
  }, []);

  // 🔍 Search logic
  function handleSearch() {
    if (city.trim()) navigate(`/weather/${city.trim()}`);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-white px-4">
      {/* Header */}
      <h1 className="text-3xl mb-6 font-light tracking-wide">
        Search your city 🌍
      </h1>

      {/* Input box */}
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="rounded-[10px] w-[240px] h-[38px] text-center bg-white/10 border border-white/20 text-white placeholder-white outline-none backdrop-blur-md focus:ring-1 focus:ring-white/40 transition-all"
      />

      {/* Smaller glass button */}
      <button
        onClick={handleSearch}
        className="mt-3 r px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-xs font-light backdrop-blur-md hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.97]"
      >
        🔍 Search
      </button>

      {/* Quote section */}
      <div className="w-[80%] mt-8 text-center font-extralight italic text-sm text-white/80">
        <p className="leading-relaxed">“{quote}”</p>
        <p className="mt-2 text-white/60 text-xs">— {author}</p>
      </div>
    </div>
  );
}
