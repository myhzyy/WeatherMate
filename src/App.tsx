import React from "react";
import "./App.css";
import Header from "./components/Header";
import SummaryCard from "./components/Summary.Card";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";

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
      <Header />

      <SummaryCard />

      <WeatherDetails />

      <HourlyForecast />
    </div>
  );
}
