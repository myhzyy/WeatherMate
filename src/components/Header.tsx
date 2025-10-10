import { useWeather } from "../hooks/useWeather";
import SearchButton from "./SearchButton";

export default function Header() {
  const { weather, loading } = useWeather();

  if (loading) {
    return <p className="text-white/70 mt-4">Loading weather data...</p>;
  }

  if (!weather) {
    return <p>No weather data yet...</p>;
  }

  console.log(weather);

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
        <p className="text-white/80 text-2xl">14 days tracking 📌</p>
      </div>
    </>
  );
}
