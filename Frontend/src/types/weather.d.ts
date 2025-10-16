export type WeatherProviderProps = {
  children: ReactNode;
};
export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
    tz_id: string;
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
      hour: {
        time: string;
        temp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      }[];
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

export type SingleCityWeather = {
  time: string;
  temp?: number;
  condition?: string;
  icon?: string;
};

export type CityWeather = {
  london: SingleCityWeather;
  paris: SingleCityWeather;
  tokyo: SingleCityWeather;
};
