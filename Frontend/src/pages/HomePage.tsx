import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

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

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && city.trim()) {
      navigate(`/weather/${city.trim()}`);
    }
  }

  return (
    <>
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
        <div className="w-[80%] mt-6 text-center font-extralight italic text-sm text-white/80">
          <p className="leading-relaxed">“{quote}”</p>
          <p className="mt-2 text-white/60 text-xs">— {author}</p>
        </div>
      </div>
    </>
  );
}
