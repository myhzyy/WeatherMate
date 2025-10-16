import { useState, useEffect } from "react";
import { isDaytime } from "../utils/isDayTime";

export function useDaytime() {
  const [isDay, setIsDay] = useState(isDaytime());

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDay(isDaytime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return isDay;
}
