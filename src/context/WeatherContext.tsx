import { createContext, useState, useEffect } from "react";
import type {
  WeatherContextType,
  WeatherData,
  WeatherProviderProps,
} from "../types/weather";

const WeatherContext = createContext<WeatherContextType | null>(null);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  async function fetchWeather(city: string) {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=8e7e975c4aab4a8fb05180223250910&q=${city}&days=1`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error("Failed to fetch weather data", err);
    }
  }

  useEffect(() => {
    fetchWeather("London");
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
