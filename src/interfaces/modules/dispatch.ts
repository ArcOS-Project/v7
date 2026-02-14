import type { SystemDispatchResult } from "$types/dispatch";

export interface ISystemDispatch {
  subscribers: Record<string, Record<number, (data: any) => void>>;

  subscribe<T = any[]>(event: string, callback: (data: T) => void): number;
  unsubscribeId(event: string, id: number): void;
  discardEvent(event: string): void;
  dispatch<T = any[]>(caller: string, data?: T, system?: boolean): SystemDispatchResult;
}
