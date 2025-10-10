import { createContext, useState, useEffect } from "react";
import type {
  WeatherContextType,
  WeatherData,
  WeatherProviderProps,
} from "../types/weather";

const WeatherContext = createContext<WeatherContextType | null>(null);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity") || "London";
    fetchWeather(lastCity);
  }, []);

  async function fetchWeather(city: string) {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=8e7e975c4aab4a8fb05180223250910&q=${city}&days=1`
      );

      if (!res.ok) {
        throw new Error("Not a valid city!");
      }

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setWeather(data);
      setError(null);
    } catch (err) {
      const error = err as Error;
      setError(error.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather("London");
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, fetchWeather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
