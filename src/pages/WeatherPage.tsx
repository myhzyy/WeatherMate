import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import WeatherDetails from "../components/WeatherDetails";
import HourlyForecast from "../components/HourlyForecast";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useWeather } from "../hooks/useWeather";

export default function WeatherPage() {
  const { city } = useParams();
  const { weather, fetchWeather } = useWeather();

  useEffect(() => {
    if (city) fetchWeather(city);
  }, [city]);

  if (!weather)
    return <p className="text-center mt-10">No weather data available</p>;

  return (
    <div
      className="
  flex flex-col items-center w-full
  pt-[90px] sm:pt-[100px] md:pt-[110px]
  max-[400px]:pt-[300px]
"
    >
      <Header />
      <SummaryCard />
      <WeatherDetails />
      <HourlyForecast />
    </div>
  );
}
