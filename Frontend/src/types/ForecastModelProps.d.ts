export type ForecastDay = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};

export type ForecastProps = {
  forecast: ForecastDay[];
  onClose: () => void;
};
