export type WeatherProviderProps = {
  children: ReactNode;
};
export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
    is_day: number;
  };
  forecast?: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }[];
  };
}

export interface WeatherContextType {
  weather: WeatherData | null;
  fetchWeather: (city: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  days: number;
  setDays: React.Dispatch<React.SetStateAction<number>>;
}
