export default function WeatherDetails() {
  const weather = {
    location: {
      name: "Kingston Upon Hull",
      region: "East Riding of Yorkshire",
      country: "United Kingdom",
      localtime: "2025-10-09 19:13",
    },
    current: {
      temp_c: 15.4,
      feelslike_c: 15.4,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
      },
      wind_kph: 14.4,
      humidity: 77,
      is_day: 0,
    },
  };

  return (
    <div className="w-[80%] mt-6 p-6 rounded-[16px] bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col items-center text-center">
      {/* Weather Icon */}
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        className="w-[64px] h-[64px] mb-3"
      />

      {/* Condition Text */}
      <h2 className="text-xl font-semibold mb-6">
        {weather.current.condition.text}
      </h2>

      {/* Weather Details Row */}
      <div className="flex justify-around w-full text-sm">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{weather.current.humidity}%</p>
        </div>

        <div>
          <p className="font-semibold">Wind</p>
          <p>{weather.current.wind_kph} km/h</p>
        </div>

        <div>
          <p className="font-semibold">Feels Like</p>
          <p>{Math.round(weather.current.feelslike_c)}°C</p>
        </div>
      </div>
    </div>
  );
}
