export interface BatteryType {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: number | null;
  onchargingtimechange: number | null;
  ondischargingtimechange: number | null;
  onlevelchange: number | null;
}

export interface NetworkInformation {
  downlink: number;
  effectiveType: string;
  rtt: number;
}
