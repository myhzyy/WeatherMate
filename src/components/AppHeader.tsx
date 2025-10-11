import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AppHeader() {
  const [times, setTimes] = useState({
    london: "",
    paris: "",
    tokyo: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      setTimes({
        london: new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
        }),
        paris: new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/Paris",
          hour: "2-digit",
          minute: "2-digit",
        }),
        tokyo: new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Tokyo",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-row items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <h1 className="text-1xl font-semibold tracking-wide text-white">
            WeatherMate
          </h1>
          <span className="text-1xl">🌧️</span>
        </Link>

        {/* City Times */}
        <div className="flex flex-row gap-8">
          <div className="text-center">
            <h2 className="text-sm font-light text-white/90">London</h2>
            <p className="text-xs text-white/70">{times.london}</p>
          </div>
          <div className="text-center">
            <h2 className="text-sm font-light text-white/90">Paris</h2>
            <p className="text-xs text-white/70">{times.paris}</p>
          </div>
          <div className="text-center">
            <h2 className="text-sm font-light text-white/90">Tokyo</h2>
            <p className="text-xs text-white/70">{times.tokyo}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
