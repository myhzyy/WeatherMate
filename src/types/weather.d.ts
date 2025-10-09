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

  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        avghumidity: number;
        maxwind_kph: number;
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
