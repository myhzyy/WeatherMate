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
    <div className=" w-full flex flex-row justify-around items-center ">
      <Link to="/">
        <div className="flex gap-1">
          <h1 className="text-lg font-semibold">WeatherMate</h1>
          <p className="flex items-center">🌧️</p>
        </div>
      </Link>

      <div className="flex flex-row gap-6 mt-[10px]">
        <div className="text-center">
          <h2 className="font-light">London</h2>
          <p className="text-sm text-white/90">{times.london}</p>
        </div>
        <div className="text-center">
          <h2 className="font-light">Paris</h2>
          <p className="text-sm text-white/90">{times.paris}</p>
        </div>
        <div className="text-center">
          <h2 className="font-light">Toyko</h2>
          <p className="text-sm text-white/90">{times.tokyo}</p>
        </div>
      </div>
    </div>
  );
}
