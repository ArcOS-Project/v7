import { get, writable, type Writable } from "svelte/store";

export type ReadableStore<T> = Writable<T> & { (): T; get: () => T };
export type BooleanStore = ReadableStore<boolean>;
export type StringStore = ReadableStore<string>;
export type NumberStore = ReadableStore<number>;

export function Store<T>(initial?: T): ReadableStore<T> {
  const store = writable<T>(initial);
  const obj = { ...store, get: () => get(store) };
  const fn = () => obj.get();

  fn.get = obj.get;
  fn.set = obj.set;
  fn.update = obj.update;
  fn.subscribe = obj.subscribe;

  return fn;
}
