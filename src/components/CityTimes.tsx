import { useEffect, useState } from "react";

export default function CityTimes() {
  const [times, setTimes] = useState({
    london: "",
    paris: "",
    tokyo: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      setTimes({
        london: new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
        }),
        paris: new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/Paris",
          hour: "2-digit",
          minute: "2-digit",
        }),
        tokyo: new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Tokyo",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row gap-8">
      <div className="text-center">
        <h2 className="text-sm font-light text-white/90">London</h2>
        <p className="text-xs text-white/70">{times.london}</p>
      </div>
      <div className="text-center">
        <h2 className="text-sm font-light text-white/90">Paris</h2>
        <p className="text-xs text-white/70">{times.paris}</p>
      </div>
      <div className="text-center">
        <h2 className="text-sm font-light text-white/90">Tokyo</h2>
        <p className="text-xs text-white/70">{times.tokyo}</p>
      </div>
    </div>
  );
}
