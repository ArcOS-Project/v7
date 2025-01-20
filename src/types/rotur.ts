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

export interface SendMessageArguments {
  PAYLOAD: string;
  SOURCE: string;
  TARGET: string;
  USER: string;
}

export interface TargetAggregationArguments {
  TARGET: string;
  DATA: string;
}

export interface UserDesignationArguments {
  DESIGNATION: string;
}

export interface UsernameConectedArguments {
  USER: string;
}

export interface UserConnectedArguments {
  USER: string;
  DESIGNATION: string;
}

export interface SetSyncedVariableArguments {
  USER: string;
  KEY: string;
  VALUE: any;
}
export interface GetOrDeleteSyncedVariableArguments {
  USER: string;
  KEY: string;
}

export interface SendMailArguments {
  SUBJECT: string;
  MESSAGE: string;
  TO: string;
}
