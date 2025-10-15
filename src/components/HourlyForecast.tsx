import { useWeather } from "../hooks/useWeather";

export default function HourlyForecast() {
  const { weather } = useWeather();

  if (!weather) {
    return (
      <div className="w-[80%] mt-6 p-4 rounded-[16px] bg-white/10 backdrop-blur-md border border-white/20 text-white text-center">
        <p>Loading hourly forecast...</p>
      </div>
    );
  }

  const hours = weather.forecast?.forecastday?.[0]?.hour?.slice(0, 7) || [];

  console.log(hours);

  return (
    <div className="w-[80%] mt-6 p-4 rounded-[16px] bg-white/10 backdrop-blur-md border border-white/20 text-white">
      <div className="flex justify-between text-center">
        {hours.map((hour, index) => {
          const timeLabel =
            index === 0 ? "Now" : hour.time.split(" ")[1].slice(0, 2);

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p className="text-sm text-grey-300 mb-2">{timeLabel}</p>
              <img
                src={hour.condition.icon}
                alt="weather conditions"
                className="w-[32px] h-[32px] mb-2"
              />

              <p className="text-sm font-mediuk">{Math.round(hour.temp_c)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
