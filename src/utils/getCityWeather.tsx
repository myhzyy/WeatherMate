export async function getCityWeather(city: string) {
  const res = await fetch(`/api/weather?city=${city}`);
  if (!res.ok) throw new Error(`Failed to fetch weather for ${city}`);

  const data = await res.json();
  return {
    temp: data.current.temp_c,
    condition: data.current.condition,
    icon: data.current.icon,
  };
}
