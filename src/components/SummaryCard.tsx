import { useWeather } from "../hooks/useWeather";

export default function SummaryCard() {
  const weather = useWeather();

  if (!weather) {
    return (
      <div className="w-[80%] mt-6 p-4 rounded-[12px] text-center text-white bg-white/10 border border-white/20">
        <p>Loading weather summary...</p>
      </div>
    );
  }

  const condition = weather.current.condition.text;
  const wind = weather.current.wind_kph;
  const humidity = weather.current.humidity;

  return (
    <div className="w-[80%] mt-6 p-4 rounded-[12px] text-center text-white bg-white/10 border border-white/20">
      <p className="text-[15px]">
        {condition} expected today. Winds around {wind} km/h with humidity near
        {humidity}%.
      </p>
    </div>
  );
}
