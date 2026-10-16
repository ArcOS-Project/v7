import type { ReadableStore } from "$types/shared/writable";
import { get, writable } from "svelte/store";
import { getKMod } from "./env";
import { I18n } from "./kernel/mods/i18n";

export function Store<T>(initial?: T): ReadableStore<T> {
  function translateValue(v: any) {
    if (typeof v !== "string") return v;

    const i18n = getKMod<I18n>("i18n", true);

    return i18n?.translateString(v) || v;
  }

  const store = writable<T>(initial);
  const obj = {
    ...store,
    get: () => get(store),
    set: (v: any) => store.set(translateValue(v)),
    update: (v: (v: any) => any) => store.set(translateValue(v(get(store)))),
  };

  const fn = () => obj.get();

  fn.get = obj.get;
  fn.set = obj.set;
  fn.update = obj.update;
  fn.subscribe = obj.subscribe;

  return fn;
}
