export default function HourlyForecase() {
  return (
    <div className="w-[80%] mt-6 p-4 rounded-[16px] bg-white/10 backdrop-blur-md border border-white/20 text-white ">
      <div className="flex justify-between text-center ">
        {[
          {
            time: "Now",
            temp: 15,
            icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
          },
          {
            time: "20",
            temp: 14,
            icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
          },
          {
            time: "21",
            temp: 13,
            icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
          },
          {
            time: "22",
            temp: 13,
            icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
          },
          {
            time: "23",
            temp: 12,
            icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
          },
          {
            time: "00",
            temp: 12,
            icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
          },
          {
            time: "01",
            temp: 11,
            icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
          },
        ].map((hour, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center "
          >
            {/* Time */}
            <p className="text-sm text-gray-300 mb-2">{hour.time}</p>

            {/* Icon */}
            <img
              src={hour.icon}
              alt="weather icon"
              className="w-[32px] h-[32px] mb-2"
            />

            {/* Temperature */}
            <p className="text-sm font-medium">{hour.temp}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
