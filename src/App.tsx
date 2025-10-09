import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";

export default function App() {
  const [isDay, setIsDay] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDay(hour >= 6 && hour < 19);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#2b3452] via-[#495678] to-[#7d87a1] flex flex-col justify-start items-center pt-12 relative overflow-hidden text-white">
      {/* background image */}
      <div
        className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center transition-opacity duration-1000 ${
          isDay ? "opacity-70" : "opacity-15"
        }`}
      ></div>

      {/* Foreground content */}
      <div className="z-10 flex flex-col items-center w-full">
        <Header />
        <SummaryCard />
        <WeatherDetails />
        <HourlyForecast />
      </div>
    </div>
  );
}
