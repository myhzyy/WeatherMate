const API_KEY = "8e7e975c4aab4a8fb05180223250910";

export async function getCityWeather(city: string) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );
  if (!res.ok) throw new Error(`Failed to fetch weather for ${city}`);
  const data = await res.json();
  return {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
}
