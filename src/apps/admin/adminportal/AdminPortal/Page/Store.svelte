<script lang="ts">
  import { Logo } from "$ts/branding";
  import { Store } from "$ts/writable";
  import type { StoreItem } from "$types/package";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { StoreData, StorePageFilters } from "../../types";
  import StoreRow from "./Store/StoreRow.svelte";
  import { sortByKey } from "$ts/util";

  const { process, data }: { process: AdminPortalRuntime; data: StoreData } = $props();
  const { items, users } = data;

  const states: StorePageFilters[] = ["all", "official", "deprecated"];
  const sortState = Store<StorePageFilters>("all");
  const store = Store<StoreItem[]>([]);
  const selection = Store<string>("");
  const selected = Store<StoreItem | undefined>(undefined);
  const sortMode = Store<string>("installCount");

  onMount(() => {
    sortState.subscribe((v) => {
      $store = items
        .filter((item) => {
          switch (v) {
            case "all":
              return true;
            case "official":
              return item.official;
            case "deprecated":
              return item.deprecated;
          }
        })
        .reverse();
    });

    selection.subscribe((v) => ($selected = items.filter((i) => i._id === v)[0]));
  });
</script>

<div class="header">
  <p>{$sortState} ({$store.length})</p>
  <div class="tabs">
    {#each states as state}
      <button onclick={() => ($sortState = state)} class:selected={$sortState === state}>{state.toUpperCase()}</button>
    {/each}
  </div>
</div>
<div class="item-list">
  <div class="item-row header">
    <img src={Logo()} alt="" />
    <div class="segment author">Author</div>
    <div class="segment name">Name</div>
    <div class="segment version">Version</div>
    <div class="segment install-count">
      <button class="sort-mode" onclick={() => ($sortMode = "installCount")} class:selected={$sortMode === "installCount"}
        >Install count</button
      >
    </div>
    <div class="segment last-updated">
      <button class="sort-mode" onclick={() => ($sortMode = "lastUpdated")} class:selected={$sortMode === "lastUpdated"}
        >Last updated</button
      >
    </div>
    <div class="segment verified">VER</div>
    <div class="segment official">OFF</div>
    <div class="segment deprecated">DEP</div>
  </div>

  {#each sortByKey($store, $sortMode, true) as item (item._id)}
    <StoreRow {process} user={users.filter((u) => u._id === item.userId)[0]!} {item} {selection} />
  {/each}
</div>
<div class="id-entry">
  <div class="icon">
    <span class="lucide icon-shopping-bag"></span>
  </div>
  <input type="text" placeholder="Item ID" bind:value={$selection} maxlength="24" />
  <button disabled={$selection.length !== 24} onclick={() => process.switchPage("viewStoreItem", { item: $selected })}>Go</button>
</div>
