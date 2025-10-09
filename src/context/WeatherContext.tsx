import { createContext, useState, useEffect } from "react";
import type { WeatherData, WeatherProviderProps } from "../types/weather.d";

const WeatherContext = createContext<WeatherData | null>(null);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=8e7e975c4aab4a8fb05180223250910&q=London&days=1"
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
