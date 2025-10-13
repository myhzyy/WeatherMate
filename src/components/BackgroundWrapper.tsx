import { useDaytime } from "../hooks/useDaytime";
import type { WithChildren } from "../types/propsChildren";

export default function BackgroundWrapper({ children }: WithChildren) {
  const isDay = useDaytime();

  const IMAGE_URL =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#2b3452] via-[#495678] to-[#7d87a1] flex flex-col justify-start items-center relative overflow-hidden text-white">
      {/* Background image */}
      <div
        style={{
          backgroundImage: `url(${IMAGE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "opacity 1s ease",
          opacity: isDay ? 0.7 : 0.15,
        }}
        className="absolute inset-0"
      ></div>

      {/* Page content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
