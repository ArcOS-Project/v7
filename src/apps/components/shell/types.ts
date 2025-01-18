export type WeatherInformation =
  | {
      temperature: number;
      condition: string;
      code: number;
      className: string;
      gradient:
        | {
            start: string;
            end: string;
          }
        | undefined;
      icon: string;
      iconColor: string;
      isNight: boolean;
    }
  | false;
