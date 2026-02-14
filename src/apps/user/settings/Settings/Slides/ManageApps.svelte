<script lang="ts">
  import { Daemon } from "$ts/daemon";
  import { isPopulatable } from "$ts/util/apps";
  import { Store } from "$ts/writable";
  import type { AppStorage } from "$types/app";
  import Fuse from "fuse.js";
  import { onMount } from "svelte";
  import type { SettingsRuntime } from "../../runtime";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;
  const { buffer } = process?.appStore() || {};

  let store = Store<AppStorage>([]);
  let search = Store<string>("");
  let filter = Store<string>("visible");
  let view = $state<string>("grid-small");

  function update() {
    const options = {
      includeScore: true,
      keys: ["metadata.name", "id"],
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
  <div class="search">
    <span class="lucide icon-search"></span>
    <input type="text" placeholder="Find apps..." bind:value={$search} />
  </div>
  <div class="view-mode">
    <button
      class="lucide icon-grid-2x2"
      aria-label="Large grid"
      class:suggested={view === "grid-large"}
      onclick={() => (view = "grid-large")}
      title="Grid view"
    ></button>
    <button
      class="lucide icon-grid-3x3"
      aria-label="Small grid"
      class:suggested={view === "grid-small"}
      onclick={() => (view = "grid-small")}
      title="Compact grid"
    ></button>
    <button
      class="lucide icon-list"
      title="List view"
      aria-label="List"
      class:suggested={view === "list"}
      onclick={() => (view = "list")}
    ></button>
  </div>
  <select class="filter" bind:value={$filter}>
    <option value="all">All</option>
    <option value="hidden">Hidden</option>
    <option value="visible">Visible</option>
    <option value="builtin">Built-in</option>
    <option value="thirdparty">Third-party</option>
    <option value="disabled">Disabled</option>
  </select>
</div>
<div class="apps {view}">
  {#if !$store.length}
    <p class="no-results">No results!</p>
  {:else}
    {#each $store as app (`${app.originId}-${app.id}-${app.metadata.name}`)}
      <button
        class="app"
        onclick={() => process.spawnOverlayApp("AppInfo", process.pid, app.id)}
        class:disabled={Daemon?.apps?.checkDisabled(app.id, app.noSafeMode)}
      >
        <img src={Daemon?.icons?.getAppIcon(app)} alt="" />
        <h1>{app.metadata.name}</h1>
        <p class="author">{app.metadata.author} - v{app.metadata.version}</p>
      </button>
    {/each}
  {/if}
</div>
