import { Daemon } from "$ts/server/user/daemon";
import { groupByTimeFrame, sortByKey } from "$ts/util";
import type { StoreItem } from "$types/package";
import Everything from "./Pages/Everything.svelte";
import Home from "./Pages/Home.svelte";
import Installed from "./Pages/Installed.svelte";
import MadeByYou from "./Pages/MadeByYou.svelte";
import ManageStoreItem from "./Pages/ManageStoreItem.svelte";
import OfficialApps from "./Pages/OfficialApps.svelte";
import RecentlyAdded from "./Pages/RecentlyAdded.svelte";
import SearchResults from "./Pages/SearchResults.svelte";
import UserPage from "./Pages/UserPage.svelte";
import ViewStoreItem from "./Pages/ViewStoreItem.svelte";
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
        let popular: StoreItem[] = [...sortByKey(all, "installCount")]
          .reverse()
          .filter((p) => !p.pkg.type || p.pkg.type === "app");
        let mostPopular = popular[0];

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
        const installed = await process.distrib.loadInstalledStoreItemList();
        const updates = await process.distrib.checkForAllStoreItemUpdates(installed);

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
        const published = await process.distrib.publishing_getPublishedPackages();
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
        const published = await process.distrib.publishing_getPublishedPackages();
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
  [
    "officialApps",
    {
      name: "Official Apps",
      icon: "badge-check",
      content: OfficialApps,
      async props(process) {
        return { official: (await process.distrib.getAllStoreItems()).filter((pkg) => pkg.official) };
      },
    },
  ],
  [
    "recentlyAdded",
    {
      name: "Recently Added",
      icon: "flame",
      content: RecentlyAdded,
      async props(process) {
        const all = await process.distrib.getAllStoreItems();
        const groups = groupByTimeFrame<StoreItem>(all, "createdAt");

        return { groups, all };
      },
    },
  ],
  [
    "viewStoreItem",
    {
      name: "View Store Item",
      icon: "wrench",
      hidden: true,
      content: ViewStoreItem as any,
      async props(process, { id }) {
        const pkg = await process.distrib.getStoreItem(id);

        return { pkg };
      },
    },
  ],
  [
    "search",
    {
      name: "Search",
      icon: "search",
      hidden: true,
      content: SearchResults as any,
      async props(process, { query }) {
        const results = await process.distrib.searchStoreItems(query);

        return { results };
      },
    },
  ],
  [
    "userPage",
    {
      name: "User Page",
      icon: "person",
      hidden: true,
      content: UserPage as any,
      async props(process, { userId }) {
        const results = await process.distrib.getStoreItemsByAuthor(userId);
        const user = await Daemon()?.account?.getPublicUserInfoOf(userId);

        return { results, user };
      },
    },
  ],
]);
