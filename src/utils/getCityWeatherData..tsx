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
      fetch(`/api/weather?city=London`).then((r) => r.json()),
      fetch(`/api/weather?city=Paris`).then((r) => r.json()),
      fetch(`/api/weather?city=Tokyo`).then((r) => r.json()),
    ]);

    setData({
      london: {
        time: timeNow.london,
        temp: london.current.temp_c,
        condition: london.current.condition,
        icon: london.current.icon,
      },
      paris: {
        time: timeNow.paris,
        temp: paris.current.temp_c,
        condition: paris.current.condition,
        icon: paris.current.icon,
      },
      tokyo: {
        time: timeNow.tokyo,
        temp: tokyo.current.temp_c,
        condition: tokyo.current.condition,
        icon: tokyo.current.icon,
      },
    });
  } catch (err) {
    console.error("Failed to fetch city weather:", err);
  }
}
