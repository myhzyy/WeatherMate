import { getCityWeather } from "./getCityWeather";
import type { CityWeather } from "../types/weather";

export async function getCityWeatheData(
  setData: React.Dispatch<React.SetStateAction<CityWeather>>
) {
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
}
