<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../../runtime";

  const { process }: { process: ShellRuntime } = $props();
  const { searchQuery, startMenuOpened } = process;

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
  <div class="search">
    {#if !process.safeMode}
      <span class="lucide icon-search"></span>
      <input
        type="text"
        placeholder="Search..."
        bind:value={$searchQuery}
        bind:this={searchBar}
        onkeydown={(e) => process.MutateIndex(e)}
        disabled={process.safeMode}
      />
    {/if}
  </div>
  <div class="actions">
    <button class="settings" aria-label="Settings" onclick={() => process.spawnApp("systemSettings", process.pid)}>
      <span class="lucide icon-settings-2"></span>
    </button>
    <button class="shutdown" aria-label="Shutdown" onclick={() => process.exit()}>
      <span class="lucide icon-power"></span>
    </button>
  </div>
</div>
