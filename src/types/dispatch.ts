export type DispatchCallback = (...args: any[]) => any;
export type SystemDispatchResult = "success" | "err_systemOnly" | "err_unknownCaller";

export interface GlobalDispatchClient {
  socketId: string;
  userId: string;
  authorized: boolean;
  ip?: string;
}
