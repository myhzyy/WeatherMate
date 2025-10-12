import { useEffect, useState } from "react";
import { getCityWeather } from "../utils/getCityWeather";
import type { CityWeather } from "../types/weather";

export default function CityTimes() {
  const [data, setData] = useState<CityWeather>({
    london: { time: "" },
    paris: { time: "" },
    tokyo: { time: "" },
  });

  useEffect(() => {
    const updateData = async () => {
      const timeNow = {
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
      };

      try {
        const [london, paris, tokyo] = await Promise.all([
          getCityWeather("London"),
          getCityWeather("Paris"),
          getCityWeather("Tokyo"),
        ]);

        setData({
          london: { time: timeNow.london, ...london },
          paris: { time: timeNow.paris, ...paris },
          tokyo: { time: timeNow.tokyo, ...tokyo },
        });
      } catch (err) {
        console.error("Failed to fetch city weather:", err);
      }
    };

    updateData();
    const interval = setInterval(updateData, 60000);
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
