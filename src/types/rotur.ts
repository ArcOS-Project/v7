export interface RoturConnectionArguments {
  DESIGNATION: string;
  SYSTEM: string;
  VERSION: string;
}

export interface RoturLoginArguments {
  USERNAME: string;
  PASSWORD: string;
}

export interface RoturPacket<T = any> {
  cmd?: string;
  val: T;
  mode: string;
  origin: any;
  client: string;
  source: string;
  timestamp: string | number;
  listener: string;
  payload: {
    key: string;
    value: any;
  };
  rooms?: string[];
  source_command: string;
}
