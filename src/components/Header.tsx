import { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import SearchButton from "./SearchButton";
import ForecastModel from "./ForecastModel";
import burgerMenu from "../assets/burger-menu.svg";
import favouritedHeart from "../assets/favourited-heart.svg";

export default function Header() {
  const { weather, loading } = useWeather();
  const [showModal, setShowModal] = useState(false);
  const [favouritedCities, setfavouritedCities] = useState<string[]>([]);
  const [showBurgerModal, setShowBurgerModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (stored) {
      try {
        setfavouritedCities(JSON.parse(stored));
      } catch {
        console.error("Error parsing favourites from localStorage");
      }
    }
  }, []);

  if (loading) {
    return <p className="text-white/70 mt-4">Loading weather data...</p>;
  }

  if (!weather) {
    return <p>No weather data yet...</p>;
  }

  const forecast = weather?.forecast?.forecastday || [];

  function buttonClick() {
    const cityName = weather?.location.name;
    if (!cityName) return;

    setfavouritedCities((prev) => {
      if (prev.includes(cityName)) return prev;
      const updatedFavourites = [...prev, cityName];
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  }

  function deleteFavouritedCity(cityToDelete: string) {
    const updated = favouritedCities.filter((city) => city !== cityToDelete);
    setfavouritedCities(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
  }

  return (
    <>
      {/* Search Button */}
      <div className="relative w-full flex justify-center items-center mt-5">
        <SearchButton />
        <button onClick={() => setShowBurgerModal((prev) => !prev)}>
          <img
            src={burgerMenu}
            alt="Menu"
            className="absolute right-4 top-4 w-6 h-6 invert brightness-0"
          />
        </button>
      </div>

      {/* Main Weather Info */}
      <div className="text-center w-[80%] text-white ">
        <div className="flex justify-center items-center gap-2 mb-2 relative">
          <h2 className="uppercase tracking-widest text-cyan-300">Home</h2>

          <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button
              className="transform transition-transform hover:scale-110"
              onClick={() => buttonClick()}
            >
              <img
                src={favouritedHeart}
                alt="Favourited heart"
                className="w-4 invert brightness-0"
              />
            </button>

            {/* Tooltip */}
            {showTooltip && (
              <div
                className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-white/90 text-black 
                           text-[11px] font-medium px-3 py-1 rounded-md shadow-md border border-white/30 
                           backdrop-blur-sm whitespace-nowrap animate-fade-in"
              >
                💾 Add this city to favourites
              </div>
            )}
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-1">{weather.location.name}</h1>
        <h2 className="text-6xl font-light mb-2">{weather.current.temp_c}°</h2>

        <p className="text-lg text-white/80 mb-1">
          {weather.current.condition.text}
        </p>

        <p className="text-m text-white">
          Feels like {weather.current.feelslike_c}°
        </p>

        <button
          className="mt-5 px-6 bg-white-30 border border-white/40 rounded-full text-white/90 text-lg 
             shadow-inner backdrop-blur-sm tracking-wide 
             transform transition-transform duration-200 hover:scale-105 cursor-pointer"
          onClick={() => setShowModal(!showModal)}
        >
          Weekly forecast 📌
        </button>
      </div>

      {/* Weekly forecast modal */}
      {showModal && (
        <ForecastModel
          forecast={forecast}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Favourites modal */}
      {showBurgerModal && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/60 backdrop-blur-sm">
          <div className="w-[90%] sm:w-[400px] rounded-2xl p-6 text-white shadow-2xl border border-white/10">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl mb-4">Your favourite cities</h1>
              <p
                onClick={() => setShowBurgerModal((prev) => !prev)}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                ✕
              </p>
            </div>

            {favouritedCities.length === 0 && (
              <p className="font-extralight">No cities favourited yet!</p>
            )}

            {favouritedCities.map((city, index) => {
              return (
                <div
                  key={index}
                  className="border border-white/30 rounded-[10px] p-2.5 mb-2 bg-gray-700 flex justify-between"
                >
                  <p>{city}</p>
                  <button
                    onClick={() => deleteFavouritedCity(city)}
                    className="hover:text-red-400 transition"
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
