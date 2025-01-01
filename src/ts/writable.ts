import { get, writable, type Writable } from "svelte/store";

type ReadableStore<T> = Writable<T> & { get: () => T };

export function Store<T>(initial?: T): ReadableStore<T> {
  const store = writable<T>(initial);

  return { ...store, get: () => get(store) };
}
