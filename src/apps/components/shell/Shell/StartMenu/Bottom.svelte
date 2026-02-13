<script lang="ts">
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import { Sleep } from "$ts/sleep";
  import { onMount } from "svelte";
  import { StartMenuActions } from "../../store";
  import type { IShellRuntime } from "$interfaces/shell";

  const { process }: { process: IShellRuntime } = $props();
  const { searchQuery, startMenuOpened, searchLoading, userPreferences } = process;

  let searchBar = $state<HTMLInputElement>();

  onMount(() => {
    startMenuOpened.subscribe(async (v) => {
      if (!v) return;

      await Sleep(100);

      searchBar?.focus();
    });
  });
</script>

<div class="bottom">
  <form
    class="search"
    onsubmit={(e) => {
      e.preventDefault();
      return false;
    }}
    autocomplete="off"
  >
    {#if $searchLoading}
      <div class="loading">
        <HtmlSpinner height={16} thickness={2} />
        <span>Refreshing</span>
      </div>
    {:else if !process.safeMode}
      <span class="lucide icon-search"></span>
      <input
        type="text"
        role="searchbox"
        placeholder="Search..."
        bind:value={$searchQuery}
        bind:this={searchBar}
        onkeydown={(e) => process.MutateIndex(e)}
        disabled={process.safeMode}
      />
    {/if}
  </form>
  {#if Object.keys(StartMenuActions).filter((e) => $userPreferences.shell.start.actions?.includes(e)).length}
    <div class="actions">
      {#each Object.entries(StartMenuActions) as [id, action] (id)}
        {#if $userPreferences.shell.start.actions?.includes(id)}
          <button
            class={action.className || ""}
            aria-label={action.caption}
            onclick={() => action.action(process)}
            title={action.caption}
          >
            <span class="lucide icon-{action.icon}"></span>
          </button>
        {/if}
      {/each}
    </div>
  {/if}
</div>
