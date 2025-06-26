import { sortByKey } from "$ts/util";
import Home from "./Pages/Home.svelte";
import Installed from "./Pages/Installed.svelte";
import MadeByYou from "./Pages/MadeByYou.svelte";
import type { StorePage, StorePages } from "./types";

export const appStorePages: StorePages = new Map<string, StorePage>([
  [
    "home",
    {
      name: "Home",
      groupName: "The basics",
      icon: "house",
      content: Home as any,
      async props(process) {
        const all = await process.distrib.getAllStoreItems();
        let recentlyAdded = [...all.reverse()];
        let popular = [...sortByKey(all, "installCount")].reverse();
        let mostPopular = await process.distrib.getStoreItem(popular[0]._id);

        recentlyAdded.length = 6;
        popular.length = 6;

        return { all, recentlyAdded, popular, mostPopular };
      },
    },
  ],
  [
    "installed",
    {
      name: "Installed",
      icon: "download",
      content: Installed as any,
      async props(process) {
        const installed = await process.distrib.loadInstalledList();
        const updates = await process.distrib.checkForAllUpdates();

        return { installed, updates };
      },
    },
  ],
  [
    "madeByYou",
    {
      name: "Made by you",
      icon: "user",
      content: MadeByYou as any,
      async props(process) {
        const published = await process.distrib.getPublishedPackages();
        const unblocked = published.filter((i) => !i.blocked);
        const blocked = published.filter((i) => i.blocked);

        return { published, unblocked, blocked };
      },
    },
  ],
]);
