export function isDaytime() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 19;
}
