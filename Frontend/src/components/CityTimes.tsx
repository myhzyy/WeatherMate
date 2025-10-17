import { useEffect, useState } from "react";
import { getCityWeatherData } from "../utils/getCityWeatherData.";
import type { CityWeather } from "../types/weather";

export default function CityTimes() {
  const [data, setData] = useState<CityWeather>({
    london: { time: "" },
    paris: { time: "" },
    tokyo: { time: "" },
  });

  useEffect(() => {
    getCityWeatherData(setData);

    const interval = setInterval(() => getCityWeatherData(setData), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row gap-8">
      {Object.entries(data).map(([city, info]) => (
        <div key={city} className="text-center">
          <h2 className="text-sm font-light text-white/90 capitalize">
            {city}
          </h2>
          <p className="text-xs text-white/70 mb-1">{info.time}</p>

          {info.icon && (
            <img
              src={info.icon}
              alt={info.condition}
              className="w-6 h-6 mx-auto"
            />
          )}
          {info.temp && (
            <p className="text-sm text-white/80 font-small">{info.temp}°C</p>
          )}
        </div>
      ))}
    </div>
  );
}
