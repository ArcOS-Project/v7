<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import { isPopulatable } from "$ts/util/apps";
  import { Store } from "$ts/writable";
  import type { App, AppStorage } from "$types/apps/app";
  import Fuse, { type IFuseOptions } from "fuse.js";
  import { onMount } from "svelte";
  import ViewMode from "./ManageApps/ViewMode.svelte";
  import SearchBar from "./ManageApps/SearchBar.svelte";
  import FIlter from "./ManageApps/FIlter.svelte";
  import GridAppItem from "./ManageApps/GridAppItem.svelte";
  import GridListItem from "./ManageApps/GridListItem.svelte";

  const { process }: { process: ISettingsRuntime } = $props();
  const { userPreferences } = process;
  const { buffer } = process?.appStore() || {};

  let store = Store<AppStorage>([]);
  let search = Store<string>("");
  let filter = Store<string>("visible");
  let view = $state<string>("grid");

  function update() {
    const options: IFuseOptions<App> = {
      includeScore: true,
      keys: ["metadata.name", "id"],
      threshold: 0.2,
    };

    const fuse = new Fuse($buffer, options);
    const result = fuse.search($search);

    $store = ($search ? result.map((r) => r.item) : $buffer).filter((app) => {
      switch ($filter) {
        case "all":
          return true;
        case "visible":
          return isPopulatable(app);
        case "hidden":
          return app.hidden || app.core;
        case "builtin":
          return !app.workingDirectory && !app.entrypoint;
        case "thirdparty":
          return app.workingDirectory || app.entrypoint;
        case "disabled":
          return $userPreferences.disabledApps.includes(app.id);
      }
    });
  }

  onMount(() => {
    search.subscribe(update);
    filter.subscribe(update);
    buffer.subscribe(update);
  });
</script>

<div class="options">
  <SearchBar {search} />
  <ViewMode bind:view />
  <FIlter {filter} />
</div>
<div class="apps {view}">
  {#if !$store.length}
    <p class="no-results">No results!</p>
  {:else}
    {#each $store as app (`${app.originId}-${app.id}-${app.metadata.name}`)}
      {#if view === "grid"}
        <GridAppItem {app} {process} />
      {:else if view === "list"}
        <GridListItem {app} {process} />
      {/if}
    {/each}
  {/if}
</div>

<ActionBar>
  {#snippet leftContent()}
    <span>{$buffer.length} loaded applications ({$store.length} shown)</span>
  {/snippet}
  {#snippet rightContent()}
    <div class="checkbox-wrapper">
      <input type="checkbox" bind:checked={$userPreferences.shell.visuals.showHiddenApps} />
      <span>Show hidden apps</span>
    </div>
  {/snippet}
</ActionBar>
