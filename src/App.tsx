import React from "react";
import "./App.css";

export default function App() {
  // Mock WeatherAPI response
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
    /// main container
    <div className="h-screen w-full bg-gradient-to-b from-slate-700 to-slate-900 flex flex-col justify-start items-center pt-12">
      {/* Weather Header */}
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

      {/* cloudy skies section */}
      <div className="w-[80%] mt-6 p-4 rounded-[12px] text-center text-white bg-white/10 border border-white/20">
        <p className="text-[15px] ">
          Cloudy skies expected throughout the evening. Winds around 14 km/h
          with humidity near 77%.
        </p>
      </div>

      {/* weather section */}

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

      {/* weather section */}

      <div className="w-[80%] border-2 border-red-500 text-white flex ">
        <p>13</p>
      </div>
    </div>
  );
}
