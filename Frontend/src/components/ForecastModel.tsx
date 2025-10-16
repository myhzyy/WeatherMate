import { useWeather } from "../hooks/useWeather";
import type { ForecastProps } from "../types/ForecastModelProps";

export default function ForecastModel({ forecast, onClose }: ForecastProps) {
  const { days, setDays } = useWeather();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-900/20 backdrop-blur-sm">
      {/* Modal container */}
      <div className="w-[480px] h-[320px] rounded-[20px] bg-slate-800/40 backdrop-blur-xl border border-white/20 shadow-lg flex flex-col items-center p-6 relative text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-white/70 hover:text-cyan-300 text-lg transition-colors"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-cyan-300 mb-5 tracking-wide">
          Forecast
        </h2>

        <select
          defaultValue={days}
          className="mb-5 bg-transparent border border-white/30 text-white text-sm rounded-md px-3 py-1 outline-none cursor-pointer hover:border-cyan-300 transition"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDays(Number(e.target.value))
          }
        >
          <option value="7">7 days</option>
          <option value="14">14 days</option>
        </select>

        {/* Scroll container */}
        {/* Scroll container */}
        <div className="w-full flex flex-row items-center gap-4 overflow-x-auto scroll-smooth px-2 no-scrollbar">
          {forecast.map((day, index) => (
            <div
              key={index}
              className="min-w-[110px] h-[140px] border border-white/20 rounded-[16px] bg-white/10 shadow-md backdrop-blur-lg flex flex-col items-center justify-center hover:scale-105 ease-in-out transition-transform"
            >
              <p className="text-sm text-white/80 mb-1">
                {new Date(day.date).toLocaleDateString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                })}
              </p>
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                className="w-[40px] h-[40px] mb-1"
              />
              <p className="text-white/90 text-sm font-semibold">
                {Math.round(day.day.maxtemp_c)}° /{" "}
                {Math.round(day.day.mintemp_c)}°
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
