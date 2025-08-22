export interface ElevationData {
  what: string;
  image: string;
  title: string;
  description: string;
  level: ElevationLevel;
}

export enum ElevationLevel {
  low,
  medium,
  high,
}
