export default function Header() {
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
    <div className="text-center w-[80%] text-white ">
      <h2 className="uppercase tracking-widest text-cyan-300 mb-2">Home</h2>

      <h1 className="text-2xl font-semibold mb-1">{weather.location.name}</h1>

      <h2 className="text-6xl font-light mb-2">{weather.current.temp_c}°</h2>

      <p className="text-lg text-gray-300 mb-1">
        {weather.current.condition.text}
      </p>

      <p className="text-sm text-gray-400">
        Feels like {weather.current.feelslike_c}°
      </p>
    </div>
  );
}
