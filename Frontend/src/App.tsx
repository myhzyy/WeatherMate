import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import AppHeader from "./components/AppHeader";
import BackgroundWrapper from "./components/BackgroundWrapper";

export default function App() {
  return (
    <>
      <AppHeader />

      {/* Routes */}
      <BackgroundWrapper>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather/:city" element={<WeatherPage />} />
          </Routes>
        </div>
      </BackgroundWrapper>
    </>
  );
}
