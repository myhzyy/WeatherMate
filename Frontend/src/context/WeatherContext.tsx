import { createContext, useState, useEffect, useCallback } from "react";
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
  const [days, setDays] = useState<number>(7);

  const fetchWeather = useCallback(
    async (city: string) => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `http://localhost:5050/api/weather?city=${city}&days=${days}`
        );

        if (!res.ok) throw new Error("Not a valid city!");

        const data = await res.json();

        if (data.error) throw new Error(data.error.message);

        setWeather(data);
        setError(null);
        localStorage.setItem("lastCity", city);
      } catch (err) {
        const error = err as Error;
        setError(error.message || "Something went wrong. Try again.");
      } finally {
        setLoading(false);
      }
    },
    [days]
  );

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity") || "London";
    fetchWeather(lastCity);
  }, [fetchWeather]);

  return (
    <WeatherContext.Provider
      value={{ weather, fetchWeather, loading, error, days, setDays }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
