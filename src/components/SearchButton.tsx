import { useWeather } from "../hooks/useWeather";

export default function SearchButton() {
  const { weather, fetchWeather } = useWeather();

  console.log(weather);

  return (
    <div className="rounded-[10px] w-[200px] h-[30px] flex items-center justify-center bg-white/10 border border-white/20 mb-[10px]">
      <input
        type="text"
        placeholder="Search your city..."
        className="bg-transparent text-white text-center w-full h-full outline-none placeholder-white"
      />
    </div>
  );
}
