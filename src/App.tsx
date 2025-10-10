import "./App.css";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";
import { useDaytime } from "./hooks/useDaytime";
import { useWeather } from "./hooks/useWeather";

export default function App() {
  const isDay = useDaytime();
  const { loading, error } = useWeather();

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#2b3452] via-[#495678] to-[#7d87a1] flex flex-col justify-start items-center pt-12 relative overflow-hidden text-white">
      {/* background image */}
      <div
        className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center transition-opacity duration-1000 ${
          isDay ? "opacity-70" : "opacity-15"
        }`}
      ></div>

      {loading ? (
        <div className="z-10 flex flex-col items-center justify-center h-full text-white/90">
          <p className="text-lg animate-pulse">Loading weather data...</p>
        </div>
      ) : error ? (
        <div className="z-100 flex flex-col items-center justify-center h-full text-white">
          <p className="text-lg font-semibold">{error}</p>
        </div>
      ) : (
        // Foreground content
        <div className="z-10 flex flex-col items-center w-full">
          <Header />
          <SummaryCard />
          <WeatherDetails />
          <HourlyForecast />
        </div>
      )}
    </div>
  );
}
