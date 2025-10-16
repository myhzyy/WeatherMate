export function isDaytime(): boolean {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 19;
}
