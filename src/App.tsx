import React from "react";
import "./App.css";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";

export default function App() {
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
