import { sortByKey } from "$ts/util";
import Everything from "./Pages/Everything.svelte";
import Home from "./Pages/Home.svelte";
import Installed from "./Pages/Installed.svelte";
import MadeByYou from "./Pages/MadeByYou.svelte";
import ManageStoreItem from "./Pages/ManageStoreItem.svelte";
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
        const updates = await process.distrib.checkForAllUpdates(installed);

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
  [
    "manageStoreItem",
    {
      name: "Manage Store Item",
      icon: "wrench",
      hidden: true,
      content: ManageStoreItem as any,
      async props(process, { id }) {
        const published = await process.distrib.getPublishedPackages();
        const isOwnedBy = !!published.filter((pkg) => pkg._id === id)[0];

        if (!isOwnedBy) {
          return {};
        } else return { pkg: await process.distrib.getStoreItem(id) };
      },
    },
  ],
  [
    "everything",
    {
      name: "Everything",
      icon: "layout-grid",
      groupName: "Apps",
      content: Everything,
      async props(process) {
        return { all: await process.distrib.getAllStoreItems() };
      },
    },
  ],
]);
